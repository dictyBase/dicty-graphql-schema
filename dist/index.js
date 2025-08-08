"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListStrainsWithGeneQuery = exports.ListStrainsWithGeneDocument = exports.useGeneOntologyAnnotationLazyQuery = exports.useGeneOntologyAnnotationQuery = exports.GeneOntologyAnnotationDocument = exports.useListPublicationsWithGeneSummaryLazyQuery = exports.useListPublicationsWithGeneSummaryQuery = exports.ListPublicationsWithGeneSummaryDocument = exports.useGeneOntologyAnnotationSummaryLazyQuery = exports.useGeneOntologyAnnotationSummaryQuery = exports.GeneOntologyAnnotationSummaryDocument = exports.useGeneGeneralInformationSummaryLazyQuery = exports.useGeneGeneralInformationSummaryQuery = exports.GeneGeneralInformationSummaryDocument = exports.useListOrganismsLazyQuery = exports.useListOrganismsQuery = exports.ListOrganismsDocument = exports.useContentLazyQuery = exports.useContentQuery = exports.ContentDocument = exports.useContentBySlugLazyQuery = exports.useContentBySlugQuery = exports.ContentBySlugDocument = exports.useListContentByNamespaceLazyQuery = exports.useListContentByNamespaceQuery = exports.ListContentByNamespaceDocument = exports.useUpdateUserMutation = exports.UpdateUserDocument = exports.useCreateUserMutation = exports.CreateUserDocument = exports.useUploadFileMutation = exports.UploadFileDocument = exports.useUpdateStrainPhenotypeMutation = exports.UpdateStrainPhenotypeDocument = exports.useAddStrainPhenotypeMutation = exports.AddStrainPhenotypeDocument = exports.useCreateOrderMutation = exports.CreateOrderDocument = exports.useDeleteContentMutation = exports.DeleteContentDocument = exports.useUpdateContentMutation = exports.UpdateContentDocument = exports.useCreateContentMutation = exports.CreateContentDocument = exports.useLogoutMutation = exports.LogoutDocument = exports.useLoginMutation = exports.LoginDocument = exports.StrainType = exports.StatusEnum = void 0;
exports.UserByEmailDocument = exports.useListPhenotypeAssaysLazyQuery = exports.useListPhenotypeAssaysQuery = exports.ListPhenotypeAssaysDocument = exports.useListPhenotypeEnvironmentsLazyQuery = exports.useListPhenotypeEnvironmentsQuery = exports.ListPhenotypeEnvironmentsDocument = exports.useListPhenotypesLazyQuery = exports.useListPhenotypesQuery = exports.ListPhenotypesDocument = exports.useListRecentStrainsLazyQuery = exports.useListRecentStrainsQuery = exports.ListRecentStrainsDocument = exports.useListRecentPlasmidsLazyQuery = exports.useListRecentPlasmidsQuery = exports.ListRecentPlasmidsDocument = exports.useStrainLazyQuery = exports.useStrainQuery = exports.StrainDocument = exports.usePlasmidLazyQuery = exports.usePlasmidQuery = exports.PlasmidDocument = exports.usePlasmidListFilterLazyQuery = exports.usePlasmidListFilterQuery = exports.PlasmidListFilterDocument = exports.useListPlasmidsInventoryLazyQuery = exports.useListPlasmidsInventoryQuery = exports.ListPlasmidsInventoryDocument = exports.useListStrainsInventoryLazyQuery = exports.useListStrainsInventoryQuery = exports.ListStrainsInventoryDocument = exports.useListBacterialStrainsLazyQuery = exports.useListBacterialStrainsQuery = exports.ListBacterialStrainsDocument = exports.useListStrainsWithPhenotypeLazyQuery = exports.useListStrainsWithPhenotypeQuery = exports.ListStrainsWithPhenotypeDocument = exports.useStrainListLazyQuery = exports.useStrainListQuery = exports.StrainListDocument = exports.useListPublicationsWithGeneLazyQuery = exports.useListPublicationsWithGeneQuery = exports.ListPublicationsWithGeneDocument = exports.useListRecentPublicationsLazyQuery = exports.useListRecentPublicationsQuery = exports.ListRecentPublicationsDocument = exports.usePublicationLazyQuery = exports.usePublicationQuery = exports.PublicationDocument = exports.useListStrainsWithGeneLazyQuery = void 0;
exports.useUserByEmailLazyQuery = exports.useUserByEmailQuery = void 0;
const client_1 = require("@apollo/client");
const Apollo = require("@apollo/client");
const defaultOptions = {};
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Cancelled"] = "CANCELLED";
    StatusEnum["Growing"] = "GROWING";
    StatusEnum["InPreparation"] = "IN_PREPARATION";
    StatusEnum["Shipped"] = "SHIPPED";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
