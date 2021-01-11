import { useEffect, useRef, useState } from 'react';

const idCounter = {};

export const useUniqueId = (name = '__blackmaker_element') => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    if (name in idCounter) {
      setId(`${name}${idCounter[name]++}`);
    } else {
      idCounter[name] = 2;
      setId(name);
    }
  }, [name]);

  return id;
};
