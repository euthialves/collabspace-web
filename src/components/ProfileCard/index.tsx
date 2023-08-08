import Avatar from "../Avatar";
import { ButtonEdit, Container, Cover, Divider } from "./styles";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://diariodecuba.com/sites/default/files/images/2022-08/jair-bolsonaro-brasil-lula-da-silva.jpg" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Pr. Bolsonaro</h1>
        <p>euthiagoalves2022@gmail.com</p>
      </main>

      <Divider />

      <footer>
        <ButtonEdit>Editar perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
