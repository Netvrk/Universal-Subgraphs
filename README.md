# Universal Subgraph Generation and Deployment Toolkit

## Description

A toolkit for creating and deploying custom subgraphs using OpenZeppelin's framework. Subgraphs index blockchain data to enable efficient querying through GraphQL. It is used to generate subgraphs for Netvrk's Partner's projects. The configuration is done through JSON files and the toolkit generates the necessary files for deployment.

📚 [OpenZeppelin Subgraphs Documentation](https://docs.openzeppelin.com/subgraphs/0.1.x/generate)

## Prerequisites

Ensure you have the following installed:

- Node.js
- Yarn
- npx

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
