import React, { createContext, CSSProperties, JSX } from "react";
import { useProducts } from "../hooks/useProducts";
import type {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  product: Product;
  className?: string;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
}

export function ProductCard({
  children,
  product,
  className,
  style,
  value,
  initialValues,
  onChange,
}: Props) {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProducts({
      product,
      value,
      initialValues,
      onChange,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
}
