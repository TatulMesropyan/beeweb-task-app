import React, { useRef, useEffect } from 'react';

export const Cell = ({ onClick, onAwayClick, children, ...rest }) => {
  const cellRef = useRef(null);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // const handleDocumentClick = (event) => {
  //   if (cellRef.current && !cellRef.current.contains(event.target) && onAwayClick) {
  //     onAwayClick();
  //   }
  // };
  //
  // useEffect(() => {
  //   document.addEventListener('click', handleDocumentClick);
  //
  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, []);

  return (
    <td ref={cellRef} onClick={handleClick} {...rest}>
      {children}
    </td>
  );
};
