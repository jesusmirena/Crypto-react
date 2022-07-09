import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const useSelectCurrencies = (label, options) => {
  const SelectCurrencies = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <select>
        <option value="">Select a currency</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
  return [SelectCurrencies];
};

export default useSelectCurrencies;
