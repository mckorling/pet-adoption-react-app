import {createRoot} from 'react-dom/client';
import { useState } from 'react';
import SearchParams from './SearchParams';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from './AdoptedPetContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity, // how long should things be cached for. Infinity: once you fetch something, don't refetch it
    }
  }
});

// will be rendered once
const App = () => {
  const adoptedPet = useState(null);
  // type of tag, {} can carry attributes/props like ids, any children elements
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>); // App is being rendered to root
