export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
  /** The `Upload` scalar type represents a multipart file upload. */
  Upload: { input: any; output: any; }
};

export type AssociatedSequences = {
  __typename?: 'AssociatedSequences';
  ests: Array<NameWithLink>;
  genbank_genomic_fragment?: Maybe<NameWithLink>;
  genbank_mrna?: Maybe<NameWithLink>;
  more_link: Scalars['String']['output'];
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
  associated_sequences: AssociatedSequences;
  general_info: GeneGeneralInfo;
  goas?: Maybe<Array<GoAnnotation>>;
  id: Scalars['String']['output'];
  links: Links;
  name: Scalars['String']['output'];
  orthologs?: Maybe<Array<Orthologs>>;
  product_info?: Maybe<Array<ProductInformation>>;
  protein_information?: Maybe<ProteinInformation>;
  strains?: Maybe<Array<Strain>>;
};

export type GeneGeneralInfo = {
  __typename?: 'GeneGeneralInfo';
  alt_gene_name: Array<Scalars['String']['output']>;
  alt_protein_names: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  gene_product: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name_description: Array<Scalars['String']['output']>;
};

export type GenomicCoordinates = {
  __typename?: 'GenomicCoordinates';
  chrom_coords: Scalars['String']['output'];
  exon: Scalars['String']['output'];
  local_coords: Scalars['String']['output'];
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

export type Links = {
  __typename?: 'Links';
  colleagues: NameWithLink;
  expression: Array<NameWithLink>;
  ext_resources: Array<NameWithLink>;
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
  uploadFile: ImageFile;
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


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type NameWithLink = {
  __typename?: 'NameWithLink';
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
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

export type Orthologs = {
  __typename?: 'Orthologs';
  gene_product: Scalars['String']['output'];
  id: NameWithLink;
  source: Array<Scalars['String']['output']>;
  species: Scalars['String']['output'];
  uniprotkb: NameWithLink;
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

export type ProductInformation = {
  __typename?: 'ProductInformation';
  genomic_coords: Array<GenomicCoordinates>;
  more_protein_data: Scalars['String']['output'];
  protein_coding_gene: NameWithLink;
  protein_length: Scalars['String']['output'];
  protein_molecular_weight: Scalars['String']['output'];
};

export type ProteinGeneralInfo = {
  __typename?: 'ProteinGeneralInfo';
  aa_composition: NameWithLink;
  description: Scalars['String']['output'];
  dictybase_id: Scalars['String']['output'];
  gene_product: Scalars['String']['output'];
  molecular_weight: Scalars['String']['output'];
  note: Scalars['String']['output'];
  protein_existence: Scalars['String']['output'];
  protein_length: Scalars['String']['output'];
  subcellular_location: Scalars['String']['output'];
};

export type ProteinInformation = {
  __typename?: 'ProteinInformation';
  external_links: Array<NameWithLink>;
  general_info: ProteinGeneralInfo;
  protein_sequence: Scalars['String']['output'];
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
  listAssociatedSequences?: Maybe<Array<AssociatedSequences>>;
  listGeneProductInformation?: Maybe<Array<ProductInformation>>;
  listOrders?: Maybe<OrderListWithCursor>;
  listOrganisms?: Maybe<Array<Organism>>;
  listPermissions?: Maybe<Array<Permission>>;
  listPlasmids?: Maybe<PlasmidListWithCursor>;
  listPlasmidsWithAnnotation?: Maybe<PlasmidListWithCursor>;
  listPublicationsWithGene?: Maybe<Array<PublicationWithGene>>;
  listRecentGenes?: Maybe<Array<Gene>>;
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


export type QueryListAssociatedSequencesArgs = {
  gene: Scalars['String']['input'];
};


export type QueryListGeneProductInformationArgs = {
  gene: Scalars['String']['input'];
};


export type QueryListOrdersArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
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


export type QueryListRecentGenesArgs = {
  limit: Scalars['Int']['input'];
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

export enum StatusEnum {
  Cancelled = 'CANCELLED',
  Growing = 'GROWING',
  InPreparation = 'IN_PREPARATION',
  Shipped = 'SHIPPED'
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

export enum StrainType {
  All = 'ALL',
  Bacterial = 'BACTERIAL',
  Gwdi = 'GWDI',
  Regular = 'REGULAR'
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
