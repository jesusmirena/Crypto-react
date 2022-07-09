import React, { useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

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
  const [currency, SelectCurrencies] = useSelectCurrencies(
    "Select your currency",
    currencies
  );

  useEffect(() => {
    const getApiInfo = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const response = await axios.get(url);
      console.log(response.data.Data);
    };
    getApiInfo();
  }, []);

  return (
    <form>
      <SelectCurrencies />
      {currency}
      <InputSubmit type="submit" value="Convert" />
    </form>
  );
};

export default Form;
