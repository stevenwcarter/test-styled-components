import React from "react";
import styled from "styled-components/macro";

const StyledWrapper = styled.div`
  background-color: red;
`;

const StyledDiv = styled.div`
  font-weight: 300;
`;

export const Test: React.FunctionComponent = () => (
  <StyledWrapper>
    <StyledDiv>TEST</StyledDiv>
  </StyledWrapper>
);

export default Test;
