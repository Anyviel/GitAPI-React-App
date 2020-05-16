import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1 `
  font-weight: 700;
`

export const Form = styled.form `
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 45px;
    padding: 10px;
    border: 0;
    border-radius: 5px 0 0 5px;

    ::placeholder {
      color: #a3a3a8;
    }
  }

  button {
    width: 150px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #944acb;
    color: white;
    transition: .2s;

    &:hover {
      background: ${shade(0.2, '#944acb')}
    }
  }
`

export const UserInfos = styled.div`
  max-width: 700px;
  margin-top: 30px;
  display: flex;

  &:hover {
    transform: translateX(10px);
    transition: transform 0.2s;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 15px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`

export const Actions = styled.section`
  background: #fff;
  margin: 0;
  padding: 10px 10px;
  border-radius: 0 5px 5px 0;
`;
