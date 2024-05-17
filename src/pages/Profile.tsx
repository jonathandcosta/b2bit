import Header from "../components/HeaderProfile"
import InfoProfile from "../components/InfoProfile"
import { GlobalCss } from "../styles"


function profile() {

  return (
    <div className="background">
      <GlobalCss />
      <Header />
      <InfoProfile />
    </div >
  )
}

export default profile
