# Pryzm Registry Types

This project defines typescript interfaces for the data stored in the Pryzm Registry. It also generates JSON schemas
from those interfaces.

## Usage

First install the dependencies:

```bash
pnpm install
```

You can edit define new types in the `src` directory. To generate the JSON schemas, run:

```bash
pnpm run generate
```

Note that you need to add new types to the `generate` script in order to generate schemas.
