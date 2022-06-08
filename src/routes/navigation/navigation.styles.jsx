import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  height: 70px;
  width: 100%;
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  height: 100%;
  padding: 25px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
