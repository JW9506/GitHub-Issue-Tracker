import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import { Text } from '#/containers';

import {
  getRepository,
  getRepositoryVariables,
} from '#/queries/types/getRepository';
import { GET_REPOSITORY } from '#/queries/getRepositories';
import {
  createNewIssue,
  createNewIssueVariables,
  createNewIssue_createIssue_issue,
} from './types/createNewIssue';
import { Form } from '#/components';
import { useApolloClient, useMutation } from 'react-apollo-hooks';
import NewIssueSuccess from './NewIssueSuccess';

const CREATE_ISSUE = gql`
  mutation createNewIssue($title: String, $body: String, $repository: ID) {
    createIssue(
      input: { title: $title, body: $body, repositoryId: $repository }
    ) {
      issue {
        title
        url
      }
    }
  }
`;

declare namespace NewIssue {
  type Props = {};
  type T = typeof NewIssue;
}

const NewIssue: React.FC<NewIssue.Props> = () => {
  const fieldItem = {
    Repo: '',
    Title: '',
    Body: '',
  };
  const [createIssue] = useMutation<createNewIssue, createNewIssueVariables>(
    CREATE_ISSUE
  );
  const [issue, setIssue] = useState<
    createNewIssue_createIssue_issue | null | undefined
  >(null);
  const client = useApolloClient();
  const handleSubmit = async (fields: Record<string, string>) => {
    // assert valid field
    const [owner, name] = fields['Repo'].split('/');
    const title = fields['Title'];
    const body = fields['Body'];
    const { data } = await client.query<getRepository, getRepositoryVariables>({
      query: GET_REPOSITORY,
      variables: {
        owner,
        name,
      },
    });
    if (!data || !data.repository) {
      return;
    }
    try {
      const result = await createIssue({
        variables: {
          title,
          body,
          repository: data.repository.id,
        },
      });
      setIssue(result.data?.createIssue?.issue);
    } catch {
      console.error('Issue creation failed.')
    }
  };
  if (issue) {
    return <NewIssueSuccess issue={issue} />;
  }
  return (
    <>
      <Text center>New Issue</Text>
      <Form initialFieldItem={fieldItem} onSubmit={handleSubmit} />
    </>
  );
};

export default NewIssue;
