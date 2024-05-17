import photo from '../../assets/img/photo_perfil.jpeg'
import { CardProfile, Container, Input, LabelPersona, Persona, Picture } from './style'

function infoProfile() {
  return (
    <Container>
      <CardProfile>
        <Picture>
          <h3>Profile picture</h3>
          <img src={photo} alt="" />
        </Picture>
        <Persona>
          <LabelPersona htmlFor="">Your <b>Name</b></LabelPersona>
          <Input type="text" placeholder='Christine James'></Input>
          <LabelPersona htmlFor="password">Your <b>E-mail</b></LabelPersona>
          <Input type="email" placeholder='christinejames@gmail.com'></Input>
        </Persona>
      </CardProfile>
    </Container>
  )
}

export default infoProfile

