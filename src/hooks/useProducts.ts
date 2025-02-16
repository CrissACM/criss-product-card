import { useEffect, useRef, useState } from "react";
import type {
  InitialValues,
  onChangeArgs,
  Product,
} from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export function useProducts({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductsArgs) {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);
  console.log(initialValues?.count);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    onChange?.({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues && initialValues.maxCount === counter,
    reset,
    increaseBy,
  };
}
