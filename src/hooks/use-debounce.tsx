import { useEffect, useState } from "react";

const UseDebounce = (value: string, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 300);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debouncedValue;
};

export default UseDebounce;