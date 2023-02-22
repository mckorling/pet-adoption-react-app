const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiResponse = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // need to throw error when using react query and bad response
  if (!apiResponse.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  // just return this because it returns a Promise
  return apiResponse.json();
};

export default fetchPet;
