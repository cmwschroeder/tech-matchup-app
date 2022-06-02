import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
query Query {
  tech {
    _id
    name
  }
}
`;

export const QUERY_MATCHUP = gql`
query Matchup($matchupId: ID!) {
  matchup(matchupId: $matchupId) {
    _id
    tech1
    tech2
    tech2_votes
    tech1_votes
  }
}
`;

export const QUERY_MATCHUPS = gql`
query Matchups {
  matchups {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;