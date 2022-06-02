import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
mutation Mutation($tech1: String!, $tech2: String!, $tech1Votes: Int!, $tech2Votes: Int!) {
    createMatchup(tech1: $tech1, tech2: $tech2, tech1_votes: $tech1Votes, tech2_votes: $tech2Votes) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`

export const CREATE_VOTE = gql`
mutation Mutation($createVoteId: ID!, $techNum: Int!) {
    createVote(id: $createVoteId, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`