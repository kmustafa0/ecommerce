'use client';
import React, { useMemo, useState } from 'react';
import styles from './CurrentProducts.module.scss';
import { useFetchProducts } from '@/hooks';
import Image from 'next/image';
import { RiArrowUpWideLine, RiArrowDownWideLine } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';

const ProductTableHeader = ({ sortConfig, requestSort, selectAll, handleSelectAll }) => (
  <thead>
    <tr>
      <th>
        <input
          type='checkbox'
          checked={selectAll}
          onChange={handleSelectAll}
          className={styles.checkboxInput}
        />
      </th>
      <th onClick={() => requestSort('name')}>
        Name
        <span className={styles.sortIcon}>
          {sortConfig.key === 'name' ? (
            sortConfig.direction === 'ascending' ? (
              <RiArrowUpWideLine className={styles.activeSortIcon} />
            ) : (
              <RiArrowDownWideLine className={styles.activeSortIcon} />
            )
          ) : (
            <RiArrowUpWideLine className={styles.inactiveSortIcon} />
          )}
        </span>
      </th>
      <th onClick={() => requestSort('description')}>
        Description
        <span className={styles.sortIcon}>
          {sortConfig.key === 'description' ? (
            sortConfig.direction === 'ascending' ? (
              <RiArrowUpWideLine className={styles.activeSortIcon} />
            ) : (
              <RiArrowDownWideLine className={styles.activeSortIcon} />
            )
          ) : (
            <RiArrowUpWideLine className={styles.inactiveSortIcon} />
          )}
        </span>
      </th>
      <th onClick={() => requestSort('price')}>
        Price
        <span className={styles.sortIcon}>
          {sortConfig.key === 'price' ? (
            sortConfig.direction === 'ascending' ? (
              <RiArrowUpWideLine className={styles.activeSortIcon} />
            ) : (
              <RiArrowDownWideLine className={styles.activeSortIcon} />
            )
          ) : (
            <RiArrowUpWideLine className={styles.inactiveSortIcon} />
          )}
        </span>
      </th>
      <th onClick={() => requestSort('category.name')}>
        Category
        <span className={styles.sortIcon}>
          {sortConfig.key === 'category.name' ? (
            sortConfig.direction === 'ascending' ? (
              <RiArrowUpWideLine className={styles.activeSortIcon} />
            ) : (
              <RiArrowDownWideLine className={styles.activeSortIcon} />
            )
          ) : (
            <RiArrowUpWideLine className={styles.inactiveSortIcon} />
          )}
        </span>
      </th>
      <th>Image</th>
    </tr>
  </thead>
);

const ProductTableBody = ({ products, handleSelectRow, selectedRows }) => (
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td>
          <input
            type='checkbox'
            checked={selectedRows.includes(product.id)}
            onChange={() => handleSelectRow(product.id)}
            className={styles.checkboxInput}
          />
        </td>
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

const ProductTable = ({
  products,
  sortConfig,
  requestSort,
  selectAll,
  handleSelectAll,
  handleSelectRow,
  selectedRows,
}) => (
  <table className={styles.table}>
    <ProductTableHeader
      sortConfig={sortConfig}
      requestSort={requestSort}
      selectAll={selectAll}
      handleSelectAll={handleSelectAll}
    />
    <ProductTableBody
      products={products}
      handleSelectRow={handleSelectRow}
      selectedRows={selectedRows}
    />
  </table>
);

const CurrentProducts = () => {
  const { data: products, isLoading, error } = useFetchProducts();
  const [filterInput, setFilterInput] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(products.map((product) => product.id));
    }
    setSelectAll(!selectAll);
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
          <div className={styles.inputWrapper}>
            <input
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              placeholder='Search products by name'
            />
            <IoSearchOutline />
          </div>
          <ProductTable
            products={sortedProducts}
            sortConfig={sortConfig}
            requestSort={requestSort}
            selectAll={selectAll}
            handleSelectAll={handleSelectAll}
            handleSelectRow={handleSelectRow}
            selectedRows={selectedRows}
          />
        </div>
      )}
    </div>
  );
};

export default CurrentProducts;
