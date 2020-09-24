import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
`

export const Content = styled.div`
  top: 48px;
  width: 100%;
  height: 400px;
  max-width: 320px;
  position: relative;

  @media screen and (max-width: 875px) {
    z-index: 1;
    padding: 0 16px;
    max-width: 100%;
    background-color: var(--primary-color);
  }
`

export const Field = styled.div`
  padding: 12px 0;
`

export const Label = styled.div`
  color: #333;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const Input = styled.input`
  border: 0;
  width: 100%;
  height: 48px;
  outline: none;
  padding: 0 12px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #fff;
`

export const ErrorFieldMessage = styled.span`
  color: #f75c7b;
  font-size: 11px;
  padding-top: 8px;
  padding-left: 2px;
  padding-right: 2px;
`;

export const ErrorMessage = styled.div`
  padding: 12px;
  color: #f75c7b;
  text-align: center;
  border-radius: 4px;
  font-size: 16px 12px;
  background-color: #f5f5f570;
`;

export const Link = styled.div`
  color: #333;
  float: right;
  margin: 0 4px;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: underline;
`;
