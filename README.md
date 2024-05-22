# PRYZM Registry

This repository centralizes all the metadata around Pryzm. Consider this to Pryzm as what chain-registry is to the
cosmos ecosystem. The following information are stored in this repository:

### Relayers
Contains information about the relayers running between Pryzm and other chains. If you are running a relayer, please
open a PR and add your information to the [ibc/relayers.json](./ibc/relayers.json). Note that this file must comply to
the json schema defined in [schemas/relayers.schema.json](./schemas/relayers.schema.json).

You can copy this sample, edit the properties and add it to the list of relayers:
```json
{
    "name": "Provider Name",
    "website": "https://relayer.provider",
    "contact": "contact@relayer.provider",
    "paths": [
      {
        "chain": "cosmoshub",
        "pryzm_address": "pryzm1lrqh4gka3qfr8hlp6gjd53j9czuruqmz9ehzc8",
        "chain_address": "cosmos1lrqh4gka3qfr8hlp6gjd53j9czuruqmzafq9x5",
        "relayer": "hermes"
      },
      {
        "chain": "cosmoshub",
        "pryzm_address": "pryzm10pnphdayrqkm2xs7gq425s0u4x3d8695d3hdds",
        "chain_address": "cosmos10pnphdayrqkm2xs7gq425s0u4x3d86954pq2nr",
        "relayer": "rly"
      },
      {
        "chain": "injective",
        "pryzm_address": "pryzm1w9hv4mlkepxrzy6v9wyvcg58l29exssc0u72kc",
        "chain_address": "inj1w9hv4mlkepxrzy6v9wyvcg58l29exssca97f6n",
        "relayer": "hermes"
      }
    ]
}
```
