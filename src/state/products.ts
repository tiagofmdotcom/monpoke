import {  signal } from '@lit-labs/signals'

import type { CheckboxGroupOption } from '@components/CheckboxGroup/checkbox-group.types'
import {  getProducts, getTypes } from '@services/api';

export const PRODUCTS_PER_PAGE = 24

//TYPES
export type ProductType = {
  name: string
  id: number
}
export type Product = {
  id: number
  name: string
  imageUrl: string
  types: ProductType[]
}

//PAGINATION
export const currentOffset = signal(0)
export const loadPreviousPage = async () => {
  currentOffset.set(Math.max(0, currentOffset.get() - PRODUCTS_PER_PAGE))
  await fetchProducts(false)
}
export const loadNextPage = async () => {
  currentOffset.set(currentOffset.get() + PRODUCTS_PER_PAGE)
  await fetchProducts(false)
}

// STATE
export const productList = signal<Product[]>([])
export const productTypeOptions = signal<CheckboxGroupOption[]>([])
export const isFetchingProducts = signal(false)
export const isFetchingTypes = signal(false)

export const fetchProducts = async (useCache: boolean = true) => {
  if (useCache) {
    const cachedProducts = sessionStorage.getItem('productList')
    if (cachedProducts) {
      productList.set(JSON.parse(cachedProducts))
      return
    }
  }

  const selectedTypes = selectedProductTypes.get()
  let products: Product[] = []
  isFetchingProducts.set(true)
  products = await getProducts(selectedTypes, currentOffset.get())
  isFetchingProducts.set(false)

  if(useCache) {
    sessionStorage.setItem('productList', JSON.stringify(products))
  }

  productList.set(products)
  return products
}

export const fetchTypes = async (useCache: boolean = true) => {
  if (useCache) {
    const cachedTypes = sessionStorage.getItem('productTypeOptions')
    if (cachedTypes) {
      productTypeOptions.set(JSON.parse(cachedTypes))
      return
    }
  }

  isFetchingTypes.set(true)
  const types = await getTypes()
  isFetchingTypes.set(false)

  productTypeOptions.set(types.map((type: ProductType) => ({ label: type.name, value: type.name })))
  
  if(useCache) {
  sessionStorage.setItem('productTypeOptions', JSON.stringify(productTypeOptions.get()))
  }

  return types
}


export const selectedProductTypes = signal<string[]>([])
