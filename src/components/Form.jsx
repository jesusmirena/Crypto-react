import React from "react";
import styled from "@emotion/styled";
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

  return (
    <form>
      <SelectCurrencies />
      {currency}
      <InputSubmit type="submit" value="Convert" />
    </form>
  );
};

export default Form;
