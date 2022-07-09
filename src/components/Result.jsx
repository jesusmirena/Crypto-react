import styled from "@emotion/styled";

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <div>
      <p>
        The price is: <span>{PRICE}</span>
      </p>
      <p>
        The highest price of the day is: <span>{HIGHDAY}</span>
      </p>
      <p>
        The lowest price of the day is: <span>{LOWDAY}</span>
      </p>
      <p>
        Change in last 24hours: <span>{CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Last update: <span>{LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Result;
