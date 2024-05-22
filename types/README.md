# Pryzm Registry Types

This project defines typescript interfaces for the data stored in the Pryzm Registry. It also generates JSON schemas
from those interfaces.

## Usage
1. Install [Node.js](https://nodejs.org/) (20+) and [pnpm](https://pnpm.io/) (9+).
2. Install the dependencies:
    ```bash
    pnpm install
    ```
3. You can edit types or define new types in the `src` directory. To generate the JSON schemas, run:
    ```bash
    pnpm run generate
    ```
    Note that you need to add new types to the `generate` script in order to be included in the generated schemas.
