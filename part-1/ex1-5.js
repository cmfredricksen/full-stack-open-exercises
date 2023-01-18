const Header = (props) => {
  console.log("Header: ", props);
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  console.log("Parts: ", props);
  return (
    <div>
      <span>
        {props.name} {props.exercises}
      </span>
    </div>
  );
};

const Content = (props) => {
  console.log("Content: ", props);
  return (
    <div>
      <span>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
      </span>
    </div>
  );
};

const Total = (props) => {
  console.log("Total: ", props);
  return (
    <div>
      <p>
        Number of Exercises ={" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using Props to Pass data",
        exercises: 7,
      },
      {
        name: "State of a Component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
