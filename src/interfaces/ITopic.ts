export interface ITopic {
    name: string;
    relatedTopics: [ITopic]
    stargazerCount: number;
}

export interface TopicVars {
    name: String
};
