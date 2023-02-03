const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// will be rendered once
const App = () => {
  // type of tag, {} can carry attributes/props like ids, any children elements
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "bird",
      name: "Pepper",
      breed: "Parrot",
    }),
    React.createElement(Pet, { animal: "cat", name: "Doink", breed: "Calico" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); // App is being rendered to root
