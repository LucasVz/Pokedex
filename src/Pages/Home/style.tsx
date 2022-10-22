import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1320px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 50px;
  @media (max-width: 1110px) {
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 1800px) {
    flex-wrap: nowrap;
  }
`;

export { Container, Main };
