/**
 * Information of a relay path.
 */
export interface RelayPath
{
    /**
     * The name of the chain on the other side of the relay path. It should be a valid chain name defined on chain-registry.
     */
    chain: string;

    /**
     * The address of the relayer on Pryzm chain.
     */
    pryzm_address: string;

    /**
     * The address of the relayer on the other chain.
     */
    chain_address: string;

    /**
     * The software used for relaying (hermes, rly, ...).
     */
    relayer: string;
}

/**
 * Information about a relayer provider.
 */
export interface Relayer
{
    /**
     * The name of the relayer provider.
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

/**
 * List of relayers on Pryzm.
 */
export type Relayers = Relayer[];