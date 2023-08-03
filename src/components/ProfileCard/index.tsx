import { Container, Cover, Divider, ButtonEdit } from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://media.sudouest.fr/6961772/1000x500/73156112.jpg?v=1637078904" />
        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>P_Bolsonaro✔</h1>
        <p>jairmessias@gmail.com</p>
      </main>

      <Divider />
      <footer>
        <ButtonEdit>Editar perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
