import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #000;
  height: 232px;
  padding: 20px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--primary-color);

  @media screen and (max-width: 875px) {
    > h1 {
      display: none;
    }

    z-index: 1;
    height: 132px;
  }
`;

export const BgIcons = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.05;
  position: absolute;
  background-size: contain;
  background-repeat: repeat;
  background-image: url(https://www.seekpng.com/png/full/3-32764_fast-food-travel-icon-transparent-background.png);
`;

export const Exit = styled.div`
  top: 24px;
  z-index: 1;
  right: 48px;
  color: #000;
  font-size: 16px;
  position: fixed;
  cursor: pointer;
  text-align: right;
  box-sizing: border-box;
  text-decoration: underline;

  @media screen and (max-width: 875px) {
    top: 12px;
    right: 24px;
  }
`;