var StrainType;
(function (StrainType) {
    StrainType["All"] = "ALL";
    StrainType["Bacterial"] = "BACTERIAL";
    StrainType["Gwdi"] = "GWDI";
    StrainType["Regular"] = "REGULAR";
})(StrainType || (exports.StrainType = StrainType = {}));
exports.LoginDocument = (0, client_1.gql) `
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
      first_name
      last_name
      roles {
        role
        permissions {
          permission
          resource
        }
      }
    }
    identity {
      provider
    }
  }
}
    `;
/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.LoginDocument, options);
}
exports.useLoginMutation = useLoginMutation;
exports.LogoutDocument = (0, client_1.gql) `
    mutation Logout {
  logout {
    success
  }
}
    `;
/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
function useLogoutMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.LogoutDocument, options);
}
exports.useLogoutMutation = useLogoutMutation;
exports.CreateContentDocument = (0, client_1.gql) `
    mutation CreateContent($input: CreateContentInput!) {
  createContent(input: $input) {
    name
    created_by {
      id
    }
    content
    namespace
  }
}
    `;
/**
 * __useCreateContentMutation__
 *
 * To run a mutation, you first call `useCreateContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContentMutation, { data, loading, error }] = useCreateContentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateContentMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.CreateContentDocument, options);
}
exports.useCreateContentMutation = useCreateContentMutation;
exports.UpdateContentDocument = (0, client_1.gql) `
    mutation UpdateContent($input: UpdateContentInput!) {
  updateContent(input: $input) {
    id
    updated_by {
      id
    }
    content
  }
}
    `;
/**
 * __useUpdateContentMutation__
 *
 * To run a mutation, you first call `useUpdateContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContentMutation, { data, loading, error }] = useUpdateContentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useUpdateContentMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateContentDocument, options);
}
exports.useUpdateContentMutation = useUpdateContentMutation;
exports.DeleteContentDocument = (0, client_1.gql) `
    mutation DeleteContent($id: ID!) {
  deleteContent(id: $id) {
    success
  }
}
    `;
/**
 * __useDeleteContentMutation__
 *
 * To run a mutation, you first call `useDeleteContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContentMutation, { data, loading, error }] = useDeleteContentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeleteContentMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteContentDocument, options);
}
exports.useDeleteContentMutation = useDeleteContentMutation;
exports.CreateOrderDocument = (0, client_1.gql) `
    mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
  }
}
    `;
/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateOrderMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.CreateOrderDocument, options);
}
exports.useCreateOrderMutation = useCreateOrderMutation;
exports.AddStrainPhenotypeDocument = (0, client_1.gql) `
    mutation AddStrainPhenotype($strainId: ID!, $input: AddStrainPhenotypeInput!) {
  addStrainPhenotype(strainId: $strainId, input: $input) {
    id
    label
    phenotypes {
      phenotype
      note
      assay
      environment
      publication {
        id
        pub_date
        title
        journal
        volume
        pages
        authors {
          last_name
        }
      }
    }
  }
}
    `;
/**
 * __useAddStrainPhenotypeMutation__
 *
 * To run a mutation, you first call `useAddStrainPhenotypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStrainPhenotypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStrainPhenotypeMutation, { data, loading, error }] = useAddStrainPhenotypeMutation({
 *   variables: {
 *      strainId: // value for 'strainId'
 *      input: // value for 'input'
 *   },
 * });
 */
function useAddStrainPhenotypeMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.AddStrainPhenotypeDocument, options);
}
exports.useAddStrainPhenotypeMutation = useAddStrainPhenotypeMutation;
exports.UpdateStrainPhenotypeDocument = (0, client_1.gql) `
    mutation UpdateStrainPhenotype($strainId: ID!, $target: UpdateStrainPhenotypeTargetInput!, $payload: UpdateStrainPhenotypePayloadInput!) {
  updateStrainPhenotype(strainId: $strainId, target: $target, payload: $payload) {
    id
    label
    phenotypes {
      phenotype
      environment
      assay
      note
      publication {
        id
        pub_date
        title
        journal
        volume
        pages
        authors {
          last_name
        }
      }
    }
  }
}
    `;
/**
 * __useUpdateStrainPhenotypeMutation__
 *
 * To run a mutation, you first call `useUpdateStrainPhenotypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStrainPhenotypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStrainPhenotypeMutation, { data, loading, error }] = useUpdateStrainPhenotypeMutation({
 *   variables: {
 *      strainId: // value for 'strainId'
 *      target: // value for 'target'
 *      payload: // value for 'payload'
 *   },
 * });
 */
function useUpdateStrainPhenotypeMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateStrainPhenotypeDocument, options);
}
exports.useUpdateStrainPhenotypeMutation = useUpdateStrainPhenotypeMutation;
exports.UploadFileDocument = (0, client_1.gql) `
    mutation UploadFile($file: Upload!) {
  uploadFile(file: $file) {
    url
  }
}
    `;
/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
function useUploadFileMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UploadFileDocument, options);
}
exports.useUploadFileMutation = useUploadFileMutation;
exports.CreateUserDocument = (0, client_1.gql) `
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
  }
}
    `;
/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateUserMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.CreateUserDocument, options);
}
exports.useCreateUserMutation = useCreateUserMutation;
exports.UpdateUserDocument = (0, client_1.gql) `
    mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
  }
}
    `;
/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
function useUpdateUserMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateUserDocument, options);
}
exports.useUpdateUserMutation = useUpdateUserMutation;
exports.ListContentByNamespaceDocument = (0, client_1.gql) `
    query ListContentByNamespace($namespace: String!) {
  listContentByNamespace(namespace: $namespace) {
    id
    content
    name
    slug
    created_at
    updated_at
    created_by {
      id
      email
      first_name
      last_name
    }
    updated_by {
      id
      email
      first_name
      last_name
    }
  }
}
    `;
/**
 * __useListContentByNamespaceQuery__
 *
 * To run a query within a React component, call `useListContentByNamespaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useListContentByNamespaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListContentByNamespaceQuery({
 *   variables: {
 *      namespace: // value for 'namespace'
 *   },
 * });
 */
function useListContentByNamespaceQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListContentByNamespaceDocument, options);
}
exports.useListContentByNamespaceQuery = useListContentByNamespaceQuery;
function useListContentByNamespaceLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListContentByNamespaceDocument, options);
}
exports.useListContentByNamespaceLazyQuery = useListContentByNamespaceLazyQuery;
exports.ContentBySlugDocument = (0, client_1.gql) `
    query ContentBySlug($slug: String!) {
  contentBySlug(slug: $slug) {
    id
    content
    name
    slug
    created_at
    updated_at
    created_by {
      id
      email
      first_name
      last_name
    }
    updated_by {
      id
      email
      first_name
      last_name
    }
  }
}
    `;
/**
 * __useContentBySlugQuery__
 *
 * To run a query within a React component, call `useContentBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useContentBySlugQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ContentBySlugDocument, options);
}
exports.useContentBySlugQuery = useContentBySlugQuery;
function useContentBySlugLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ContentBySlugDocument, options);
}
exports.useContentBySlugLazyQuery = useContentBySlugLazyQuery;
exports.ContentDocument = (0, client_1.gql) `
    query Content($id: ID!) {
  content(id: $id) {
    id
    content
    name
    slug
    namespace
    created_at
    updated_at
    created_by {
      id
      email
      first_name
      last_name
    }
    updated_by {
      id
      email
      first_name
      last_name
    }
  }
}
    `;
/**
 * __useContentQuery__
 *
 * To run a query within a React component, call `useContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useContentQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ContentDocument, options);
}
exports.useContentQuery = useContentQuery;
function useContentLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ContentDocument, options);
}
exports.useContentLazyQuery = useContentLazyQuery;
exports.ListOrganismsDocument = (0, client_1.gql) `
    query ListOrganisms {
  listOrganisms {
    taxon_id
    scientific_name
    citations {
      title
      authors
      pubmed_id
      journal
    }
    downloads {
      title
      items {
        title
        url
      }
    }
  }
}
    `;
/**
 * __useListOrganismsQuery__
 *
 * To run a query within a React component, call `useListOrganismsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOrganismsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOrganismsQuery({
 *   variables: {
 *   },
 * });
 */
function useListOrganismsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListOrganismsDocument, options);
}
exports.useListOrganismsQuery = useListOrganismsQuery;
function useListOrganismsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListOrganismsDocument, options);
}
exports.useListOrganismsLazyQuery = useListOrganismsLazyQuery;
exports.GeneGeneralInformationSummaryDocument = (0, client_1.gql) `
    query GeneGeneralInformationSummary($gene: String!) {
  geneGeneralInformation(gene: $gene) {
    id
    name_description
    gene_product
    synonyms
    description
  }
}
    `;
/**
 * __useGeneGeneralInformationSummaryQuery__
 *
 * To run a query within a React component, call `useGeneGeneralInformationSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeneGeneralInformationSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeneGeneralInformationSummaryQuery({
 *   variables: {
 *      gene: // value for 'gene'
 *   },
 * });
 */
function useGeneGeneralInformationSummaryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GeneGeneralInformationSummaryDocument, options);
}
exports.useGeneGeneralInformationSummaryQuery = useGeneGeneralInformationSummaryQuery;
function useGeneGeneralInformationSummaryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GeneGeneralInformationSummaryDocument, options);
}
exports.useGeneGeneralInformationSummaryLazyQuery = useGeneGeneralInformationSummaryLazyQuery;
exports.GeneOntologyAnnotationSummaryDocument = (0, client_1.gql) `
    query GeneOntologyAnnotationSummary($gene: String!) {
  geneOntologyAnnotation(gene: $gene) {
    id
    type
    date
    go_term
    evidence_code
    with {
      id
      db
      name
    }
    extensions {
      id
      db
      relation
      name
    }
  }
}
    `;
/**
 * __useGeneOntologyAnnotationSummaryQuery__
 *
 * To run a query within a React component, call `useGeneOntologyAnnotationSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeneOntologyAnnotationSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeneOntologyAnnotationSummaryQuery({
 *   variables: {
 *      gene: // value for 'gene'
 *   },
 * });
 */
function useGeneOntologyAnnotationSummaryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GeneOntologyAnnotationSummaryDocument, options);
}
exports.useGeneOntologyAnnotationSummaryQuery = useGeneOntologyAnnotationSummaryQuery;
function useGeneOntologyAnnotationSummaryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GeneOntologyAnnotationSummaryDocument, options);
}
exports.useGeneOntologyAnnotationSummaryLazyQuery = useGeneOntologyAnnotationSummaryLazyQuery;
exports.ListPublicationsWithGeneSummaryDocument = (0, client_1.gql) `
    query ListPublicationsWithGeneSummary($gene: String!) {
  listPublicationsWithGene(gene: $gene) {
    id
    title
    journal
    pages
    issue
    authors {
      last_name
    }
  }
}
    `;
/**
 * __useListPublicationsWithGeneSummaryQuery__
 *
 * To run a query within a React component, call `useListPublicationsWithGeneSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPublicationsWithGeneSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPublicationsWithGeneSummaryQuery({
 *   variables: {
 *      gene: // value for 'gene'
 *   },
 * });
 */
function useListPublicationsWithGeneSummaryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListPublicationsWithGeneSummaryDocument, options);
}
exports.useListPublicationsWithGeneSummaryQuery = useListPublicationsWithGeneSummaryQuery;
function useListPublicationsWithGeneSummaryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListPublicationsWithGeneSummaryDocument, options);
}
exports.useListPublicationsWithGeneSummaryLazyQuery = useListPublicationsWithGeneSummaryLazyQuery;
exports.GeneOntologyAnnotationDocument = (0, client_1.gql) `
    query GeneOntologyAnnotation($gene: String!) {
  geneOntologyAnnotation(gene: $gene) {
    id
    type
    date
    go_term
    evidence_code
    qualifier
    publication
    assigned_by
    with {
      id
      db
      name
    }
    extensions {
      id
      db
      relation
      name
    }
  }
}
    `;
