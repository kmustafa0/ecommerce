import React from 'react';
import Image from 'next/image';
import styles from './ProductTableBody.module.scss';
import ProductActions from '../ProductActions/ProductActions';

const ProductTableBody = ({ products, handleSelectRow, selectedRows, onDelete }) => (
  <tbody>
    {products.map((product) => (
      <tr key={product.id} className={selectedRows.includes(product.id) ? styles.selectedRow : ''}>
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
        <td>
          <ProductActions product={product} onDelete={onDelete} />
        </td>
      </tr>
    ))}
  </tbody>
);

export default ProductTableBody;
