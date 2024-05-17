import { styled } from 'styled-components';
import { breakpoints } from '../../styles';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 161px;
`;

export const CardStyle = styled.div`
  width: 438px;
  border-radius: 18px;
  box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  img {
    display: flex;
    margin: 0 auto;
    margin-top: 65px;
    width: 309px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 260px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 320px;
  }
`;
