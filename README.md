# dicty-graphql-schema
This repository contains [GraphQL
schema](https://graphql.github.io/learn/schema/) and TypeScript types for the
dictyBase API.

All schema, queries and mutations are inside the `src` folder. The `schema`
folder contains the graphql schema definitions. The `mutations` and
`queries` folders has the graphql documents. 

## Install
`yarn add dictybase/dicty-graphql-schema`   

To install a particular version (check tags/release first)  

 `yarn add dictyBase/dicty-graphql-schema#v1.0.0`

## Usage
The code generated by the
[graphql-codegen](https://www.the-guild.dev/graphql/codegen) plugins can be
used in the following ways

### typescript
Generates base `Typescript` types which are used as base types for other
plugins. Details
[here](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript)

### typescript-operations
Generates types for graphql documents: `Query`, `Mutation` etc. Details
[here](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations)

### typescript-react-apollo
Generated typed __react hooks__ for every graphql opertation in the documents.
For example, the following hook can be used get a list of strain from our graphql API.
```jsx 
import {useStrainListQuery} from "dictybase/dicty-graphql-schema"

export const MyStrainComponent = () => {
  const { data, loading, error } = useStrainListQuery({ variables: { limit }})
  ......

  return (
    <div>{data}</div>
    ....
  )
}
```
Details [here](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo)

### fragment-matcher
The generated code should be used with apollo-clientv3, particularly in case of
configuring cache. For example,
```jsx 
import { InMemoryCache } from '@apollo/client'
// generated by Fragment Matcher plugin
import {PossibleTypesResultData} from "dictybase/dicty-graphql-schema/fragment"
const cache = new InMemoryCache({ possibleTypes: PossibleTypesResultData.possibleTypes })
```
Details [here](https://www.the-guild.dev/graphql/codegen/plugins/other/fragment-matcher)

### typescript-apollo-client-helpers
Generates fully-typed keyFields and Type-Policies for apollo-client. 
It can be imported like this ...
```jsx 
import {XXXXXXX} from "dictybase/dicty-graphql-schema/apollo-client-helpers"
```
Details
[here](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-apollo-client-helpers).

### typescript-msw
Generates [msw](https://github.com/mswjs/msw) based typed mock handlers for
graphql API. The handlers can be imported like this.... 
```jsx 
import {handlerxxxxx} from "dictybase/dicty-graphql-schema/mocks"
```
Details
[here](https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-msw)

### introspection
Generates a json formatted graphql introspection file saves as `schema.json`.
Details
[here](https://www.the-guild.dev/graphql/codegen/plugins/other/introspection)

## Development using github pull request
- Clone the repository.
- Create a new branch (i.e. `feature/new-schema`).
- Run `yarn install`
- Complete any necessary work.
- Run `yarn compile` to generate code from the schema. The generated code will
  be split among `dist`,`introspection` and `types` folders.
- Commit all changes and create a github pull request.
- Repeat the cycle until the work is done. When finished, merge to `develop`.

## Release
If you are ready to cut a new release, merge(rebase) `develop` into `master`.
This will trigger a GitHub Action that uses `semantic-release` to create a new
tag/release automatically.See
https://github.com/semantic-release/commit-analyzer#rules-matching or
[`.releaserc.json`](https://github.com/dictyBase/dicty-graphql-schema/blob/develop/.releaserc.json)
to learn more about how semantic versioning treats commits with different tags
and scopes.
