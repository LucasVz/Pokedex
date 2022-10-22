import styled from "styled-components";
import check from "../../assets/check.svg";

const Container = styled.div`
  width: 430px;
  height: 556px;

  padding: 40px;
  margin-top: 140px;

  margin-left: 30px;
  border-radius: 50px 0px 0px 50px;
  @media (max-width: 1110px) {
    border-radius: 50px 50px 0 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-left: 0px;
  }

  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #333333;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled.h1`
  color: #939393;
  font-size: 14px;
  margin-bottom: 12px;
`;

const Value = styled.div`
  border: 2px solid #dbdbdb;
  border-radius: 10px;
  padding: 5px 10px;
`;

const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  font-weight: bold;
  color: #333333;
`;

const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 30px;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
  li {
    all: unset;
    min-width: 94px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  input {
    all: unset;
    width: 20px;
    height: 20px;
    border: 3px solid #dbdbdb;
    border-radius: 6px;
    display: inline-block;

    margin-right: 8px;
  }
  label {
    font-size: 16px;
    color: #333333;
  }

  .check-with-label:checked + .label-for-check {
    color: #00a7fd;
    text-shadow: 0px 0px 6px #00c1fd66;
    font-weight: bold;
  }

  input:checked {
    content: "";
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    border: 3px solid #00a7fd;
    box-shadow: 0px 0px 6px #00c1fd99;
    color: #00a7fd;
  }
`;

export { Container, Title, SubTitle, Value, Values, Types };
