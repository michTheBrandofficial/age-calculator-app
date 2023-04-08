import '@styles/Form.css';
import type * as NativeEvents from 'nixix-types/eventhandlers'

// MutableRefObject is an object which holds the element with a 'bind:ref' property. 
interface Age {
  month: Nixix.MutableRefObject<HTMLInputElement>;
  year: Nixix.MutableRefObject<HTMLInputElement>;
  day: Nixix.MutableRefObject<HTMLInputElement>;
}


export default function Form({day, month, year}: Age & JSX.IntrinsicAttributes) {
  // this func is used to remove the 'error' className from 'label' html elements.
  function invalidate(e: NativeEvents.KeyboardEvent<HTMLInputElement>) {
    (e.currentTarget.parentElement as HTMLInputElement).className = ''
  }

  return (
    <form>
      <label for="" >
        <p>DAY</p>
        <input type="text" placeholder='DD' bind:ref={day} on:keyup={invalidate} />
      </label>
      <label for="">
        <p>MONTH</p>
        <input type="text" placeholder='MM' bind:ref={month} on:keyup={invalidate} />
      </label>
      <label for="">
        <p>YEAR</p>
        <input type="text" placeholder='YYYY' bind:ref={year} on:keyup={invalidate} />
      </label>
    </form>
  )
};
