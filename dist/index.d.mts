import * as Apollo from '@apollo/client';

type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Timestamp: any;
};
type AssociatedSequences = {
    __typename?: 'AssociatedSequences';
    ests: Array<NameWithLink>;
    genbank_genomic_fragment?: Maybe<NameWithLink>;
    genbank_mrna?: Maybe<NameWithLink>;
    more_link: Scalars['String'];
};
type Auth = {
    __typename?: 'Auth';
    identity: Identity;
    token: Scalars['String'];
    user: User;
};
type Author = {
    __typename?: 'Author';
    first_name?: Maybe<Scalars['String']>;
    initials?: Maybe<Scalars['String']>;
    last_name: Scalars['String'];
    rank?: Maybe<Scalars['String']>;
};
type BasePublication = {
    abstract: Scalars['String'];
    authors: Array<Author>;
    doi?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    issn?: Maybe<Scalars['String']>;
    issue?: Maybe<Scalars['String']>;
    journal: Scalars['String'];
    pages?: Maybe<Scalars['String']>;
    pub_date?: Maybe<Scalars['Timestamp']>;
    pub_type: Scalars['String'];
    source: Scalars['String'];
    status?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    volume?: Maybe<Scalars['String']>;
};
type Citation = {
    __typename?: 'Citation';
    authors: Scalars['String'];
    journal: Scalars['String'];
    pubmed_id: Scalars['String'];
    title: Scalars['String'];
};
type Content = {
    __typename?: 'Content';
    content: Scalars['String'];
    created_at: Scalars['Timestamp'];
    created_by: User;
    id: Scalars['ID'];
    name: Scalars['String'];
    namespace: Scalars['String'];
    slug: Scalars['String'];
    updated_at: Scalars['Timestamp'];
    updated_by: User;
};
type CreateContentInput = {
    content: Scalars['String'];
    created_by: Scalars['String'];
    name: Scalars['String'];
    namespace: Scalars['String'];
};
type CreateOrderInput = {
    comments?: InputMaybe<Scalars['String']>;
    consumer: Scalars['String'];
    courier: Scalars['String'];
    courier_account: Scalars['String'];
    items: Array<Scalars['String']>;
    payer: Scalars['String'];
    payment: Scalars['String'];
    purchase_order_num?: InputMaybe<Scalars['String']>;
    purchaser: Scalars['String'];
    status: StatusEnum;
};
type CreatePermissionInput = {
    description: Scalars['String'];
    permission: Scalars['String'];
    resource: Scalars['String'];
};
type CreatePlasmidInput = {
    created_by: Scalars['String'];
    dbxrefs?: InputMaybe<Array<Scalars['String']>>;
    depositor?: InputMaybe<Scalars['String']>;
    editable_summary?: InputMaybe<Scalars['String']>;
    genbank_accession?: InputMaybe<Scalars['String']>;
    genes?: InputMaybe<Array<Scalars['String']>>;
    image_map?: InputMaybe<Scalars['String']>;
    in_stock: Scalars['Boolean'];
    keywords?: InputMaybe<Array<Scalars['String']>>;
    name: Scalars['String'];
    publications?: InputMaybe<Array<Scalars['String']>>;
    sequence?: InputMaybe<Scalars['String']>;
    summary?: InputMaybe<Scalars['String']>;
    updated_by: Scalars['String'];
};
type CreateRoleInput = {
    description: Scalars['String'];
    role: Scalars['String'];
};
type CreateStrainInput = {
    characteristics?: InputMaybe<Array<Scalars['String']>>;
    created_by: Scalars['String'];
    dbxrefs?: InputMaybe<Array<Scalars['String']>>;
    depositor?: InputMaybe<Scalars['String']>;
    editable_summary?: InputMaybe<Scalars['String']>;
    genes?: InputMaybe<Array<Scalars['String']>>;
    genetic_modification?: InputMaybe<Scalars['String']>;
    genotypes?: InputMaybe<Array<Scalars['String']>>;
    in_stock: Scalars['Boolean'];
    label: Scalars['String'];
    mutagenesis_method?: InputMaybe<Scalars['String']>;
    names?: InputMaybe<Array<Scalars['String']>>;
    parent?: InputMaybe<Scalars['String']>;
    phenotypes?: InputMaybe<Array<Scalars['String']>>;
    plasmid?: InputMaybe<Scalars['String']>;
    publications?: InputMaybe<Array<Scalars['String']>>;
    species: Scalars['String'];
    summary?: InputMaybe<Scalars['String']>;
    systematic_name: Scalars['String'];
    updated_by: Scalars['String'];
};
type CreateUserInput = {
    city?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    first_address?: InputMaybe<Scalars['String']>;
    first_name: Scalars['String'];
    group_name?: InputMaybe<Scalars['String']>;
    is_active: Scalars['Boolean'];
    last_name: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    second_address?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    zipcode?: InputMaybe<Scalars['String']>;
};
type DeleteContent = {
    __typename?: 'DeleteContent';
    success: Scalars['Boolean'];
};
type DeletePermission = {
    __typename?: 'DeletePermission';
    success: Scalars['Boolean'];
};
type DeleteRole = {
    __typename?: 'DeleteRole';
    success: Scalars['Boolean'];
};
type DeleteStock = {
    __typename?: 'DeleteStock';
    success: Scalars['Boolean'];
};
type DeleteUser = {
    __typename?: 'DeleteUser';
    success: Scalars['Boolean'];
};
type Download = {
    __typename?: 'Download';
    items: Array<DownloadItem>;
    title: Scalars['String'];
};
type DownloadItem = {
    __typename?: 'DownloadItem';
    title: Scalars['String'];
    url: Scalars['String'];
};
type Extension = {
    __typename?: 'Extension';
    db: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
    relation: Scalars['String'];
};
type GoAnnotation = {
    __typename?: 'GOAnnotation';
    assigned_by: Scalars['String'];
    date: Scalars['String'];
    evidence_code: Scalars['String'];
    extensions?: Maybe<Array<Extension>>;
    go_term: Scalars['String'];
    id: Scalars['String'];
    publication: Scalars['String'];
    qualifier: Scalars['String'];
    type: Scalars['String'];
    with?: Maybe<Array<With>>;
};
type Gene = {
    __typename?: 'Gene';
    associated_sequences: AssociatedSequences;
    general_info: GeneralInfo;
    goas?: Maybe<Array<GoAnnotation>>;
    id: Scalars['String'];
    links: Links;
    name: Scalars['String'];
    orthologs?: Maybe<Array<Orthologs>>;
    product_info?: Maybe<Array<ProductInformation>>;
    protein_information?: Maybe<ProteinInformation>;
    strains?: Maybe<Array<Strain>>;
};
type GeneralInfo = {
    __typename?: 'GeneralInfo';
    alt_gene_name?: Maybe<Array<Scalars['String']>>;
    alt_protein_names?: Maybe<Array<Scalars['String']>>;
    description: Scalars['String'];
    gene_product: Scalars['String'];
    name_description: Array<Scalars['String']>;
};
type GenomicCoordinates = {
    __typename?: 'GenomicCoordinates';
    chrom_coords: Scalars['String'];
    exon: Scalars['String'];
    local_coords: Scalars['String'];
};
type Identity = {
    __typename?: 'Identity';
    created_at: Scalars['Timestamp'];
    id: Scalars['ID'];
    identifier: Scalars['String'];
    provider: Scalars['String'];
    updated_at: Scalars['Timestamp'];
    user_id: Scalars['ID'];
};
type Links = {
    __typename?: 'Links';
    colleagues: NameWithLink;
    expression: Array<NameWithLink>;
    ext_resources: Array<NameWithLink>;
};
type LoginInput = {
    client_id: Scalars['String'];
    code: Scalars['String'];
    provider: Scalars['String'];
    redirect_url: Scalars['String'];
    scopes: Scalars['String'];
    state: Scalars['String'];
};
type Logout = {
    __typename?: 'Logout';
    success: Scalars['Boolean'];
};
type Mutation = {
    __typename?: 'Mutation';
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
    deleteUser?: Maybe<DeleteUser>;
    login?: Maybe<Auth>;
    logout?: Maybe<Logout>;
    updateContent?: Maybe<Content>;
    updateOrder?: Maybe<Order>;
    updatePermission?: Maybe<Permission>;
    updatePlasmid?: Maybe<Plasmid>;
    updateRole?: Maybe<Role>;
    updateStrain?: Maybe<Strain>;
    updateUser?: Maybe<User>;
};
type MutationCreateContentArgs = {
    input?: InputMaybe<CreateContentInput>;
};
type MutationCreateOrderArgs = {
    input?: InputMaybe<CreateOrderInput>;
};
type MutationCreatePermissionArgs = {
    input?: InputMaybe<CreatePermissionInput>;
};
type MutationCreatePlasmidArgs = {
    input?: InputMaybe<CreatePlasmidInput>;
};
type MutationCreateRoleArgs = {
    input?: InputMaybe<CreateRoleInput>;
};
type MutationCreateRolePermissionRelationshipArgs = {
    permissionId: Scalars['ID'];
    roleId: Scalars['ID'];
};
type MutationCreateStrainArgs = {
    input?: InputMaybe<CreateStrainInput>;
};
type MutationCreateUserArgs = {
    input?: InputMaybe<CreateUserInput>;
};
type MutationCreateUserRoleRelationshipArgs = {
    roleId: Scalars['ID'];
    userId: Scalars['ID'];
};
type MutationDeleteContentArgs = {
    id: Scalars['ID'];
};
type MutationDeletePermissionArgs = {
    id: Scalars['ID'];
};
type MutationDeleteRoleArgs = {
    id: Scalars['ID'];
};
type MutationDeleteStockArgs = {
    id: Scalars['ID'];
};
type MutationDeleteUserArgs = {
    id: Scalars['ID'];
};
type MutationLoginArgs = {
    input?: InputMaybe<LoginInput>;
};
type MutationUpdateContentArgs = {
    input?: InputMaybe<UpdateContentInput>;
};
type MutationUpdateOrderArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<UpdateOrderInput>;
};
type MutationUpdatePermissionArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<UpdatePermissionInput>;
};
type MutationUpdatePlasmidArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<UpdatePlasmidInput>;
};
type MutationUpdateRoleArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<UpdateRoleInput>;
};
type MutationUpdateStrainArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<UpdateStrainInput>;
};
type MutationUpdateUserArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<UpdateUserInput>;
};
type NameWithLink = {
    __typename?: 'NameWithLink';
    link: Scalars['String'];
    name: Scalars['String'];
};
type NumberOfPublicationsWithGene = {
    __typename?: 'NumberOfPublicationsWithGene';
    num_pubs: Scalars['Int'];
    publications: Array<PublicationWithGene>;
};
type Order = {
    __typename?: 'Order';
    comments?: Maybe<Scalars['String']>;
    consumer?: Maybe<User>;
    courier?: Maybe<Scalars['String']>;
    courier_account?: Maybe<Scalars['String']>;
    created_at: Scalars['Timestamp'];
    id: Scalars['ID'];
    items?: Maybe<Array<Stock>>;
    payer?: Maybe<User>;
    payment?: Maybe<Scalars['String']>;
    purchase_order_num?: Maybe<Scalars['String']>;
    purchaser?: Maybe<User>;
    status?: Maybe<StatusEnum>;
    updated_at: Scalars['Timestamp'];
};
type OrderListWithCursor = {
    __typename?: 'OrderListWithCursor';
    limit?: Maybe<Scalars['Int']>;
    nextCursor: Scalars['Int'];
    orders: Array<Order>;
    previousCursor: Scalars['Int'];
    totalCount: Scalars['Int'];
};
type Organism = {
    __typename?: 'Organism';
    citations: Array<Citation>;
    downloads: Array<Download>;
    scientific_name: Scalars['String'];
    taxon_id: Scalars['String'];
};
type Orthologs = {
    __typename?: 'Orthologs';
    gene_product: Scalars['String'];
    id: NameWithLink;
    source: Array<Scalars['String']>;
    species: Scalars['String'];
    uniprotkb: NameWithLink;
};
type Permission = {
    __typename?: 'Permission';
    created_at: Scalars['Timestamp'];
    description: Scalars['String'];
    id: Scalars['ID'];
    permission: Scalars['String'];
    resource?: Maybe<Scalars['String']>;
    updated_at: Scalars['Timestamp'];
};
type Phenotype = {
    __typename?: 'Phenotype';
    assay?: Maybe<Scalars['String']>;
    environment?: Maybe<Scalars['String']>;
    note?: Maybe<Scalars['String']>;
    phenotype: Scalars['String'];
    publication?: Maybe<Publication>;
};
type Plasmid = Stock & {
    __typename?: 'Plasmid';
    created_at: Scalars['Timestamp'];
    created_by: User;
    dbxrefs?: Maybe<Array<Scalars['String']>>;
    depositor: User;
    editable_summary?: Maybe<Scalars['String']>;
    genbank_accession?: Maybe<Scalars['String']>;
    genes?: Maybe<Array<Gene>>;
    id: Scalars['ID'];
    image_map?: Maybe<Scalars['String']>;
    in_stock: Scalars['Boolean'];
    keywords?: Maybe<Array<Scalars['String']>>;
    name: Scalars['String'];
    publications?: Maybe<Array<Publication>>;
    sequence?: Maybe<Scalars['String']>;
    summary?: Maybe<Scalars['String']>;
    updated_at: Scalars['Timestamp'];
    updated_by: User;
};
type PlasmidListWithCursor = {
    __typename?: 'PlasmidListWithCursor';
    limit?: Maybe<Scalars['Int']>;
    nextCursor: Scalars['Int'];
    plasmids: Array<Plasmid>;
    previousCursor: Scalars['Int'];
    totalCount: Scalars['Int'];
};
type ProductInformation = {
    __typename?: 'ProductInformation';
    genomic_coords: Array<GenomicCoordinates>;
    more_protein_data: Scalars['String'];
    protein_coding_gene: NameWithLink;
    protein_length: Scalars['String'];
    protein_molecular_weight: Scalars['String'];
};
type ProteinGeneralInfo = {
    __typename?: 'ProteinGeneralInfo';
    aa_composition: NameWithLink;
    description: Scalars['String'];
    dictybase_id: Scalars['String'];
    gene_product: Scalars['String'];
    molecular_weight: Scalars['String'];
    note: Scalars['String'];
    protein_existence: Scalars['String'];
    protein_length: Scalars['String'];
    subcellular_location: Scalars['String'];
};
type ProteinInformation = {
    __typename?: 'ProteinInformation';
    external_links: Array<NameWithLink>;
    general_info: ProteinGeneralInfo;
    protein_sequence: Scalars['String'];
};
type Publication = BasePublication & {
    __typename?: 'Publication';
    abstract: Scalars['String'];
    authors: Array<Author>;
    doi?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    issn?: Maybe<Scalars['String']>;
    issue?: Maybe<Scalars['String']>;
    journal: Scalars['String'];
    pages?: Maybe<Scalars['String']>;
    pub_date?: Maybe<Scalars['Timestamp']>;
    pub_type: Scalars['String'];
    source: Scalars['String'];
    status?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    volume?: Maybe<Scalars['String']>;
};
type PublicationWithGene = BasePublication & {
    __typename?: 'PublicationWithGene';
    abstract: Scalars['String'];
    authors: Array<Author>;
    doi?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    issn?: Maybe<Scalars['String']>;
    issue?: Maybe<Scalars['String']>;
    journal: Scalars['String'];
    pages?: Maybe<Scalars['String']>;
    pub_date?: Maybe<Scalars['Timestamp']>;
    pub_type: Scalars['String'];
    related_genes: Array<Gene>;
    source: Scalars['String'];
    status?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    volume?: Maybe<Scalars['String']>;
};
type Query = {
    __typename?: 'Query';
    allOrthologs?: Maybe<Gene>;
    allPublications: NumberOfPublicationsWithGene;
    allStrains?: Maybe<Gene>;
    content?: Maybe<Content>;
    contentBySlug?: Maybe<Content>;
    gene?: Maybe<Gene>;
    generalInformation?: Maybe<Gene>;
    getAssociatedSequnces?: Maybe<Gene>;
    getLinks?: Maybe<Gene>;
    getProteinInformation?: Maybe<Gene>;
    getRefreshToken?: Maybe<Auth>;
    listGeneProductInfo?: Maybe<Gene>;
    listOrders?: Maybe<OrderListWithCursor>;
    listOrganisms?: Maybe<Array<Organism>>;
    listPermissions?: Maybe<Array<Permission>>;
    listPlasmids?: Maybe<PlasmidListWithCursor>;
    listPlasmidsWithAnnotation?: Maybe<PlasmidListWithCursor>;
    listRecentGenes?: Maybe<Array<Gene>>;
    listRecentPlasmids?: Maybe<Array<Plasmid>>;
    listRecentPublications?: Maybe<Array<Publication>>;
    listRecentStrains?: Maybe<Array<Strain>>;
    listRoles?: Maybe<Array<Role>>;
    listStrains?: Maybe<StrainListWithCursor>;
    listStrainsWithAnnotation?: Maybe<StrainListWithCursor>;
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
type QueryAllOrthologsArgs = {
    gene: Scalars['String'];
};
type QueryAllPublicationsArgs = {
    gene: Scalars['String'];
    limit?: InputMaybe<Scalars['Int']>;
    sort_by?: InputMaybe<Scalars['String']>;
};
type QueryAllStrainsArgs = {
    gene: Scalars['String'];
};
type QueryContentArgs = {
    id: Scalars['ID'];
};
type QueryContentBySlugArgs = {
    slug: Scalars['String'];
};
type QueryGeneArgs = {
    gene: Scalars['String'];
};
type QueryGeneralInformationArgs = {
    gene: Scalars['String'];
};
type QueryGetAssociatedSequncesArgs = {
    gene: Scalars['String'];
};
type QueryGetLinksArgs = {
    gene: Scalars['String'];
};
type QueryGetProteinInformationArgs = {
    gene: Scalars['String'];
};
type QueryGetRefreshTokenArgs = {
    token: Scalars['String'];
};
type QueryListGeneProductInfoArgs = {
    gene: Scalars['String'];
};
type QueryListOrdersArgs = {
    cursor?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Int']>;
};
type QueryListPlasmidsArgs = {
    cursor?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Int']>;
};
type QueryListPlasmidsWithAnnotationArgs = {
    annotation: Scalars['String'];
    cursor?: InputMaybe<Scalars['Int']>;
    limit?: InputMaybe<Scalars['Int']>;
    type: Scalars['String'];
};
type QueryListRecentGenesArgs = {
    limit: Scalars['Int'];
};
type QueryListRecentPlasmidsArgs = {
    limit: Scalars['Int'];
};
type QueryListRecentPublicationsArgs = {
    limit: Scalars['Int'];
};
type QueryListRecentStrainsArgs = {
    limit: Scalars['Int'];
};
type QueryListStrainsArgs = {
    cursor?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<StrainListFilter>;
    limit?: InputMaybe<Scalars['Int']>;
};
type QueryListStrainsWithAnnotationArgs = {
    annotation: Scalars['String'];
    cursor?: InputMaybe<Scalars['Int']>;
    limit?: InputMaybe<Scalars['Int']>;
    type: Scalars['String'];
};
type QueryListUsersArgs = {
    filter: Scalars['String'];
    pagenum: Scalars['String'];
    pagesize: Scalars['String'];
};
type QueryOrderArgs = {
    id: Scalars['ID'];
};
type QueryOrganismArgs = {
    taxon_id: Scalars['String'];
};
type QueryPermissionArgs = {
    id: Scalars['ID'];
};
type QueryPlasmidArgs = {
    id: Scalars['ID'];
};
type QueryPublicationArgs = {
    id: Scalars['ID'];
};
type QueryRoleArgs = {
    id: Scalars['ID'];
};
type QueryStrainArgs = {
    id: Scalars['ID'];
};
type QueryUserArgs = {
    id: Scalars['ID'];
};
type QueryUserByEmailArgs = {
    email: Scalars['String'];
};
type Role = {
    __typename?: 'Role';
    created_at: Scalars['Timestamp'];
    description: Scalars['String'];
    id: Scalars['ID'];
    permissions?: Maybe<Array<Permission>>;
    role: Scalars['String'];
    updated_at: Scalars['Timestamp'];
};
declare enum StatusEnum {
    Cancelled = "CANCELLED",
    Growing = "GROWING",
    InPreparation = "IN_PREPARATION",
    Shipped = "SHIPPED"
}
type Stock = {
    created_at: Scalars['Timestamp'];
    created_by: User;
    dbxrefs?: Maybe<Array<Scalars['String']>>;
    depositor: User;
    editable_summary?: Maybe<Scalars['String']>;
    genes?: Maybe<Array<Gene>>;
    id: Scalars['ID'];
    in_stock: Scalars['Boolean'];
    publications?: Maybe<Array<Publication>>;
    summary?: Maybe<Scalars['String']>;
    updated_at: Scalars['Timestamp'];
    updated_by: User;
};
type Strain = Stock & {
    __typename?: 'Strain';
    characteristics?: Maybe<Array<Scalars['String']>>;
    created_at: Scalars['Timestamp'];
    created_by: User;
    dbxrefs?: Maybe<Array<Scalars['String']>>;
    depositor: User;
    editable_summary?: Maybe<Scalars['String']>;
    genes?: Maybe<Array<Gene>>;
    genetic_modification?: Maybe<Scalars['String']>;
    genotypes?: Maybe<Array<Scalars['String']>>;
    id: Scalars['ID'];
    in_stock: Scalars['Boolean'];
    label: Scalars['String'];
    mutagenesis_method?: Maybe<Scalars['String']>;
    names?: Maybe<Array<Scalars['String']>>;
    parent?: Maybe<Strain>;
    phenotypes?: Maybe<Array<Phenotype>>;
    plasmid?: Maybe<Scalars['String']>;
    publications?: Maybe<Array<Publication>>;
    species: Scalars['String'];
    summary?: Maybe<Scalars['String']>;
    systematic_name: Scalars['String'];
    updated_at: Scalars['Timestamp'];
    updated_by: User;
};
type StrainListFilter = {
    id?: InputMaybe<Scalars['ID']>;
    in_stock?: InputMaybe<Scalars['Boolean']>;
    label?: InputMaybe<Scalars['String']>;
    strain_type: StrainType;
    summary?: InputMaybe<Scalars['String']>;
};
type StrainListWithCursor = {
    __typename?: 'StrainListWithCursor';
    limit?: Maybe<Scalars['Int']>;
    nextCursor: Scalars['Int'];
    previousCursor: Scalars['Int'];
    strains: Array<Strain>;
    totalCount: Scalars['Int'];
};
declare enum StrainType {
    All = "ALL",
    Bacterial = "BACTERIAL",
    Gwdi = "GWDI",
    Regular = "REGULAR"
}
type UpdateContentInput = {
    content: Scalars['String'];
    id: Scalars['ID'];
    updated_by: Scalars['String'];
};
type UpdateOrderInput = {
    comments?: InputMaybe<Scalars['String']>;
    courier?: InputMaybe<Scalars['String']>;
    courier_account?: InputMaybe<Scalars['String']>;
    items?: InputMaybe<Array<Scalars['String']>>;
    payment?: InputMaybe<Scalars['String']>;
    purchase_order_num?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<StatusEnum>;
};
type UpdatePermissionInput = {
    description: Scalars['String'];
    permission: Scalars['String'];
    resource: Scalars['String'];
};
type UpdatePlasmidInput = {
    dbxrefs?: InputMaybe<Array<Scalars['String']>>;
    depositor?: InputMaybe<Scalars['String']>;
    editable_summary?: InputMaybe<Scalars['String']>;
    genbank_accession?: InputMaybe<Scalars['String']>;
    genes?: InputMaybe<Array<Scalars['String']>>;
    image_map?: InputMaybe<Scalars['String']>;
    in_stock?: InputMaybe<Scalars['Boolean']>;
    keywords?: InputMaybe<Array<Scalars['String']>>;
    name?: InputMaybe<Scalars['String']>;
    publications?: InputMaybe<Array<Scalars['String']>>;
    sequence?: InputMaybe<Scalars['String']>;
    summary?: InputMaybe<Scalars['String']>;
    updated_by: Scalars['String'];
};
type UpdateRoleInput = {
    description: Scalars['String'];
    role: Scalars['String'];
};
type UpdateStrainInput = {
    characteristics?: InputMaybe<Array<Scalars['String']>>;
    dbxrefs?: InputMaybe<Array<Scalars['String']>>;
    depositor?: InputMaybe<Scalars['String']>;
    editable_summary?: InputMaybe<Scalars['String']>;
    genes?: InputMaybe<Array<Scalars['String']>>;
    genetic_modification?: InputMaybe<Scalars['String']>;
    genotypes?: InputMaybe<Array<Scalars['String']>>;
    in_stock?: InputMaybe<Scalars['Boolean']>;
    label?: InputMaybe<Scalars['String']>;
    mutagenesis_method?: InputMaybe<Scalars['String']>;
    names?: InputMaybe<Array<Scalars['String']>>;
    parent?: InputMaybe<Scalars['String']>;
    phenotypes?: InputMaybe<Array<Scalars['String']>>;
    plasmid?: InputMaybe<Scalars['String']>;
    publications?: InputMaybe<Array<Scalars['String']>>;
    species?: InputMaybe<Scalars['String']>;
    summary?: InputMaybe<Scalars['String']>;
    systematic_name?: InputMaybe<Scalars['String']>;
    updated_by: Scalars['String'];
};
type UpdateUserInput = {
    city?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    first_address?: InputMaybe<Scalars['String']>;
    first_name?: InputMaybe<Scalars['String']>;
    group_name?: InputMaybe<Scalars['String']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    last_name?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    second_address?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    zipcode?: InputMaybe<Scalars['String']>;
};
type User = {
    __typename?: 'User';
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    created_at: Scalars['Timestamp'];
    email: Scalars['String'];
    first_address?: Maybe<Scalars['String']>;
    first_name: Scalars['String'];
    group_name?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    is_active: Scalars['Boolean'];
    last_name: Scalars['String'];
    organization?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    roles?: Maybe<Array<Role>>;
    second_address?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    updated_at: Scalars['Timestamp'];
    zipcode?: Maybe<Scalars['String']>;
};
type UserList = {
    __typename?: 'UserList';
    pageNum?: Maybe<Scalars['String']>;
    pageSize?: Maybe<Scalars['String']>;
    totalCount: Scalars['Int'];
    users: Array<User>;
};
type With = {
    __typename?: 'With';
    db: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
};
type LoginMutationVariables = Exact<{
    input: LoginInput;
}>;
type LoginMutation = {
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
type LogoutMutationVariables = Exact<{
    [key: string]: never;
}>;
type LogoutMutation = {
    __typename?: 'Mutation';
    logout?: {
        __typename?: 'Logout';
        success: boolean;
    } | null;
};
type CreateContentMutationVariables = Exact<{
    input: CreateContentInput;
}>;
type CreateContentMutation = {
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
type UpdateContentMutationVariables = Exact<{
    input: UpdateContentInput;
}>;
type UpdateContentMutation = {
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
type CreateOrderMutationVariables = Exact<{
    input: CreateOrderInput;
}>;
type CreateOrderMutation = {
    __typename?: 'Mutation';
    createOrder?: {
        __typename?: 'Order';
        id: string;
    } | null;
};
type CreateUserMutationVariables = Exact<{
    input: CreateUserInput;
}>;
type CreateUserMutation = {
    __typename?: 'Mutation';
    createUser?: {
        __typename?: 'User';
        id: string;
    } | null;
};
type UpdateUserMutationVariables = Exact<{
    id: Scalars['ID'];
    input: UpdateUserInput;
}>;
type UpdateUserMutation = {
    __typename?: 'Mutation';
    updateUser?: {
        __typename?: 'User';
        id: string;
    } | null;
};
type GetRefreshTokenQueryVariables = Exact<{
    token: Scalars['String'];
}>;
type GetRefreshTokenQuery = {
    __typename?: 'Query';
    getRefreshToken?: {
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
type ContentBySlugQueryVariables = Exact<{
    slug: Scalars['String'];
}>;
type ContentBySlugQuery = {
    __typename?: 'Query';
    contentBySlug?: {
        __typename?: 'Content';
        id: string;
        content: string;
        name: string;
        slug: string;
        created_at: any;
        updated_at: any;
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
type ContentQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
type ContentQuery = {
    __typename?: 'Query';
    content?: {
        __typename?: 'Content';
        id: string;
        content: string;
        name: string;
        slug: string;
        namespace: string;
        created_at: any;
        updated_at: any;
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
type ListOrganismsQueryVariables = Exact<{
    [key: string]: never;
}>;
type ListOrganismsQuery = {
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
type GeneQueryVariables = Exact<{
    gene: Scalars['String'];
    limit?: InputMaybe<Scalars['Int']>;
    sort_by?: InputMaybe<Scalars['String']>;
}>;
type GeneQuery = {
    __typename?: 'Query';
    allStrains?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        strains?: Array<{
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
                    pub_date?: any | null;
                    authors: Array<{
                        __typename?: 'Author';
                        last_name: string;
                        rank?: string | null;
                    }>;
                } | null;
            }> | null;
        }> | null;
    } | null;
    gene?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        goas?: Array<{
            __typename?: 'GOAnnotation';
            id: string;
            type: string;
            date: string;
            evidence_code: string;
            go_term: string;
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
    } | null;
    allPublications: {
        __typename?: 'NumberOfPublicationsWithGene';
        num_pubs: number;
        publications: Array<{
            __typename?: 'PublicationWithGene';
            id: string;
            doi?: string | null;
            title: string;
            journal: string;
            pub_date?: any | null;
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
    allOrthologs?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        orthologs?: Array<{
            __typename?: 'Orthologs';
            species: string;
            gene_product: string;
            source: Array<string>;
            id: {
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            };
            uniprotkb: {
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            };
        }> | null;
    } | null;
    listGeneProductInfo?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        product_info?: Array<{
            __typename?: 'ProductInformation';
            protein_length: string;
            protein_molecular_weight: string;
            more_protein_data: string;
            protein_coding_gene: {
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            };
            genomic_coords: Array<{
                __typename?: 'GenomicCoordinates';
                exon: string;
                local_coords: string;
                chrom_coords: string;
            }>;
        }> | null;
    } | null;
    generalInformation?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        general_info: {
            __typename?: 'GeneralInfo';
            name_description: Array<string>;
            alt_gene_name?: Array<string> | null;
            gene_product: string;
            alt_protein_names?: Array<string> | null;
            description: string;
        };
    } | null;
    getAssociatedSequnces?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        associated_sequences: {
            __typename?: 'AssociatedSequences';
            more_link: string;
            genbank_genomic_fragment?: {
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            } | null;
            genbank_mrna?: {
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            } | null;
            ests: Array<{
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            }>;
        };
    } | null;
    getLinks?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        links: {
            __typename?: 'Links';
            expression: Array<{
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            }>;
            colleagues: {
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            };
            ext_resources: Array<{
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            }>;
        };
    } | null;
    getProteinInformation?: {
        __typename?: 'Gene';
        id: string;
        name: string;
        protein_information?: {
            __typename?: 'ProteinInformation';
            protein_sequence: string;
            general_info: {
                __typename?: 'ProteinGeneralInfo';
                gene_product: string;
                dictybase_id: string;
                description: string;
                protein_length: string;
                molecular_weight: string;
                subcellular_location: string;
                protein_existence: string;
                note: string;
                aa_composition: {
                    __typename?: 'NameWithLink';
                    name: string;
                    link: string;
                };
            };
            external_links: Array<{
                __typename?: 'NameWithLink';
                name: string;
                link: string;
            }>;
        } | null;
    } | null;
};
type ListRecentGenesQueryVariables = Exact<{
    limit?: Scalars['Int'];
}>;
type ListRecentGenesQuery = {
    __typename?: 'Query';
    listRecentGenes?: Array<{
        __typename?: 'Gene';
        id: string;
        name: string;
    }> | null;
};
type PublicationQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
type PublicationQuery = {
    __typename?: 'Query';
    publication?: {
        __typename?: 'Publication';
        id: string;
        doi?: string | null;
        title: string;
        abstract: string;
        journal: string;
        pub_date?: any | null;
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
type ListRecentPublicationsQueryVariables = Exact<{
    limit?: Scalars['Int'];
}>;
type ListRecentPublicationsQuery = {
    __typename?: 'Query';
    listRecentPublications?: Array<{
        __typename?: 'Publication';
        id: string;
        doi?: string | null;
        title: string;
        abstract: string;
        journal: string;
        pub_date?: any | null;
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
type StrainListQueryVariables = Exact<{
    cursor: Scalars['Int'];
    limit: Scalars['Int'];
    filter?: InputMaybe<StrainListFilter>;
}>;
type StrainListQuery = {
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
type ListStrainsWithPhenotypeQueryVariables = Exact<{
    cursor: Scalars['Int'];
    limit: Scalars['Int'];
    type: Scalars['String'];
    annotation: Scalars['String'];
}>;
type ListStrainsWithPhenotypeQuery = {
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
                pub_date?: any | null;
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
type ListBacterialStrainsQueryVariables = Exact<{
    [key: string]: never;
}>;
type ListBacterialStrainsQuery = {
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
type ListStrainsInventoryQueryVariables = Exact<{
    cursor: Scalars['Int'];
    limit: Scalars['Int'];
}>;
type ListStrainsInventoryQuery = {
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
type ListPlasmidsInventoryQueryVariables = Exact<{
    cursor: Scalars['Int'];
    limit: Scalars['Int'];
}>;
type ListPlasmidsInventoryQuery = {
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
type PlasmidListFilterQueryVariables = Exact<{
    cursor: Scalars['Int'];
    limit: Scalars['Int'];
    filter: Scalars['String'];
}>;
type PlasmidListFilterQuery = {
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
type PlasmidQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
type PlasmidQuery = {
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
            pub_date?: any | null;
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
type StrainQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
type StrainQuery = {
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
            pub_date?: any | null;
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
                pub_date?: any | null;
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
type ListRecentPlasmidsQueryVariables = Exact<{
    limit?: Scalars['Int'];
}>;
type ListRecentPlasmidsQuery = {
    __typename?: 'Query';
    listRecentPlasmids?: Array<{
        __typename?: 'Plasmid';
        id: string;
        created_at: any;
        name: string;
    }> | null;
};
type ListRecentStrainsQueryVariables = Exact<{
    limit?: Scalars['Int'];
}>;
type ListRecentStrainsQuery = {
    __typename?: 'Query';
    listRecentStrains?: Array<{
        __typename?: 'Strain';
        id: string;
        created_at: any;
        systematic_name: string;
    }> | null;
};
type UserByEmailQueryVariables = Exact<{
    email: Scalars['String'];
}>;
type UserByEmailQuery = {
    __typename?: 'Query';
    userByEmail?: {
        __typename?: 'User';
        id: string;
    } | null;
};
declare const LoginDocument: Apollo.DocumentNode;
type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
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
declare function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>): Apollo.MutationTuple<LoginMutation, Exact<{
    input: LoginInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
declare const LogoutDocument: Apollo.DocumentNode;
type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
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
declare function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>): Apollo.MutationTuple<LogoutMutation, Exact<{
    [key: string]: never;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
declare const CreateContentDocument: Apollo.DocumentNode;
type CreateContentMutationFn = Apollo.MutationFunction<CreateContentMutation, CreateContentMutationVariables>;
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
declare function useCreateContentMutation(baseOptions?: Apollo.MutationHookOptions<CreateContentMutation, CreateContentMutationVariables>): Apollo.MutationTuple<CreateContentMutation, Exact<{
    input: CreateContentInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type CreateContentMutationHookResult = ReturnType<typeof useCreateContentMutation>;
type CreateContentMutationResult = Apollo.MutationResult<CreateContentMutation>;
type CreateContentMutationOptions = Apollo.BaseMutationOptions<CreateContentMutation, CreateContentMutationVariables>;
declare const UpdateContentDocument: Apollo.DocumentNode;
type UpdateContentMutationFn = Apollo.MutationFunction<UpdateContentMutation, UpdateContentMutationVariables>;
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
declare function useUpdateContentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContentMutation, UpdateContentMutationVariables>): Apollo.MutationTuple<UpdateContentMutation, Exact<{
    input: UpdateContentInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type UpdateContentMutationHookResult = ReturnType<typeof useUpdateContentMutation>;
type UpdateContentMutationResult = Apollo.MutationResult<UpdateContentMutation>;
type UpdateContentMutationOptions = Apollo.BaseMutationOptions<UpdateContentMutation, UpdateContentMutationVariables>;
declare const CreateOrderDocument: Apollo.DocumentNode;
type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
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
declare function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>): Apollo.MutationTuple<CreateOrderMutation, Exact<{
    input: CreateOrderInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
declare const CreateUserDocument: Apollo.DocumentNode;
type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
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
declare function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>): Apollo.MutationTuple<CreateUserMutation, Exact<{
    input: CreateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
declare const UpdateUserDocument: Apollo.DocumentNode;
type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
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
declare function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>): Apollo.MutationTuple<UpdateUserMutation, Exact<{
    id: string;
    input: UpdateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
declare const GetRefreshTokenDocument: Apollo.DocumentNode;
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
declare function useGetRefreshTokenQuery(baseOptions: Apollo.QueryHookOptions<GetRefreshTokenQuery, GetRefreshTokenQueryVariables> & ({
    variables: GetRefreshTokenQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetRefreshTokenQuery, Exact<{
    token: string;
}>>;
declare function useGetRefreshTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRefreshTokenQuery, GetRefreshTokenQueryVariables>): Apollo.LazyQueryResultTuple<GetRefreshTokenQuery, Exact<{
    token: string;
}>>;
declare function useGetRefreshTokenSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRefreshTokenQuery, GetRefreshTokenQueryVariables>): Apollo.UseSuspenseQueryResult<GetRefreshTokenQuery, Exact<{
    token: string;
}>>;
type GetRefreshTokenQueryHookResult = ReturnType<typeof useGetRefreshTokenQuery>;
type GetRefreshTokenLazyQueryHookResult = ReturnType<typeof useGetRefreshTokenLazyQuery>;
type GetRefreshTokenSuspenseQueryHookResult = ReturnType<typeof useGetRefreshTokenSuspenseQuery>;
type GetRefreshTokenQueryResult = Apollo.QueryResult<GetRefreshTokenQuery, GetRefreshTokenQueryVariables>;
declare const ContentBySlugDocument: Apollo.DocumentNode;
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
declare function useContentBySlugQuery(baseOptions: Apollo.QueryHookOptions<ContentBySlugQuery, ContentBySlugQueryVariables> & ({
    variables: ContentBySlugQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<ContentBySlugQuery, Exact<{
    slug: string;
}>>;
declare function useContentBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentBySlugQuery, ContentBySlugQueryVariables>): Apollo.LazyQueryResultTuple<ContentBySlugQuery, Exact<{
    slug: string;
}>>;
declare function useContentBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ContentBySlugQuery, ContentBySlugQueryVariables>): Apollo.UseSuspenseQueryResult<ContentBySlugQuery, Exact<{
    slug: string;
}>>;
type ContentBySlugQueryHookResult = ReturnType<typeof useContentBySlugQuery>;
type ContentBySlugLazyQueryHookResult = ReturnType<typeof useContentBySlugLazyQuery>;
type ContentBySlugSuspenseQueryHookResult = ReturnType<typeof useContentBySlugSuspenseQuery>;
type ContentBySlugQueryResult = Apollo.QueryResult<ContentBySlugQuery, ContentBySlugQueryVariables>;
declare const ContentDocument: Apollo.DocumentNode;
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
declare function useContentQuery(baseOptions: Apollo.QueryHookOptions<ContentQuery, ContentQueryVariables> & ({
    variables: ContentQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<ContentQuery, Exact<{
    id: string;
}>>;
declare function useContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentQuery, ContentQueryVariables>): Apollo.LazyQueryResultTuple<ContentQuery, Exact<{
    id: string;
}>>;
declare function useContentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ContentQuery, ContentQueryVariables>): Apollo.UseSuspenseQueryResult<ContentQuery, Exact<{
    id: string;
}>>;
type ContentQueryHookResult = ReturnType<typeof useContentQuery>;
type ContentLazyQueryHookResult = ReturnType<typeof useContentLazyQuery>;
type ContentSuspenseQueryHookResult = ReturnType<typeof useContentSuspenseQuery>;
type ContentQueryResult = Apollo.QueryResult<ContentQuery, ContentQueryVariables>;
declare const ListOrganismsDocument: Apollo.DocumentNode;
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
declare function useListOrganismsQuery(baseOptions?: Apollo.QueryHookOptions<ListOrganismsQuery, ListOrganismsQueryVariables>): Apollo.QueryResult<ListOrganismsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useListOrganismsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOrganismsQuery, ListOrganismsQueryVariables>): Apollo.LazyQueryResultTuple<ListOrganismsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useListOrganismsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListOrganismsQuery, ListOrganismsQueryVariables>): Apollo.UseSuspenseQueryResult<ListOrganismsQuery, Exact<{
    [key: string]: never;
}>>;
type ListOrganismsQueryHookResult = ReturnType<typeof useListOrganismsQuery>;
type ListOrganismsLazyQueryHookResult = ReturnType<typeof useListOrganismsLazyQuery>;
type ListOrganismsSuspenseQueryHookResult = ReturnType<typeof useListOrganismsSuspenseQuery>;
type ListOrganismsQueryResult = Apollo.QueryResult<ListOrganismsQuery, ListOrganismsQueryVariables>;
declare const GeneDocument: Apollo.DocumentNode;
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
 *      limit: // value for 'limit'
 *      sort_by: // value for 'sort_by'
 *   },
 * });
 */
declare function useGeneQuery(baseOptions: Apollo.QueryHookOptions<GeneQuery, GeneQueryVariables> & ({
    variables: GeneQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GeneQuery, Exact<{
    gene: string;
    limit?: InputMaybe<number> | undefined;
    sort_by?: InputMaybe<string> | undefined;
}>>;
declare function useGeneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GeneQuery, GeneQueryVariables>): Apollo.LazyQueryResultTuple<GeneQuery, Exact<{
    gene: string;
    limit?: InputMaybe<number> | undefined;
    sort_by?: InputMaybe<string> | undefined;
}>>;
declare function useGeneSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GeneQuery, GeneQueryVariables>): Apollo.UseSuspenseQueryResult<GeneQuery, Exact<{
    gene: string;
    limit?: InputMaybe<number> | undefined;
    sort_by?: InputMaybe<string> | undefined;
}>>;
type GeneQueryHookResult = ReturnType<typeof useGeneQuery>;
type GeneLazyQueryHookResult = ReturnType<typeof useGeneLazyQuery>;
type GeneSuspenseQueryHookResult = ReturnType<typeof useGeneSuspenseQuery>;
type GeneQueryResult = Apollo.QueryResult<GeneQuery, GeneQueryVariables>;
declare const ListRecentGenesDocument: Apollo.DocumentNode;
/**
 * __useListRecentGenesQuery__
 *
 * To run a query within a React component, call `useListRecentGenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRecentGenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRecentGenesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
declare function useListRecentGenesQuery(baseOptions?: Apollo.QueryHookOptions<ListRecentGenesQuery, ListRecentGenesQueryVariables>): Apollo.QueryResult<ListRecentGenesQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentGenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecentGenesQuery, ListRecentGenesQueryVariables>): Apollo.LazyQueryResultTuple<ListRecentGenesQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentGenesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListRecentGenesQuery, ListRecentGenesQueryVariables>): Apollo.UseSuspenseQueryResult<ListRecentGenesQuery, Exact<{
    limit?: number | undefined;
}>>;
type ListRecentGenesQueryHookResult = ReturnType<typeof useListRecentGenesQuery>;
type ListRecentGenesLazyQueryHookResult = ReturnType<typeof useListRecentGenesLazyQuery>;
type ListRecentGenesSuspenseQueryHookResult = ReturnType<typeof useListRecentGenesSuspenseQuery>;
type ListRecentGenesQueryResult = Apollo.QueryResult<ListRecentGenesQuery, ListRecentGenesQueryVariables>;
declare const PublicationDocument: Apollo.DocumentNode;
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
declare function usePublicationQuery(baseOptions: Apollo.QueryHookOptions<PublicationQuery, PublicationQueryVariables> & ({
    variables: PublicationQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<PublicationQuery, Exact<{
    id: string;
}>>;
declare function usePublicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>): Apollo.LazyQueryResultTuple<PublicationQuery, Exact<{
    id: string;
}>>;
declare function usePublicationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PublicationQuery, PublicationQueryVariables>): Apollo.UseSuspenseQueryResult<PublicationQuery, Exact<{
    id: string;
}>>;
type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>;
type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>;
type PublicationSuspenseQueryHookResult = ReturnType<typeof usePublicationSuspenseQuery>;
type PublicationQueryResult = Apollo.QueryResult<PublicationQuery, PublicationQueryVariables>;
declare const ListRecentPublicationsDocument: Apollo.DocumentNode;
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
declare function useListRecentPublicationsQuery(baseOptions?: Apollo.QueryHookOptions<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>): Apollo.QueryResult<ListRecentPublicationsQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>): Apollo.LazyQueryResultTuple<ListRecentPublicationsQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentPublicationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>): Apollo.UseSuspenseQueryResult<ListRecentPublicationsQuery, Exact<{
    limit?: number | undefined;
}>>;
type ListRecentPublicationsQueryHookResult = ReturnType<typeof useListRecentPublicationsQuery>;
type ListRecentPublicationsLazyQueryHookResult = ReturnType<typeof useListRecentPublicationsLazyQuery>;
type ListRecentPublicationsSuspenseQueryHookResult = ReturnType<typeof useListRecentPublicationsSuspenseQuery>;
type ListRecentPublicationsQueryResult = Apollo.QueryResult<ListRecentPublicationsQuery, ListRecentPublicationsQueryVariables>;
declare const StrainListDocument: Apollo.DocumentNode;
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
declare function useStrainListQuery(baseOptions: Apollo.QueryHookOptions<StrainListQuery, StrainListQueryVariables> & ({
    variables: StrainListQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<StrainListQuery, Exact<{
    cursor: number;
    limit: number;
    filter?: InputMaybe<StrainListFilter> | undefined;
}>>;
declare function useStrainListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StrainListQuery, StrainListQueryVariables>): Apollo.LazyQueryResultTuple<StrainListQuery, Exact<{
    cursor: number;
    limit: number;
    filter?: InputMaybe<StrainListFilter> | undefined;
}>>;
declare function useStrainListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StrainListQuery, StrainListQueryVariables>): Apollo.UseSuspenseQueryResult<StrainListQuery, Exact<{
    cursor: number;
    limit: number;
    filter?: InputMaybe<StrainListFilter> | undefined;
}>>;
type StrainListQueryHookResult = ReturnType<typeof useStrainListQuery>;
type StrainListLazyQueryHookResult = ReturnType<typeof useStrainListLazyQuery>;
type StrainListSuspenseQueryHookResult = ReturnType<typeof useStrainListSuspenseQuery>;
type StrainListQueryResult = Apollo.QueryResult<StrainListQuery, StrainListQueryVariables>;
declare const ListStrainsWithPhenotypeDocument: Apollo.DocumentNode;
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
declare function useListStrainsWithPhenotypeQuery(baseOptions: Apollo.QueryHookOptions<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables> & ({
    variables: ListStrainsWithPhenotypeQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<ListStrainsWithPhenotypeQuery, Exact<{
    cursor: number;
    limit: number;
    type: string;
    annotation: string;
}>>;
declare function useListStrainsWithPhenotypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>): Apollo.LazyQueryResultTuple<ListStrainsWithPhenotypeQuery, Exact<{
    cursor: number;
    limit: number;
    type: string;
    annotation: string;
}>>;
declare function useListStrainsWithPhenotypeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>): Apollo.UseSuspenseQueryResult<ListStrainsWithPhenotypeQuery, Exact<{
    cursor: number;
    limit: number;
    type: string;
    annotation: string;
}>>;
type ListStrainsWithPhenotypeQueryHookResult = ReturnType<typeof useListStrainsWithPhenotypeQuery>;
type ListStrainsWithPhenotypeLazyQueryHookResult = ReturnType<typeof useListStrainsWithPhenotypeLazyQuery>;
type ListStrainsWithPhenotypeSuspenseQueryHookResult = ReturnType<typeof useListStrainsWithPhenotypeSuspenseQuery>;
type ListStrainsWithPhenotypeQueryResult = Apollo.QueryResult<ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryVariables>;
declare const ListBacterialStrainsDocument: Apollo.DocumentNode;
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
declare function useListBacterialStrainsQuery(baseOptions?: Apollo.QueryHookOptions<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>): Apollo.QueryResult<ListBacterialStrainsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useListBacterialStrainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>): Apollo.LazyQueryResultTuple<ListBacterialStrainsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useListBacterialStrainsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>): Apollo.UseSuspenseQueryResult<ListBacterialStrainsQuery, Exact<{
    [key: string]: never;
}>>;
type ListBacterialStrainsQueryHookResult = ReturnType<typeof useListBacterialStrainsQuery>;
type ListBacterialStrainsLazyQueryHookResult = ReturnType<typeof useListBacterialStrainsLazyQuery>;
type ListBacterialStrainsSuspenseQueryHookResult = ReturnType<typeof useListBacterialStrainsSuspenseQuery>;
type ListBacterialStrainsQueryResult = Apollo.QueryResult<ListBacterialStrainsQuery, ListBacterialStrainsQueryVariables>;
declare const ListStrainsInventoryDocument: Apollo.DocumentNode;
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
declare function useListStrainsInventoryQuery(baseOptions: Apollo.QueryHookOptions<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables> & ({
    variables: ListStrainsInventoryQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<ListStrainsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
declare function useListStrainsInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>): Apollo.LazyQueryResultTuple<ListStrainsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
declare function useListStrainsInventorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>): Apollo.UseSuspenseQueryResult<ListStrainsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
type ListStrainsInventoryQueryHookResult = ReturnType<typeof useListStrainsInventoryQuery>;
type ListStrainsInventoryLazyQueryHookResult = ReturnType<typeof useListStrainsInventoryLazyQuery>;
type ListStrainsInventorySuspenseQueryHookResult = ReturnType<typeof useListStrainsInventorySuspenseQuery>;
type ListStrainsInventoryQueryResult = Apollo.QueryResult<ListStrainsInventoryQuery, ListStrainsInventoryQueryVariables>;
declare const ListPlasmidsInventoryDocument: Apollo.DocumentNode;
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
declare function useListPlasmidsInventoryQuery(baseOptions: Apollo.QueryHookOptions<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables> & ({
    variables: ListPlasmidsInventoryQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<ListPlasmidsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
declare function useListPlasmidsInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>): Apollo.LazyQueryResultTuple<ListPlasmidsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
declare function useListPlasmidsInventorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>): Apollo.UseSuspenseQueryResult<ListPlasmidsInventoryQuery, Exact<{
    cursor: number;
    limit: number;
}>>;
type ListPlasmidsInventoryQueryHookResult = ReturnType<typeof useListPlasmidsInventoryQuery>;
type ListPlasmidsInventoryLazyQueryHookResult = ReturnType<typeof useListPlasmidsInventoryLazyQuery>;
type ListPlasmidsInventorySuspenseQueryHookResult = ReturnType<typeof useListPlasmidsInventorySuspenseQuery>;
type ListPlasmidsInventoryQueryResult = Apollo.QueryResult<ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryVariables>;
declare const PlasmidListFilterDocument: Apollo.DocumentNode;
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
declare function usePlasmidListFilterQuery(baseOptions: Apollo.QueryHookOptions<PlasmidListFilterQuery, PlasmidListFilterQueryVariables> & ({
    variables: PlasmidListFilterQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<PlasmidListFilterQuery, Exact<{
    cursor: number;
    limit: number;
    filter: string;
}>>;
declare function usePlasmidListFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>): Apollo.LazyQueryResultTuple<PlasmidListFilterQuery, Exact<{
    cursor: number;
    limit: number;
    filter: string;
}>>;
declare function usePlasmidListFilterSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>): Apollo.UseSuspenseQueryResult<PlasmidListFilterQuery, Exact<{
    cursor: number;
    limit: number;
    filter: string;
}>>;
type PlasmidListFilterQueryHookResult = ReturnType<typeof usePlasmidListFilterQuery>;
type PlasmidListFilterLazyQueryHookResult = ReturnType<typeof usePlasmidListFilterLazyQuery>;
type PlasmidListFilterSuspenseQueryHookResult = ReturnType<typeof usePlasmidListFilterSuspenseQuery>;
type PlasmidListFilterQueryResult = Apollo.QueryResult<PlasmidListFilterQuery, PlasmidListFilterQueryVariables>;
declare const PlasmidDocument: Apollo.DocumentNode;
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
declare function usePlasmidQuery(baseOptions: Apollo.QueryHookOptions<PlasmidQuery, PlasmidQueryVariables> & ({
    variables: PlasmidQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<PlasmidQuery, Exact<{
    id: string;
}>>;
declare function usePlasmidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlasmidQuery, PlasmidQueryVariables>): Apollo.LazyQueryResultTuple<PlasmidQuery, Exact<{
    id: string;
}>>;
declare function usePlasmidSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PlasmidQuery, PlasmidQueryVariables>): Apollo.UseSuspenseQueryResult<PlasmidQuery, Exact<{
    id: string;
}>>;
type PlasmidQueryHookResult = ReturnType<typeof usePlasmidQuery>;
type PlasmidLazyQueryHookResult = ReturnType<typeof usePlasmidLazyQuery>;
type PlasmidSuspenseQueryHookResult = ReturnType<typeof usePlasmidSuspenseQuery>;
type PlasmidQueryResult = Apollo.QueryResult<PlasmidQuery, PlasmidQueryVariables>;
declare const StrainDocument: Apollo.DocumentNode;
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
declare function useStrainQuery(baseOptions: Apollo.QueryHookOptions<StrainQuery, StrainQueryVariables> & ({
    variables: StrainQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<StrainQuery, Exact<{
    id: string;
}>>;
declare function useStrainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StrainQuery, StrainQueryVariables>): Apollo.LazyQueryResultTuple<StrainQuery, Exact<{
    id: string;
}>>;
declare function useStrainSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StrainQuery, StrainQueryVariables>): Apollo.UseSuspenseQueryResult<StrainQuery, Exact<{
    id: string;
}>>;
type StrainQueryHookResult = ReturnType<typeof useStrainQuery>;
type StrainLazyQueryHookResult = ReturnType<typeof useStrainLazyQuery>;
type StrainSuspenseQueryHookResult = ReturnType<typeof useStrainSuspenseQuery>;
type StrainQueryResult = Apollo.QueryResult<StrainQuery, StrainQueryVariables>;
declare const ListRecentPlasmidsDocument: Apollo.DocumentNode;
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
declare function useListRecentPlasmidsQuery(baseOptions?: Apollo.QueryHookOptions<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>): Apollo.QueryResult<ListRecentPlasmidsQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentPlasmidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>): Apollo.LazyQueryResultTuple<ListRecentPlasmidsQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentPlasmidsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>): Apollo.UseSuspenseQueryResult<ListRecentPlasmidsQuery, Exact<{
    limit?: number | undefined;
}>>;
type ListRecentPlasmidsQueryHookResult = ReturnType<typeof useListRecentPlasmidsQuery>;
type ListRecentPlasmidsLazyQueryHookResult = ReturnType<typeof useListRecentPlasmidsLazyQuery>;
type ListRecentPlasmidsSuspenseQueryHookResult = ReturnType<typeof useListRecentPlasmidsSuspenseQuery>;
type ListRecentPlasmidsQueryResult = Apollo.QueryResult<ListRecentPlasmidsQuery, ListRecentPlasmidsQueryVariables>;
declare const ListRecentStrainsDocument: Apollo.DocumentNode;
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
declare function useListRecentStrainsQuery(baseOptions?: Apollo.QueryHookOptions<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>): Apollo.QueryResult<ListRecentStrainsQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentStrainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>): Apollo.LazyQueryResultTuple<ListRecentStrainsQuery, Exact<{
    limit?: number | undefined;
}>>;
declare function useListRecentStrainsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>): Apollo.UseSuspenseQueryResult<ListRecentStrainsQuery, Exact<{
    limit?: number | undefined;
}>>;
type ListRecentStrainsQueryHookResult = ReturnType<typeof useListRecentStrainsQuery>;
type ListRecentStrainsLazyQueryHookResult = ReturnType<typeof useListRecentStrainsLazyQuery>;
type ListRecentStrainsSuspenseQueryHookResult = ReturnType<typeof useListRecentStrainsSuspenseQuery>;
type ListRecentStrainsQueryResult = Apollo.QueryResult<ListRecentStrainsQuery, ListRecentStrainsQueryVariables>;
declare const UserByEmailDocument: Apollo.DocumentNode;
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
declare function useUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables> & ({
    variables: UserByEmailQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<UserByEmailQuery, Exact<{
    email: string;
}>>;
declare function useUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>): Apollo.LazyQueryResultTuple<UserByEmailQuery, Exact<{
    email: string;
}>>;
declare function useUserByEmailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>): Apollo.UseSuspenseQueryResult<UserByEmailQuery, Exact<{
    email: string;
}>>;
type UserByEmailQueryHookResult = ReturnType<typeof useUserByEmailQuery>;
type UserByEmailLazyQueryHookResult = ReturnType<typeof useUserByEmailLazyQuery>;
type UserByEmailSuspenseQueryHookResult = ReturnType<typeof useUserByEmailSuspenseQuery>;
type UserByEmailQueryResult = Apollo.QueryResult<UserByEmailQuery, UserByEmailQueryVariables>;

export { AssociatedSequences, Auth, Author, BasePublication, Citation, Content, ContentBySlugDocument, ContentBySlugLazyQueryHookResult, ContentBySlugQuery, ContentBySlugQueryHookResult, ContentBySlugQueryResult, ContentBySlugQueryVariables, ContentBySlugSuspenseQueryHookResult, ContentDocument, ContentLazyQueryHookResult, ContentQuery, ContentQueryHookResult, ContentQueryResult, ContentQueryVariables, ContentSuspenseQueryHookResult, CreateContentDocument, CreateContentInput, CreateContentMutation, CreateContentMutationFn, CreateContentMutationHookResult, CreateContentMutationOptions, CreateContentMutationResult, CreateContentMutationVariables, CreateOrderDocument, CreateOrderInput, CreateOrderMutation, CreateOrderMutationFn, CreateOrderMutationHookResult, CreateOrderMutationOptions, CreateOrderMutationResult, CreateOrderMutationVariables, CreatePermissionInput, CreatePlasmidInput, CreateRoleInput, CreateStrainInput, CreateUserDocument, CreateUserInput, CreateUserMutation, CreateUserMutationFn, CreateUserMutationHookResult, CreateUserMutationOptions, CreateUserMutationResult, CreateUserMutationVariables, DeleteContent, DeletePermission, DeleteRole, DeleteStock, DeleteUser, Download, DownloadItem, Exact, Extension, Gene, GeneDocument, GeneLazyQueryHookResult, GeneQuery, GeneQueryHookResult, GeneQueryResult, GeneQueryVariables, GeneSuspenseQueryHookResult, GeneralInfo, GenomicCoordinates, GetRefreshTokenDocument, GetRefreshTokenLazyQueryHookResult, GetRefreshTokenQuery, GetRefreshTokenQueryHookResult, GetRefreshTokenQueryResult, GetRefreshTokenQueryVariables, GetRefreshTokenSuspenseQueryHookResult, GoAnnotation, Identity, InputMaybe, Links, ListBacterialStrainsDocument, ListBacterialStrainsLazyQueryHookResult, ListBacterialStrainsQuery, ListBacterialStrainsQueryHookResult, ListBacterialStrainsQueryResult, ListBacterialStrainsQueryVariables, ListBacterialStrainsSuspenseQueryHookResult, ListOrganismsDocument, ListOrganismsLazyQueryHookResult, ListOrganismsQuery, ListOrganismsQueryHookResult, ListOrganismsQueryResult, ListOrganismsQueryVariables, ListOrganismsSuspenseQueryHookResult, ListPlasmidsInventoryDocument, ListPlasmidsInventoryLazyQueryHookResult, ListPlasmidsInventoryQuery, ListPlasmidsInventoryQueryHookResult, ListPlasmidsInventoryQueryResult, ListPlasmidsInventoryQueryVariables, ListPlasmidsInventorySuspenseQueryHookResult, ListRecentGenesDocument, ListRecentGenesLazyQueryHookResult, ListRecentGenesQuery, ListRecentGenesQueryHookResult, ListRecentGenesQueryResult, ListRecentGenesQueryVariables, ListRecentGenesSuspenseQueryHookResult, ListRecentPlasmidsDocument, ListRecentPlasmidsLazyQueryHookResult, ListRecentPlasmidsQuery, ListRecentPlasmidsQueryHookResult, ListRecentPlasmidsQueryResult, ListRecentPlasmidsQueryVariables, ListRecentPlasmidsSuspenseQueryHookResult, ListRecentPublicationsDocument, ListRecentPublicationsLazyQueryHookResult, ListRecentPublicationsQuery, ListRecentPublicationsQueryHookResult, ListRecentPublicationsQueryResult, ListRecentPublicationsQueryVariables, ListRecentPublicationsSuspenseQueryHookResult, ListRecentStrainsDocument, ListRecentStrainsLazyQueryHookResult, ListRecentStrainsQuery, ListRecentStrainsQueryHookResult, ListRecentStrainsQueryResult, ListRecentStrainsQueryVariables, ListRecentStrainsSuspenseQueryHookResult, ListStrainsInventoryDocument, ListStrainsInventoryLazyQueryHookResult, ListStrainsInventoryQuery, ListStrainsInventoryQueryHookResult, ListStrainsInventoryQueryResult, ListStrainsInventoryQueryVariables, ListStrainsInventorySuspenseQueryHookResult, ListStrainsWithPhenotypeDocument, ListStrainsWithPhenotypeLazyQueryHookResult, ListStrainsWithPhenotypeQuery, ListStrainsWithPhenotypeQueryHookResult, ListStrainsWithPhenotypeQueryResult, ListStrainsWithPhenotypeQueryVariables, ListStrainsWithPhenotypeSuspenseQueryHookResult, LoginDocument, LoginInput, LoginMutation, LoginMutationFn, LoginMutationHookResult, LoginMutationOptions, LoginMutationResult, LoginMutationVariables, Logout, LogoutDocument, LogoutMutation, LogoutMutationFn, LogoutMutationHookResult, LogoutMutationOptions, LogoutMutationResult, LogoutMutationVariables, MakeMaybe, MakeOptional, Maybe, Mutation, MutationCreateContentArgs, MutationCreateOrderArgs, MutationCreatePermissionArgs, MutationCreatePlasmidArgs, MutationCreateRoleArgs, MutationCreateRolePermissionRelationshipArgs, MutationCreateStrainArgs, MutationCreateUserArgs, MutationCreateUserRoleRelationshipArgs, MutationDeleteContentArgs, MutationDeletePermissionArgs, MutationDeleteRoleArgs, MutationDeleteStockArgs, MutationDeleteUserArgs, MutationLoginArgs, MutationUpdateContentArgs, MutationUpdateOrderArgs, MutationUpdatePermissionArgs, MutationUpdatePlasmidArgs, MutationUpdateRoleArgs, MutationUpdateStrainArgs, MutationUpdateUserArgs, NameWithLink, NumberOfPublicationsWithGene, Order, OrderListWithCursor, Organism, Orthologs, Permission, Phenotype, Plasmid, PlasmidDocument, PlasmidLazyQueryHookResult, PlasmidListFilterDocument, PlasmidListFilterLazyQueryHookResult, PlasmidListFilterQuery, PlasmidListFilterQueryHookResult, PlasmidListFilterQueryResult, PlasmidListFilterQueryVariables, PlasmidListFilterSuspenseQueryHookResult, PlasmidListWithCursor, PlasmidQuery, PlasmidQueryHookResult, PlasmidQueryResult, PlasmidQueryVariables, PlasmidSuspenseQueryHookResult, ProductInformation, ProteinGeneralInfo, ProteinInformation, Publication, PublicationDocument, PublicationLazyQueryHookResult, PublicationQuery, PublicationQueryHookResult, PublicationQueryResult, PublicationQueryVariables, PublicationSuspenseQueryHookResult, PublicationWithGene, Query, QueryAllOrthologsArgs, QueryAllPublicationsArgs, QueryAllStrainsArgs, QueryContentArgs, QueryContentBySlugArgs, QueryGeneArgs, QueryGeneralInformationArgs, QueryGetAssociatedSequncesArgs, QueryGetLinksArgs, QueryGetProteinInformationArgs, QueryGetRefreshTokenArgs, QueryListGeneProductInfoArgs, QueryListOrdersArgs, QueryListPlasmidsArgs, QueryListPlasmidsWithAnnotationArgs, QueryListRecentGenesArgs, QueryListRecentPlasmidsArgs, QueryListRecentPublicationsArgs, QueryListRecentStrainsArgs, QueryListStrainsArgs, QueryListStrainsWithAnnotationArgs, QueryListUsersArgs, QueryOrderArgs, QueryOrganismArgs, QueryPermissionArgs, QueryPlasmidArgs, QueryPublicationArgs, QueryRoleArgs, QueryStrainArgs, QueryUserArgs, QueryUserByEmailArgs, Role, Scalars, StatusEnum, Stock, Strain, StrainDocument, StrainLazyQueryHookResult, StrainListDocument, StrainListFilter, StrainListLazyQueryHookResult, StrainListQuery, StrainListQueryHookResult, StrainListQueryResult, StrainListQueryVariables, StrainListSuspenseQueryHookResult, StrainListWithCursor, StrainQuery, StrainQueryHookResult, StrainQueryResult, StrainQueryVariables, StrainSuspenseQueryHookResult, StrainType, UpdateContentDocument, UpdateContentInput, UpdateContentMutation, UpdateContentMutationFn, UpdateContentMutationHookResult, UpdateContentMutationOptions, UpdateContentMutationResult, UpdateContentMutationVariables, UpdateOrderInput, UpdatePermissionInput, UpdatePlasmidInput, UpdateRoleInput, UpdateStrainInput, UpdateUserDocument, UpdateUserInput, UpdateUserMutation, UpdateUserMutationFn, UpdateUserMutationHookResult, UpdateUserMutationOptions, UpdateUserMutationResult, UpdateUserMutationVariables, User, UserByEmailDocument, UserByEmailLazyQueryHookResult, UserByEmailQuery, UserByEmailQueryHookResult, UserByEmailQueryResult, UserByEmailQueryVariables, UserByEmailSuspenseQueryHookResult, UserList, With, useContentBySlugLazyQuery, useContentBySlugQuery, useContentBySlugSuspenseQuery, useContentLazyQuery, useContentQuery, useContentSuspenseQuery, useCreateContentMutation, useCreateOrderMutation, useCreateUserMutation, useGeneLazyQuery, useGeneQuery, useGeneSuspenseQuery, useGetRefreshTokenLazyQuery, useGetRefreshTokenQuery, useGetRefreshTokenSuspenseQuery, useListBacterialStrainsLazyQuery, useListBacterialStrainsQuery, useListBacterialStrainsSuspenseQuery, useListOrganismsLazyQuery, useListOrganismsQuery, useListOrganismsSuspenseQuery, useListPlasmidsInventoryLazyQuery, useListPlasmidsInventoryQuery, useListPlasmidsInventorySuspenseQuery, useListRecentGenesLazyQuery, useListRecentGenesQuery, useListRecentGenesSuspenseQuery, useListRecentPlasmidsLazyQuery, useListRecentPlasmidsQuery, useListRecentPlasmidsSuspenseQuery, useListRecentPublicationsLazyQuery, useListRecentPublicationsQuery, useListRecentPublicationsSuspenseQuery, useListRecentStrainsLazyQuery, useListRecentStrainsQuery, useListRecentStrainsSuspenseQuery, useListStrainsInventoryLazyQuery, useListStrainsInventoryQuery, useListStrainsInventorySuspenseQuery, useListStrainsWithPhenotypeLazyQuery, useListStrainsWithPhenotypeQuery, useListStrainsWithPhenotypeSuspenseQuery, useLoginMutation, useLogoutMutation, usePlasmidLazyQuery, usePlasmidListFilterLazyQuery, usePlasmidListFilterQuery, usePlasmidListFilterSuspenseQuery, usePlasmidQuery, usePlasmidSuspenseQuery, usePublicationLazyQuery, usePublicationQuery, usePublicationSuspenseQuery, useStrainLazyQuery, useStrainListLazyQuery, useStrainListQuery, useStrainListSuspenseQuery, useStrainQuery, useStrainSuspenseQuery, useUpdateContentMutation, useUpdateUserMutation, useUserByEmailLazyQuery, useUserByEmailQuery, useUserByEmailSuspenseQuery };
