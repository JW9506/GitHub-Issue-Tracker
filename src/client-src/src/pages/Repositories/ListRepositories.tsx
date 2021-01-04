import { MessageBox } from '#/containers'
import React from 'react'

declare namespace ListRepositories {
  type Props = {}
  type T = typeof ListRepositories
}

const ListRepositories: React.FC<ListRepositories.Props> = () => {
  return (
    <MessageBox>
      ListRepositories
    </MessageBox>
  )
}

export default ListRepositories
