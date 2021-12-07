"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Traderjoe = void 0;
const graphql_request_1 = require("graphql-request");
class Traderjoe {
    exchangeEndpoint = "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange";
    // https://docs.uniswap.org/protocol/V2/reference/API/queries
    /**
     * Get a list of tokens from TraderJoe DEX
     * @returns Array of token objects
     */
    async GetTokenList(first = 1000, skip = 0) {
        const getAllTokensQuery = (0, graphql_request_1.gql) `
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
        };
        return await (0, graphql_request_1.request)(this.exchangeEndpoint, getAllTokensQuery, variables);
    }
    /**
     * Gets token data
     * @param symbol
     * @returns token data
     */
    async GetTokenDataByID(symbol) {
        const getPriceQuery = (0, graphql_request_1.gql) `
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
        };
        return await (0, graphql_request_1.request)(this.exchangeEndpoint, getPriceQuery, variables);
    }
}
exports.Traderjoe = Traderjoe;