/**
 * __useGeneOntologyAnnotationQuery__
 *
 * To run a query within a React component, call `useGeneOntologyAnnotationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeneOntologyAnnotationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeneOntologyAnnotationQuery({
 *   variables: {
 *      gene: // value for 'gene'
 *   },
 * });
 */
function useGeneOntologyAnnotationQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GeneOntologyAnnotationDocument, options);
}
exports.useGeneOntologyAnnotationQuery = useGeneOntologyAnnotationQuery;
function useGeneOntologyAnnotationLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GeneOntologyAnnotationDocument, options);
}
exports.useGeneOntologyAnnotationLazyQuery = useGeneOntologyAnnotationLazyQuery;
exports.ListStrainsWithGeneDocument = (0, client_1.gql) `
    query ListStrainsWithGene($gene: String!) {
  listStrainsWithGene(gene: $gene) {
    id
    label
    characteristics
    in_stock
    phenotypes {
      phenotype
      publication {
        id
        title
        journal
        pages
        volume
        pub_date
        authors {
          last_name
          rank
        }
      }
    }
  }
}
    `;
/**
 * __useListStrainsWithGeneQuery__
 *
 * To run a query within a React component, call `useListStrainsWithGeneQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStrainsWithGeneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStrainsWithGeneQuery({
 *   variables: {
 *      gene: // value for 'gene'
 *   },
 * });
 */
function useListStrainsWithGeneQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListStrainsWithGeneDocument, options);
}
exports.useListStrainsWithGeneQuery = useListStrainsWithGeneQuery;
function useListStrainsWithGeneLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListStrainsWithGeneDocument, options);
}
exports.useListStrainsWithGeneLazyQuery = useListStrainsWithGeneLazyQuery;
exports.PublicationDocument = (0, client_1.gql) `
    query Publication($id: ID!) {
  publication(id: $id) {
    id
    doi
    title
    abstract
    journal
    pub_date
    pages
    issue
    volume
    authors {
      initials
      last_name
    }
  }
}
    `;
/**
 * __usePublicationQuery__
 *
 * To run a query within a React component, call `usePublicationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function usePublicationQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.PublicationDocument, options);
}
exports.usePublicationQuery = usePublicationQuery;
function usePublicationLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.PublicationDocument, options);
}
exports.usePublicationLazyQuery = usePublicationLazyQuery;
exports.ListRecentPublicationsDocument = (0, client_1.gql) `
    query ListRecentPublications($limit: Int! = 4) {
  listRecentPublications(limit: $limit) {
    id
    doi
    title
    abstract
    journal
    pub_date
    pages
    issue
    volume
    authors {
      initials
      last_name
    }
  }
}
    `;
/**
 * __useListRecentPublicationsQuery__
 *
 * To run a query within a React component, call `useListRecentPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRecentPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRecentPublicationsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
function useListRecentPublicationsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListRecentPublicationsDocument, options);
}
exports.useListRecentPublicationsQuery = useListRecentPublicationsQuery;
function useListRecentPublicationsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListRecentPublicationsDocument, options);
}
exports.useListRecentPublicationsLazyQuery = useListRecentPublicationsLazyQuery;
exports.ListPublicationsWithGeneDocument = (0, client_1.gql) `
    query ListPublicationsWithGene($gene: String!) {
  listPublicationsWithGene(gene: $gene) {
    related_genes {
      id
      name
    }
    id
    doi
    title
    journal
    pub_date
    volume
    pages
    pub_type
    source
    issue
    authors {
      last_name
      rank
    }
  }
}
    `;
/**
 * __useListPublicationsWithGeneQuery__
 *
 * To run a query within a React component, call `useListPublicationsWithGeneQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPublicationsWithGeneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPublicationsWithGeneQuery({
 *   variables: {
 *      gene: // value for 'gene'
 *   },
 * });
 */
function useListPublicationsWithGeneQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListPublicationsWithGeneDocument, options);
}
exports.useListPublicationsWithGeneQuery = useListPublicationsWithGeneQuery;
function useListPublicationsWithGeneLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListPublicationsWithGeneDocument, options);
}
exports.useListPublicationsWithGeneLazyQuery = useListPublicationsWithGeneLazyQuery;
exports.StrainListDocument = (0, client_1.gql) `
    query StrainList($cursor: Int!, $limit: Int!, $filter: StrainListFilter) {
  listStrains(cursor: $cursor, limit: $limit, filter: $filter) {
    nextCursor
    totalCount
    strains {
      id
      label
      summary
      in_stock
    }
  }
}
    `;
/**
 * __useStrainListQuery__
 *
 * To run a query within a React component, call `useStrainListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStrainListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStrainListQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      filter: // value for 'filter'
 *   },
 * });
 */
function useStrainListQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.StrainListDocument, options);
}
exports.useStrainListQuery = useStrainListQuery;
function useStrainListLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.StrainListDocument, options);
}
exports.useStrainListLazyQuery = useStrainListLazyQuery;
exports.ListStrainsWithPhenotypeDocument = (0, client_1.gql) `
    query ListStrainsWithPhenotype($cursor: Int!, $limit: Int!, $type: String!, $annotation: String!) {
  listStrainsWithAnnotation(
    cursor: $cursor
    limit: $limit
    type: $type
    annotation: $annotation
  ) {
    totalCount
    nextCursor
    strains {
      id
      label
      genes {
        name
      }
      publications {
        id
        pub_date
        title
        journal
        volume
        pages
        authors {
          last_name
        }
      }
    }
  }
}
    `;
/**
 * __useListStrainsWithPhenotypeQuery__
 *
 * To run a query within a React component, call `useListStrainsWithPhenotypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStrainsWithPhenotypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStrainsWithPhenotypeQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      type: // value for 'type'
 *      annotation: // value for 'annotation'
 *   },
 * });
 */
function useListStrainsWithPhenotypeQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListStrainsWithPhenotypeDocument, options);
}
exports.useListStrainsWithPhenotypeQuery = useListStrainsWithPhenotypeQuery;
function useListStrainsWithPhenotypeLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListStrainsWithPhenotypeDocument, options);
}
exports.useListStrainsWithPhenotypeLazyQuery = useListStrainsWithPhenotypeLazyQuery;
exports.ListBacterialStrainsDocument = (0, client_1.gql) `
    query ListBacterialStrains {
  bacterialFoodSource: listStrainsWithAnnotation(
    cursor: 0
    limit: 100
    type: "characteristic"
    annotation: "bacterial food source"
  ) {
    totalCount
    nextCursor
    strains {
      id
      label
      summary
      in_stock
    }
  }
  symbioticFarmerBacterium: listStrainsWithAnnotation(
    cursor: 0
    limit: 100
    type: "characteristic"
    annotation: "symbiotic farmer bacterium"
  ) {
    totalCount
    nextCursor
    strains {
      id
      label
      summary
      in_stock
    }
  }
}
    `;
/**
 * __useListBacterialStrainsQuery__
 *
 * To run a query within a React component, call `useListBacterialStrainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBacterialStrainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBacterialStrainsQuery({
 *   variables: {
 *   },
 * });
 */
function useListBacterialStrainsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListBacterialStrainsDocument, options);
}
exports.useListBacterialStrainsQuery = useListBacterialStrainsQuery;
function useListBacterialStrainsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListBacterialStrainsDocument, options);
}
exports.useListBacterialStrainsLazyQuery = useListBacterialStrainsLazyQuery;
exports.ListStrainsInventoryDocument = (0, client_1.gql) `
    query ListStrainsInventory($cursor: Int!, $limit: Int!) {
  listStrainsWithAnnotation(
    cursor: $cursor
    limit: $limit
    type: "strain_inventory"
    annotation: "strain_inventory"
  ) {
    totalCount
    nextCursor
    strains {
      id
      label
      summary
      in_stock
    }
  }
}
    `;
