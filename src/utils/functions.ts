
interface CalcAge {
  day: Nixix.MutableRefObject<HTMLInputElement>;
  year: Nixix.MutableRefObject<HTMLInputElement>;
  month: Nixix.MutableRefObject<HTMLInputElement>;
}
export function calcAge({day, month, year}: CalcAge): (number | string)[] | undefined{
  let values: any[] = [];
  let fallback = ['_ _', '_ _', '_ _']; 
  
  switch (false) {
    case checkEmpty({month, day, year}, values):
    case checkNan({month, day, year}):
    case validateDate({month, day, year}):
      return fallback;
  }

  let date = new Date();
  let d2 = date.getDate();
  let m2 = date.getMonth();
  let y2 = date.getFullYear()
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  switch (true) {
    case values[0] > d2:
      d2 = d2 + months[m2 - 1];
      m2 = m2 -1;
  }
  switch (true) {
    case values[1] > m2: 
      m2 = m2 + 12;
      y2 = y2 - 1;
  }
  let d = d2 - values[0];
  let m = m2 - values[1];
  let y = y2 - values[2];

  
  return [y as number, m as number, y as number];
}

function checkEmpty({month, day, year}: CalcAge, values: any[]) {
  let boolean;
  [day, month, year].forEach(input => {
    if (input.current.value === '') {
      input.parent.className = 'error empty';
      boolean = false;
    }
    values.push(input.current.value);
  })
  return boolean;
}

function checkNan({month, day, year}: CalcAge) {
  let boolean;
  [month, day, year].forEach(input => {
    if (Number.isNaN(Number(input.current.value))) {
      input.parent.className = 'error nan';
      boolean = false;
    }
  })
  return boolean;
}

function validateDate({month, day, year}: CalcAge) {
  let boolean;
  if (Number(month.current.value) > 12) {
    month.parent.className = 'error invalid month';
    boolean = false;
  }
  if (Number(year.current.value) > new Date(Date.now()).getUTCFullYear()) {
    year.parent.className = 'error invalid year';
    boolean = false;
  }
  if (Number(day.current.value) > 31) {
    day.parent.className = 'error invalid day';
    boolean = false;
  }
  let thirties = [9, 4, 6, 11];
  if (thirties.includes(Number(month.current.value)) && Number(day.current.value) > 30) {
    day.parent.className = 'error date';
    month.parent.className = year.parent.className = 'error';
    boolean = false;
  }
  return boolean;
}