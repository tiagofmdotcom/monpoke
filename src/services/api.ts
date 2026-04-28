import type { Product, ProductType } from '~/state/products'

const filterByTypeQuery = (type: string[] | null) => {
  if (type && type.length > 0) {
    return `, where: {
      _or: [
        ${type.map((t) => `{
          pokemontypes: {
            type: { name: { _eq: "${t}" } }
          }
        }`).join(', ')}
      ]
    }`
  }
  return ''
}

export const getProducts = async (type: string[] | null = null, offset: number = 0) => {
  const response = await fetch('https://graphql.pokeapi.co/v1beta2', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetProducts($limit: Int!, $offset: Int!
        ) {
          pokemon(limit: $limit, offset: $offset${filterByTypeQuery(type)}) {
            id
            name
            pokemontypes {
              type {
                name
              }
            }
          }
        }
      `,
      variables: {
        limit: 50,
        offset,
      },
      operationName: 'GetProducts',
    }),
  })
  const data = await response.json()
  return data.data.pokemon.map((result) => ({
    id: result.id,
    name: result.name,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.id}.png`,
    types: result.pokemontypes.map(({ type }) => type.name)
  })) as Product[]
}


export const getTypes = async () => {
  const response = await fetch('https://graphql.pokeapi.co/v1beta2', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query getTypes {
          type {
            name
            id
          }
        }
      `,
    }),
  })
  const data = await response.json()
  return data.data.type.map((result) => ({
    name: result.name,
    id: result.id,
  })) as ProductType[]
}
