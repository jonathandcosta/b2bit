import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 95px;
`;

export const CardProfile = styled.div`
  width: 356px;
  border-radius: 16px;
  box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Picture = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0px 30px 0px;

  h3 {
    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
    margin-bottom: 9px;
  }

  img {
    width: 75px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const Persona = styled.div`
  margin-bottom: 10px;
`;

export const LabelPersona = styled.label`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  display: block;
  width: 296px;
  border: none;
  border-radius: 9px;
  padding: 16px;
  margin-bottom: 20px;
  background: #f1f1f1;
  transition: 0.2s;
  font-size: 12px;
`;
