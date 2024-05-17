import { styled } from 'styled-components';
import { breakpoints } from '../../styles';

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 25px 40px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 320px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin: 9px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
    margin: 5px;
  }
`;

export const Info = styled.input`
  display: block;
  border: none;
  padding: 18px;
  margin-bottom: 26px;
  border-radius: 9px;
  background: #f1f1f1;
  transition: 0.2s;
  font-size: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    padding: 14px;
    margin-bottom: 12px;
  }
`;

export const Botao = styled.div`
  a {
    background-color: #02274f;
    padding: 15px;
    border-radius: 9px;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    color: #fff;

    &:hover {
      color: #02274f;
      border: solid 1px #02274f;
      background-color: #fff;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 15px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 13px;
    margin: 5px 0px;
  }
`;
