import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema/*.graphql",
  documents: ["./src/queries/*.graphql", "./src/mutations/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./types/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: { withHooks: true },
    },
    "./types/mocks.ts" : {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-msw",
      ],
    },
    "./types/fragment.ts": {
      plugins: ["fragment-matcher"],
    },
    "./types/apollo-client-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
    "./schema.json": {
      plugins: ["introspection"],
    },
    "./types/query.ts": {
      plugins: ["typescript-document-nodes"],
    },
  },
};

export default config;
