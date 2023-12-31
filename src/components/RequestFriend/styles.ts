import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

export const User = styled.div`
  width: 80%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Info = styled.div`
  h1 {
    font-size: 0.875rem;
    color: var(--zinc-200);
  }

  p {
    font-size: 0.875rem;
    color: var(--zinc-200);
    font-weight: 200;
    overflow: 200;
    text-overflow: ellipsis;
  }
`;

export const Actions = styled.div`
  width: 20%;

  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    background: transparent;

    cursor: pointer;
  }
`;

export const ButtonAccept = styled.button`
  color: var(--emerald-500);
`;

export const ButtonRecuse = styled.button`
  color: var(--red-500);
`;
