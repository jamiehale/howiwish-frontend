import { useRef, useEffect } from 'react';

const useAutofocus = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.select();
    }
  }, [ref]);

  return ref;
};

export default useAutofocus;
