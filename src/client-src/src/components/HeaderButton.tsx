import styled from '@emotion/styled';

declare namespace HeaderButton {
  type Props = {
    shortKey: string;
    tag: string;
    dark?: boolean;
  };
  type T = typeof HeaderButton;
}

const HeaderButtonContatiner = styled.button<Pick<HeaderButton.Props, 'dark'>>`
  padding: 0.25rem 0.5rem;
  height: 100%;
  outline: none;
  margin: 0 1rem;
  background-color: ${({ dark }) => (dark ? '#343434' : '#dddddd')};
  color: ${({ dark }) => (dark ? '#dddddd' : '#343434')};
`;

const HeaderButton: React.FC<HeaderButton.Props> = ({
  shortKey,
  tag,
  dark,
}) => {
  return (
    <HeaderButtonContatiner dark={dark}>
      <span>{shortKey}</span>
      <span>: </span>
      <span>{tag}</span>
    </HeaderButtonContatiner>
  );
};

export default HeaderButton;
