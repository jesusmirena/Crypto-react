import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import Error from "./Error";

import useSelectCurrencies from "../hooks/useSelectCurrencies";
import { currencies } from "../data/currencies";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrencies] = useSelectCurrencies(
    "Select your currency",
    currencies
  );
  const [cryptocurrency, SelectCryptoCurrencies] = useSelectCurrencies(
    "Select your cryptocurrency",
    cryptos
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([currency, cryptocurrency].includes("")) {
      setError(true);
      return;
    }
    setError(false);
  };
  useEffect(() => {
    const getApiInfo = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const response = await axios.get(url);

      const cryptoArray = response.data.Data.map((crypto) => {
        const cryptoObj = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return cryptoObj;
      });
      setCryptos(cryptoArray);
    };
    getApiInfo();
  }, []);

  return (
    <>
      {error && <Error>All the fields are mandatory</Error>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <SelectCurrencies />
        <SelectCryptoCurrencies />
        {currency}
        {cryptocurrency}

        <InputSubmit type="submit" value="Convert" />
      </form>
    </>
  );
};

export default Form;
