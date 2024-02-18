import { gql, GraphQLClient } from "graphql-request";
import { Message } from "@/types/global";

if (!process.env.GRAPHQL_ENDPOINT || !process.env.GRAPHQL_API_KEY) {
    throw new Error('GRAPHQL env secrets is not defined');
}

const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
    headers: {
      "x-api-key": process.env.GRAPHQL_API_KEY,
    },
});

export async function createMessage({mgs}: {mgs: Message}){
    interface Response{
        createIncogniMessage: {
          id: string;
        }
      }
    const q = gql`mutation MyMutation {
        createIncogniMessage(input: {user_slug: \"${mgs.user_slug}\", metadata_location: \"${mgs.metadata_location}\", metadata_ip: \"${mgs.metadata_ip}\", metadata_agent: \"${mgs.metadata_agent}\", message: \"${mgs.message}\", message_timestamp: \"${mgs.message_timestamp}\"}) {
          id
        }
      }`
    const data = await client.request<Response>(q);
    return data;
}

export async function getMessage({id}: {id: string}){
    interface QueryResponse{
        getIncogniMessage: Message;
    }
    const q = gql`query MyQuery {
        getIncogniMessage(id: \"${id}\") {
          message
          message_timestamp
          metadata_agent
          metadata_ip
          metadata_location
          user_slug
        }
      }`
    const data = await client.request<QueryResponse>(q);
    return data.getIncogniMessage;
}