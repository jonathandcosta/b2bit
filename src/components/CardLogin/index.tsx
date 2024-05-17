import { CardContainer, CardStyle } from "./style"

import logo from '../../assets/img/B2Bit Logo.png'

import Form from "../Form"

const CardLogin = () => {
  return (
    <>
      <CardContainer>
        <CardStyle>
          <img src={logo} alt="logo da empresa b2bit" />
          <Form />
        </CardStyle>
      </CardContainer>
    </>
  )
}

export default CardLogin
