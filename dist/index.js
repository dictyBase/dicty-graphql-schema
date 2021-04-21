"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.PlasmidListFilterDocument = exports.useListPlasmidsInventoryLazyQuery = exports.useListPlasmidsInventoryQuery = exports.ListPlasmidsInventoryDocument = exports.useListStrainsInventoryLazyQuery = exports.useListStrainsInventoryQuery = exports.ListStrainsInventoryDocument = exports.useListBacterialStrainsLazyQuery = exports.useListBacterialStrainsQuery = exports.ListBacterialStrainsDocument = exports.useListStrainsWithPhenotypeLazyQuery = exports.useListStrainsWithPhenotypeQuery = exports.ListStrainsWithPhenotypeDocument = exports.useStrainListLazyQuery = exports.useStrainListQuery = exports.StrainListDocument = exports.useStockListLazyQuery = exports.useStockListQuery = exports.StockListDocument = exports.useGeneLazyQuery = exports.useGeneQuery = exports.GeneDocument = exports.useListOrganismsLazyQuery = exports.useListOrganismsQuery = exports.ListOrganismsDocument = exports.useContentLazyQuery = exports.useContentQuery = exports.ContentDocument = exports.useContentBySlugLazyQuery = exports.useContentBySlugQuery = exports.ContentBySlugDocument = exports.useGetRefreshTokenLazyQuery = exports.useGetRefreshTokenQuery = exports.GetRefreshTokenDocument = exports.useUpdateUserMutation = exports.UpdateUserDocument = exports.useCreateUserMutation = exports.CreateUserDocument = exports.useCreateOrderMutation = exports.CreateOrderDocument = exports.useUpdateContentMutation = exports.UpdateContentDocument = exports.useCreateContentMutation = exports.CreateContentDocument = exports.useLogoutMutation = exports.LogoutDocument = exports.useLoginMutation = exports.LoginDocument = exports.StrainTypeEnum = exports.StatusEnum = void 0;
exports.useUserByEmailLazyQuery = exports.useUserByEmailQuery = exports.UserByEmailDocument = exports.useStrainLazyQuery = exports.useStrainQuery = exports.StrainDocument = exports.usePlasmidLazyQuery = exports.usePlasmidQuery = exports.PlasmidDocument = exports.usePlasmidListFilterLazyQuery = exports.usePlasmidListFilterQuery = void 0;
var client_1 = require("@apollo/client");
var Apollo = __importStar(require("@apollo/client"));
var defaultOptions = {};
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["InPreparation"] = "IN_PREPARATION";
    StatusEnum["Growing"] = "GROWING";
    StatusEnum["Cancelled"] = "CANCELLED";
    StatusEnum["Shipped"] = "SHIPPED";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
