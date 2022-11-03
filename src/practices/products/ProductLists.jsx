import React, { useState } from 'react'

function ProductCategoryRow ({ category }) {
  return (
    <>
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    </>
  )
}

function ProductRow ({ product }) {
  const name = product.stocked
    ? (
        product.name
      )
    : (
    <span style={{ color: 'red' }}>{product.name}</span>
      )
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function SearchBar ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange
}) {
  return (
    <>
      <input
        type="text"
        placeholder={'Search...'}
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <div>
        <label htmlFor="checkStocked">
          <input
            type="checkbox"
            checked={inStockOnly}
            id="checkStocked"
            onChange={(e) => onInStockChange(e.target.checked)}
          />
          Only show products in stock
        </label>
      </div>
    </>
  )
}

function ProductTable ({ products, inStockOnly, filterText }) {
  const rows = []
  let lastCategory = null

  products.map((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return null
    }
    if (inStockOnly && !product.stocked) {
      return null
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }

    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}

function FilterableProductTable ({ products }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText)
  }

  const handleStockedChange = (inStockOnly) => {
    setInStockOnly(inStockOnly)
  }

  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleStockedChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  )
}

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

export default function App () {
  return <FilterableProductTable products={PRODUCTS} />
}
