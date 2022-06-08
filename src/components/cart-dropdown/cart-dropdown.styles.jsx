import styled, {css} from 'styled-components';

const CartDropdownContainerActiveStyles = css`
  transform: translateX(0%);
  opacity: 1;
`

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  transform: translateX(50%);
  transition: 0.2s ease-in;
  opacity: 0;
  ${({classActive}) => classActive && CartDropdownContainerActiveStyles}
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 240px;
  margin-bottom: 20px;
`

export const CartDropdownFooter = styled.div`
  margin-top: auto;
`

export const TotalPrice = styled.p`
  margin-bottom: 10px;
`
