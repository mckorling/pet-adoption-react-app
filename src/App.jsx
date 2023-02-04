import {createRoot} from 'react-dom/client';
// import Pet from "./Pet";
import SearchParams from './SearchParams';

// will be rendered once
const App = () => {
  // type of tag, {} can carry attributes/props like ids, any children elements
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Parrot" />
      <Pet name="Doink" animal="Cat" breed="Calico" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>); // App is being rendered to root
