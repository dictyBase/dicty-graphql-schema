import { graphql } from 'msw'
export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id: string, email: string, first_name: string, last_name: string, roles?: Array<{ __typename?: 'Role', role: string, permissions?: Array<{ __typename?: 'Permission', permission: string, resource?: string | null }> | null }> | null }, identity: { __typename?: 'Identity', provider: string } } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'Logout', success: boolean } | null };

export type CreateContentMutationVariables = Exact<{
  input: CreateContentInput;
}>;


export type CreateContentMutation = { __typename?: 'Mutation', createContent?: { __typename?: 'Content', name: string, content: string, namespace: string, created_by: { __typename?: 'User', id: string } } | null };

export type UpdateContentMutationVariables = Exact<{
  input: UpdateContentInput;
}>;


export type UpdateContentMutation = { __typename?: 'Mutation', updateContent?: { __typename?: 'Content', id: string, content: string, updated_by: { __typename?: 'User', id: string } } | null };

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'Order', id: string } | null };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'ImageFile', url: string } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type ContentBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ContentBySlugQuery = { __typename?: 'Query', contentBySlug?: { __typename?: 'Content', id: string, content: string, name: string, slug: string, created_at: any, updated_at: any, created_by: { __typename?: 'User', id: string, email: string, first_name: string, last_name: string }, updated_by: { __typename?: 'User', id: string, email: string, first_name: string, last_name: string } } | null };

export type ContentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ContentQuery = { __typename?: 'Query', content?: { __typename?: 'Content', id: string, content: string, name: string, slug: string, namespace: string, created_at: any, updated_at: any, created_by: { __typename?: 'User', id: string, email: string, first_name: string, last_name: string }, updated_by: { __typename?: 'User', id: string, email: string, first_name: string, last_name: string } } | null };

export type ListOrganismsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListOrganismsQuery = { __typename?: 'Query', listOrganisms?: Array<{ __typename?: 'Organism', taxon_id: string, scientific_name: string, citations: Array<{ __typename?: 'Citation', title: string, authors: string, pubmed_id: string, journal: string }>, downloads: Array<{ __typename?: 'Download', title: string, items: Array<{ __typename?: 'DownloadItem', title: string, url: string }> }> }> | null };

export type GeneOntologyAnnotationQueryVariables = Exact<{
  gene: Scalars['String']['input'];
}>;


export type GeneOntologyAnnotationQuery = { __typename?: 'Query', geneOntologyAnnotation?: Array<{ __typename?: 'GOAnnotation', id: string, type: string, date: string, evidence_code: string, qualifier: string, publication: string, assigned_by: string, with?: Array<{ __typename?: 'With', id: string, db: string, name: string }> | null, extensions?: Array<{ __typename?: 'Extension', id: string, db: string, relation: string, name: string }> | null }> | null };

export type ListRecentGenesQueryVariables = Exact<{
  limit?: Scalars['Int']['input'];
}>;


export type ListRecentGenesQuery = { __typename?: 'Query', listRecentGenes?: Array<{ __typename?: 'Gene', id: string, name: string }> | null };

export type PublicationQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, doi?: string | null, title: string, abstract: string, journal: string, pub_date?: any | null, pages?: string | null, issue?: string | null, volume?: string | null, authors: Array<{ __typename?: 'Author', initials?: string | null, last_name: string }> } | null };

export type ListRecentPublicationsQueryVariables = Exact<{
  limit?: Scalars['Int']['input'];
}>;


export type ListRecentPublicationsQuery = { __typename?: 'Query', listRecentPublications?: Array<{ __typename?: 'Publication', id: string, doi?: string | null, title: string, abstract: string, journal: string, pub_date?: any | null, pages?: string | null, issue?: string | null, volume?: string | null, authors: Array<{ __typename?: 'Author', initials?: string | null, last_name: string }> }> | null };

