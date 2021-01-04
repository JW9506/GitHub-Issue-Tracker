import React from 'react'

declare namespace PullRequests {
  type Props = {}
  type T = typeof PullRequests
}

const PullRequests: React.FC<PullRequests.Props> = () => {
  return <div className="PullRequests">PullRequests</div>
}

export default PullRequests
