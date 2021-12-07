export declare class Traderjoe {
    private exchangeEndpoint;
    /**
     * Get a list of tokens from TraderJoe DEX
     * @returns Array of token objects
     */
    GetTokenList(first?: number, skip?: number): Promise<any>;
    /**
     * Gets token data
     * @param symbol
     * @returns token data
     */
    GetTokenDataByID(symbol: string): Promise<any>;
}
