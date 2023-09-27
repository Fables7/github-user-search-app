import styled from "styled-components";

interface StyledLinkItemProps {
  label: string;
}

export const StyledLinkItem = styled.div<StyledLinkItemProps>`
  opacity: ${(props) => (props.label ? 1 : 0.5)};
`;
