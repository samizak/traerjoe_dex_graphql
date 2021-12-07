export declare class Traderjoe {
    private exchangeEndpoint;
    /**
     * Get a list of tokens from TraderJoe DEX
     * @returns Array of token objects
     */
    GetTokenList(first?: number, skip?: number): Promise<any>;
    /**
     * Gets token data
     * @param tokenID The ID of the token
     * @returns Token data
     */
    GetTokenDataByID(tokenID: string): Promise<any>;
}
