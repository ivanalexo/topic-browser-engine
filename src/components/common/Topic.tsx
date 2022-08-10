import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ITopic } from "../../interfaces/ITopic";

interface IProps {
    name: string;
    relatedTopics?: [ITopic]
    stargazerCount: number;
    refetch?: ({ name}: any) => any
}


const Topic: React.FC<IProps> = ({ name, relatedTopics = {}, refetch = () => {}, stargazerCount}) => {
    const navigate = useNavigate();
    const routeChange = () => {
        const path = `/${name}`;
        navigate(path);
    }
    return (
        <Card>
            <CardContent>
                <Typography>
                    Topic
                </Typography>
                <Typography variant="h5">
                    {name}
                </Typography>
                <Typography>
                    Stargazer Count: {stargazerCount}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => routeChange()}>
                    Go to related topics
                </Button>
            </CardActions>
        </Card>
    )
}

export default Topic;