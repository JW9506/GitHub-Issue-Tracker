import styled from '@emotion/styled';

declare namespace ShortcutButton {
  type Props = {
    shortKey: string;
    tag: string;
    dark?: boolean;
  } & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  type T = typeof ShortcutButton;
}

const ShortcutButtonContatiner = styled.button<
  Pick<ShortcutButton.Props, 'dark'>
>`
  padding: 0.25rem 0.5rem;
  height: 100%;
  outline: none;
  margin: 0 1rem;
  background-color: ${({ dark }) => (dark ? '#343434' : '#dddddd')};
  color: ${({ dark }) => (dark ? '#dddddd' : '#343434')};
`;

const ShortcutButton: React.FC<ShortcutButton.Props> = ({
  shortKey,
  tag,
  dark,
  onClick,
}) => {
  return (
    <ShortcutButtonContatiner dark={dark} onClick={onClick}>
      <span>{shortKey}</span>
      <span>: </span>
      <span>{tag}</span>
    </ShortcutButtonContatiner>
  );
};

export default ShortcutButton;
