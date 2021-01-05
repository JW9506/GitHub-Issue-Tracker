import styled from '@emotion/styled';
import React, { useState } from 'react';

declare namespace Field {
  type Props = {
    label: string;
    top?: number | string;
    value: string;
    setValue: (val: string) => void;
  };
  type T = typeof Field;
}

const FieldContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  width: 20rem;
  & label {
    width: 5rem;
  }
  & input {
    background-color: transparent;
    color: #ddd;
    outline: none;
    flex-grow: 1;
  }
`;

const Field: React.FC<Field.Props> = ({ label, value, setValue }) => {
  return (
    <FieldContainer>
      <label>{label}: </label>
      <input
        name={label}
        value={value}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </FieldContainer>
  );
};

export default Field;
