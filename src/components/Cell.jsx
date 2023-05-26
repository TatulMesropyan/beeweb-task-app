import React, { useRef } from 'react';
export const Cell = ({ onClick, children, ...rest }) => {
  const cellRef = useRef(null);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
      <td ref={cellRef} onClick={handleClick} {...rest}>
        {children}
      </td>
  );
};