/**
 * __useListStrainsInventoryQuery__
 *
 * To run a query within a React component, call `useListStrainsInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStrainsInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStrainsInventoryQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
function useListStrainsInventoryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListStrainsInventoryDocument, options);
}
exports.useListStrainsInventoryQuery = useListStrainsInventoryQuery;
function useListStrainsInventoryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListStrainsInventoryDocument, options);
}
exports.useListStrainsInventoryLazyQuery = useListStrainsInventoryLazyQuery;
exports.ListPlasmidsInventoryDocument = (0, client_1.gql) `
    query ListPlasmidsInventory($cursor: Int!, $limit: Int!) {
  listPlasmidsWithAnnotation(
    cursor: $cursor
    limit: $limit
    type: "plasmid_inventory"
    annotation: "plasmid inventory"
  ) {
    totalCount
    nextCursor
    plasmids {
      id
      name
      summary
      in_stock
    }
  }
}
    `;
/**
 * __useListPlasmidsInventoryQuery__
 *
 * To run a query within a React component, call `useListPlasmidsInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPlasmidsInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPlasmidsInventoryQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
function useListPlasmidsInventoryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListPlasmidsInventoryDocument, options);
}
exports.useListPlasmidsInventoryQuery = useListPlasmidsInventoryQuery;
function useListPlasmidsInventoryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListPlasmidsInventoryDocument, options);
}
exports.useListPlasmidsInventoryLazyQuery = useListPlasmidsInventoryLazyQuery;
exports.PlasmidListFilterDocument = (0, client_1.gql) `
    query PlasmidListFilter($cursor: Int!, $limit: Int!, $filter: String!) {
  listPlasmids(cursor: $cursor, limit: $limit, filter: $filter) {
    nextCursor
    totalCount
    plasmids {
      id
      name
      summary
      in_stock
    }
  }
}
    `;
/**
 * __usePlasmidListFilterQuery__
 *
 * To run a query within a React component, call `usePlasmidListFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlasmidListFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlasmidListFilterQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      filter: // value for 'filter'
 *   },
 * });
 */
function usePlasmidListFilterQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.PlasmidListFilterDocument, options);
}
exports.usePlasmidListFilterQuery = usePlasmidListFilterQuery;
function usePlasmidListFilterLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.PlasmidListFilterDocument, options);
}
exports.usePlasmidListFilterLazyQuery = usePlasmidListFilterLazyQuery;
exports.PlasmidDocument = (0, client_1.gql) `
    query Plasmid($id: ID!) {
  plasmid(id: $id) {
    id
    name
    summary
    depositor {
      first_name
      last_name
    }
    publications {
      id
      pub_date
      title
      journal
      volume
      pages
      doi
      authors {
        last_name
      }
    }
    dbxrefs
    genes {
      name
    }
    image_map
    sequence
    keywords
    genbank_accession
    in_stock
  }
}
    `;
