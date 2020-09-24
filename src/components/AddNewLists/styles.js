import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 3;
  display: block;
  position: fixed;
  overflow-y: auto;
  visibility: hidden;
  overflow-x: hidden;
  transition: all 0.2s ease-in;
  background: rgba(58, 57, 57, 0.8);
  opacity: ${props => props.visible && 1};
  visibility: ${props => props.visible && 'visible'};
`;

export const Content = styled.div`
  top: 48px;
  left: 50%;
  padding: 24px;
  max-width: 576px;
  background: #fff;
  text-align: left;
  border-radius: 5px;
  position: absolute;
  margin-bottom: 24px;
  width: calc(100% - 8px);
  transform: translate(-50%);
  box-shadow: 0 32px 40px 0 rgba(35, 35, 35, 0.16);
`;

export const Header = styled.div`
  display: flex;
  padding: 0 4px;
  align-items: center;
  justify-content: flex-end;

  > svg {
    color: #555;
    width: 32px;
    height: 32px;
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 50%;
    background: #f5f5f5;
  }
`;

export const Field = styled.div`
  padding: 12px 0;
`;

export const Label = styled.div`
  color: #333;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;
