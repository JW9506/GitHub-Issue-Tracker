import React from 'react';
import { CSSInterpolation, css } from '@emotion/css';
import { Link } from 'react-router-dom';

declare namespace Button {
  type Props = {
    to?: string;
  } & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  type T = typeof Button;
}

const Button: React.FC<Button.Props> = ({ to, children, onClick, ...rest }) => {
  const isHref = !!to;
  const BaseStyle: CSSInterpolation = {
    padding: '0.25rem 0.5rem',
  };
  const LinkStyle: CSSInterpolation = { textDecoration: 'none' };

  const ButtonStyle: CSSInterpolation = { outline: 'none' };

  return (
    <>
      {isHref ? (
        <Link className={css({ ...BaseStyle, ...LinkStyle })} to={to!}>
          {children}
        </Link>
      ) : (
        <button
          {...rest}
          className={css({ ...BaseStyle, ...ButtonStyle })}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