/**
 * __usePlasmidQuery__
 *
 * To run a query within a React component, call `usePlasmidQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlasmidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlasmidQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function usePlasmidQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.PlasmidDocument, options);
}
exports.usePlasmidQuery = usePlasmidQuery;
function usePlasmidLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.PlasmidDocument, options);
}
exports.usePlasmidLazyQuery = usePlasmidLazyQuery;
exports.StrainDocument = (0, client_1.gql) `
    query Strain($id: ID!) {
  strain(id: $id) {
    id
    label
    summary
    species
    parent {
      id
      label
    }
    depositor {
      first_name
      last_name
    }
    plasmid
    dbxrefs
    publications {
      id
      pub_date
      title
      journal
      volume
      pages
      doi
      authors {
        last_name
      }
    }
    genes {
      name
    }
    in_stock
    systematic_name
    genotypes
    mutagenesis_method
    genetic_modification
    names
    characteristics
    phenotypes {
      phenotype
      note
      assay
      environment
      publication {
        id
        pub_date
        title
        journal
        volume
        pages
        authors {
          last_name
        }
      }
    }
  }
}
    `;
/**
 * __useStrainQuery__
 *
 * To run a query within a React component, call `useStrainQuery` and pass it any options that fit your needs.
 * When your component renders, `useStrainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStrainQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useStrainQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.StrainDocument, options);
}
exports.useStrainQuery = useStrainQuery;
function useStrainLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.StrainDocument, options);
}
exports.useStrainLazyQuery = useStrainLazyQuery;
exports.ListRecentPlasmidsDocument = (0, client_1.gql) `
    query ListRecentPlasmids($limit: Int! = 4) {
  listRecentPlasmids(limit: $limit) {
    id
    created_at
    name
  }
}
    `;
/**
 * __useListRecentPlasmidsQuery__
 *
 * To run a query within a React component, call `useListRecentPlasmidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRecentPlasmidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRecentPlasmidsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
function useListRecentPlasmidsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListRecentPlasmidsDocument, options);
}
exports.useListRecentPlasmidsQuery = useListRecentPlasmidsQuery;
function useListRecentPlasmidsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListRecentPlasmidsDocument, options);
}
exports.useListRecentPlasmidsLazyQuery = useListRecentPlasmidsLazyQuery;
exports.ListRecentStrainsDocument = (0, client_1.gql) `
    query ListRecentStrains($limit: Int! = 4) {
  listRecentStrains(limit: $limit) {
    id
    created_at
    systematic_name
  }
}
    `;
/**
 * __useListRecentStrainsQuery__
 *
 * To run a query within a React component, call `useListRecentStrainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRecentStrainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRecentStrainsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
function useListRecentStrainsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListRecentStrainsDocument, options);
}
exports.useListRecentStrainsQuery = useListRecentStrainsQuery;
function useListRecentStrainsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListRecentStrainsDocument, options);
}
exports.useListRecentStrainsLazyQuery = useListRecentStrainsLazyQuery;
exports.ListPhenotypesDocument = (0, client_1.gql) `
    query ListPhenotypes($search: String!) {
  listPhenotypes(search: $search)
}
    `;
/**
 * __useListPhenotypesQuery__
 *
 * To run a query within a React component, call `useListPhenotypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPhenotypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPhenotypesQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
function useListPhenotypesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListPhenotypesDocument, options);
}
exports.useListPhenotypesQuery = useListPhenotypesQuery;
function useListPhenotypesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListPhenotypesDocument, options);
}
exports.useListPhenotypesLazyQuery = useListPhenotypesLazyQuery;
exports.ListPhenotypeEnvironmentsDocument = (0, client_1.gql) `
    query ListPhenotypeEnvironments($search: String!) {
  listPhenotypeEnvironments(search: $search)
}
    `;
/**
 * __useListPhenotypeEnvironmentsQuery__
 *
 * To run a query within a React component, call `useListPhenotypeEnvironmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPhenotypeEnvironmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPhenotypeEnvironmentsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
function useListPhenotypeEnvironmentsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListPhenotypeEnvironmentsDocument, options);
}
exports.useListPhenotypeEnvironmentsQuery = useListPhenotypeEnvironmentsQuery;
function useListPhenotypeEnvironmentsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListPhenotypeEnvironmentsDocument, options);
}
exports.useListPhenotypeEnvironmentsLazyQuery = useListPhenotypeEnvironmentsLazyQuery;
exports.ListPhenotypeAssaysDocument = (0, client_1.gql) `
    query ListPhenotypeAssays($search: String!) {
  listPhenotypeAssays(search: $search)
}
    `;
/**
 * __useListPhenotypeAssaysQuery__
 *
 * To run a query within a React component, call `useListPhenotypeAssaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPhenotypeAssaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPhenotypeAssaysQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
function useListPhenotypeAssaysQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ListPhenotypeAssaysDocument, options);
}
exports.useListPhenotypeAssaysQuery = useListPhenotypeAssaysQuery;
function useListPhenotypeAssaysLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ListPhenotypeAssaysDocument, options);
}
exports.useListPhenotypeAssaysLazyQuery = useListPhenotypeAssaysLazyQuery;
exports.UserByEmailDocument = (0, client_1.gql) `
    query UserByEmail($email: String!) {
  userByEmail(email: $email) {
    id
  }
}
    `;
/**
 * __useUserByEmailQuery__
 *
 * To run a query within a React component, call `useUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
function useUserByEmailQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.UserByEmailDocument, options);
}
exports.useUserByEmailQuery = useUserByEmailQuery;
function useUserByEmailLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.UserByEmailDocument, options);
}
exports.useUserByEmailLazyQuery = useUserByEmailLazyQuery;
