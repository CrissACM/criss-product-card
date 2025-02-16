import React, { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { productContext } from './ProductCard';

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(productContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
