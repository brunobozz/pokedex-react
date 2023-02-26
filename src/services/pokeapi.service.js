export default {
  getData: async (endpoint) => {
    const resp = await fetch("https://pokeapi.co/api/v2/" + endpoint);
    return await resp.json();
  },
};
