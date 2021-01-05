import { Form } from '#/components';
import { MessageBox } from '#/containers';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import {
  createNewRepository_createRepository_repository,
  createNewRepository,
  createNewRepositoryVariables,
} from './types/createNewRepository';

import { RepositoryVisibility } from '#/types/graphql-global-types';
import { useMutation } from 'react-apollo-hooks';
import NewRepositoriesSuccess from './NewRepositoriesSuccess';

const CREATE_REPOSITORY = gql`
  mutation createNewRepository(
    $name: String!
    $description: String!
    $visibility: RepositoryVisibility!
  ) {
    createRepository(
      input: { name: $name, description: $description, visibility: $visibility }
    ) {
      repository {
        name
        url
        id
      }
    }
  }
`;

declare namespace NewRepositories {
  type Props = {};
  type T = typeof NewRepositories;
}

const NewRepositories: React.FC<NewRepositories.Props> = () => {
  const [
    repository,
    setRepository,
  ] = useState<createNewRepository_createRepository_repository | null>();

  const [isLoading, setIsLoading] = useState(false);

  const [createrepository] = useMutation<
    createNewRepository,
    createNewRepositoryVariables
  >(CREATE_REPOSITORY);
  const fieldItem = {
    Name: '',
    Description: '',
  };
  const handleSubmit = async (fields: Record<string, string>) => {
    setIsLoading(true);
    const result = await createrepository({
      variables: {
        name: fields['Name'],
        description: fields['Description'],
        visibility: RepositoryVisibility.PRIVATE,
      },
    });
    setIsLoading(false);
    setRepository(result.data?.createRepository?.repository);
  };
  if (isLoading) {
    return <>Loading...</>;
  }
  // if (repository) {
  // if (true) {
  // // @ts-expect-error
  // return <NewRepositoriesSuccess repository={repository} />;
  // }

  return <Form initialFieldItem={fieldItem} onSubmit={handleSubmit} />;
};

export default NewRepositories;
