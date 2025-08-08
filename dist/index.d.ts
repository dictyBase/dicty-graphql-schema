import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    StringSet: {
        input: Set<string>;
        output: Set<string>;
    };
    Timestamp: {
        input: string;
        output: string;
    };
    /** The `Upload` scalar type represents a multipart file upload. */
    Upload: {
        input: File;
        output: File;
    };
};
export type AddStrainPhenotypeInput = {
    assay?: InputMaybe<Scalars['String']['input']>;
    environment?: InputMaybe<Scalars['String']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    phenotype: Scalars['String']['input'];
    publication: Scalars['String']['input'];
};
export type Auth = {
    __typename?: 'Auth';
    identity: Identity;
    token: Scalars['String']['output'];
    user: User;
};
export type Author = {
    __typename?: 'Author';
    first_name?: Maybe<Scalars['String']['output']>;
    initials?: Maybe<Scalars['String']['output']>;
    last_name: Scalars['String']['output'];
    rank?: Maybe<Scalars['String']['output']>;
};
export type BasePublication = {
    abstract: Scalars['String']['output'];
    authors: Array<Author>;
    doi?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    issn?: Maybe<Scalars['String']['output']>;
    issue?: Maybe<Scalars['String']['output']>;
    journal: Scalars['String']['output'];
    pages?: Maybe<Scalars['String']['output']>;
    pub_date?: Maybe<Scalars['Timestamp']['output']>;
    pub_type: Scalars['String']['output'];
    source: Scalars['String']['output'];
    status?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
    volume?: Maybe<Scalars['String']['output']>;
};
export type Citation = {
    __typename?: 'Citation';
    authors: Scalars['String']['output'];
    journal: Scalars['String']['output'];
    pubmed_id: Scalars['String']['output'];
    title: Scalars['String']['output'];
};
export type Content = {
    __typename?: 'Content';
    content: Scalars['String']['output'];
    created_at: Scalars['Timestamp']['output'];
    created_by: User;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    namespace: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    updated_at: Scalars['Timestamp']['output'];
    updated_by: User;
};
export type CreateContentInput = {
    content: Scalars['String']['input'];
    created_by: Scalars['String']['input'];
    name: Scalars['String']['input'];
    namespace: Scalars['String']['input'];
};
export type CreateOrderInput = {
    comments?: InputMaybe<Scalars['String']['input']>;
    consumer: Scalars['String']['input'];
    courier: Scalars['String']['input'];
    courier_account: Scalars['String']['input'];
    items: Array<Scalars['String']['input']>;
    payer: Scalars['String']['input'];
    payment: Scalars['String']['input'];
    purchase_order_num?: InputMaybe<Scalars['String']['input']>;
    purchaser: Scalars['String']['input'];
    status: StatusEnum;
};
export type CreatePermissionInput = {
    description: Scalars['String']['input'];
    permission: Scalars['String']['input'];
    resource: Scalars['String']['input'];
};
export type CreatePlasmidInput = {
    created_by: Scalars['String']['input'];
    dbxrefs?: InputMaybe<Array<Scalars['String']['input']>>;
    depositor?: InputMaybe<Scalars['String']['input']>;
    editable_summary?: InputMaybe<Scalars['String']['input']>;
    genbank_accession?: InputMaybe<Scalars['String']['input']>;
    genes?: InputMaybe<Array<Scalars['String']['input']>>;
    image_map?: InputMaybe<Scalars['String']['input']>;
    in_stock: Scalars['Boolean']['input'];
    keywords?: InputMaybe<Array<Scalars['String']['input']>>;
    name: Scalars['String']['input'];
    publications?: InputMaybe<Array<Scalars['String']['input']>>;
    sequence?: InputMaybe<Scalars['String']['input']>;
    summary?: InputMaybe<Scalars['String']['input']>;
    updated_by: Scalars['String']['input'];
};
export type CreateRoleInput = {
    description: Scalars['String']['input'];
    role: Scalars['String']['input'];
};
export type CreateStrainInput = {
    characteristics?: InputMaybe<Array<Scalars['String']['input']>>;
    created_by: Scalars['String']['input'];
    dbxrefs?: InputMaybe<Array<Scalars['String']['input']>>;
    depositor?: InputMaybe<Scalars['String']['input']>;
    editable_summary?: InputMaybe<Scalars['String']['input']>;
    genes?: InputMaybe<Array<Scalars['String']['input']>>;
    genetic_modification?: InputMaybe<Scalars['String']['input']>;
    genotypes?: InputMaybe<Array<Scalars['String']['input']>>;
    in_stock: Scalars['Boolean']['input'];
    label: Scalars['String']['input'];
    mutagenesis_method?: InputMaybe<Scalars['String']['input']>;
    names?: InputMaybe<Array<Scalars['String']['input']>>;
    parent?: InputMaybe<Scalars['String']['input']>;
    phenotypes?: InputMaybe<Array<Scalars['String']['input']>>;
    plasmid?: InputMaybe<Scalars['String']['input']>;
    publications?: InputMaybe<Array<Scalars['String']['input']>>;
    species: Scalars['String']['input'];
    summary?: InputMaybe<Scalars['String']['input']>;
    systematic_name: Scalars['String']['input'];
    updated_by: Scalars['String']['input'];
};
export type CreateUserInput = {
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    first_address?: InputMaybe<Scalars['String']['input']>;
    first_name: Scalars['String']['input'];
    group_name?: InputMaybe<Scalars['String']['input']>;
    is_active: Scalars['Boolean']['input'];
    last_name: Scalars['String']['input'];
    organization?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
    second_address?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
    zipcode?: InputMaybe<Scalars['String']['input']>;
};
export type DeleteContent = {
    __typename?: 'DeleteContent';
    success: Scalars['Boolean']['output'];
};
export type DeletePermission = {
    __typename?: 'DeletePermission';
    success: Scalars['Boolean']['output'];
};
export type DeleteRole = {
    __typename?: 'DeleteRole';
    success: Scalars['Boolean']['output'];
};
export type DeleteStock = {
    __typename?: 'DeleteStock';
    success: Scalars['Boolean']['output'];
};
export type DeleteStrainPhenotype = {
    __typename?: 'DeleteStrainPhenotype';
    success: Scalars['Boolean']['output'];
};
export type DeleteStrainPhenotypeInput = {
    assay?: InputMaybe<Scalars['String']['input']>;
    environment?: InputMaybe<Scalars['String']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    phenotype: Scalars['String']['input'];
    publication: Scalars['String']['input'];
};
export type DeleteUser = {
    __typename?: 'DeleteUser';
    success: Scalars['Boolean']['output'];
};
export type Download = {
    __typename?: 'Download';
    items: Array<DownloadItem>;
    title: Scalars['String']['output'];
};
export type DownloadItem = {
    __typename?: 'DownloadItem';
    title: Scalars['String']['output'];
    url: Scalars['String']['output'];
};
export type Extension = {
    __typename?: 'Extension';
    db: Scalars['String']['output'];
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
    relation: Scalars['String']['output'];
};
/** The `UploadFile` type, represents the request for uploading a image file with a certain payload. */
export type FileToUpload = {
    file: Scalars['Upload']['input'];
    id: Scalars['Int']['input'];
};
export type GoAnnotation = {
    __typename?: 'GOAnnotation';
    assigned_by: Scalars['String']['output'];
    date: Scalars['String']['output'];
    evidence_code: Scalars['String']['output'];
    extensions?: Maybe<Array<Extension>>;
    go_term: Scalars['String']['output'];
    id: Scalars['String']['output'];
    publication: Scalars['String']['output'];
    qualifier: Scalars['String']['output'];
    type: Scalars['String']['output'];
    with?: Maybe<Array<With>>;
};
export type Gene = {
    __typename?: 'Gene';
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
};
export type GeneGeneralInfo = {
    __typename?: 'GeneGeneralInfo';
    description?: Maybe<Scalars['String']['output']>;
    gene_product?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    name_description: Array<Maybe<Scalars['String']['output']>>;
    synonyms: Array<Maybe<Scalars['String']['output']>>;
};
export type Identity = {
    __typename?: 'Identity';
    created_at: Scalars['Timestamp']['output'];
    id: Scalars['ID']['output'];
    identifier: Scalars['String']['output'];
    provider: Scalars['String']['output'];
    updated_at: Scalars['Timestamp']['output'];
    user_id: Scalars['ID']['output'];
};
/** The `ImageFile` type, represents the response of uploading an image file. */
export type ImageFile = {
    __typename?: 'ImageFile';
    url: Scalars['String']['output'];
};
export type LoginInput = {
    client_id: Scalars['String']['input'];
    code: Scalars['String']['input'];
    provider: Scalars['String']['input'];
    redirect_url: Scalars['String']['input'];
    scopes: Scalars['String']['input'];
    state: Scalars['String']['input'];
};
export type Logout = {
    __typename?: 'Logout';
    success: Scalars['Boolean']['output'];
};
export type Mutation = {
    __typename?: 'Mutation';
    addStrainPhenotype?: Maybe<Strain>;
    createContent?: Maybe<Content>;
    createOrder?: Maybe<Order>;
    createPermission?: Maybe<Permission>;
    createPlasmid?: Maybe<Plasmid>;
    createRole?: Maybe<Role>;
    createRolePermissionRelationship?: Maybe<Role>;
    createStrain?: Maybe<Strain>;
    createUser?: Maybe<User>;
    createUserRoleRelationship?: Maybe<User>;
    deleteContent?: Maybe<DeleteContent>;
    deletePermission?: Maybe<DeletePermission>;
    deleteRole?: Maybe<DeleteRole>;
    deleteStock?: Maybe<DeleteStock>;
    deleteStrainPhenotype: DeleteStrainPhenotype;
    deleteUser?: Maybe<DeleteUser>;
    login?: Maybe<Auth>;
    logout?: Maybe<Logout>;
    updateContent?: Maybe<Content>;
    updateOrder?: Maybe<Order>;
    updatePermission?: Maybe<Permission>;
    updatePlasmid?: Maybe<Plasmid>;
    updateRole?: Maybe<Role>;
    updateStrain?: Maybe<Strain>;
    updateStrainPhenotype?: Maybe<Strain>;
    updateUser?: Maybe<User>;
    uploadFile: ImageFile;
};
export type MutationAddStrainPhenotypeArgs = {
    input: AddStrainPhenotypeInput;
    strainId: Scalars['ID']['input'];
};
export type MutationCreateContentArgs = {
    input?: InputMaybe<CreateContentInput>;
};
export type MutationCreateOrderArgs = {
    input?: InputMaybe<CreateOrderInput>;
};
export type MutationCreatePermissionArgs = {
    input?: InputMaybe<CreatePermissionInput>;
};
export type MutationCreatePlasmidArgs = {
    input?: InputMaybe<CreatePlasmidInput>;
};
export type MutationCreateRoleArgs = {
    input?: InputMaybe<CreateRoleInput>;
};
export type MutationCreateRolePermissionRelationshipArgs = {
    permissionId: Scalars['ID']['input'];
    roleId: Scalars['ID']['input'];
};
export type MutationCreateStrainArgs = {
    input?: InputMaybe<CreateStrainInput>;
};
export type MutationCreateUserArgs = {
    input?: InputMaybe<CreateUserInput>;
};
export type MutationCreateUserRoleRelationshipArgs = {
    roleId: Scalars['ID']['input'];
    userId: Scalars['ID']['input'];
};
export type MutationDeleteContentArgs = {
    id: Scalars['ID']['input'];
};
export type MutationDeletePermissionArgs = {
    id: Scalars['ID']['input'];
};
export type MutationDeleteRoleArgs = {
    id: Scalars['ID']['input'];
};
export type MutationDeleteStockArgs = {
    id: Scalars['ID']['input'];
};
export type MutationDeleteStrainPhenotypeArgs = {
    input: DeleteStrainPhenotypeInput;
    strainId: Scalars['ID']['input'];
};
export type MutationDeleteUserArgs = {
    id: Scalars['ID']['input'];
};
export type MutationLoginArgs = {
    input?: InputMaybe<LoginInput>;
};
export type MutationUpdateContentArgs = {
    input?: InputMaybe<UpdateContentInput>;
};
export type MutationUpdateOrderArgs = {
    id: Scalars['ID']['input'];
    input?: InputMaybe<UpdateOrderInput>;
};
export type MutationUpdatePermissionArgs = {
    id: Scalars['ID']['input'];
    input?: InputMaybe<UpdatePermissionInput>;
};
export type MutationUpdatePlasmidArgs = {
    id: Scalars['ID']['input'];
    input?: InputMaybe<UpdatePlasmidInput>;
};
export type MutationUpdateRoleArgs = {
    id: Scalars['ID']['input'];
    input?: InputMaybe<UpdateRoleInput>;
};
export type MutationUpdateStrainArgs = {
    id: Scalars['ID']['input'];
    input?: InputMaybe<UpdateStrainInput>;
};
export type MutationUpdateStrainPhenotypeArgs = {
    payload: UpdateStrainPhenotypePayloadInput;
    strainId: Scalars['ID']['input'];
    target: UpdateStrainPhenotypeTargetInput;
};
export type MutationUpdateUserArgs = {
    id: Scalars['ID']['input'];
    input?: InputMaybe<UpdateUserInput>;
};
export type MutationUploadFileArgs = {
    file: Scalars['Upload']['input'];
};
export type NumberOfPublicationsWithGene = {
    __typename?: 'NumberOfPublicationsWithGene';
    num_pubs: Scalars['Int']['output'];
    publications: Array<PublicationWithGene>;
};
export type Order = {
    __typename?: 'Order';
    comments?: Maybe<Scalars['String']['output']>;
    consumer?: Maybe<User>;
    courier?: Maybe<Scalars['String']['output']>;
    courier_account?: Maybe<Scalars['String']['output']>;
    created_at: Scalars['Timestamp']['output'];
    id: Scalars['ID']['output'];
    items?: Maybe<Array<Stock>>;
    payer?: Maybe<User>;
    payment?: Maybe<Scalars['String']['output']>;
    purchase_order_num?: Maybe<Scalars['String']['output']>;
    purchaser?: Maybe<User>;
    status?: Maybe<StatusEnum>;
    updated_at: Scalars['Timestamp']['output'];
};
export type OrderListWithCursor = {
    __typename?: 'OrderListWithCursor';
    limit?: Maybe<Scalars['Int']['output']>;
    nextCursor: Scalars['Int']['output'];
    orders: Array<Order>;
    previousCursor: Scalars['Int']['output'];
    totalCount: Scalars['Int']['output'];
};
export type Organism = {
    __typename?: 'Organism';
    citations: Array<Citation>;
    downloads: Array<Download>;
    scientific_name: Scalars['String']['output'];
    taxon_id: Scalars['String']['output'];
};
export type Permission = {
    __typename?: 'Permission';
    created_at: Scalars['Timestamp']['output'];
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    permission: Scalars['String']['output'];
    resource?: Maybe<Scalars['String']['output']>;
    updated_at: Scalars['Timestamp']['output'];
};
export type Phenotype = {
    __typename?: 'Phenotype';
    assay?: Maybe<Scalars['String']['output']>;
    environment?: Maybe<Scalars['String']['output']>;
    note?: Maybe<Scalars['String']['output']>;
    phenotype: Scalars['String']['output'];
    publication?: Maybe<Publication>;
};
export type Plasmid = Stock & {
    __typename?: 'Plasmid';
    created_at: Scalars['Timestamp']['output'];
    created_by: User;
    dbxrefs?: Maybe<Array<Scalars['String']['output']>>;
    depositor: User;
    editable_summary?: Maybe<Scalars['String']['output']>;
    genbank_accession?: Maybe<Scalars['String']['output']>;
    genes?: Maybe<Array<Gene>>;
    id: Scalars['ID']['output'];
    image_map?: Maybe<Scalars['String']['output']>;
    in_stock: Scalars['Boolean']['output'];
    keywords?: Maybe<Array<Scalars['String']['output']>>;
    name: Scalars['String']['output'];
    publications?: Maybe<Array<Publication>>;
    sequence?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    updated_at: Scalars['Timestamp']['output'];
    updated_by: User;
};
export type PlasmidListWithCursor = {
    __typename?: 'PlasmidListWithCursor';
    limit?: Maybe<Scalars['Int']['output']>;
    nextCursor: Scalars['Int']['output'];
    plasmids: Array<Plasmid>;
    previousCursor: Scalars['Int']['output'];
    totalCount: Scalars['Int']['output'];
};
export type Publication = BasePublication & {
    __typename?: 'Publication';
    abstract: Scalars['String']['output'];
    authors: Array<Author>;
    doi?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    issn?: Maybe<Scalars['String']['output']>;
    issue?: Maybe<Scalars['String']['output']>;
    journal: Scalars['String']['output'];
    pages?: Maybe<Scalars['String']['output']>;
    pub_date?: Maybe<Scalars['Timestamp']['output']>;
    pub_type: Scalars['String']['output'];
    source: Scalars['String']['output'];
    status?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
    volume?: Maybe<Scalars['String']['output']>;
};
export type PublicationWithGene = BasePublication & {
    __typename?: 'PublicationWithGene';
    abstract: Scalars['String']['output'];
    authors: Array<Author>;
    doi?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    issn?: Maybe<Scalars['String']['output']>;
    issue?: Maybe<Scalars['String']['output']>;
    journal: Scalars['String']['output'];
    pages?: Maybe<Scalars['String']['output']>;
    pub_date?: Maybe<Scalars['Timestamp']['output']>;
    pub_type: Scalars['String']['output'];
    related_genes: Array<Gene>;
    source: Scalars['String']['output'];
    status?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
    volume?: Maybe<Scalars['String']['output']>;
};
export type Query = {
    __typename?: 'Query';
    content?: Maybe<Content>;
    contentBySlug?: Maybe<Content>;
    geneGeneralInformation?: Maybe<GeneGeneralInfo>;
    geneOntologyAnnotation?: Maybe<Array<GoAnnotation>>;
    listContentByNamespace: Array<Content>;
    listOrders?: Maybe<OrderListWithCursor>;
    listOrganisms?: Maybe<Array<Organism>>;
    listPermissions?: Maybe<Array<Permission>>;
    listPhenotypeAssays: Array<Scalars['String']['output']>;
    listPhenotypeEnvironments: Array<Scalars['String']['output']>;
    listPhenotypes: Array<Scalars['String']['output']>;
    listPlasmids?: Maybe<PlasmidListWithCursor>;
    listPlasmidsWithAnnotation?: Maybe<PlasmidListWithCursor>;
    listPublicationsWithGene: Array<PublicationWithGene>;
    listRecentPlasmids?: Maybe<Array<Plasmid>>;
    listRecentPublications?: Maybe<Array<Publication>>;
    listRecentStrains?: Maybe<Array<Strain>>;
    listRoles?: Maybe<Array<Role>>;
    listStrains?: Maybe<StrainListWithCursor>;
    listStrainsWithAnnotation?: Maybe<StrainListWithCursor>;
    listStrainsWithGene?: Maybe<Array<Strain>>;
    listUsers?: Maybe<UserList>;
    order?: Maybe<Order>;
    organism?: Maybe<Organism>;
    permission?: Maybe<Permission>;
    plasmid?: Maybe<Plasmid>;
    publication?: Maybe<Publication>;
    role?: Maybe<Role>;
    strain?: Maybe<Strain>;
    user?: Maybe<User>;
    userByEmail?: Maybe<User>;
};
export type QueryContentArgs = {
    id: Scalars['ID']['input'];
};
export type QueryContentBySlugArgs = {
    slug: Scalars['String']['input'];
};
export type QueryGeneGeneralInformationArgs = {
    gene: Scalars['String']['input'];
};
export type QueryGeneOntologyAnnotationArgs = {
    gene: Scalars['String']['input'];
};
export type QueryListContentByNamespaceArgs = {
    namespace: Scalars['String']['input'];
};
export type QueryListOrdersArgs = {
    cursor?: InputMaybe<Scalars['Int']['input']>;
    filter?: InputMaybe<Scalars['String']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryListPhenotypeAssaysArgs = {
    search: Scalars['String']['input'];
};
export type QueryListPhenotypeEnvironmentsArgs = {
    search: Scalars['String']['input'];
};
export type QueryListPhenotypesArgs = {
    search: Scalars['String']['input'];
};
export type QueryListPlasmidsArgs = {
    cursor?: InputMaybe<Scalars['Int']['input']>;
    filter?: InputMaybe<Scalars['String']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryListPlasmidsWithAnnotationArgs = {
    annotation: Scalars['String']['input'];
    cursor?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    type: Scalars['String']['input'];
};
export type QueryListPublicationsWithGeneArgs = {
    gene: Scalars['String']['input'];
};
export type QueryListRecentPlasmidsArgs = {
    limit: Scalars['Int']['input'];
};
export type QueryListRecentPublicationsArgs = {
    limit: Scalars['Int']['input'];
};
export type QueryListRecentStrainsArgs = {
    limit: Scalars['Int']['input'];
};
export type QueryListStrainsArgs = {
    cursor?: InputMaybe<Scalars['Int']['input']>;
    filter?: InputMaybe<StrainListFilter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryListStrainsWithAnnotationArgs = {
    annotation: Scalars['String']['input'];
    cursor?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    type: Scalars['String']['input'];
};
export type QueryListStrainsWithGeneArgs = {
    gene: Scalars['String']['input'];
};
export type QueryListUsersArgs = {
    filter: Scalars['String']['input'];
    pagenum: Scalars['String']['input'];
    pagesize: Scalars['String']['input'];
};
export type QueryOrderArgs = {
    id: Scalars['ID']['input'];
};
export type QueryOrganismArgs = {
    taxon_id: Scalars['String']['input'];
};
export type QueryPermissionArgs = {
    id: Scalars['ID']['input'];
};
export type QueryPlasmidArgs = {
    id: Scalars['ID']['input'];
};
export type QueryPublicationArgs = {
    id: Scalars['ID']['input'];
};
export type QueryRoleArgs = {
    id: Scalars['ID']['input'];
};
export type QueryStrainArgs = {
    id: Scalars['ID']['input'];
};
export type QueryUserArgs = {
    id: Scalars['ID']['input'];
};
export type QueryUserByEmailArgs = {
    email: Scalars['String']['input'];
};
export type Role = {
    __typename?: 'Role';
    created_at: Scalars['Timestamp']['output'];
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    permissions?: Maybe<Array<Permission>>;
    role: Scalars['String']['output'];
    updated_at: Scalars['Timestamp']['output'];
};
export declare enum StatusEnum {
    Cancelled = "CANCELLED",
    Growing = "GROWING",
    InPreparation = "IN_PREPARATION",
    Shipped = "SHIPPED"
}
export type Stock = {
    created_at: Scalars['Timestamp']['output'];
    created_by: User;
    dbxrefs?: Maybe<Array<Scalars['String']['output']>>;
    depositor: User;
    editable_summary?: Maybe<Scalars['String']['output']>;
    genes?: Maybe<Array<Gene>>;
    id: Scalars['ID']['output'];
    in_stock: Scalars['Boolean']['output'];
    publications?: Maybe<Array<Publication>>;
    summary?: Maybe<Scalars['String']['output']>;
    updated_at: Scalars['Timestamp']['output'];
    updated_by: User;
};
export type Strain = Stock & {
    __typename?: 'Strain';
    characteristics?: Maybe<Array<Scalars['String']['output']>>;
    created_at: Scalars['Timestamp']['output'];
    created_by: User;
    dbxrefs?: Maybe<Array<Scalars['String']['output']>>;
    depositor: User;
    editable_summary?: Maybe<Scalars['String']['output']>;
    genes?: Maybe<Array<Gene>>;
    genetic_modification?: Maybe<Scalars['String']['output']>;
    genotypes?: Maybe<Array<Scalars['String']['output']>>;
    id: Scalars['ID']['output'];
    in_stock: Scalars['Boolean']['output'];
    label: Scalars['String']['output'];
    mutagenesis_method?: Maybe<Scalars['String']['output']>;
    names?: Maybe<Array<Scalars['String']['output']>>;
    parent?: Maybe<Strain>;
    phenotypes?: Maybe<Array<Phenotype>>;
    plasmid?: Maybe<Scalars['String']['output']>;
    publications?: Maybe<Array<Publication>>;
    species: Scalars['String']['output'];
    summary?: Maybe<Scalars['String']['output']>;
    systematic_name: Scalars['String']['output'];
    updated_at: Scalars['Timestamp']['output'];
    updated_by: User;
};
export type StrainListFilter = {
    id?: InputMaybe<Scalars['ID']['input']>;
    in_stock?: InputMaybe<Scalars['Boolean']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    strain_type: StrainType;
    summary?: InputMaybe<Scalars['String']['input']>;
};
export type StrainListWithCursor = {
    __typename?: 'StrainListWithCursor';
    limit?: Maybe<Scalars['Int']['output']>;
    nextCursor: Scalars['Int']['output'];
    previousCursor: Scalars['Int']['output'];
    strains: Array<Strain>;
    totalCount: Scalars['Int']['output'];
};
export declare enum StrainType {
    All = "ALL",
    Bacterial = "BACTERIAL",
    Gwdi = "GWDI",
    Regular = "REGULAR"
}
export type UpdateContentInput = {
    content: Scalars['String']['input'];
    id: Scalars['ID']['input'];
    updated_by: Scalars['String']['input'];
};
export type UpdateOrderInput = {
    comments?: InputMaybe<Scalars['String']['input']>;
    courier?: InputMaybe<Scalars['String']['input']>;
    courier_account?: InputMaybe<Scalars['String']['input']>;
    items?: InputMaybe<Array<Scalars['String']['input']>>;
    payment?: InputMaybe<Scalars['String']['input']>;
    purchase_order_num?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<StatusEnum>;
};
export type UpdatePermissionInput = {
    description: Scalars['String']['input'];
    permission: Scalars['String']['input'];
    resource: Scalars['String']['input'];
};
export type UpdatePlasmidInput = {
    dbxrefs?: InputMaybe<Array<Scalars['String']['input']>>;
    depositor?: InputMaybe<Scalars['String']['input']>;
    editable_summary?: InputMaybe<Scalars['String']['input']>;
    genbank_accession?: InputMaybe<Scalars['String']['input']>;
    genes?: InputMaybe<Array<Scalars['String']['input']>>;
    image_map?: InputMaybe<Scalars['String']['input']>;
    in_stock?: InputMaybe<Scalars['Boolean']['input']>;
    keywords?: InputMaybe<Array<Scalars['String']['input']>>;
    name?: InputMaybe<Scalars['String']['input']>;
    publications?: InputMaybe<Array<Scalars['String']['input']>>;
    sequence?: InputMaybe<Scalars['String']['input']>;
    summary?: InputMaybe<Scalars['String']['input']>;
    updated_by: Scalars['String']['input'];
};
export type UpdateRoleInput = {
    description: Scalars['String']['input'];
    role: Scalars['String']['input'];
};
export type UpdateStrainInput = {
    characteristics?: InputMaybe<Array<Scalars['String']['input']>>;
    dbxrefs?: InputMaybe<Array<Scalars['String']['input']>>;
    depositor?: InputMaybe<Scalars['String']['input']>;
    editable_summary?: InputMaybe<Scalars['String']['input']>;
    genes?: InputMaybe<Array<Scalars['String']['input']>>;
    genetic_modification?: InputMaybe<Scalars['String']['input']>;
    genotypes?: InputMaybe<Array<Scalars['String']['input']>>;
    in_stock?: InputMaybe<Scalars['Boolean']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    mutagenesis_method?: InputMaybe<Scalars['String']['input']>;
    names?: InputMaybe<Array<Scalars['String']['input']>>;
    parent?: InputMaybe<Scalars['String']['input']>;
    phenotypes?: InputMaybe<Array<Scalars['String']['input']>>;
    plasmid?: InputMaybe<Scalars['String']['input']>;
    publications?: InputMaybe<Array<Scalars['String']['input']>>;
    species?: InputMaybe<Scalars['String']['input']>;
    summary?: InputMaybe<Scalars['String']['input']>;
    systematic_name?: InputMaybe<Scalars['String']['input']>;
    updated_by: Scalars['String']['input'];
};
export type UpdateStrainPhenotypePayloadInput = {
    assay?: InputMaybe<Scalars['String']['input']>;
    environment?: InputMaybe<Scalars['String']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    phenotype?: InputMaybe<Scalars['String']['input']>;
    publication?: InputMaybe<Scalars['String']['input']>;
};
export type UpdateStrainPhenotypeTargetInput = {
    assay?: InputMaybe<Scalars['String']['input']>;
    environment?: InputMaybe<Scalars['String']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    phenotype: Scalars['String']['input'];
    publication: Scalars['String']['input'];
};
export type UpdateUserInput = {
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    first_address?: InputMaybe<Scalars['String']['input']>;
    first_name?: InputMaybe<Scalars['String']['input']>;
    group_name?: InputMaybe<Scalars['String']['input']>;
    is_active?: InputMaybe<Scalars['Boolean']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
    organization?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
    second_address?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
    zipcode?: InputMaybe<Scalars['String']['input']>;
};
export type User = {
    __typename?: 'User';
    city?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    created_at: Scalars['Timestamp']['output'];
    email: Scalars['String']['output'];
    first_address?: Maybe<Scalars['String']['output']>;
    first_name: Scalars['String']['output'];
    group_name?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    is_active: Scalars['Boolean']['output'];
    last_name: Scalars['String']['output'];
    organization?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    roles?: Maybe<Array<Role>>;
    second_address?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    updated_at: Scalars['Timestamp']['output'];
    zipcode?: Maybe<Scalars['String']['output']>;
};
export type UserList = {
    __typename?: 'UserList';
    pageNum?: Maybe<Scalars['String']['output']>;
    pageSize?: Maybe<Scalars['String']['output']>;
    totalCount: Scalars['Int']['output'];
    users: Array<User>;
};
export type With = {
    __typename?: 'With';
    db: Scalars['String']['output'];
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
};
export type LoginMutationVariables = Exact<{
    input: LoginInput;
}>;
export type LoginMutation = {
    __typename?: 'Mutation';
    login?: {
        __typename?: 'Auth';
        token: string;
        user: {
            __typename?: 'User';
            id: string;
            email: string;
            first_name: string;
            last_name: string;
            roles?: Array<{
                __typename?: 'Role';
                role: string;
                permissions?: Array<{
                    __typename?: 'Permission';
                    permission: string;
                    resource?: string | null;
                }> | null;
            }> | null;
        };
        identity: {
            __typename?: 'Identity';
            provider: string;
        };
    } | null;
};
export type LogoutMutationVariables = Exact<{
    [key: string]: never;
}>;
export type LogoutMutation = {
    __typename?: 'Mutation';
    logout?: {
        __typename?: 'Logout';
        success: boolean;
    } | null;
};
export type CreateContentMutationVariables = Exact<{
    input: CreateContentInput;
}>;
export type CreateContentMutation = {
    __typename?: 'Mutation';
    createContent?: {
        __typename?: 'Content';
        name: string;
        content: string;
        namespace: string;
        created_by: {
            __typename?: 'User';
            id: string;
        };
    } | null;
};
export type UpdateContentMutationVariables = Exact<{
    input: UpdateContentInput;
}>;
export type UpdateContentMutation = {
    __typename?: 'Mutation';
    updateContent?: {
        __typename?: 'Content';
        id: string;
        content: string;
        updated_by: {
            __typename?: 'User';
            id: string;
        };
    } | null;
};
export type DeleteContentMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type DeleteContentMutation = {
    __typename?: 'Mutation';
    deleteContent?: {
        __typename?: 'DeleteContent';
        success: boolean;
    } | null;
};
export type CreateOrderMutationVariables = Exact<{
    input: CreateOrderInput;
}>;
export type CreateOrderMutation = {
    __typename?: 'Mutation';
    createOrder?: {
        __typename?: 'Order';
        id: string;
    } | null;
};
export type AddStrainPhenotypeMutationVariables = Exact<{
    strainId: Scalars['ID']['input'];
    input: AddStrainPhenotypeInput;
}>;
export type AddStrainPhenotypeMutation = {
    __typename?: 'Mutation';
    addStrainPhenotype?: {
        __typename?: 'Strain';
        id: string;
        label: string;
        phenotypes?: Array<{
            __typename?: 'Phenotype';
            phenotype: string;
            note?: string | null;
            assay?: string | null;
            environment?: string | null;
            publication?: {
                __typename?: 'Publication';
                id: string;
                pub_date?: string | null;
                title: string;
                journal: string;
                volume?: string | null;
                pages?: string | null;
                authors: Array<{
                    __typename?: 'Author';
                    last_name: string;
                }>;
            } | null;
        }> | null;
    } | null;
};
export type UpdateStrainPhenotypeMutationVariables = Exact<{
    strainId: Scalars['ID']['input'];
    target: UpdateStrainPhenotypeTargetInput;
    payload: UpdateStrainPhenotypePayloadInput;
}>;
export type UpdateStrainPhenotypeMutation = {
    __typename?: 'Mutation';
    updateStrainPhenotype?: {
        __typename?: 'Strain';
        id: string;
        label: string;
        phenotypes?: Array<{
            __typename?: 'Phenotype';
            phenotype: string;
            environment?: string | null;
            assay?: string | null;
            note?: string | null;
            publication?: {
                __typename?: 'Publication';
                id: string;
                pub_date?: string | null;
                title: string;
                journal: string;
                volume?: string | null;
                pages?: string | null;
                authors: Array<{
                    __typename?: 'Author';
                    last_name: string;
                }>;
            } | null;
        }> | null;
    } | null;
};
export type UploadFileMutationVariables = Exact<{
    file: Scalars['Upload']['input'];
}>;
export type UploadFileMutation = {
    __typename?: 'Mutation';
    uploadFile: {
        __typename?: 'ImageFile';
        url: string;
    };
};
export type CreateUserMutationVariables = Exact<{
    input: CreateUserInput;
}>;
export type CreateUserMutation = {
    __typename?: 'Mutation';
    createUser?: {
        __typename?: 'User';
        id: string;
    } | null;
};
export type UpdateUserMutationVariables = Exact<{
    id: Scalars['ID']['input'];
    input: UpdateUserInput;
}>;
export type UpdateUserMutation = {
    __typename?: 'Mutation';
    updateUser?: {
        __typename?: 'User';
        id: string;
    } | null;
};
export type ListContentByNamespaceQueryVariables = Exact<{
    namespace: Scalars['String']['input'];
}>;
export type ListContentByNamespaceQuery = {
    __typename?: 'Query';
    listContentByNamespace: Array<{
        __typename?: 'Content';
        id: string;
        content: string;
        name: string;
        slug: string;
        created_at: string;
        updated_at: string;
        created_by: {
            __typename?: 'User';
            id: string;
            email: string;
            first_name: string;
            last_name: string;
        };
        updated_by: {
            __typename?: 'User';
            id: string;
            email: string;
            first_name: string;
            last_name: string;
        };
    }>;
};
export type ContentBySlugQueryVariables = Exact<{
    slug: Scalars['String']['input'];
}>;
export type ContentBySlugQuery = {
    __typename?: 'Query';
    contentBySlug?: {
        __typename?: 'Content';
        id: string;
        content: string;
        name: string;
        slug: string;
        created_at: string;
        updated_at: string;
        created_by: {
            __typename?: 'User';
            id: string;
            email: string;
            first_name: string;
            last_name: string;
        };
        updated_by: {
            __typename?: 'User';
            id: string;
            email: string;
            first_name: string;
            last_name: string;
        };
    } | null;
};
export type ContentQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type ContentQuery = {
    __typename?: 'Query';
    content?: {
        __typename?: 'Content';
        id: string;
        content: string;
        name: string;
        slug: string;
        namespace: string;
        created_at: string;
        updated_at: string;
        created_by: {
            __typename?: 'User';
            id: string;
            email: string;
            first_name: string;
            last_name: string;
        };
        updated_by: {
            __typename?: 'User';
            id: string;
            email: string;
            first_name: string;
            last_name: string;
        };
    } | null;
};
export type ListOrganismsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ListOrganismsQuery = {
    __typename?: 'Query';
    listOrganisms?: Array<{
        __typename?: 'Organism';
        taxon_id: string;
        scientific_name: string;
        citations: Array<{
            __typename?: 'Citation';
            title: string;
            authors: string;
            pubmed_id: string;
            journal: string;
        }>;
        downloads: Array<{
            __typename?: 'Download';
            title: string;
            items: Array<{
                __typename?: 'DownloadItem';
                title: string;
                url: string;
            }>;
        }>;
    }> | null;
};
export type GeneGeneralInformationSummaryQueryVariables = Exact<{
    gene: Scalars['String']['input'];
}>;
export type GeneGeneralInformationSummaryQuery = {
    __typename?: 'Query';
    geneGeneralInformation?: {
        __typename?: 'GeneGeneralInfo';
        id: string;
        name_description: Array<string | null>;
        gene_product?: string | null;
        synonyms: Array<string | null>;
        description?: string | null;
    } | null;
};
export type GeneOntologyAnnotationSummaryQueryVariables = Exact<{
    gene: Scalars['String']['input'];
}>;
export type GeneOntologyAnnotationSummaryQuery = {
    __typename?: 'Query';
    geneOntologyAnnotation?: Array<{
        __typename?: 'GOAnnotation';
        id: string;
        type: string;
        date: string;
        go_term: string;
        evidence_code: string;
        with?: Array<{
            __typename?: 'With';
            id: string;
            db: string;
            name: string;
        }> | null;
        extensions?: Array<{
            __typename?: 'Extension';
            id: string;
            db: string;
            relation: string;
            name: string;
        }> | null;
    }> | null;
};
export type ListPublicationsWithGeneSummaryQueryVariables = Exact<{
    gene: Scalars['String']['input'];
}>;
export type ListPublicationsWithGeneSummaryQuery = {
    __typename?: 'Query';
    listPublicationsWithGene: Array<{
        __typename?: 'PublicationWithGene';
        id: string;
        title: string;
        journal: string;
        pages?: string | null;
        issue?: string | null;
        authors: Array<{
            __typename?: 'Author';
            last_name: string;
        }>;
    }>;
};
export type GeneOntologyAnnotationQueryVariables = Exact<{
    gene: Scalars['String']['input'];
}>;
export type GeneOntologyAnnotationQuery = {
    __typename?: 'Query';
    geneOntologyAnnotation?: Array<{
        __typename?: 'GOAnnotation';
        id: string;
        type: string;
        date: string;
        go_term: string;
        evidence_code: string;
        qualifier: string;
        publication: string;
        assigned_by: string;
        with?: Array<{
            __typename?: 'With';
            id: string;
            db: string;
            name: string;
        }> | null;
        extensions?: Array<{
            __typename?: 'Extension';
            id: string;
            db: string;
            relation: string;
            name: string;
        }> | null;
    }> | null;
};
export type ListStrainsWithGeneQueryVariables = Exact<{
    gene: Scalars['String']['input'];
}>;
export type ListStrainsWithGeneQuery = {
    __typename?: 'Query';
    listStrainsWithGene?: Array<{
        __typename?: 'Strain';
        id: string;
        label: string;
        characteristics?: Array<string> | null;
        in_stock: boolean;
        phenotypes?: Array<{
            __typename?: 'Phenotype';
            phenotype: string;
            publication?: {
                __typename?: 'Publication';
                id: string;
                title: string;
                journal: string;
                pages?: string | null;
                volume?: string | null;
                pub_date?: string | null;
                authors: Array<{
                    __typename?: 'Author';
                    last_name: string;
                    rank?: string | null;
                }>;
            } | null;
        }> | null;
    }> | null;
};
export type PublicationQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type PublicationQuery = {
    __typename?: 'Query';
    publication?: {
        __typename?: 'Publication';
        id: string;
        doi?: string | null;
        title: string;
        abstract: string;
        journal: string;
        pub_date?: string | null;
        pages?: string | null;
        issue?: string | null;
        volume?: string | null;
        authors: Array<{
            __typename?: 'Author';
            initials?: string | null;
            last_name: string;
        }>;
    } | null;
};
export type ListRecentPublicationsQueryVariables = Exact<{
    limit?: Scalars['Int']['input'];
}>;
export type ListRecentPublicationsQuery = {
    __typename?: 'Query';
    listRecentPublications?: Array<{
        __typename?: 'Publication';
        id: string;
        doi?: string | null;
        title: string;
        abstract: string;
        journal: string;
        pub_date?: string | null;
        pages?: string | null;
        issue?: string | null;
        volume?: string | null;
        authors: Array<{
            __typename?: 'Author';
            initials?: string | null;
            last_name: string;
        }>;
    }> | null;
};
export type ListPublicationsWithGeneQueryVariables = Exact<{
    gene: Scalars['String']['input'];
}>;
export type ListPublicationsWithGeneQuery = {
    __typename?: 'Query';
    listPublicationsWithGene: Array<{
        __typename?: 'PublicationWithGene';
        id: string;
        doi?: string | null;
        title: string;
        journal: string;
        pub_date?: string | null;
        volume?: string | null;
        pages?: string | null;
        pub_type: string;
        source: string;
        issue?: string | null;
        related_genes: Array<{
            __typename?: 'Gene';
            id: string;
            name: string;
        }>;
        authors: Array<{
            __typename?: 'Author';
            last_name: string;
            rank?: string | null;
        }>;
    }>;
};
export type StrainListQueryVariables = Exact<{
    cursor: Scalars['Int']['input'];
    limit: Scalars['Int']['input'];
    filter?: InputMaybe<StrainListFilter>;
}>;
export type StrainListQuery = {
    __typename?: 'Query';
    listStrains?: {
        __typename?: 'StrainListWithCursor';
        nextCursor: number;
        totalCount: number;
        strains: Array<{
            __typename?: 'Strain';
            id: string;
            label: string;
            summary?: string | null;
            in_stock: boolean;
        }>;
    } | null;
};
export type ListStrainsWithPhenotypeQueryVariables = Exact<{
    cursor: Scalars['Int']['input'];
    limit: Scalars['Int']['input'];
    type: Scalars['String']['input'];
    annotation: Scalars['String']['input'];
}>;
export type ListStrainsWithPhenotypeQuery = {
    __typename?: 'Query';
    listStrainsWithAnnotation?: {
        __typename?: 'StrainListWithCursor';
        totalCount: number;
        nextCursor: number;
        strains: Array<{
            __typename?: 'Strain';
            id: string;
            label: string;
            genes?: Array<{
                __typename?: 'Gene';
                name: string;
            }> | null;
            publications?: Array<{
                __typename?: 'Publication';
                id: string;
                pub_date?: string | null;
                title: string;
                journal: string;
                volume?: string | null;
                pages?: string | null;
                authors: Array<{
                    __typename?: 'Author';
                    last_name: string;
                }>;
            }> | null;
        }>;
    } | null;
};
export type ListBacterialStrainsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ListBacterialStrainsQuery = {
    __typename?: 'Query';
    bacterialFoodSource?: {
        __typename?: 'StrainListWithCursor';
        totalCount: number;
        nextCursor: number;
        strains: Array<{
            __typename?: 'Strain';
            id: string;
            label: string;
            summary?: string | null;
            in_stock: boolean;
        }>;
    } | null;
    symbioticFarmerBacterium?: {
        __typename?: 'StrainListWithCursor';
        totalCount: number;
        nextCursor: number;
        strains: Array<{
            __typename?: 'Strain';
            id: string;
            label: string;
            summary?: string | null;
            in_stock: boolean;
        }>;
    } | null;
};
export type ListStrainsInventoryQueryVariables = Exact<{
    cursor: Scalars['Int']['input'];
    limit: Scalars['Int']['input'];
}>;
export type ListStrainsInventoryQuery = {
    __typename?: 'Query';
    listStrainsWithAnnotation?: {
        __typename?: 'StrainListWithCursor';
        totalCount: number;
        nextCursor: number;
        strains: Array<{
            __typename?: 'Strain';
            id: string;
            label: string;
            summary?: string | null;
            in_stock: boolean;
        }>;
    } | null;
};
export type ListPlasmidsInventoryQueryVariables = Exact<{
    cursor: Scalars['Int']['input'];
    limit: Scalars['Int']['input'];
}>;
export type ListPlasmidsInventoryQuery = {
    __typename?: 'Query';
    listPlasmidsWithAnnotation?: {
        __typename?: 'PlasmidListWithCursor';
        totalCount: number;
        nextCursor: number;
        plasmids: Array<{
            __typename?: 'Plasmid';
            id: string;
            name: string;
            summary?: string | null;
            in_stock: boolean;
        }>;
    } | null;
};
export type PlasmidListFilterQueryVariables = Exact<{
    cursor: Scalars['Int']['input'];
    limit: Scalars['Int']['input'];
    filter: Scalars['String']['input'];
}>;
export type PlasmidListFilterQuery = {
    __typename?: 'Query';
    listPlasmids?: {
        __typename?: 'PlasmidListWithCursor';
        nextCursor: number;
        totalCount: number;
        plasmids: Array<{
            __typename?: 'Plasmid';
            id: string;
            name: string;
            summary?: string | null;
            in_stock: boolean;
        }>;
    } | null;
};
export type PlasmidQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type PlasmidQuery = {
    __typename?: 'Query';
    plasmid?: {
        __typename?: 'Plasmid';
        id: string;
        name: string;
        summary?: string | null;
        dbxrefs?: Array<string> | null;
        image_map?: string | null;
        sequence?: string | null;
        keywords?: Array<string> | null;
        genbank_accession?: string | null;
        in_stock: boolean;
        depositor: {
            __typename?: 'User';
            first_name: string;
            last_name: string;
        };
        publications?: Array<{
            __typename?: 'Publication';
            id: string;
            pub_date?: string | null;
            title: string;
            journal: string;
            volume?: string | null;
            pages?: string | null;
            doi?: string | null;
            authors: Array<{
                __typename?: 'Author';
                last_name: string;
            }>;
        }> | null;
        genes?: Array<{
            __typename?: 'Gene';
            name: string;
        }> | null;
    } | null;
};
export type StrainQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type StrainQuery = {
    __typename?: 'Query';
    strain?: {
        __typename?: 'Strain';
        id: string;
        label: string;
        summary?: string | null;
        species: string;
        plasmid?: string | null;
        dbxrefs?: Array<string> | null;
        in_stock: boolean;
        systematic_name: string;
        genotypes?: Array<string> | null;
        mutagenesis_method?: string | null;
        genetic_modification?: string | null;
        names?: Array<string> | null;
        characteristics?: Array<string> | null;
        parent?: {
            __typename?: 'Strain';
            id: string;
            label: string;
        } | null;
        depositor: {
            __typename?: 'User';
            first_name: string;
            last_name: string;
        };
        publications?: Array<{
            __typename?: 'Publication';
            id: string;
            pub_date?: string | null;
            title: string;
            journal: string;
            volume?: string | null;
            pages?: string | null;
            doi?: string | null;
            authors: Array<{
                __typename?: 'Author';
                last_name: string;
            }>;
        }> | null;
        genes?: Array<{
            __typename?: 'Gene';
            name: string;
        }> | null;
        phenotypes?: Array<{
            __typename?: 'Phenotype';
            phenotype: string;
            note?: string | null;
            assay?: string | null;
            environment?: string | null;
            publication?: {
                __typename?: 'Publication';
                id: string;
                pub_date?: string | null;
                title: string;
                journal: string;
                volume?: string | null;
                pages?: string | null;
                authors: Array<{
                    __typename?: 'Author';
                    last_name: string;
                }>;
            } | null;
        }> | null;
    } | null;
};
export type ListRecentPlasmidsQueryVariables = Exact<{
    limit?: Scalars['Int']['input'];
}>;
export type ListRecentPlasmidsQuery = {
    __typename?: 'Query';
    listRecentPlasmids?: Array<{
        __typename?: 'Plasmid';
        id: string;
        created_at: string;
        name: string;
    }> | null;
};
export type ListRecentStrainsQueryVariables = Exact<{
    limit?: Scalars['Int']['input'];
}>;
export type ListRecentStrainsQuery = {
    __typename?: 'Query';
    listRecentStrains?: Array<{
        __typename?: 'Strain';
        id: string;
        created_at: string;
        systematic_name: string;
    }> | null;
};
export type ListPhenotypesQueryVariables = Exact<{
    search: Scalars['String']['input'];
}>;
export type ListPhenotypesQuery = {
    __typename?: 'Query';
    listPhenotypes: Array<string>;
};
export type ListPhenotypeEnvironmentsQueryVariables = Exact<{
    search: Scalars['String']['input'];
}>;
export type ListPhenotypeEnvironmentsQuery = {
    __typename?: 'Query';
    listPhenotypeEnvironments: Array<string>;
};
export type ListPhenotypeAssaysQueryVariables = Exact<{
    search: Scalars['String']['input'];
}>;
export type ListPhenotypeAssaysQuery = {
    __typename?: 'Query';
    listPhenotypeAssays: Array<string>;
};
export type UserByEmailQueryVariables = Exact<{
    email: Scalars['String']['input'];
}>;
export type UserByEmailQuery = {
    __typename?: 'Query';
    userByEmail?: {
        __typename?: 'User';
        id: string;
    } | null;
};
export declare const LoginDocument: Apollo.DocumentNode;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
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
export declare function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>): Apollo.MutationTuple<LoginMutation, Exact<{
    input: LoginInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export declare const LogoutDocument: Apollo.DocumentNode;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
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
export declare function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>): Apollo.MutationTuple<LogoutMutation, Exact<{
    [key: string]: never;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export declare const CreateContentDocument: Apollo.DocumentNode;
export type CreateContentMutationFn = Apollo.MutationFunction<CreateContentMutation, CreateContentMutationVariables>;
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
export declare function useCreateContentMutation(baseOptions?: Apollo.MutationHookOptions<CreateContentMutation, CreateContentMutationVariables>): Apollo.MutationTuple<CreateContentMutation, Exact<{
    input: CreateContentInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type CreateContentMutationHookResult = ReturnType<typeof useCreateContentMutation>;
export type CreateContentMutationResult = Apollo.MutationResult<CreateContentMutation>;
export type CreateContentMutationOptions = Apollo.BaseMutationOptions<CreateContentMutation, CreateContentMutationVariables>;
export declare const UpdateContentDocument: Apollo.DocumentNode;
export type UpdateContentMutationFn = Apollo.MutationFunction<UpdateContentMutation, UpdateContentMutationVariables>;
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
export declare function useUpdateContentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContentMutation, UpdateContentMutationVariables>): Apollo.MutationTuple<UpdateContentMutation, Exact<{
    input: UpdateContentInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UpdateContentMutationHookResult = ReturnType<typeof useUpdateContentMutation>;
export type UpdateContentMutationResult = Apollo.MutationResult<UpdateContentMutation>;
export type UpdateContentMutationOptions = Apollo.BaseMutationOptions<UpdateContentMutation, UpdateContentMutationVariables>;
export declare const DeleteContentDocument: Apollo.DocumentNode;
export type DeleteContentMutationFn = Apollo.MutationFunction<DeleteContentMutation, DeleteContentMutationVariables>;
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
export declare function useDeleteContentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContentMutation, DeleteContentMutationVariables>): Apollo.MutationTuple<DeleteContentMutation, Exact<{
    id: string;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type DeleteContentMutationHookResult = ReturnType<typeof useDeleteContentMutation>;
export type DeleteContentMutationResult = Apollo.MutationResult<DeleteContentMutation>;
export type DeleteContentMutationOptions = Apollo.BaseMutationOptions<DeleteContentMutation, DeleteContentMutationVariables>;
export declare const CreateOrderDocument: Apollo.DocumentNode;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
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
export declare function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>): Apollo.MutationTuple<CreateOrderMutation, Exact<{
    input: CreateOrderInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export declare const AddStrainPhenotypeDocument: Apollo.DocumentNode;
export type AddStrainPhenotypeMutationFn = Apollo.MutationFunction<AddStrainPhenotypeMutation, AddStrainPhenotypeMutationVariables>;
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
export declare function useAddStrainPhenotypeMutation(baseOptions?: Apollo.MutationHookOptions<AddStrainPhenotypeMutation, AddStrainPhenotypeMutationVariables>): Apollo.MutationTuple<AddStrainPhenotypeMutation, Exact<{
    strainId: string;
    input: AddStrainPhenotypeInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type AddStrainPhenotypeMutationHookResult = ReturnType<typeof useAddStrainPhenotypeMutation>;
export type AddStrainPhenotypeMutationResult = Apollo.MutationResult<AddStrainPhenotypeMutation>;
export type AddStrainPhenotypeMutationOptions = Apollo.BaseMutationOptions<AddStrainPhenotypeMutation, AddStrainPhenotypeMutationVariables>;
export declare const UpdateStrainPhenotypeDocument: Apollo.DocumentNode;
export type UpdateStrainPhenotypeMutationFn = Apollo.MutationFunction<UpdateStrainPhenotypeMutation, UpdateStrainPhenotypeMutationVariables>;
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
export declare function useUpdateStrainPhenotypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStrainPhenotypeMutation, UpdateStrainPhenotypeMutationVariables>): Apollo.MutationTuple<UpdateStrainPhenotypeMutation, Exact<{
    strainId: string;
    target: UpdateStrainPhenotypeTargetInput;
    payload: UpdateStrainPhenotypePayloadInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UpdateStrainPhenotypeMutationHookResult = ReturnType<typeof useUpdateStrainPhenotypeMutation>;
export type UpdateStrainPhenotypeMutationResult = Apollo.MutationResult<UpdateStrainPhenotypeMutation>;
export type UpdateStrainPhenotypeMutationOptions = Apollo.BaseMutationOptions<UpdateStrainPhenotypeMutation, UpdateStrainPhenotypeMutationVariables>;
export declare const UploadFileDocument: Apollo.DocumentNode;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;
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
export declare function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>): Apollo.MutationTuple<UploadFileMutation, Exact<{
    file: File;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export declare const CreateUserDocument: Apollo.DocumentNode;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
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
export declare function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>): Apollo.MutationTuple<CreateUserMutation, Exact<{
    input: CreateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export declare const UpdateUserDocument: Apollo.DocumentNode;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
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
export declare function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>): Apollo.MutationTuple<UpdateUserMutation, Exact<{
    id: string;
    input: UpdateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export declare const ListContentByNamespaceDocument: Apollo.DocumentNode;
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
export declare function useListContentByNamespaceQuery(baseOptions: Apollo.QueryHookOptions<ListContentByNamespaceQuery, ListContentByNamespaceQueryVariables>): Apollo.QueryResult<ListContentByNamespaceQuery, Exact<{
    namespace: string;
}>>;
export declare function useListContentByNamespaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListContentByNamespaceQuery, ListContentByNamespaceQueryVariables>): Apollo.LazyQueryResultTuple<ListContentByNamespaceQuery, Exact<{
    namespace: string;
}>>;
export type ListContentByNamespaceQueryHookResult = ReturnType<typeof useListContentByNamespaceQuery>;
export type ListContentByNamespaceLazyQueryHookResult = ReturnType<typeof useListContentByNamespaceLazyQuery>;
export type ListContentByNamespaceQueryResult = Apollo.QueryResult<ListContentByNamespaceQuery, ListContentByNamespaceQueryVariables>;
export declare const ContentBySlugDocument: Apollo.DocumentNode;
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
export declare function useContentBySlugQuery(baseOptions: Apollo.QueryHookOptions<ContentBySlugQuery, ContentBySlugQueryVariables>): Apollo.QueryResult<ContentBySlugQuery, Exact<{
    slug: string;
}>>;
export declare function useContentBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentBySlugQuery, ContentBySlugQueryVariables>): Apollo.LazyQueryResultTuple<ContentBySlugQuery, Exact<{
    slug: string;
}>>;
export type ContentBySlugQueryHookResult = ReturnType<typeof useContentBySlugQuery>;
export type ContentBySlugLazyQueryHookResult = ReturnType<typeof useContentBySlugLazyQuery>;
export type ContentBySlugQueryResult = Apollo.QueryResult<ContentBySlugQuery, ContentBySlugQueryVariables>;
export declare const ContentDocument: Apollo.DocumentNode;
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
export declare function useContentQuery(baseOptions: Apollo.QueryHookOptions<ContentQuery, ContentQueryVariables>): Apollo.QueryResult<ContentQuery, Exact<{
    id: string;
}>>;
export declare function useContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentQuery, ContentQueryVariables>): Apollo.LazyQueryResultTuple<ContentQuery, Exact<{
    id: string;
}>>;
export type ContentQueryHookResult = ReturnType<typeof useContentQuery>;
export type ContentLazyQueryHookResult = ReturnType<typeof useContentLazyQuery>;
export type ContentQueryResult = Apollo.QueryResult<ContentQuery, ContentQueryVariables>;
export declare const ListOrganismsDocument: Apollo.DocumentNode;
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
export declare function useListOrganismsQuery(baseOptions?: Apollo.QueryHookOptions<ListOrganismsQuery, ListOrganismsQueryVariables>): Apollo.QueryResult<ListOrganismsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useListOrganismsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOrganismsQuery, ListOrganismsQueryVariables>): Apollo.LazyQueryResultTuple<ListOrganismsQuery, Exact<{
    [key: string]: never;
}>>;
export type ListOrganismsQueryHookResult = ReturnType<typeof useListOrganismsQuery>;
export type ListOrganismsLazyQueryHookResult = ReturnType<typeof useListOrganismsLazyQuery>;
export type ListOrganismsQueryResult = Apollo.QueryResult<ListOrganismsQuery, ListOrganismsQueryVariables>;
export declare const GeneGeneralInformationSummaryDocument: Apollo.DocumentNode;
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
export declare function useGeneGeneralInformationSummaryQuery(baseOptions: Apollo.QueryHookOptions<GeneGeneralInformationSummaryQuery, GeneGeneralInformationSummaryQueryVariables>): Apollo.QueryResult<GeneGeneralInformationSummaryQuery, Exact<{
    gene: string;
}>>;
export declare function useGeneGeneralInformationSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GeneGeneralInformationSummaryQuery, GeneGeneralInformationSummaryQueryVariables>): Apollo.LazyQueryResultTuple<GeneGeneralInformationSummaryQuery, Exact<{
    gene: string;
}>>;
export type GeneGeneralInformationSummaryQueryHookResult = ReturnType<typeof useGeneGeneralInformationSummaryQuery>;
export type GeneGeneralInformationSummaryLazyQueryHookResult = ReturnType<typeof useGeneGeneralInformationSummaryLazyQuery>;
export type GeneGeneralInformationSummaryQueryResult = Apollo.QueryResult<GeneGeneralInformationSummaryQuery, GeneGeneralInformationSummaryQueryVariables>;
export declare const GeneOntologyAnnotationSummaryDocument: Apollo.DocumentNode;
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
export declare function useGeneOntologyAnnotationSummaryQuery(baseOptions: Apollo.QueryHookOptions<GeneOntologyAnnotationSummaryQuery, GeneOntologyAnnotationSummaryQueryVariables>): Apollo.QueryResult<GeneOntologyAnnotationSummaryQuery, Exact<{
    gene: string;
}>>;
export declare function useGeneOntologyAnnotationSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GeneOntologyAnnotationSummaryQuery, GeneOntologyAnnotationSummaryQueryVariables>): Apollo.LazyQueryResultTuple<GeneOntologyAnnotationSummaryQuery, Exact<{
    gene: string;
}>>;
export type GeneOntologyAnnotationSummaryQueryHookResult = ReturnType<typeof useGeneOntologyAnnotationSummaryQuery>;
export type GeneOntologyAnnotationSummaryLazyQueryHookResult = ReturnType<typeof useGeneOntologyAnnotationSummaryLazyQuery>;
export type GeneOntologyAnnotationSummaryQueryResult = Apollo.QueryResult<GeneOntologyAnnotationSummaryQuery, GeneOntologyAnnotationSummaryQueryVariables>;
export declare const ListPublicationsWithGeneSummaryDocument: Apollo.DocumentNode;
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
export declare function useListPublicationsWithGeneSummaryQuery(baseOptions: Apollo.QueryHookOptions<ListPublicationsWithGeneSummaryQuery, ListPublicationsWithGeneSummaryQueryVariables>): Apollo.QueryResult<ListPublicationsWithGeneSummaryQuery, Exact<{
    gene: string;
}>>;
export declare function useListPublicationsWithGeneSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPublicationsWithGeneSummaryQuery, ListPublicationsWithGeneSummaryQueryVariables>): Apollo.LazyQueryResultTuple<ListPublicationsWithGeneSummaryQuery, Exact<{
    gene: string;
}>>;
export type ListPublicationsWithGeneSummaryQueryHookResult = ReturnType<typeof useListPublicationsWithGeneSummaryQuery>;
export type ListPublicationsWithGeneSummaryLazyQueryHookResult = ReturnType<typeof useListPublicationsWithGeneSummaryLazyQuery>;
export type ListPublicationsWithGeneSummaryQueryResult = Apollo.QueryResult<ListPublicationsWithGeneSummaryQuery, ListPublicationsWithGeneSummaryQueryVariables>;
export declare const GeneOntologyAnnotationDocument: Apollo.DocumentNode;
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
export declare function useGeneOntologyAnnotationQuery(baseOptions: Apollo.QueryHookOptions<GeneOntologyAnnotationQuery, GeneOntologyAnnotationQueryVariables>): Apollo.QueryResult<GeneOntologyAnnotationQuery, Exact<{
    gene: string;
}>>;
export declare function useGeneOntologyAnnotationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GeneOntologyAnnotationQuery, GeneOntologyAnnotationQueryVariables>): Apollo.LazyQueryResultTuple<GeneOntologyAnnotationQuery, Exact<{
    gene: string;
}>>;
export type GeneOntologyAnnotationQueryHookResult = ReturnType<typeof useGeneOntologyAnnotationQuery>;
export type GeneOntologyAnnotationLazyQueryHookResult = ReturnType<typeof useGeneOntologyAnnotationLazyQuery>;
export type GeneOntologyAnnotationQueryResult = Apollo.QueryResult<GeneOntologyAnnotationQuery, GeneOntologyAnnotationQueryVariables>;
export declare const ListStrainsWithGeneDocument: Apollo.DocumentNode;
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
export declare function useListStrainsWithGeneQuery(baseOptions: Apollo.QueryHookOptions<ListStrainsWithGeneQuery, ListStrainsWithGeneQueryVariables>): Apollo.QueryResult<ListStrainsWithGeneQuery, Exact<{
    gene: string;
}>>;
export declare function useListStrainsWithGeneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStrainsWithGeneQuery, ListStrainsWithGeneQueryVariables>): Apollo.LazyQueryResultTuple<ListStrainsWithGeneQuery, Exact<{
    gene: string;
}>>;
export type ListStrainsWithGeneQueryHookResult = ReturnType<typeof useListStrainsWithGeneQuery>;
export type ListStrainsWithGeneLazyQueryHookResult = ReturnType<typeof useListStrainsWithGeneLazyQuery>;
export type ListStrainsWithGeneQueryResult = Apollo.QueryResult<ListStrainsWithGeneQuery, ListStrainsWithGeneQueryVariables>;
export declare const PublicationDocument: Apollo.DocumentNode;
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
export declare function usePublicationQuery(baseOptions: Apollo.QueryHookOptions<PublicationQuery, PublicationQueryVariables>): Apollo.QueryResult<PublicationQuery, Exact<{
    id: string;
}>>;
export declare function usePublicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>): Apollo.LazyQueryResultTuple<PublicationQuery, Exact<{
    id: string;
}>>;
export type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>;
export type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>;
export type PublicationQueryResult = Apollo.QueryResult<PublicationQuery, PublicationQueryVariables>;
export declare const ListRecentPublicationsDocument: Apollo.DocumentNode;
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
export declare function useListRecentPublicationsQuery(baseOptions?: Apollo.QueryHookOptions<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>): Apollo.QueryResult<ListRecentPublicationsQuery, Exact<{
    limit?: number | undefined;
}>>;
export declare function useListRecentPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>): Apollo.LazyQueryResultTuple<ListRecentPublicationsQuery, Exact<{
    limit?: number | undefined;
}>>;
export type ListRecentPublicationsQueryHookResult = ReturnType<typeof useListRecentPublicationsQuery>;
export type ListRecentPublicationsLazyQueryHookResult = ReturnType<typeof useListRecentPublicationsLazyQuery>;
export type ListRecentPublicationsQueryResult = Apollo.QueryResult<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>;
export declare const ListPublicationsWithGeneDocument: Apollo.DocumentNode;
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
export declare function useListPublicationsWithGeneQuery(baseOptions: Apollo.QueryHookOptions<ListPublicationsWithGeneQuery, ListPublicationsWithGeneQueryVariables>): Apollo.QueryResult<ListPublicationsWithGeneQuery, Exact<{
    gene: string;
}>>;
export declare function useListPublicationsWithGeneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPublicationsWithGeneQuery, ListPublicationsWithGeneQueryVariables>): Apollo.LazyQueryResultTuple<ListPublicationsWithGeneQuery, Exact<{
    gene: string;
}>>;
export type ListPublicationsWithGeneQueryHookResult = ReturnType<typeof useListPublicationsWithGeneQuery>;
export type ListPublicationsWithGeneLazyQueryHookResult = ReturnType<typeof useListPublicationsWithGeneLazyQuery>;
export type ListPublicationsWithGeneQueryResult = Apollo.QueryResult<ListPublicationsWithGeneQuery, ListPublicationsWithGeneQueryVariables>;
export declare const StrainListDocument: Apollo.DocumentNode;
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
export declare function useStrainListQuery(baseOptions: Apollo.QueryHookOptions<StrainListQuery, StrainListQueryVariables>): Apollo.QueryResult<StrainListQuery, Exact<{
    cursor: number;
    limit: number;
    filter?: InputMaybe<StrainListFilter> | undefined;
}>>;
export declare function useStrainListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StrainListQuery, StrainListQueryVariables>): Apollo.LazyQueryResultTuple<StrainListQuery, Exact<{
    cursor: number;
    limit: number;
    filter?: InputMaybe<StrainListFilter> | undefined;
}>>;
export type StrainListQueryHookResult = ReturnType<typeof useStrainListQuery>;
export type StrainListLazyQueryHookResult = ReturnType<typeof useStrainListLazyQuery>;
export type StrainListQueryResult = Apollo.QueryResult<StrainListQuery, StrainListQueryVariables>;
export declare const ListStrainsWithPhenotypeDocument: Apollo.DocumentNode;
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
export declare function useListStrainsWithPhenotypeQuery(baseOptions: Apollo.QueryHookOptions<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>): Apollo.QueryResult<ListStrainsWithPhenotypeQuery, Exact<{
    cursor: number;
    limit: number;
    type: string;
    annotation: string;
}>>;
export declare function useListStrainsWithPhenotypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>): Apollo.LazyQueryResultTuple<ListStrainsWithPhenotypeQuery, Exact<{
    cursor: number;
    limit: number;
    type: string;
    annotation: string;
}>>;
export type ListStrainsWithPhenotypeQueryHookResult = ReturnType<typeof useListStrainsWithPhenotypeQuery>;
export type ListStrainsWithPhenotypeLazyQueryHookResult = ReturnType<typeof useListStrainsWithPhenotypeLazyQuery>;
export type ListStrainsWithPhenotypeQueryResult = Apollo.QueryResult<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>;
export declare const ListBacterialStrainsDocument: Apollo.DocumentNode;
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
export declare function useListBacterialStrainsQuery(baseOptions?: Apollo.QueryHookOptions<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>): Apollo.QueryResult<ListBacterialStrainsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useListBacterialStrainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>): Apollo.LazyQueryResultTuple<ListBacterialStrainsQuery, Exact<{
    [key: string]: never;
}>>;
export type ListBacterialStrainsQueryHookResult = ReturnType<typeof useListBacterialStrainsQuery>;
export type ListBacterialStrainsLazyQueryHookResult = ReturnType<typeof useListBacterialStrainsLazyQuery>;
export type ListBacterialStrainsQueryResult = Apollo.QueryResult<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>;
export declare const ListStrainsInventoryDocument: Apollo.DocumentNode;
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
export declare function useListStrainsInventoryQuery(baseOptions: Apollo.QueryHookOptions<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>): Apollo.QueryResult<ListStrainsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
export declare function useListStrainsInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>): Apollo.LazyQueryResultTuple<ListStrainsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
export type ListStrainsInventoryQueryHookResult = ReturnType<typeof useListStrainsInventoryQuery>;
export type ListStrainsInventoryLazyQueryHookResult = ReturnType<typeof useListStrainsInventoryLazyQuery>;
export type ListStrainsInventoryQueryResult = Apollo.QueryResult<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>;
export declare const ListPlasmidsInventoryDocument: Apollo.DocumentNode;
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
export declare function useListPlasmidsInventoryQuery(baseOptions: Apollo.QueryHookOptions<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>): Apollo.QueryResult<ListPlasmidsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
export declare function useListPlasmidsInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>): Apollo.LazyQueryResultTuple<ListPlasmidsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
export type ListPlasmidsInventoryQueryHookResult = ReturnType<typeof useListPlasmidsInventoryQuery>;
export type ListPlasmidsInventoryLazyQueryHookResult = ReturnType<typeof useListPlasmidsInventoryLazyQuery>;
export type ListPlasmidsInventoryQueryResult = Apollo.QueryResult<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>;
export declare const PlasmidListFilterDocument: Apollo.DocumentNode;
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
export declare function usePlasmidListFilterQuery(baseOptions: Apollo.QueryHookOptions<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>): Apollo.QueryResult<PlasmidListFilterQuery, Exact<{
    cursor: number;
    limit: number;
    filter: string;
}>>;
export declare function usePlasmidListFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>): Apollo.LazyQueryResultTuple<PlasmidListFilterQuery, Exact<{
    cursor: number;
    limit: number;
    filter: string;
}>>;
export type PlasmidListFilterQueryHookResult = ReturnType<typeof usePlasmidListFilterQuery>;
export type PlasmidListFilterLazyQueryHookResult = ReturnType<typeof usePlasmidListFilterLazyQuery>;
export type PlasmidListFilterQueryResult = Apollo.QueryResult<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>;
export declare const PlasmidDocument: Apollo.DocumentNode;
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
export declare function usePlasmidQuery(baseOptions: Apollo.QueryHookOptions<PlasmidQuery, PlasmidQueryVariables>): Apollo.QueryResult<PlasmidQuery, Exact<{
    id: string;
}>>;
export declare function usePlasmidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlasmidQuery, PlasmidQueryVariables>): Apollo.LazyQueryResultTuple<PlasmidQuery, Exact<{
    id: string;
}>>;
export type PlasmidQueryHookResult = ReturnType<typeof usePlasmidQuery>;
export type PlasmidLazyQueryHookResult = ReturnType<typeof usePlasmidLazyQuery>;
export type PlasmidQueryResult = Apollo.QueryResult<PlasmidQuery, PlasmidQueryVariables>;
export declare const StrainDocument: Apollo.DocumentNode;
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
export declare function useStrainQuery(baseOptions: Apollo.QueryHookOptions<StrainQuery, StrainQueryVariables>): Apollo.QueryResult<StrainQuery, Exact<{
    id: string;
}>>;
export declare function useStrainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StrainQuery, StrainQueryVariables>): Apollo.LazyQueryResultTuple<StrainQuery, Exact<{
    id: string;
}>>;
export type StrainQueryHookResult = ReturnType<typeof useStrainQuery>;
export type StrainLazyQueryHookResult = ReturnType<typeof useStrainLazyQuery>;
export type StrainQueryResult = Apollo.QueryResult<StrainQuery, StrainQueryVariables>;
export declare const ListRecentPlasmidsDocument: Apollo.DocumentNode;
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
export declare function useListRecentPlasmidsQuery(baseOptions?: Apollo.QueryHookOptions<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>): Apollo.QueryResult<ListRecentPlasmidsQuery, Exact<{
    limit?: number | undefined;
}>>;
export declare function useListRecentPlasmidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>): Apollo.LazyQueryResultTuple<ListRecentPlasmidsQuery, Exact<{
    limit?: number | undefined;
}>>;
export type ListRecentPlasmidsQueryHookResult = ReturnType<typeof useListRecentPlasmidsQuery>;
export type ListRecentPlasmidsLazyQueryHookResult = ReturnType<typeof useListRecentPlasmidsLazyQuery>;
export type ListRecentPlasmidsQueryResult = Apollo.QueryResult<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>;
export declare const ListRecentStrainsDocument: Apollo.DocumentNode;
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
export declare function useListRecentStrainsQuery(baseOptions?: Apollo.QueryHookOptions<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>): Apollo.QueryResult<ListRecentStrainsQuery, Exact<{
    limit?: number | undefined;
}>>;
export declare function useListRecentStrainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>): Apollo.LazyQueryResultTuple<ListRecentStrainsQuery, Exact<{
    limit?: number | undefined;
}>>;
export type ListRecentStrainsQueryHookResult = ReturnType<typeof useListRecentStrainsQuery>;
export type ListRecentStrainsLazyQueryHookResult = ReturnType<typeof useListRecentStrainsLazyQuery>;
export type ListRecentStrainsQueryResult = Apollo.QueryResult<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>;
export declare const ListPhenotypesDocument: Apollo.DocumentNode;
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
export declare function useListPhenotypesQuery(baseOptions: Apollo.QueryHookOptions<ListPhenotypesQuery, ListPhenotypesQueryVariables>): Apollo.QueryResult<ListPhenotypesQuery, Exact<{
    search: string;
}>>;
export declare function useListPhenotypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPhenotypesQuery, ListPhenotypesQueryVariables>): Apollo.LazyQueryResultTuple<ListPhenotypesQuery, Exact<{
    search: string;
}>>;
export type ListPhenotypesQueryHookResult = ReturnType<typeof useListPhenotypesQuery>;
export type ListPhenotypesLazyQueryHookResult = ReturnType<typeof useListPhenotypesLazyQuery>;
export type ListPhenotypesQueryResult = Apollo.QueryResult<ListPhenotypesQuery, ListPhenotypesQueryVariables>;
export declare const ListPhenotypeEnvironmentsDocument: Apollo.DocumentNode;
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
export declare function useListPhenotypeEnvironmentsQuery(baseOptions: Apollo.QueryHookOptions<ListPhenotypeEnvironmentsQuery, ListPhenotypeEnvironmentsQueryVariables>): Apollo.QueryResult<ListPhenotypeEnvironmentsQuery, Exact<{
    search: string;
}>>;
export declare function useListPhenotypeEnvironmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPhenotypeEnvironmentsQuery, ListPhenotypeEnvironmentsQueryVariables>): Apollo.LazyQueryResultTuple<ListPhenotypeEnvironmentsQuery, Exact<{
    search: string;
}>>;
export type ListPhenotypeEnvironmentsQueryHookResult = ReturnType<typeof useListPhenotypeEnvironmentsQuery>;
export type ListPhenotypeEnvironmentsLazyQueryHookResult = ReturnType<typeof useListPhenotypeEnvironmentsLazyQuery>;
export type ListPhenotypeEnvironmentsQueryResult = Apollo.QueryResult<ListPhenotypeEnvironmentsQuery, ListPhenotypeEnvironmentsQueryVariables>;
export declare const ListPhenotypeAssaysDocument: Apollo.DocumentNode;
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
export declare function useListPhenotypeAssaysQuery(baseOptions: Apollo.QueryHookOptions<ListPhenotypeAssaysQuery, ListPhenotypeAssaysQueryVariables>): Apollo.QueryResult<ListPhenotypeAssaysQuery, Exact<{
    search: string;
}>>;
export declare function useListPhenotypeAssaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPhenotypeAssaysQuery, ListPhenotypeAssaysQueryVariables>): Apollo.LazyQueryResultTuple<ListPhenotypeAssaysQuery, Exact<{
    search: string;
}>>;
export type ListPhenotypeAssaysQueryHookResult = ReturnType<typeof useListPhenotypeAssaysQuery>;
export type ListPhenotypeAssaysLazyQueryHookResult = ReturnType<typeof useListPhenotypeAssaysLazyQuery>;
export type ListPhenotypeAssaysQueryResult = Apollo.QueryResult<ListPhenotypeAssaysQuery, ListPhenotypeAssaysQueryVariables>;
export declare const UserByEmailDocument: Apollo.DocumentNode;
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
export declare function useUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>): Apollo.QueryResult<UserByEmailQuery, Exact<{
    email: string;
}>>;
export declare function useUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>): Apollo.LazyQueryResultTuple<UserByEmailQuery, Exact<{
    email: string;
}>>;
export type UserByEmailQueryHookResult = ReturnType<typeof useUserByEmailQuery>;
export type UserByEmailLazyQueryHookResult = ReturnType<typeof useUserByEmailLazyQuery>;
export type UserByEmailQueryResult = Apollo.QueryResult<UserByEmailQuery, UserByEmailQueryVariables>;