export type StrainListQueryVariables = Exact<{
  cursor: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  filter?: InputMaybe<StrainListFilter>;
}>;


export type StrainListQuery = { __typename?: 'Query', listStrains?: { __typename?: 'StrainListWithCursor', nextCursor: number, totalCount: number, strains: Array<{ __typename?: 'Strain', id: string, label: string, summary?: string | null, in_stock: boolean }> } | null };

export type ListStrainsWithPhenotypeQueryVariables = Exact<{
  cursor: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  type: Scalars['String']['input'];
  annotation: Scalars['String']['input'];
}>;


export type ListStrainsWithPhenotypeQuery = { __typename?: 'Query', listStrainsWithAnnotation?: { __typename?: 'StrainListWithCursor', totalCount: number, nextCursor: number, strains: Array<{ __typename?: 'Strain', id: string, label: string, genes?: Array<{ __typename?: 'Gene', name: string }> | null, publications?: Array<{ __typename?: 'Publication', id: string, pub_date?: any | null, title: string, journal: string, volume?: string | null, pages?: string | null, authors: Array<{ __typename?: 'Author', last_name: string }> }> | null }> } | null };

export type ListBacterialStrainsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBacterialStrainsQuery = { __typename?: 'Query', bacterialFoodSource?: { __typename?: 'StrainListWithCursor', totalCount: number, nextCursor: number, strains: Array<{ __typename?: 'Strain', id: string, label: string, summary?: string | null, in_stock: boolean }> } | null, symbioticFarmerBacterium?: { __typename?: 'StrainListWithCursor', totalCount: number, nextCursor: number, strains: Array<{ __typename?: 'Strain', id: string, label: string, summary?: string | null, in_stock: boolean }> } | null };

export type ListStrainsInventoryQueryVariables = Exact<{
  cursor: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type ListStrainsInventoryQuery = { __typename?: 'Query', listStrainsWithAnnotation?: { __typename?: 'StrainListWithCursor', totalCount: number, nextCursor: number, strains: Array<{ __typename?: 'Strain', id: string, label: string, summary?: string | null, in_stock: boolean }> } | null };

export type ListPlasmidsInventoryQueryVariables = Exact<{
  cursor: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type ListPlasmidsInventoryQuery = { __typename?: 'Query', listPlasmidsWithAnnotation?: { __typename?: 'PlasmidListWithCursor', totalCount: number, nextCursor: number, plasmids: Array<{ __typename?: 'Plasmid', id: string, name: string, summary?: string | null, in_stock: boolean }> } | null };

export type PlasmidListFilterQueryVariables = Exact<{
  cursor: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  filter: Scalars['String']['input'];
}>;


export type PlasmidListFilterQuery = { __typename?: 'Query', listPlasmids?: { __typename?: 'PlasmidListWithCursor', nextCursor: number, totalCount: number, plasmids: Array<{ __typename?: 'Plasmid', id: string, name: string, summary?: string | null, in_stock: boolean }> } | null };

export type PlasmidQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PlasmidQuery = { __typename?: 'Query', plasmid?: { __typename?: 'Plasmid', id: string, name: string, summary?: string | null, dbxrefs?: Array<string> | null, image_map?: string | null, sequence?: string | null, keywords?: Array<string> | null, genbank_accession?: string | null, in_stock: boolean, depositor: { __typename?: 'User', first_name: string, last_name: string }, publications?: Array<{ __typename?: 'Publication', id: string, pub_date?: any | null, title: string, journal: string, volume?: string | null, pages?: string | null, doi?: string | null, authors: Array<{ __typename?: 'Author', last_name: string }> }> | null, genes?: Array<{ __typename?: 'Gene', name: string }> | null } | null };

export type StrainQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StrainQuery = { __typename?: 'Query', strain?: { __typename?: 'Strain', id: string, label: string, summary?: string | null, species: string, plasmid?: string | null, dbxrefs?: Array<string> | null, in_stock: boolean, systematic_name: string, genotypes?: Array<string> | null, mutagenesis_method?: string | null, genetic_modification?: string | null, names?: Array<string> | null, characteristics?: Array<string> | null, parent?: { __typename?: 'Strain', id: string, label: string } | null, depositor: { __typename?: 'User', first_name: string, last_name: string }, publications?: Array<{ __typename?: 'Publication', id: string, pub_date?: any | null, title: string, journal: string, volume?: string | null, pages?: string | null, doi?: string | null, authors: Array<{ __typename?: 'Author', last_name: string }> }> | null, genes?: Array<{ __typename?: 'Gene', name: string }> | null, phenotypes?: Array<{ __typename?: 'Phenotype', phenotype: string, note?: string | null, assay?: string | null, environment?: string | null, publication?: { __typename?: 'Publication', id: string, pub_date?: any | null, title: string, journal: string, volume?: string | null, pages?: string | null, authors: Array<{ __typename?: 'Author', last_name: string }> } | null }> | null } | null };

export type ListRecentPlasmidsQueryVariables = Exact<{
  limit?: Scalars['Int']['input'];
}>;


export type ListRecentPlasmidsQuery = { __typename?: 'Query', listRecentPlasmids?: Array<{ __typename?: 'Plasmid', id: string, created_at: any, name: string }> | null };

export type ListRecentStrainsQueryVariables = Exact<{
  limit?: Scalars['Int']['input'];
}>;


export type ListRecentStrainsQuery = { __typename?: 'Query', listRecentStrains?: Array<{ __typename?: 'Strain', id: string, created_at: any, systematic_name: string }> | null };

export type UserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type UserByEmailQuery = { __typename?: 'Query', userByEmail?: { __typename?: 'User', id: string } | null };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockLoginMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ login })
 *   )
 * })
 */
