import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css, CSSInterpolation, cx } from '@emotion/css';
import { Text } from '#/containers/';

declare namespace List {
  type Props = {
    dark?: boolean;
    onClick?(el: React.RefObject<HTMLElement>): void;
    onEnter?(index: number): void;
    items?: Array<string | undefined>;
  };
  type T = typeof List;
}

const Container = styled.ul`
  margin: 1rem;
  padding: 0;
  border: 1px solid #fff;
  max-height: 80%;
  position: relative;
  overflow-y: scroll;
  list-style: none;
  &::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    background: #373737;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  &::-webkit-scrollbar-corner {
    background: #000;
  }
`;

const Item: React.FC<{
  onClick?: (_: React.RefObject<HTMLElement>) => void;
  className?: string;
  active?: boolean;
}> = ({ children, onClick, className, active }) => {
  const styles: CSSInterpolation = {
    height: '3.5rem',
    cursor: 'pointer',
    lineHeight: '3.5rem',
    fontFamily: 'cursive',
    paddingLeft: '1rem',
  };
  const activeStyles: CSSInterpolation = {
    backgroundColor: 'blue',
  };
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={() => onClick?.(ref)}
      className={cx(css(styles), className, active && css(activeStyles))}
    >
      {children}
    </li>
  );
};

const List: React.FC<List.Props> = ({ items, dark, onClick, onEnter }) => {
  const ref = useRef<HTMLUListElement>(null);
  const size = items?.length ?? 0;
  const windowHeight = ref.current?.offsetHeight ?? 0;
  const [currActive, setCurrActive] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const nthLi = ref.current.querySelector(
        `li:nth-child(${(currActive % size) + 1})`
      ) as HTMLElement;
      if (nthLi) {
        if (
          windowHeight !== 0 &&
          nthLi.offsetTop + nthLi.offsetHeight - ref.current.scrollTop >=
            windowHeight
        ) {
          ref.current.scrollTop =
            nthLi.offsetTop + nthLi.offsetHeight - windowHeight;
        } else if (nthLi.offsetTop <= ref.current.scrollTop) {
          ref.current.scrollTop = nthLi.offsetTop;
        }
      }
    }
  }, [currActive]);
  useEffect(() => {
    const handleListKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'j':
          setCurrActive((currActive + 1) % size);
          break;
        case 'k':
          setCurrActive((currActive + size - 1) % size);
          break;
        case 'Enter':
          onEnter?.(currActive);
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', handleListKey);
    return () => {
      document.removeEventListener('keydown', handleListKey);
    };
  }, [currActive]);

  const styles = css({
    backgroundColor: dark ? '#373737' : '#ddd',
    color: dark ? '#ddd' : '#373737',
    borderBottom: `1px solid ${dark ? '#ddd' : '#373737'}`,
  });
  return (
    <>
      <Text center>List Repositories</Text>
      <Container ref={ref}>
        {items?.map((item, idx) => (
          <Item
            active={idx === currActive}
            className={styles}
            key={Math.random()}
            onClick={onClick}
          >
            {item}
          </Item>
        ))}
      </Container>
    </>
  );
};

export default List;
