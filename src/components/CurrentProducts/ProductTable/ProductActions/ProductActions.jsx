import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import styles from './ProductActions.module.scss';
import { useRouter } from 'next/navigation';

const ProductActions = ({ product, onDelete }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/admin/products/${product.slug}`);
  };

  return (
    <div className={styles.actionIcons}>
      <AiOutlineEdit className={styles.editIcon} onClick={handleEdit} size={20} />
      <AiOutlineDelete className={styles.deleteIcon} onClick={() => onDelete(product)} size={20} />
    </div>
  );
};

export default ProductActions;
