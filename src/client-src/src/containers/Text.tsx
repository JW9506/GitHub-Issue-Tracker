import styled from '@emotion/styled';

declare namespace Text {
  interface Props {
    center?: boolean;
  }
}

const Text = styled.div<Text.Props>`
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
  margin: 1rem 0;
  font-family: cursive;
`;
export { Text };
