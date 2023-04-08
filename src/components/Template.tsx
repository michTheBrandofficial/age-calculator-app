export interface AgeTemplate {
  years: string | number;
  months: string | number;
  days: string | number;
  [Symbol.iterator]?(): Iterator<any>
}

export default function Template({years, months, days}: JSX.IntrinsicAttributes & AgeTemplate) {
  return (
    <section className="age" id="section">
      {/* textContent of these span tags are reactive values. */}
      <h1><span>{years}</span>years</h1>
      <h1><span>{months}</span>months</h1>
      <h1><span>{days}</span>days</h1>
    </section>
  )
};
