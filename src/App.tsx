import '@styles/App.css';
import '@styles/Section.css';
import { calcAge } from '@utils/functions';
import { callRef, callStore } from 'nixix';
import { Form, Template, type AgeTemplate } from '@components/index';

// get the age reactive values and setter function from the callStore primitive.
const [age, setAge] = callStore<AgeTemplate>({
  years: '_ _', 
  months: '_ _',
  days: '_ _'
})
// get three references to dom elements
let month = callRef<HTMLInputElement | any>(null)
let year = callRef<HTMLInputElement | any>(null)
let day = callRef<HTMLInputElement | any>(null)


function App() {
	function changeAge() {
    // destructure the date from the calcAge function helper function.
    const [myYear, myMonth, myDay] =  calcAge({day, month, year}) as number[];
    // set the new values with the Store setter. 
    setAge({days: myDay, years: myYear, months: myMonth})
	}

	return (
		<section className="age-calc">
      {/* remove #test */}
      <div id="test">
        {/* pass those three refs to form to get the input fields.  */}
        <Form day={day} month={month} year={year} />
        <section className="button" id="section">
          <button on:click={changeAge}>
            <img src="../../assets/images/icon-arrow.svg"  alt="" />
          </button>
          <hr />
        </section>
        <Template years={age.years} months={age.months} days={age.days} />
      </div>
    </section>
	)
};

export default App;