import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1320px) {
    justify-content: center;
  }
  img {
    width: 52px;
    height: auto;
  }
  h1 {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    white-space: nowrap;
    margin-bottom: 4px;
  }
  h2 {
    font-size: 12px;
    font-weight: bold;
    color: #939393;
    white-space: nowrap;
  }
  margin-bottom: 65px;
`;
const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1320px) {
    flex-direction: row;
    justify-content: center;
  }
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  @media (max-width: 1320px) {
    gap: 4px;
    margin-left: 5px;
  }
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
  }
  .active {
    background-color: #00a7fd !important;
    border-radius: 13px;
    box-shadow: 0px 0px 6px #00c1fdcc;
    width: 36px;
    height: 36px;
  }
  .active-text {
    color: #00a7fd;
    font-weight: bold;
    text-shadow: 0px 0px 6px #00c1fd80 !important;
  }

  p {
    font-size: 16px;
    color: #939393;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
const Container = styled.div`
  max-width: 195px;
  margin-left: 30px;
  margin-top: 100px;
  @media (max-width: 1320px) {
    width: 100%;
  }
`;

const Version = styled.p`
  font-size: 14px;
  color: #939393;
  margin-top: 100px;
  @media (max-width: 1320px) {
    display: none;
  }
`;

export { Logo, MenuOptions, Option, Container, Version };
