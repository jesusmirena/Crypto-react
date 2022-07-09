import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CryptoImage from "./img/imagen-criptos.png";
import Form from "./components/Form";

import axios from "axios";
import Result from "./components/Result";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: "";
    width: 150px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0;
  }
`;

function App() {
  const [currenciesState, setCurrenciesState] = useState({});
  const [result, setResult] = useState({});

  useEffect(() => {
    if (Object.keys(currenciesState).length > 0) {
      const convertCrypto = async () => {
        const { currency, cryptocurrency } = currenciesState;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

        const response = await axios.get(url);
        const result = response.data.DISPLAY[cryptocurrency][currency];
        console.log(result);
        setResult(result);
      };
      convertCrypto();
    }
  }, [currenciesState]);

  return (
    <Container>
      <Image src={CryptoImage} alt="crypto background" />
      <div>
        <Heading>Check cryptocurrencies price instantly!</Heading>
        <Form setCurrenciesState={setCurrenciesState} />
        {result.PRICE && <Result result={result} />}
      </div>
    </Container>
  );
}

export default App;
