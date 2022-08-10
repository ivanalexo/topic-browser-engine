import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_TOPIC_QUERY } from '../api/gql/Topics';
import { TopicVars } from '../interfaces/ITopic';
import { Grid } from '@mui/material';
import SearchBar from './common/SearchBar';
import Topic from './common/Topic';

const RelatedTopics: React.FC = () => {
    const { id } = useParams();
    const [filteredData, setFilterData] = useState<any>(null);
    const { data, loading, error } = useQuery<any, TopicVars>(GET_TOPIC_QUERY, {
        variables: {
            name: id || ''
        }
    });

    const { topic: { relatedTopics = [] } = '' } = data || {};
    const filter = useCallback((searchInput: string) => {
        const filteredData = relatedTopics.filter((item: any) => {
            return Object.values(item).join('').toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
        });
        setFilterData(filteredData)
    }, [relatedTopics])

    if (loading) return <div>loading...</div>
    if (error) return <div>error</div>

    return (
        <Grid direction="column" container paddingRight={15}>
            <SearchBar onChange={filter} />
            <Grid container spacing={3}>
                {filteredData && filteredData ? filteredData.map((topic: { name: string, stargazerCount: number }, index: number) =>
                    <Grid item xs={12} sm={4} key={index}>
                        <Topic name={topic.name} stargazerCount={topic.stargazerCount} />
                    </Grid>
                ) :
                    relatedTopics.map((topic: { name: string, stargazerCount: number }, index: number) =>
                        <Grid item xs={12} sm={4} key={index}>
                            <Topic name={topic.name} stargazerCount={topic.stargazerCount} />
                        </Grid>
                    )
                }

            </Grid>
        </Grid>
    )
}

export default RelatedTopics