var StrainTypeEnum;
(function (StrainTypeEnum) {
    StrainTypeEnum["All"] = "ALL";
    StrainTypeEnum["Regular"] = "REGULAR";
    StrainTypeEnum["Gwdi"] = "GWDI";
    StrainTypeEnum["Bacterial"] = "BACTERIAL";
})(StrainTypeEnum = exports.StrainTypeEnum || (exports.StrainTypeEnum = {}));
exports.LoginDocument = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    token\n    user {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n    identity {\n      provider\n    }\n  }\n}\n    "], ["\n    mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    token\n    user {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n    identity {\n      provider\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.LoginDocument, options);
}
exports.useLoginMutation = useLoginMutation;
exports.LogoutDocument = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation Logout {\n  logout {\n    success\n  }\n}\n    "], ["\n    mutation Logout {\n  logout {\n    success\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.LogoutDocument, options);
}
exports.useLogoutMutation = useLogoutMutation;
exports.CreateContentDocument = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation CreateContent($input: CreateContentInput!) {\n  createContent(input: $input) {\n    name\n    created_by {\n      id\n    }\n    content\n    namespace\n  }\n}\n    "], ["\n    mutation CreateContent($input: CreateContentInput!) {\n  createContent(input: $input) {\n    name\n    created_by {\n      id\n    }\n    content\n    namespace\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.CreateContentDocument, options);
}
exports.useCreateContentMutation = useCreateContentMutation;
exports.UpdateContentDocument = client_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    mutation UpdateContent($input: UpdateContentInput!) {\n  updateContent(input: $input) {\n    id\n    updated_by {\n      id\n    }\n    content\n  }\n}\n    "], ["\n    mutation UpdateContent($input: UpdateContentInput!) {\n  updateContent(input: $input) {\n    id\n    updated_by {\n      id\n    }\n    content\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.UpdateContentDocument, options);
}
exports.useUpdateContentMutation = useUpdateContentMutation;
exports.CreateOrderDocument = client_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation CreateOrder($input: CreateOrderInput!) {\n  createOrder(input: $input) {\n    id\n  }\n}\n    "], ["\n    mutation CreateOrder($input: CreateOrderInput!) {\n  createOrder(input: $input) {\n    id\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.CreateOrderDocument, options);
}
exports.useCreateOrderMutation = useCreateOrderMutation;
exports.CreateUserDocument = client_1.gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    mutation CreateUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    id\n  }\n}\n    "], ["\n    mutation CreateUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    id\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.CreateUserDocument, options);
}
exports.useCreateUserMutation = useCreateUserMutation;
exports.UpdateUserDocument = client_1.gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {\n  updateUser(id: $id, input: $input) {\n    id\n  }\n}\n    "], ["\n    mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {\n  updateUser(id: $id, input: $input) {\n    id\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.UpdateUserDocument, options);
}
exports.useUpdateUserMutation = useUpdateUserMutation;
exports.GetRefreshTokenDocument = client_1.gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    query GetRefreshToken($token: String!) {\n  getRefreshToken(token: $token) {\n    token\n    user {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n    identity {\n      provider\n    }\n  }\n}\n    "], ["\n    query GetRefreshToken($token: String!) {\n  getRefreshToken(token: $token) {\n    token\n    user {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n    identity {\n      provider\n    }\n  }\n}\n    "])));
/**
 * __useGetRefreshTokenQuery__
 *
 * To run a query within a React component, call `useGetRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRefreshTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
function useGetRefreshTokenQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetRefreshTokenDocument, options);
}
exports.useGetRefreshTokenQuery = useGetRefreshTokenQuery;
function useGetRefreshTokenLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetRefreshTokenDocument, options);
}
exports.useGetRefreshTokenLazyQuery = useGetRefreshTokenLazyQuery;
exports.ContentBySlugDocument = client_1.gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    query contentBySlug($slug: String!) {\n  contentBySlug(slug: $slug) {\n    id\n    content\n    name\n    slug\n    updated_at\n    updated_by {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query contentBySlug($slug: String!) {\n  contentBySlug(slug: $slug) {\n    id\n    content\n    name\n    slug\n    updated_at\n    updated_by {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ContentBySlugDocument, options);
}
exports.useContentBySlugQuery = useContentBySlugQuery;
function useContentBySlugLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ContentBySlugDocument, options);
}
exports.useContentBySlugLazyQuery = useContentBySlugLazyQuery;
exports.ContentDocument = client_1.gql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    query content($id: ID!) {\n  content(id: $id) {\n    id\n    content\n    name\n    slug\n    namespace\n    updated_at\n    updated_by {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query content($id: ID!) {\n  content(id: $id) {\n    id\n    content\n    name\n    slug\n    namespace\n    updated_at\n    updated_by {\n      id\n      email\n      first_name\n      last_name\n      roles {\n        role\n        permissions {\n          permission\n          resource\n        }\n      }\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ContentDocument, options);
}
exports.useContentQuery = useContentQuery;
function useContentLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ContentDocument, options);
}
exports.useContentLazyQuery = useContentLazyQuery;
exports.ListOrganismsDocument = client_1.gql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    query ListOrganisms {\n  listOrganisms {\n    taxon_id\n    scientific_name\n    citations {\n      title\n      authors\n      pubmed_id\n      journal\n    }\n    downloads {\n      title\n      items {\n        title\n        url\n      }\n    }\n  }\n}\n    "], ["\n    query ListOrganisms {\n  listOrganisms {\n    taxon_id\n    scientific_name\n    citations {\n      title\n      authors\n      pubmed_id\n      journal\n    }\n    downloads {\n      title\n      items {\n        title\n        url\n      }\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ListOrganismsDocument, options);
}
exports.useListOrganismsQuery = useListOrganismsQuery;
function useListOrganismsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ListOrganismsDocument, options);
}
exports.useListOrganismsLazyQuery = useListOrganismsLazyQuery;
exports.GeneDocument = client_1.gql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    query Gene($gene: String!) {\n  gene(gene: $gene) {\n    id\n    name\n    goas {\n      id\n      type\n      date\n      evidence_code\n      go_term\n      qualifier\n      publication\n      assigned_by\n      with {\n        id\n        db\n        name\n      }\n      extensions {\n        id\n        db\n        relation\n        name\n      }\n    }\n  }\n}\n    "], ["\n    query Gene($gene: String!) {\n  gene(gene: $gene) {\n    id\n    name\n    goas {\n      id\n      type\n      date\n      evidence_code\n      go_term\n      qualifier\n      publication\n      assigned_by\n      with {\n        id\n        db\n        name\n      }\n      extensions {\n        id\n        db\n        relation\n        name\n      }\n    }\n  }\n}\n    "])));
/**
 * __useGeneQuery__
 *
 * To run a query within a React component, call `useGeneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeneQuery({
 *   variables: {
 *      gene: // value for 'gene'
 *   },
 * });
 */
function useGeneQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GeneDocument, options);
}
exports.useGeneQuery = useGeneQuery;
function useGeneLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GeneDocument, options);
}
exports.useGeneLazyQuery = useGeneLazyQuery;
exports.StockListDocument = client_1.gql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    query StockList($limit: Int!) {\n  listPlasmids(limit: $limit) {\n    totalCount\n  }\n  listStrains(limit: $limit) {\n    totalCount\n  }\n}\n    "], ["\n    query StockList($limit: Int!) {\n  listPlasmids(limit: $limit) {\n    totalCount\n  }\n  listStrains(limit: $limit) {\n    totalCount\n  }\n}\n    "])));
/**
 * __useStockListQuery__
 *
 * To run a query within a React component, call `useStockListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
function useStockListQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.StockListDocument, options);
}
exports.useStockListQuery = useStockListQuery;
function useStockListLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.StockListDocument, options);
}
exports.useStockListLazyQuery = useStockListLazyQuery;
exports.StrainListDocument = client_1.gql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    query StrainList($cursor: Int!, $limit: Int!, $filter: StrainListFilter) {\n  listStrains(cursor: $cursor, limit: $limit, filter: $filter) {\n    nextCursor\n    totalCount\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n}\n    "], ["\n    query StrainList($cursor: Int!, $limit: Int!, $filter: StrainListFilter) {\n  listStrains(cursor: $cursor, limit: $limit, filter: $filter) {\n    nextCursor\n    totalCount\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.StrainListDocument, options);
}
exports.useStrainListQuery = useStrainListQuery;
function useStrainListLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.StrainListDocument, options);
}
exports.useStrainListLazyQuery = useStrainListLazyQuery;
exports.ListStrainsWithPhenotypeDocument = client_1.gql(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    query ListStrainsWithPhenotype($cursor: Int!, $limit: Int!, $type: String!, $annotation: String!) {\n  listStrainsWithAnnotation(\n    cursor: $cursor\n    limit: $limit\n    type: $type\n    annotation: $annotation\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      genes {\n        name\n      }\n      publications {\n        id\n        pub_date\n        title\n        journal\n        volume\n        pages\n        authors {\n          last_name\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query ListStrainsWithPhenotype($cursor: Int!, $limit: Int!, $type: String!, $annotation: String!) {\n  listStrainsWithAnnotation(\n    cursor: $cursor\n    limit: $limit\n    type: $type\n    annotation: $annotation\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      genes {\n        name\n      }\n      publications {\n        id\n        pub_date\n        title\n        journal\n        volume\n        pages\n        authors {\n          last_name\n        }\n      }\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ListStrainsWithPhenotypeDocument, options);
}
exports.useListStrainsWithPhenotypeQuery = useListStrainsWithPhenotypeQuery;
function useListStrainsWithPhenotypeLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ListStrainsWithPhenotypeDocument, options);
}
exports.useListStrainsWithPhenotypeLazyQuery = useListStrainsWithPhenotypeLazyQuery;
exports.ListBacterialStrainsDocument = client_1.gql(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    query ListBacterialStrains {\n  bacterialFoodSource: listStrainsWithAnnotation(\n    cursor: 0\n    limit: 100\n    type: \"characteristic\"\n    annotation: \"bacterial food source\"\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n  symbioticFarmerBacterium: listStrainsWithAnnotation(\n    cursor: 0\n    limit: 100\n    type: \"characteristic\"\n    annotation: \"symbiotic farmer bacterium\"\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n}\n    "], ["\n    query ListBacterialStrains {\n  bacterialFoodSource: listStrainsWithAnnotation(\n    cursor: 0\n    limit: 100\n    type: \"characteristic\"\n    annotation: \"bacterial food source\"\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n  symbioticFarmerBacterium: listStrainsWithAnnotation(\n    cursor: 0\n    limit: 100\n    type: \"characteristic\"\n    annotation: \"symbiotic farmer bacterium\"\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ListBacterialStrainsDocument, options);
}
exports.useListBacterialStrainsQuery = useListBacterialStrainsQuery;
function useListBacterialStrainsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ListBacterialStrainsDocument, options);
}
exports.useListBacterialStrainsLazyQuery = useListBacterialStrainsLazyQuery;
exports.ListStrainsInventoryDocument = client_1.gql(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    query ListStrainsInventory($cursor: Int!, $limit: Int!) {\n  listStrainsWithAnnotation(\n    cursor: $cursor\n    limit: $limit\n    type: \"strain_inventory\"\n    annotation: \"strain_inventory\"\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n}\n    "], ["\n    query ListStrainsInventory($cursor: Int!, $limit: Int!) {\n  listStrainsWithAnnotation(\n    cursor: $cursor\n    limit: $limit\n    type: \"strain_inventory\"\n    annotation: \"strain_inventory\"\n  ) {\n    totalCount\n    nextCursor\n    strains {\n      id\n      label\n      summary\n      in_stock\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ListStrainsInventoryDocument, options);
}
exports.useListStrainsInventoryQuery = useListStrainsInventoryQuery;
function useListStrainsInventoryLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ListStrainsInventoryDocument, options);
}
exports.useListStrainsInventoryLazyQuery = useListStrainsInventoryLazyQuery;
exports.ListPlasmidsInventoryDocument = client_1.gql(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    query ListPlasmidsInventory($cursor: Int!, $limit: Int!) {\n  listPlasmidsWithAnnotation(\n    cursor: $cursor\n    limit: $limit\n    type: \"plasmid_inventory\"\n    annotation: \"plasmid inventory\"\n  ) {\n    totalCount\n    nextCursor\n    plasmids {\n      id\n      name\n      summary\n      in_stock\n    }\n  }\n}\n    "], ["\n    query ListPlasmidsInventory($cursor: Int!, $limit: Int!) {\n  listPlasmidsWithAnnotation(\n    cursor: $cursor\n    limit: $limit\n    type: \"plasmid_inventory\"\n    annotation: \"plasmid inventory\"\n  ) {\n    totalCount\n    nextCursor\n    plasmids {\n      id\n      name\n      summary\n      in_stock\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ListPlasmidsInventoryDocument, options);
}
exports.useListPlasmidsInventoryQuery = useListPlasmidsInventoryQuery;
function useListPlasmidsInventoryLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ListPlasmidsInventoryDocument, options);
}
exports.useListPlasmidsInventoryLazyQuery = useListPlasmidsInventoryLazyQuery;
exports.PlasmidListFilterDocument = client_1.gql(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    query PlasmidListFilter($cursor: Int!, $limit: Int!, $filter: String!) {\n  listPlasmids(cursor: $cursor, limit: $limit, filter: $filter) {\n    nextCursor\n    totalCount\n    plasmids {\n      id\n      name\n      summary\n      in_stock\n    }\n  }\n}\n    "], ["\n    query PlasmidListFilter($cursor: Int!, $limit: Int!, $filter: String!) {\n  listPlasmids(cursor: $cursor, limit: $limit, filter: $filter) {\n    nextCursor\n    totalCount\n    plasmids {\n      id\n      name\n      summary\n      in_stock\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.PlasmidListFilterDocument, options);
}
exports.usePlasmidListFilterQuery = usePlasmidListFilterQuery;
function usePlasmidListFilterLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.PlasmidListFilterDocument, options);
}
exports.usePlasmidListFilterLazyQuery = usePlasmidListFilterLazyQuery;
exports.PlasmidDocument = client_1.gql(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n    query Plasmid($id: ID!) {\n  plasmid(id: $id) {\n    id\n    name\n    summary\n    depositor {\n      first_name\n      last_name\n    }\n    publications {\n      id\n      pub_date\n      title\n      journal\n      volume\n      pages\n      doi\n      authors {\n        last_name\n      }\n    }\n    dbxrefs\n    genes {\n      name\n    }\n    image_map\n    sequence\n    keywords\n    genbank_accession\n    in_stock\n  }\n}\n    "], ["\n    query Plasmid($id: ID!) {\n  plasmid(id: $id) {\n    id\n    name\n    summary\n    depositor {\n      first_name\n      last_name\n    }\n    publications {\n      id\n      pub_date\n      title\n      journal\n      volume\n      pages\n      doi\n      authors {\n        last_name\n      }\n    }\n    dbxrefs\n    genes {\n      name\n    }\n    image_map\n    sequence\n    keywords\n    genbank_accession\n    in_stock\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.PlasmidDocument, options);
}
exports.usePlasmidQuery = usePlasmidQuery;
function usePlasmidLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.PlasmidDocument, options);
}
exports.usePlasmidLazyQuery = usePlasmidLazyQuery;
exports.StrainDocument = client_1.gql(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    query Strain($id: ID!) {\n  strain(id: $id) {\n    id\n    label\n    summary\n    species\n    parent {\n      id\n      label\n    }\n    depositor {\n      first_name\n      last_name\n    }\n    plasmid\n    dbxrefs\n    publications {\n      id\n      pub_date\n      title\n      journal\n      volume\n      pages\n      doi\n      authors {\n        last_name\n      }\n    }\n    genes {\n      name\n    }\n    in_stock\n    systematic_name\n    genotypes\n    mutagenesis_method\n    genetic_modification\n    names\n    characteristics\n    phenotypes {\n      phenotype\n      note\n      assay\n      environment\n      publication {\n        id\n        pub_date\n        title\n        journal\n        volume\n        pages\n        authors {\n          last_name\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query Strain($id: ID!) {\n  strain(id: $id) {\n    id\n    label\n    summary\n    species\n    parent {\n      id\n      label\n    }\n    depositor {\n      first_name\n      last_name\n    }\n    plasmid\n    dbxrefs\n    publications {\n      id\n      pub_date\n      title\n      journal\n      volume\n      pages\n      doi\n      authors {\n        last_name\n      }\n    }\n    genes {\n      name\n    }\n    in_stock\n    systematic_name\n    genotypes\n    mutagenesis_method\n    genetic_modification\n    names\n    characteristics\n    phenotypes {\n      phenotype\n      note\n      assay\n      environment\n      publication {\n        id\n        pub_date\n        title\n        journal\n        volume\n        pages\n        authors {\n          last_name\n        }\n      }\n    }\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.StrainDocument, options);
}
exports.useStrainQuery = useStrainQuery;
function useStrainLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.StrainDocument, options);
}
exports.useStrainLazyQuery = useStrainLazyQuery;
exports.UserByEmailDocument = client_1.gql(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    query UserByEmail($email: String!) {\n  userByEmail(email: $email) {\n    id\n  }\n}\n    "], ["\n    query UserByEmail($email: String!) {\n  userByEmail(email: $email) {\n    id\n  }\n}\n    "])));
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
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.UserByEmailDocument, options);
}
exports.useUserByEmailQuery = useUserByEmailQuery;
function useUserByEmailLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.UserByEmailDocument, options);
}
exports.useUserByEmailLazyQuery = useUserByEmailLazyQuery;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;
