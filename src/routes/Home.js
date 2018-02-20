import React from 'react';
import { gql, graphql } from 'react-apollo';

const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

const allUserQuery = gql`
    {
        allUsers {
            id
            email
        }
    }
`;

export default graphql(allUserQuery)(Home);
