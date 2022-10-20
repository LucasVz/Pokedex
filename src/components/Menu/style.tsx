import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 52px;
    height: auto;
  }
  h1 {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
  }
  h2 {
    font-size: 12px;
    font-weight: bold;
    color: #939393;
  }
  margin-bottom: 75px;
`;
const MenuOptions = styled.div``;
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;

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
    background-color: #00a7fd;
    border-radius: 13px;
    box-shadow: 0px 0px 6px #00c1fdcc;
    width: 36px;
    height: 36px;
  }
  .active-text {
    color: #00a7fd;
    font-weight: bold;
    text-shadow: 0px 0px 6px #00c1fd80;
  }

  p {
    font-size: 16px;
    color: #939393;
  }
`;
const Container = styled.div`
  width: 283px;
  margin-left: 30px;
  margin-top: 100px;
`;

export { Logo, MenuOptions, Option, Container };
