'use client';
import React from 'react';
import { RiArrowUpWideLine, RiArrowDownWideLine } from 'react-icons/ri';
import styles from './ProductTableHeader.module.scss';

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
      {['name', 'description', 'price', 'category.name'].map((key) => (
        <th key={key} onClick={() => requestSort(key)}>
          {key.charAt(0).toUpperCase() + key.slice(1).replace('.', ' ')}
          <span className={styles.sortIcon}>
            {sortConfig.key === key ? (
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
      ))}
      <th>Image</th>
    </tr>
  </thead>
);

export default ProductTableHeader;
