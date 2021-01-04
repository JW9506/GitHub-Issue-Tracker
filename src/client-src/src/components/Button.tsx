import React from 'react';
import { CSSInterpolation, css } from '@emotion/css';
import { Link, useHistory } from 'react-router-dom';

declare namespace Button {
  type Props = {
    to?: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  type T = typeof Button;
}

const Button: React.FC<Button.Props> = ({ to, children, onClick }) => {
  const isHref = !!to;
  const history = useHistory();
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
