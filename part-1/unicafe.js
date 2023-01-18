import { useState } from "react";

const Statistics = (props) => {
  const total = props.bad + props.good + props.neutral;
  const average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / total;
  const positive = (props.good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h2>No Feedback Given</h2>
      </div>
    );
  }

  return (
    <>
      <StatisticLine text="Good:" val={props.good} />
      <StatisticLine text="Neutral:" val={props.neutral} />
      <StatisticLine text="Bad:" val={props.bad} />
      <table style={{ width: 200 + "px" }}>
        <tbody>
          <tr>
            <td style={{ width: 70 + "%" }}>Total:</td>
            <td style={{ width: 30 + "%" }}>{total}</td>
          </tr>
          <tr>
            <td style={{ width: 70 + "%" }}>Average:</td>
            <td style={{ width: 30 + "%" }}>{average.toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ width: 70 + "%" }}>Positive:</td>
            <td style={{ width: 30 + "%" }}>{positive.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const StatisticLine = (props) => (
  <div>
    <table style={{ width: 200 + "px" }}>
      <tbody>
        <tr>
          <td style={{ width: 70 + "%" }}>{props.text}</td>
          <td style={{ width: 30 + "%" }}>{props.val}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={increaseGood} />
      <Button text="Neutral" onClick={increaseNeutral} />
      <Button text="Bad" onClick={increaseBad} />
      <h2>Statistics:</h2>

      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
};

export default App;
