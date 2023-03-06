import { gql } from "@apollo/client";
import client from "./client";

export async function getPokemonList() {
  const { data } = await client.query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemon(order_by: {id: asc}, limit: 905){
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
  });
  return data;
}
