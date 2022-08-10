import React from 'react'
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_TOPIC_QUERY } from '../api/gql/Topics';
import { TopicVars } from '../interfaces/ITopic';
import useSearch from '../hooks/useSearch';
import SearchBar from './common/SearchBar';
import Topic from './common/Topic';
import { Grid } from '@mui/material';
function TopicContainer() {
    const { operations, models } = useSearch();
    const { data, loading, error, refetch } = useQuery<any, TopicVars>(GET_TOPIC_QUERY, {
        variables: {
            name: 'react'
        }
    });

    const { topic: { name = '', stargazerCount = 0, relatedTopics = [] } = '' } = data || {};

    if (loading) return <div>loading...</div>
    if (error) return <div>error fetching data</div>

  return (
    <Grid container direction="column">
        <Grid item xs={12}>
            <SearchBar operations={operations} refetch={refetch} models={models} />
        </Grid>
        <Grid item xs={4}>
            <Topic name={name} relatedTopics={relatedTopics} refetch={refetch} stargazerCount={stargazerCount} />
        </Grid>
    </Grid>
  )
}

export default TopicContainer
