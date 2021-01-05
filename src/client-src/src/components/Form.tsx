import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Field, Button } from '.';
import { Text } from '#/containers';

declare namespace Form {
  type Props = {
    initialFieldItem: Record<string, string>;
    onSubmit: (fields: Record<string, string>) => void;
  };
  type T = typeof Form;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Form: React.FC<Form.Props> = ({
  children,
  initialFieldItem,
  onSubmit,
}) => {
  const [fieldItem, setFieldItem] = useState(initialFieldItem);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(fieldItem);
    setFieldItem((st) => {
      const _st = { ...st };
      for (const key in _st) {
        _st[key] = '';
      }
      return _st;
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Text center>New Repository</Text>
      {Object.keys(fieldItem).map((item) => {
        return (
          <Field
            key={item}
            label={item}
            value={fieldItem[item]}
            setValue={(val) =>
              setFieldItem((st) => ({
                ...st,
                [item]: val,
              }))
            }
          />
        );
      })}
      {children}
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default Form;
