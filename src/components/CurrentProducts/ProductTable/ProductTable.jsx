'use client';
import React from 'react';
import styles from './ProductTable.module.scss';
import ProductTableHeader from './ProductTableHeader/ProductTableHeader';
import ProductTableBody from './ProductTableBody/ProductTableBody';

const ProductTable = ({
  products,
  sortConfig,
  requestSort,
  selectAll,
  handleSelectAll,
  handleSelectRow,
  selectedRows,
  onDelete,
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
      onDelete={onDelete}
    />
  </table>
);

export default ProductTable;
