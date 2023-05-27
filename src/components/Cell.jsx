import React, { useRef } from 'react';
import styled from '@emotion/styled';
export const Cell = ({ onClick, children, isFieldSelected, ...rest }) => {
  const cellRef = useRef(null);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const Styledtd = styled.td`
    flex: 1;
    padding: 8px;
    border-right: 2px solid black;
    text-align: left;
    position: relative;
    font-weight: ${isFieldSelected ? 'bold' : 'normal'};
    background-color: ${isFieldSelected ? '#f0f0f0' : 'transparent'};
    left: 0;
  `;
  return (
    <Styledtd ref={cellRef} onClick={handleClick} {...rest}>
      {children}
    </Styledtd>
  );
};
