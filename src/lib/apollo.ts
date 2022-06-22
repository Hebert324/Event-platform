import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p0iuqq1nhx01xle8ej9imy/master',
    cache: new InMemoryCache()
})