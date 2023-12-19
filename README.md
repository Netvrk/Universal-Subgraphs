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

## Deploy Subgraph

```bash
npx graph auth --product hosted-service xxx
```

```bash
npm run deploy --node https://api.thegraph.com/deploy/ netvrk/psilo ./generated/psilo.subgraph.yaml
```
