import { computed, signal } from '@lit-labs/signals'

import type { CheckboxGroupOption } from '@components/CheckboxGroup/checkbox-group.types'

export type Product = {
  id: number
  name: string
  imageUrl: string
  types: string[]
}

export const productList = signal<Product[]>([
  {
    id: 1,
    name: 'Bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['grass'],
  },
  {
    id: 4,
    name: 'Charmander',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    types: ['fire'],
  },
  {
    id: 7,
    name: 'Squirtle',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    types: ['water'],
  },
  {
    id: 37,
    name: 'Vulpix',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    types: ['fire'],
  },
])

export const productTypeOptions = signal<CheckboxGroupOption[]>([
  { label: 'Grass', value: 'grass' },
  { label: 'Fire', value: 'fire' },
  { label: 'Water', value: 'water' },
])

export const selectedProductTypes = signal<string[]>([])

export const filteredProducts = computed<Product[]>(() => {
  const selectedTypes = selectedProductTypes.get()

  if (selectedTypes.length === 0) {
    return productList.get()
  }

  return productList.get().filter((product) =>
    product.types.some((typeName) => selectedTypes.includes(typeName)),
  )
})
