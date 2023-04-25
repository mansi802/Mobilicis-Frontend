import styled from "styled-components/macro";
import { useEffect, useState } from "react";
import "../index.css";

function Header({ filter, setFilter }) {
  const filters = [
    "Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”",
    "Male Users which have phone price greater than 10,000",
    "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name",
    "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit",
    "Show the data of top 10 cities which have the highest number of users and their average income",
  ];

  return (
    <Container>
      {filters.map((curr) => (
        <span
          onClick={() => setFilter(curr)}
          className={curr === filter ? "border" : ""}
        >
          {curr}
        </span>
      ))}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 25vh;
  border-bottom: 2px solid black;
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: space-around;

  span {
    /* border: 1px solid black; */
    width: 15vw;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
