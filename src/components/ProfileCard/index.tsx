import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Cover src="https://play-lh.googleusercontent.com/vrlmlARNAJe4aUWPaDh1cl_Hx5Sa79PvN3NUal7i4oOzNwLuPlyxPci8P6Zsfb3igQ=w750-h750" />

        <div>
          <Avatar
            src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2015/03/Cristiano-Ronaldo.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Natan Foleto</h1>
        <p>natanfoleto@hotmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
