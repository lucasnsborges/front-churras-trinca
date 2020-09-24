import React from 'react';
import styled, { css } from 'styled-components';

const Check = css`
  background: var(--primary-color);
  border: solid 2px var(--primary-color);

  :before {
    color: #fff;
    content: '';
    height: 10px;
    width: 10px;
    margin: auto;
    line-height: 1.2rem;
  }
`

const Container = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 2px solid #988220;

  ${props => props.checked && Check}
`;

export function Checkbox({ onChange, guestId, checked }) {
  return (
    <Container
      checked={checked}
      onClick={() => onChange(guestId, { contributed: !checked })}
    />
  );
}

export default Checkbox;
