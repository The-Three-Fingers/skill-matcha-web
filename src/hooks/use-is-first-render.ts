import React, { useEffect } from 'react';

const useIsFirstRender = () => {
  const isFirstRender = React.useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return isFirstRender.current;
};

export default useIsFirstRender;
