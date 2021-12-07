import { request, gql } from 'graphql-request';

export class Traderjoe {
    private exchangeEndpoint = "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange"

    // https://docs.uniswap.org/protocol/V2/reference/API/queries

    /**
     * Get a list of tokens from TraderJoe DEX
     * @returns Array of token objects
     */
    public async GetTokenList (first: number = 1000, skip: number = 0) {
        const getAllTokensQuery = gql`
            query tokens($first: Int!, $skip: Int!) {
                tokens(first: $first, skip: $skip) {
                    id
                    name
                    symbol
                }
            }
        `;
        const variables = {
            first: first,
            skip: skip
        }
        
        return await request(this.exchangeEndpoint, getAllTokensQuery, variables);
    }

    /**
     * Gets token data
     * @param symbol 
     * @returns token data
     */
     public async GetTokenDataByID (symbol: string){
        const getPriceQuery = gql`
            query getToken($id: String!) {
                tokens (where:{ id: $id }) {
                    symbol,
                    name,
                    derivedAVAX
                    id
                },
                bundle (id: "1"){
                    avaxPrice
                }
            }
        `;
        const variables = {
            id: symbol
        }

        return await request(this.exchangeEndpoint, getPriceQuery, variables);
    }
}