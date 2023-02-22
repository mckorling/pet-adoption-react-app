import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}

// import { useState, useEffect } from "react";

// // will help minimize calls to API by assuming no major changes have happened lately
// // especially because this is for animal breeds, which are unlikely to change ever
// // can see this this works by looking at Networking in dev tools
// // click 'cat', see an api call, click 'dog', see and api call. now click 'cat', should not see an api call indicating cache worked
// const localCache = {};

// // custom hook (which is just other hooks just package together)
// export default function useBreedList(animal) {
//   const [breedList, setBreedList] = useState([]);
//   const [status, setStatus] = useState("unloaded");

//   // will rerun when animal changes
//   useEffect(() => {
//     if (!animal) {
//       setBreedList([]);
//     } else if (localCache[animal]) {
//       setBreedList(localCache[animal]);
//     } else {
//       requestBreedList();
//     }

//     // this has to be in useEffect function
//     // React encourages this format, otherwise eslint is unhappy
//     // this will have the same closure and state being inside useEffect function
//     // every async function returns a promise, useEffect can not be async
//     // but here we need this call to use async/await so it's put here
//     async function requestBreedList() {
//       setBreedList([]);
//       setStatus("loading");
//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//       );
//       const json = await res.json();
//       localCache[animal] = json.breeds || [];
//       setBreedList(localCache[animal]);
//       setStatus("loaded");
//     }
//   }, [animal]);

//   return [breedList, status];
// }
