import { gql } from "@apollo/client";

export const GET_TOPIC_QUERY = gql`
    query($name: String!) {
        topic(name: $name) {
            name
            relatedTopics(first: 5) {
                name
                stargazerCount
            }
            stargazerCount
        }
    }
`;
