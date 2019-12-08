import React from 'react';
import { useLocation } from 'react-router-dom';

const Page404 = () => {
  const location = useLocation();

  return (
    <div>
      No match found for {location.pathname}
    </div>
  );
};

export default Page404;
