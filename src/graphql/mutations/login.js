import gql from 'graphql-tag';

export default gql`
    mutation Login($identification: String!, $password: String!) {
        login(identification: $identification, password: $password) {
            token
        }
    }
`;
