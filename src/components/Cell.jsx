import React, { useRef } from 'react';
import styled from '@emotion/styled';

const Styledtd = styled.td`
  flex: 1;
  padding: 8px;
  border-right: 2px solid black;
  text-align: left;
  background-color: ${(props) => (props.isFieldSelected ? '#f0f0f0' : 'transparent')};
  left: 0;
`;

export const Cell = ({ onClick, children, isFieldSelected, ...rest }) => {
  const cellRef = useRef(null);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Styledtd ref={cellRef} onClick={handleClick} isFieldSelected={isFieldSelected} {...rest}>
      {children}
    </Styledtd>
  );
};
