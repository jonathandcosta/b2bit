import { styled } from 'styled-components';
import { breakpoints } from '../../styles';

export const TopHeader = styled.div`
  background-color: #fff;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const BotaoHeader = styled.div`
  a {
    background-color: #02274f;
    width: 272px;
    margin-right: 34px;
    border-radius: 6.33px;
    padding: 14px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: #fff;

    &:hover {
      color: #02274f;
      border: solid 1px #02274f;
      background-color: #fff;
    }
    @media (max-width: ${breakpoints.mobile}) {
      margin-right: 0;
    }
  }
`;
