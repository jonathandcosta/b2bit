import { Link } from "react-router-dom"
import { TopHeader, BotaoHeader } from "./style"

const Header = () => {
  return (
    <TopHeader>
      <BotaoHeader>
        <Link to={"/"}>Logout</Link>
      </BotaoHeader>
    </TopHeader>
  )
}

export default Header