export const mockLoginMutation = (resolver: Parameters<typeof graphql.mutation<LoginMutation, LoginMutationVariables>>[1]) =>
  graphql.mutation<LoginMutation, LoginMutationVariables>(
    'Login',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockLogoutMutation((req, res, ctx) => {
 *   return res(
 *     ctx.data({ logout })
 *   )
 * })
 */
export const mockLogoutMutation = (resolver: Parameters<typeof graphql.mutation<LogoutMutation, LogoutMutationVariables>>[1]) =>
  graphql.mutation<LogoutMutation, LogoutMutationVariables>(
    'Logout',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateContentMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ createContent })
 *   )
 * })
 */
export const mockCreateContentMutation = (resolver: Parameters<typeof graphql.mutation<CreateContentMutation, CreateContentMutationVariables>>[1]) =>
  graphql.mutation<CreateContentMutation, CreateContentMutationVariables>(
    'CreateContent',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateContentMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateContent })
 *   )
 * })
 */
export const mockUpdateContentMutation = (resolver: Parameters<typeof graphql.mutation<UpdateContentMutation, UpdateContentMutationVariables>>[1]) =>
  graphql.mutation<UpdateContentMutation, UpdateContentMutationVariables>(
    'UpdateContent',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateOrderMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ createOrder })
 *   )
 * })
 */
export const mockCreateOrderMutation = (resolver: Parameters<typeof graphql.mutation<CreateOrderMutation, CreateOrderMutationVariables>>[1]) =>
  graphql.mutation<CreateOrderMutation, CreateOrderMutationVariables>(
    'CreateOrder',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUploadFileMutation((req, res, ctx) => {
 *   const { file } = req.variables;
 *   return res(
 *     ctx.data({ uploadFile })
 *   )
 * })
 */
export const mockUploadFileMutation = (resolver: Parameters<typeof graphql.mutation<UploadFileMutation, UploadFileMutationVariables>>[1]) =>
  graphql.mutation<UploadFileMutation, UploadFileMutationVariables>(
    'UploadFile',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateUserMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ createUser })
 *   )
 * })
 */
