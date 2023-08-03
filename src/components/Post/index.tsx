import { Container, Content, Hashtags, Divider } from "./style";
import Avatar from "../Avatar";
const Post: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>P_Bolsonaro✔</h1>
            <p>jairmessias@gmail.com</p>
          </section>
        </div>

        <p>Publicado à 1H</p>
      </header>
      <main>
        <Content>
          <p>Lula ladrão 🚨</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            eos minus, fugit odio inventore tenetur, quia molestias illo sequi
            sunt ducimus consectetur iste sapiente obcaecati totam aspernatur
            natus, similique fuga.
          </p>
        </Content>

        <Hashtags>
          <span>#BOLSONARO_PRESIDENTE </span>
          <span>#LULALADRÃO</span>
        </Hashtags>
      </main>
      <Divider />

      <footer>
        <h1>Deixe seu comentário</h1>
        <textarea name=""></textarea>
        <button>Comentar</button>
      </footer>
    </Container>
  );
};
export default Post;
