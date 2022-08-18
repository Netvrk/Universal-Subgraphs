## Description

Custom subgraph creation and deployment
OpenZeppelin documentation: https://docs.openzeppelin.com/subgraphs/0.1.x/generate

## Installation

```bash
$ yarn install
```

## Generating manifest from JSON 

```bash
$ npx graph-compiler \
  --config configs/<json filename>.json \
  --include node_modules/@openzeppelin/subgraphs/src/datasources \
  --export-schema \
  --export-subgraph
```

## Generating AssemblyScript types for a subgraph

```bash
$ yarn codegen ./generated/<subgraph manifest name>.yaml
```

## Build subgraph

```bash
$ yarn build ./generated/<subgraph manifest name>.yaml
```

## Register subgraph name

1. https://thegraph.com/hosted-service/dashboard
2. Sign-in with GitHub
3. Add Subgraph
4. Name subgraph as desired (you will need this subgraph name for the next step)
5. Select desired account (you will need this account name for the next step)
6. Fill required fields
7. Create subgraph

## Deploy subgraph

```bash
$ yarn deploy --node https://api.thegraph.com/deploy/ <account/subgraph_name> ./generated/<subgraph manifest name>.yaml --access-token <your hosted service access token>
```