export const mockCreateUserMutation = (resolver: Parameters<typeof graphql.mutation<CreateUserMutation, CreateUserMutationVariables>>[1]) =>
  graphql.mutation<CreateUserMutation, CreateUserMutationVariables>(
    'CreateUser',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateUserMutation((req, res, ctx) => {
 *   const { id, input } = req.variables;
 *   return res(
 *     ctx.data({ updateUser })
 *   )
 * })
 */
export const mockUpdateUserMutation = (resolver: Parameters<typeof graphql.mutation<UpdateUserMutation, UpdateUserMutationVariables>>[1]) =>
  graphql.mutation<UpdateUserMutation, UpdateUserMutationVariables>(
    'UpdateUser',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockContentBySlugQuery((req, res, ctx) => {
 *   const { slug } = req.variables;
 *   return res(
 *     ctx.data({ contentBySlug })
 *   )
 * })
 */
export const mockContentBySlugQuery = (resolver: Parameters<typeof graphql.query<ContentBySlugQuery, ContentBySlugQueryVariables>>[1]) =>
  graphql.query<ContentBySlugQuery, ContentBySlugQueryVariables>(
    'ContentBySlug',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockContentQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ content })
 *   )
 * })
 */
export const mockContentQuery = (resolver: Parameters<typeof graphql.query<ContentQuery, ContentQueryVariables>>[1]) =>
  graphql.query<ContentQuery, ContentQueryVariables>(
    'Content',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListOrganismsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ listOrganisms })
 *   )
 * })
 */
export const mockListOrganismsQuery = (resolver: Parameters<typeof graphql.query<ListOrganismsQuery, ListOrganismsQueryVariables>>[1]) =>
  graphql.query<ListOrganismsQuery, ListOrganismsQueryVariables>(
    'ListOrganisms',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGeneOntologyAnnotationQuery((req, res, ctx) => {
 *   const { gene } = req.variables;
 *   return res(
 *     ctx.data({ geneOntologyAnnotation })
 *   )
 * })
 */
export const mockGeneOntologyAnnotationQuery = (resolver: Parameters<typeof graphql.query<GeneOntologyAnnotationQuery, GeneOntologyAnnotationQueryVariables>>[1]) =>
  graphql.query<GeneOntologyAnnotationQuery, GeneOntologyAnnotationQueryVariables>(
    'GeneOntologyAnnotation',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListRecentGenesQuery((req, res, ctx) => {
 *   const { limit } = req.variables;
 *   return res(
 *     ctx.data({ listRecentGenes })
 *   )
 * })
 */
export const mockListRecentGenesQuery = (resolver: Parameters<typeof graphql.query<ListRecentGenesQuery, ListRecentGenesQueryVariables>>[1]) =>
  graphql.query<ListRecentGenesQuery, ListRecentGenesQueryVariables>(
    'ListRecentGenes',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPublicationQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ publication })
 *   )
 * })
 */
export const mockPublicationQuery = (resolver: Parameters<typeof graphql.query<PublicationQuery, PublicationQueryVariables>>[1]) =>
  graphql.query<PublicationQuery, PublicationQueryVariables>(
    'Publication',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListRecentPublicationsQuery((req, res, ctx) => {
 *   const { limit } = req.variables;
 *   return res(
 *     ctx.data({ listRecentPublications })
 *   )
 * })
 */
export const mockListRecentPublicationsQuery = (resolver: Parameters<typeof graphql.query<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>>[1]) =>
  graphql.query<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>(
    'ListRecentPublications',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStrainListQuery((req, res, ctx) => {
 *   const { cursor, limit, filter } = req.variables;
 *   return res(
 *     ctx.data({ listStrains })
 *   )
 * })
 */
export const mockStrainListQuery = (resolver: Parameters<typeof graphql.query<StrainListQuery, StrainListQueryVariables>>[1]) =>
  graphql.query<StrainListQuery, StrainListQueryVariables>(
    'StrainList',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListStrainsWithPhenotypeQuery((req, res, ctx) => {
 *   const { cursor, limit, type, annotation } = req.variables;
 *   return res(
 *     ctx.data({ listStrainsWithAnnotation })
 *   )
 * })
 */
export const mockListStrainsWithPhenotypeQuery = (resolver: Parameters<typeof graphql.query<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>>[1]) =>
  graphql.query<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>(
    'ListStrainsWithPhenotype',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListBacterialStrainsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ listStrainsWithAnnotation, listStrainsWithAnnotation })
 *   )
 * })
 */
