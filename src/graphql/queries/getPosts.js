import gql from 'graphql-tag';

export default gql`
    query getAllPosts {
        getPosts {
            text
            _id
            user {
                username
                firstName
                lastName
                country
                avatar
            }
        }
    }
`;
