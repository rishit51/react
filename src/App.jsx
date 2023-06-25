// Your code is going to go here
import React from "react";
import  ReactDOM  from "react";
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Jamie",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      animal: "Parakeet",
      name: "Seira",
      breed: "Mount",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Jamie",
      breed: "Golden Retriever",
    })
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