export const mockListBacterialStrainsQuery = (resolver: Parameters<typeof graphql.query<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>>[1]) =>
  graphql.query<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>(
    'ListBacterialStrains',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListStrainsInventoryQuery((req, res, ctx) => {
 *   const { cursor, limit } = req.variables;
 *   return res(
 *     ctx.data({ listStrainsWithAnnotation })
 *   )
 * })
 */
export const mockListStrainsInventoryQuery = (resolver: Parameters<typeof graphql.query<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>>[1]) =>
  graphql.query<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>(
    'ListStrainsInventory',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListPlasmidsInventoryQuery((req, res, ctx) => {
 *   const { cursor, limit } = req.variables;
 *   return res(
 *     ctx.data({ listPlasmidsWithAnnotation })
 *   )
 * })
 */
export const mockListPlasmidsInventoryQuery = (resolver: Parameters<typeof graphql.query<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>>[1]) =>
  graphql.query<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>(
    'ListPlasmidsInventory',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPlasmidListFilterQuery((req, res, ctx) => {
 *   const { cursor, limit, filter } = req.variables;
 *   return res(
 *     ctx.data({ listPlasmids })
 *   )
 * })
 */
export const mockPlasmidListFilterQuery = (resolver: Parameters<typeof graphql.query<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>>[1]) =>
  graphql.query<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>(
    'PlasmidListFilter',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPlasmidQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ plasmid })
 *   )
 * })
 */
export const mockPlasmidQuery = (resolver: Parameters<typeof graphql.query<PlasmidQuery, PlasmidQueryVariables>>[1]) =>
  graphql.query<PlasmidQuery, PlasmidQueryVariables>(
    'Plasmid',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStrainQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ strain })
 *   )
 * })
 */
export const mockStrainQuery = (resolver: Parameters<typeof graphql.query<StrainQuery, StrainQueryVariables>>[1]) =>
  graphql.query<StrainQuery, StrainQueryVariables>(
    'Strain',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListRecentPlasmidsQuery((req, res, ctx) => {
 *   const { limit } = req.variables;
 *   return res(
 *     ctx.data({ listRecentPlasmids })
 *   )
 * })
 */
export const mockListRecentPlasmidsQuery = (resolver: Parameters<typeof graphql.query<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>>[1]) =>
  graphql.query<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>(
    'ListRecentPlasmids',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListRecentStrainsQuery((req, res, ctx) => {
 *   const { limit } = req.variables;
 *   return res(
 *     ctx.data({ listRecentStrains })
 *   )
 * })
 */
export const mockListRecentStrainsQuery = (resolver: Parameters<typeof graphql.query<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>>[1]) =>
  graphql.query<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>(
    'ListRecentStrains',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUserByEmailQuery((req, res, ctx) => {
 *   const { email } = req.variables;
 *   return res(
 *     ctx.data({ userByEmail })
 *   )
 * })
 */
export const mockUserByEmailQuery = (resolver: Parameters<typeof graphql.query<UserByEmailQuery, UserByEmailQueryVariables>>[1]) =>
  graphql.query<UserByEmailQuery, UserByEmailQueryVariables>(
    'UserByEmail',
    resolver
  )
