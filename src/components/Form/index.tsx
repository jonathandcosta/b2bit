import { Link } from "react-router-dom"
import { Botao, ContainerBox, Info, Label } from "./style"


const Form = () => {
  return (
    <ContainerBox>
      <Label htmlFor="">E-mail</Label>
      <Info type="text" placeholder='@gmail.com'></Info>
      <Label htmlFor="password">Password</Label>
      <Info type="text" placeholder='****************'></Info>
      <Botao>
        <Link to={"/profile"} type="submit">Sign In</Link>
      </Botao>
    </ContainerBox>
  )
}

export default Form