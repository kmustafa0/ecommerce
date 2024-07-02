'use client';
import React, { useMemo, useState } from 'react';
import { useFetchProducts } from '@/hooks';
import ProductTable from './ProductTable/ProductTable';
import Modal from '../Modal/Modal';
import { IoSearchOutline } from 'react-icons/io5';
import styles from './CurrentProducts.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';

const CurrentProducts = () => {
  const { data: products, isLoading, error } = useFetchProducts();
  const [filterInput, setFilterInput] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalConfirmAction, setModalConfirmAction] = useState(null);

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

  const handleDelete = (product) => {
    setModalContent(
      ` You will permanently delete ${product.name}. Do you want to continue with this process`
    );
    setModalConfirmAction(() => () => {
      setIsModalOpen(false);
    });
    setIsModalOpen(true);
  };

  const handleBulkDelete = () => {
    const selectedProductNames = products
      .filter((product) => selectedRows.includes(product.id))
      .map((product) => product.name)
      .join(', ');

    setModalContent(
      `You will permanently delete the products ${selectedProductNames}. Do you want to continue with this process?`
    );
    setModalConfirmAction(() => () => {
      setIsModalOpen(false);
    });
    setIsModalOpen(true);
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
            <IoSearchOutline className={styles.searchIcon} />
            {selectedRows.length > 0 && (
              <AiOutlineDelete className={styles.bulkDeleteIcon} onClick={handleBulkDelete} />
            )}
          </div>
          <ProductTable
            products={sortedProducts}
            sortConfig={sortConfig}
            requestSort={requestSort}
            selectAll={selectAll}
            handleSelectAll={handleSelectAll}
            handleSelectRow={handleSelectRow}
            selectedRows={selectedRows}
            onDelete={handleDelete}
          />
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={modalConfirmAction}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default CurrentProducts;
