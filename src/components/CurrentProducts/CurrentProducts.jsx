'use client';
import React, { useMemo, useState } from 'react';
import styles from './CurrentProducts.module.scss';
import { useFetchProducts } from '@/hooks';
import Image from 'next/image';

const ProductTableHeader = ({ sortConfig, requestSort }) => (
  <thead>
    <tr>
      <th onClick={() => requestSort('name')}>
        Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
      </th>
      <th onClick={() => requestSort('description')}>
        Description{' '}
        {sortConfig.key === 'description' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
      </th>
      <th onClick={() => requestSort('price')}>
        Price {sortConfig.key === 'price' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
      </th>
      <th onClick={() => requestSort('category.name')}>
        Category{' '}
        {sortConfig.key === 'category.name' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
      </th>
      <th>Image</th>
    </tr>
  </thead>
);

const ProductTableBody = ({ products }) => (
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>${product.price}</td>
        <td>{product.category.name}</td>
        <td>
          {product.images && product.images.length > 0 && (
            <Image
              width={100}
              height={100}
              src={product.images[0].imageSrc}
              alt={product.images[0].imageAlt || product.name}
              className={styles.productImage}
            />
          )}
        </td>
      </tr>
    ))}
  </tbody>
);

const ProductTable = ({ products, sortConfig, requestSort }) => (
  <table className={styles.table}>
    <ProductTableHeader sortConfig={sortConfig} requestSort={requestSort} />
    <ProductTableBody products={products} />
  </table>
);

const CurrentProducts = () => {
  const { data: products, isLoading, error } = useFetchProducts();
  const [filterInput, setFilterInput] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    let sortableProducts = [...products];

    if (sortConfig.key) {
      sortableProducts.sort((a, b) => {
        const aValue = sortConfig.key === 'category.name' ? a.category.name : a[sortConfig.key];
        const bValue = sortConfig.key === 'category.name' ? b.category.name : b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableProducts.filter((product) =>
      product.name.toLowerCase().includes(filterInput.toLowerCase())
    );
  }, [products, filterInput, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className={styles.currentProducts}>
      <h3>Current Products</h3>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>Error: {error}</h4>
      ) : (
        <div className={styles.tableContainer}>
          <input
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
            placeholder='Search products'
            className={styles.searchInput}
          />
          <ProductTable
            products={sortedProducts}
            sortConfig={sortConfig}
            requestSort={requestSort}
          />
        </div>
      )}
    </div>
  );
};

export default CurrentProducts;
