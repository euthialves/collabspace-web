import { Check, X } from "phosphor-react";

import {
  Actions,
  Container,
  User,
  Info,
  Avatar,
  ButtonAccept,
  ButtonRecuse,
} from "./styles";

const ResquestFriend: React.FC = () => {
  return (
    <Container>
      <User>
        <Avatar src="https://elcomercio.pe/resizer/nBzdqyUR60DKuGZCR23A3FGr4N0=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BBPULZCZLVGELG3I3X7DG2J7ZE.png" />

        <Info>
          <h1>Cristiano Ronaldo</h1>
          <p>cr7@gmail.com</p>
        </Info>
      </User>

      <Actions>
        <ButtonAccept>
          <Check />
        </ButtonAccept>

        <ButtonRecuse>
          <X />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default ResquestFriend;
