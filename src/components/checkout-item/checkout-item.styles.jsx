import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
    user-select: none;

    .arrow {
      cursor: pointer;
    }

    .value {
      min-width: 20px;
      margin: 0 7px;
      text-align: center;
    }
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
