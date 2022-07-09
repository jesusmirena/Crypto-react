import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const useSelectCurrencies = (label) => {
  const SelectCurrencies = () => (
    <>
      <Label htmlFor="">{label}</Label>
    </>
  );
  return [SelectCurrencies];
};

export default useSelectCurrencies;
