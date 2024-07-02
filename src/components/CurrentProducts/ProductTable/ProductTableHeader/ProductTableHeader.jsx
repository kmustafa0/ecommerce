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
      <th>Actions</th>
    </tr>
  </thead>
);

export default ProductTableHeader;
