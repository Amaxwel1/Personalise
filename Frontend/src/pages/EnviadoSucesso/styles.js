import styled from "styled-components";

export const titlePage = styled.h2`
  color: #00396d;
  font-size: 40px;
  margin-left: 20px;
  margin-top: 40px;

    @media (max-width: 768px) {
    font-size: 32px;
    margin-left: 10px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-left: 40px;
    margin-top: 20px;
  }
`;

export const titleQuest = styled.h2`
  color: #00396d;
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const containerSucesso = styled.div`
  padding: 5px 0px 0px 40px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #797979;
    font-size: 25px;
    margin-top: 40px;

    @media (max-width: 768px) {
      font-size: 22px;
      margin-top: 30px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-top: 10px;
    }
  }
`;

export const imagemSucesso = styled.img`
  width: 200px;
  margin-top: 5%;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    margin-right: 28px;  
  }
`;

export const containerTextoSucesso = styled.div`
  display: flex;
  flex-direction: column;
  color: #00396d;
  align-items: center;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const textoSucesso = styled.h5`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 20px;
    margin-right: 50px;
  }
`;

export const parabens = styled.h5`

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    margin-right: 50px;
  }
`;


export const textoAbertura = styled.p`
  padding-top: 1%;
  margin-right: 30px;
  color: #797979;
`;

export const Content = styled.div`
  flex: 1; /* Faz com que o conteúdo ocupe todo o espaço disponível */
  display: flex;
  justify-content: space-between;
`;

export const ContentQuest = styled.div`
  flex: 100;
  background-color: white;
  margin: 50px 80px;
  border-radius: 15px;

  @media (max-width: 768px) {
    margin: 30px 40px;
  }

  @media (max-width: 480px) {
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 600px;
    margin-top: 20px;
  }
`;

export const Container = styled.div`
  background-color: #e9e9e9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;
