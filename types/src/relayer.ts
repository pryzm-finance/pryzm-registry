/**
 * Information of a relay path.
 */
export interface RelayPath
{
    /**
     * The name of the chain on the other side of the relay path. It should be a valid chain name defined on chain-registry.
     * @minLength 1
     */
    chain: string;

    /**
     * The address of the relayer on Pryzm chain.
     * @pattern ^pryzm[a-zA-Z0-9]+$
     */
    pryzm_address: string;

    /**
     * The address of the relayer on the other chain.
     * @minLength 1
     */
    chain_address: string;

    /**
     * The software used for relaying (hermes, rly, ...).
     * @minLength 1
     */
    relayer_software: string;
}

/**
 * Information about a relayer provider.
 */
export interface Relayer
{
    $schema: string;

    /**
     * The name of the relayer provider.
     * @minLength 1
     */
    name: string;

    /**
     * The website of the relayer provider.
     */
    website: string;

    /**
     * The contact point to the relayer provider.
     */
    contact: string;

    /**
     * The list of paths the relayer is relaying on.
     */
    paths: [RelayPath, ...RelayPath[]];
}
