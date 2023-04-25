import styled from "styled-components/macro";
import Table from "./Components/Table";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
// import "./proxy";

function App() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    let apiCall = "https://wicked-sweatsuit-newt.cyclic.app/";

    if (
      filter ===
      "Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”"
    )
      apiCall += "api/filter1";
    else if (filter === "Male Users which have phone price greater than 10,000")
      apiCall += "api/filter2";
    else if (
      filter ===
      "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name"
    )
      apiCall += "api/filter3";
    else if (
      filter ===
      "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit"
    )
      apiCall += "api/filter4";
    else apiCall += "api/filter5";

    fetch(apiCall)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [filter]);

  console.log(filter);
  return (
    <Container>
      <Header filter={filter} setFilter={setFilter} />
      {filter === "" ? (
        <h2>Choose a filter</h2>
      ) : (
        <Table rows={data} filter={filter} />
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    margin-top: 20px;
  }
`;
