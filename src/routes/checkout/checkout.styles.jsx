import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1070px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

`

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`

export const CheckoutTotalPrice = styled.p`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`
