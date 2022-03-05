export declare enum ProfileScalarFieldEnum {
    id = 'id',
    customer_numbner = 'customer_numbner',
}
export declare enum SortOrder {
    asc = 'asc',
    desc = 'desc',
}
export declare enum QueryMode {
    'default' = 'default',
    insensitive = 'insensitive',
}
export declare enum DestinationScalarFieldEnum {
    id = 'id',
    customer_number = 'customer_number',
}
export declare enum DeliveryScalarFieldEnum {
    id = 'id',
    id_destination = 'id_destination',
}
export declare enum CustomerScalarFieldEnum {
    number = 'number',
    id_favoriteDelivery = 'id_favoriteDelivery',
    id_profile = 'id_profile',
}
export declare class AggregateCustomer {
    _count?: InstanceType<typeof CustomerCountAggregate>;
    _min?: InstanceType<typeof CustomerMinAggregate>;
    _max?: InstanceType<typeof CustomerMaxAggregate>;
}
export declare class CreateManyCustomerArgs {
    data: Array<CustomerCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCustomerArgs {
    data: InstanceType<typeof CustomerCreateInput>;
}
export declare class CustomerAggregateArgs {
    where?: InstanceType<typeof CustomerWhereInput>;
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    cursor?: InstanceType<typeof CustomerWhereUniqueInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CustomerCountAggregateInput>;
    _min?: InstanceType<typeof CustomerMinAggregateInput>;
    _max?: InstanceType<typeof CustomerMaxAggregateInput>;
}
export declare class CustomerCountAggregateInput {
    number?: true;
    id_favoriteDelivery?: true;
    id_profile?: true;
    _all?: true;
}
export declare class CustomerCountAggregate {
    number: number;
    id_favoriteDelivery: number;
    id_profile: number;
    _all: number;
}
export declare class CustomerCountOrderByAggregateInput {
    number?: keyof typeof SortOrder;
    id_favoriteDelivery?: keyof typeof SortOrder;
    id_profile?: keyof typeof SortOrder;
}
export declare class CustomerCount {
    destinations: number;
    collectors: number;
}
export declare class CustomerCreateManyInput {
    number: string;
    id_favoriteDelivery: string;
    id_profile: string;
}
export declare class CustomerCreateNestedOneWithoutCollectorsInput {
    create?: InstanceType<typeof CustomerCreateWithoutCollectorsInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutCollectorsInput
    >;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class CustomerCreateNestedOneWithoutDestinationsInput {
    create?: InstanceType<typeof CustomerCreateWithoutDestinationsInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutDestinationsInput
    >;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class CustomerCreateNestedOneWithoutFavoriteDeliveryInput {
    create?: InstanceType<typeof CustomerCreateWithoutFavoriteDeliveryInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutFavoriteDeliveryInput
    >;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class CustomerCreateNestedOneWithoutProfileInput {
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class CustomerCreateOrConnectWithoutCollectorsInput {
    where: InstanceType<typeof CustomerWhereUniqueInput>;
    create: InstanceType<typeof CustomerCreateWithoutCollectorsInput>;
}
export declare class CustomerCreateOrConnectWithoutDestinationsInput {
    where: InstanceType<typeof CustomerWhereUniqueInput>;
    create: InstanceType<typeof CustomerCreateWithoutDestinationsInput>;
}
export declare class CustomerCreateOrConnectWithoutFavoriteDeliveryInput {
    where: InstanceType<typeof CustomerWhereUniqueInput>;
    create: InstanceType<typeof CustomerCreateWithoutFavoriteDeliveryInput>;
}
export declare class CustomerCreateOrConnectWithoutProfileInput {
    where: InstanceType<typeof CustomerWhereUniqueInput>;
    create: InstanceType<typeof CustomerCreateWithoutProfileInput>;
}
export declare class CustomerCreateWithoutCollectorsInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    favoriteDelivery: InstanceType<
        typeof DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput
    >;
    profile: InstanceType<typeof ProfileCreateNestedOneWithoutCustomerInput>;
}
export declare class CustomerCreateWithoutDestinationsInput {
    number: string;
    collectors?: InstanceType<
        typeof ProfileCreateNestedManyWithoutCollector_profile_customerInput
    >;
    favoriteDelivery: InstanceType<
        typeof DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput
    >;
    profile: InstanceType<typeof ProfileCreateNestedOneWithoutCustomerInput>;
}
export declare class CustomerCreateWithoutFavoriteDeliveryInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileCreateNestedManyWithoutCollector_profile_customerInput
    >;
    profile: InstanceType<typeof ProfileCreateNestedOneWithoutCustomerInput>;
}
export declare class CustomerCreateWithoutProfileInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileCreateNestedManyWithoutCollector_profile_customerInput
    >;
    favoriteDelivery: InstanceType<
        typeof DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput
    >;
}
export declare class CustomerCreateInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileCreateNestedManyWithoutCollector_profile_customerInput
    >;
    favoriteDelivery: InstanceType<
        typeof DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput
    >;
    profile: InstanceType<typeof ProfileCreateNestedOneWithoutCustomerInput>;
}
export declare class CustomerGroupByArgs {
    where?: InstanceType<typeof CustomerWhereInput>;
    orderBy?: Array<CustomerOrderByWithAggregationInput>;
    by: Array<keyof typeof CustomerScalarFieldEnum>;
    having?: InstanceType<typeof CustomerScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CustomerCountAggregateInput>;
    _min?: InstanceType<typeof CustomerMinAggregateInput>;
    _max?: InstanceType<typeof CustomerMaxAggregateInput>;
}
export declare class CustomerGroupBy {
    number: string;
    id_favoriteDelivery: string;
    id_profile: string;
    _count?: InstanceType<typeof CustomerCountAggregate>;
    _min?: InstanceType<typeof CustomerMinAggregate>;
    _max?: InstanceType<typeof CustomerMaxAggregate>;
}
export declare class CustomerMaxAggregateInput {
    number?: true;
    id_favoriteDelivery?: true;
    id_profile?: true;
}
export declare class CustomerMaxAggregate {
    number?: string;
    id_favoriteDelivery?: string;
    id_profile?: string;
}
export declare class CustomerMaxOrderByAggregateInput {
    number?: keyof typeof SortOrder;
    id_favoriteDelivery?: keyof typeof SortOrder;
    id_profile?: keyof typeof SortOrder;
}
export declare class CustomerMinAggregateInput {
    number?: true;
    id_favoriteDelivery?: true;
    id_profile?: true;
}
export declare class CustomerMinAggregate {
    number?: string;
    id_favoriteDelivery?: string;
    id_profile?: string;
}
export declare class CustomerMinOrderByAggregateInput {
    number?: keyof typeof SortOrder;
    id_favoriteDelivery?: keyof typeof SortOrder;
    id_profile?: keyof typeof SortOrder;
}
export declare class CustomerOrderByWithAggregationInput {
    number?: keyof typeof SortOrder;
    id_favoriteDelivery?: keyof typeof SortOrder;
    id_profile?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CustomerCountOrderByAggregateInput>;
    _max?: InstanceType<typeof CustomerMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CustomerMinOrderByAggregateInput>;
}
export declare class CustomerOrderByWithRelationInput {
    number?: keyof typeof SortOrder;
    destinations?: InstanceType<typeof DestinationOrderByRelationAggregateInput>;
    collectors?: InstanceType<typeof ProfileOrderByRelationAggregateInput>;
    favoriteDelivery?: InstanceType<typeof DeliveryOrderByWithRelationInput>;
    id_favoriteDelivery?: keyof typeof SortOrder;
    profile?: InstanceType<typeof ProfileOrderByWithRelationInput>;
    id_profile?: keyof typeof SortOrder;
}
export declare class CustomerRelationFilter {
    is?: InstanceType<typeof CustomerWhereInput>;
    isNot?: InstanceType<typeof CustomerWhereInput>;
}
export declare class CustomerScalarWhereWithAggregatesInput {
    AND?: Array<CustomerScalarWhereWithAggregatesInput>;
    OR?: Array<CustomerScalarWhereWithAggregatesInput>;
    NOT?: Array<CustomerScalarWhereWithAggregatesInput>;
    number?: InstanceType<typeof StringWithAggregatesFilter>;
    id_favoriteDelivery?: InstanceType<typeof StringWithAggregatesFilter>;
    id_profile?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput {
    create?: InstanceType<typeof CustomerCreateWithoutFavoriteDeliveryInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutFavoriteDeliveryInput
    >;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class CustomerUncheckedCreateNestedOneWithoutProfileInput {
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class CustomerUncheckedCreateWithoutCollectorsInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    id_favoriteDelivery: string;
    id_profile: string;
}
export declare class CustomerUncheckedCreateWithoutDestinationsInput {
    number: string;
    collectors?: InstanceType<
        typeof ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput
    >;
    id_favoriteDelivery: string;
    id_profile: string;
}
export declare class CustomerUncheckedCreateWithoutFavoriteDeliveryInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput
    >;
    id_profile: string;
}
export declare class CustomerUncheckedCreateWithoutProfileInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput
    >;
    id_favoriteDelivery: string;
}
export declare class CustomerUncheckedCreateInput {
    number: string;
    destinations?: InstanceType<
        typeof DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput
    >;
    id_favoriteDelivery: string;
    id_profile: string;
}
export declare class CustomerUncheckedUpdateManyInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_favoriteDelivery?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_profile?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput {
    create?: InstanceType<typeof CustomerCreateWithoutFavoriteDeliveryInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutFavoriteDeliveryInput
    >;
    upsert?: InstanceType<typeof CustomerUpsertWithoutFavoriteDeliveryInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    update?: InstanceType<typeof CustomerUpdateWithoutFavoriteDeliveryInput>;
}
export declare class CustomerUncheckedUpdateOneWithoutProfileInput {
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    upsert?: InstanceType<typeof CustomerUpsertWithoutProfileInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    update?: InstanceType<typeof CustomerUpdateWithoutProfileInput>;
}
export declare class CustomerUncheckedUpdateWithoutCollectorsInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput
    >;
    id_favoriteDelivery?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_profile?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CustomerUncheckedUpdateWithoutDestinationsInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    collectors?: InstanceType<
        typeof ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput
    >;
    id_favoriteDelivery?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_profile?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CustomerUncheckedUpdateWithoutFavoriteDeliveryInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput
    >;
    id_profile?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CustomerUncheckedUpdateWithoutProfileInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput
    >;
    id_favoriteDelivery?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CustomerUncheckedUpdateInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput
    >;
    id_favoriteDelivery?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_profile?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CustomerUpdateManyMutationInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CustomerUpdateOneWithoutCollectorsInput {
    create?: InstanceType<typeof CustomerCreateWithoutCollectorsInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutCollectorsInput
    >;
    upsert?: InstanceType<typeof CustomerUpsertWithoutCollectorsInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    update?: InstanceType<typeof CustomerUpdateWithoutCollectorsInput>;
}
export declare class CustomerUpdateOneWithoutDestinationsInput {
    create?: InstanceType<typeof CustomerCreateWithoutDestinationsInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutDestinationsInput
    >;
    upsert?: InstanceType<typeof CustomerUpsertWithoutDestinationsInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    update?: InstanceType<typeof CustomerUpdateWithoutDestinationsInput>;
}
export declare class CustomerUpdateOneWithoutFavoriteDeliveryInput {
    create?: InstanceType<typeof CustomerCreateWithoutFavoriteDeliveryInput>;
    connectOrCreate?: InstanceType<
        typeof CustomerCreateOrConnectWithoutFavoriteDeliveryInput
    >;
    upsert?: InstanceType<typeof CustomerUpsertWithoutFavoriteDeliveryInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    update?: InstanceType<typeof CustomerUpdateWithoutFavoriteDeliveryInput>;
}
export declare class CustomerUpdateOneWithoutProfileInput {
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    upsert?: InstanceType<typeof CustomerUpsertWithoutProfileInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    update?: InstanceType<typeof CustomerUpdateWithoutProfileInput>;
}
export declare class CustomerUpdateWithoutCollectorsInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUpdateManyWithoutCustomer_destination_customerInput
    >;
    favoriteDelivery?: InstanceType<
        typeof DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput
    >;
    profile?: InstanceType<typeof ProfileUpdateOneRequiredWithoutCustomerInput>;
}
export declare class CustomerUpdateWithoutDestinationsInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    collectors?: InstanceType<
        typeof ProfileUpdateManyWithoutCollector_profile_customerInput
    >;
    favoriteDelivery?: InstanceType<
        typeof DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput
    >;
    profile?: InstanceType<typeof ProfileUpdateOneRequiredWithoutCustomerInput>;
}
export declare class CustomerUpdateWithoutFavoriteDeliveryInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUpdateManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUpdateManyWithoutCollector_profile_customerInput
    >;
    profile?: InstanceType<typeof ProfileUpdateOneRequiredWithoutCustomerInput>;
}
export declare class CustomerUpdateWithoutProfileInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUpdateManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUpdateManyWithoutCollector_profile_customerInput
    >;
    favoriteDelivery?: InstanceType<
        typeof DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput
    >;
}
export declare class CustomerUpdateInput {
    number?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destinations?: InstanceType<
        typeof DestinationUpdateManyWithoutCustomer_destination_customerInput
    >;
    collectors?: InstanceType<
        typeof ProfileUpdateManyWithoutCollector_profile_customerInput
    >;
    favoriteDelivery?: InstanceType<
        typeof DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput
    >;
    profile?: InstanceType<typeof ProfileUpdateOneRequiredWithoutCustomerInput>;
}
export declare class CustomerUpsertWithoutCollectorsInput {
    update: InstanceType<typeof CustomerUpdateWithoutCollectorsInput>;
    create: InstanceType<typeof CustomerCreateWithoutCollectorsInput>;
}
export declare class CustomerUpsertWithoutDestinationsInput {
    update: InstanceType<typeof CustomerUpdateWithoutDestinationsInput>;
    create: InstanceType<typeof CustomerCreateWithoutDestinationsInput>;
}
export declare class CustomerUpsertWithoutFavoriteDeliveryInput {
    update: InstanceType<typeof CustomerUpdateWithoutFavoriteDeliveryInput>;
    create: InstanceType<typeof CustomerCreateWithoutFavoriteDeliveryInput>;
}
export declare class CustomerUpsertWithoutProfileInput {
    update: InstanceType<typeof CustomerUpdateWithoutProfileInput>;
    create: InstanceType<typeof CustomerCreateWithoutProfileInput>;
}
export declare class CustomerWhereUniqueInput {
    number?: string;
    id_favoriteDelivery?: string;
    id_profile?: string;
}
export declare class CustomerWhereInput {
    AND?: Array<CustomerWhereInput>;
    OR?: Array<CustomerWhereInput>;
    NOT?: Array<CustomerWhereInput>;
    number?: InstanceType<typeof StringFilter>;
    destinations?: InstanceType<typeof DestinationListRelationFilter>;
    collectors?: InstanceType<typeof ProfileListRelationFilter>;
    favoriteDelivery?: InstanceType<typeof DeliveryRelationFilter>;
    id_favoriteDelivery?: InstanceType<typeof StringFilter>;
    profile?: InstanceType<typeof ProfileRelationFilter>;
    id_profile?: InstanceType<typeof StringFilter>;
}
export declare class Customer {
    number: string;
    destinations?: Array<Destination>;
    collectors?: Array<Profile>;
    favoriteDelivery?: InstanceType<typeof Delivery>;
    id_favoriteDelivery: string;
    profile?: InstanceType<typeof Profile>;
    id_profile: string;
    _count?: InstanceType<typeof CustomerCount>;
}
export declare class DeleteManyCustomerArgs {
    where?: InstanceType<typeof CustomerWhereInput>;
}
export declare class DeleteOneCustomerArgs {
    where: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class FindFirstCustomerArgs {
    where?: InstanceType<typeof CustomerWhereInput>;
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    cursor?: InstanceType<typeof CustomerWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CustomerScalarFieldEnum>;
}
export declare class FindManyCustomerArgs {
    where?: InstanceType<typeof CustomerWhereInput>;
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    cursor?: InstanceType<typeof CustomerWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CustomerScalarFieldEnum>;
}
export declare class FindUniqueCustomerArgs {
    where: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class UpdateManyCustomerArgs {
    data: InstanceType<typeof CustomerUpdateManyMutationInput>;
    where?: InstanceType<typeof CustomerWhereInput>;
}
export declare class UpdateOneCustomerArgs {
    data: InstanceType<typeof CustomerUpdateInput>;
    where: InstanceType<typeof CustomerWhereUniqueInput>;
}
export declare class UpsertOneCustomerArgs {
    where: InstanceType<typeof CustomerWhereUniqueInput>;
    create: InstanceType<typeof CustomerCreateInput>;
    update: InstanceType<typeof CustomerUpdateInput>;
}
export declare class AggregateDelivery {
    _count?: InstanceType<typeof DeliveryCountAggregate>;
    _min?: InstanceType<typeof DeliveryMinAggregate>;
    _max?: InstanceType<typeof DeliveryMaxAggregate>;
}
export declare class CreateManyDeliveryArgs {
    data: Array<DeliveryCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDeliveryArgs {
    data: InstanceType<typeof DeliveryCreateInput>;
}
export declare class DeleteManyDeliveryArgs {
    where?: InstanceType<typeof DeliveryWhereInput>;
}
export declare class DeleteOneDeliveryArgs {
    where: InstanceType<typeof DeliveryWhereUniqueInput>;
}
export declare class DeliveryAggregateArgs {
    where?: InstanceType<typeof DeliveryWhereInput>;
    orderBy?: Array<DeliveryOrderByWithRelationInput>;
    cursor?: InstanceType<typeof DeliveryWhereUniqueInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DeliveryCountAggregateInput>;
    _min?: InstanceType<typeof DeliveryMinAggregateInput>;
    _max?: InstanceType<typeof DeliveryMaxAggregateInput>;
}
export declare class DeliveryCountAggregateInput {
    id?: true;
    id_destination?: true;
    _all?: true;
}
export declare class DeliveryCountAggregate {
    id: number;
    id_destination: number;
    _all: number;
}
export declare class DeliveryCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    id_destination?: keyof typeof SortOrder;
}
export declare class DeliveryCreateManyInput {
    id?: string;
    id_destination?: string;
}
export declare class DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput {
    create?: InstanceType<
        typeof DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput
    >;
    connectOrCreate?: InstanceType<
        typeof DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput
    >;
    connect?: InstanceType<typeof DeliveryWhereUniqueInput>;
}
export declare class DeliveryCreateNestedOneWithoutDestinationInput {
    create?: InstanceType<typeof DeliveryCreateWithoutDestinationInput>;
    connectOrCreate?: InstanceType<
        typeof DeliveryCreateOrConnectWithoutDestinationInput
    >;
    connect?: InstanceType<typeof DeliveryWhereUniqueInput>;
}
export declare class DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput {
    where: InstanceType<typeof DeliveryWhereUniqueInput>;
    create: InstanceType<
        typeof DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput
    >;
}
export declare class DeliveryCreateOrConnectWithoutDestinationInput {
    where: InstanceType<typeof DeliveryWhereUniqueInput>;
    create: InstanceType<typeof DeliveryCreateWithoutDestinationInput>;
}
export declare class DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput {
    id?: string;
    destination?: InstanceType<
        typeof DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput
    >;
}
export declare class DeliveryCreateWithoutDestinationInput {
    id?: string;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerCreateNestedOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryCreateInput {
    id?: string;
    destination?: InstanceType<
        typeof DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput
    >;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerCreateNestedOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryGroupByArgs {
    where?: InstanceType<typeof DeliveryWhereInput>;
    orderBy?: Array<DeliveryOrderByWithAggregationInput>;
    by: Array<keyof typeof DeliveryScalarFieldEnum>;
    having?: InstanceType<typeof DeliveryScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DeliveryCountAggregateInput>;
    _min?: InstanceType<typeof DeliveryMinAggregateInput>;
    _max?: InstanceType<typeof DeliveryMaxAggregateInput>;
}
export declare class DeliveryGroupBy {
    id: string;
    id_destination?: string;
    _count?: InstanceType<typeof DeliveryCountAggregate>;
    _min?: InstanceType<typeof DeliveryMinAggregate>;
    _max?: InstanceType<typeof DeliveryMaxAggregate>;
}
export declare class DeliveryMaxAggregateInput {
    id?: true;
    id_destination?: true;
}
export declare class DeliveryMaxAggregate {
    id?: string;
    id_destination?: string;
}
export declare class DeliveryMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    id_destination?: keyof typeof SortOrder;
}
export declare class DeliveryMinAggregateInput {
    id?: true;
    id_destination?: true;
}
export declare class DeliveryMinAggregate {
    id?: string;
    id_destination?: string;
}
export declare class DeliveryMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    id_destination?: keyof typeof SortOrder;
}
export declare class DeliveryOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    id_destination?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DeliveryCountOrderByAggregateInput>;
    _max?: InstanceType<typeof DeliveryMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DeliveryMinOrderByAggregateInput>;
}
export declare class DeliveryOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    destination?: InstanceType<typeof DestinationOrderByWithRelationInput>;
    id_destination?: keyof typeof SortOrder;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerOrderByWithRelationInput
    >;
}
export declare class DeliveryRelationFilter {
    is?: InstanceType<typeof DeliveryWhereInput>;
    isNot?: InstanceType<typeof DeliveryWhereInput>;
}
export declare class DeliveryScalarWhereWithAggregatesInput {
    AND?: Array<DeliveryScalarWhereWithAggregatesInput>;
    OR?: Array<DeliveryScalarWhereWithAggregatesInput>;
    NOT?: Array<DeliveryScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    id_destination?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class DeliveryUncheckedCreateNestedOneWithoutDestinationInput {
    create?: InstanceType<typeof DeliveryCreateWithoutDestinationInput>;
    connectOrCreate?: InstanceType<
        typeof DeliveryCreateOrConnectWithoutDestinationInput
    >;
    connect?: InstanceType<typeof DeliveryWhereUniqueInput>;
}
export declare class DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput {
    id?: string;
    id_destination?: string;
}
export declare class DeliveryUncheckedCreateWithoutDestinationInput {
    id?: string;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryUncheckedCreateInput {
    id?: string;
    id_destination?: string;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_destination?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class DeliveryUncheckedUpdateOneWithoutDestinationInput {
    create?: InstanceType<typeof DeliveryCreateWithoutDestinationInput>;
    connectOrCreate?: InstanceType<
        typeof DeliveryCreateOrConnectWithoutDestinationInput
    >;
    upsert?: InstanceType<typeof DeliveryUpsertWithoutDestinationInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof DeliveryWhereUniqueInput>;
    update?: InstanceType<typeof DeliveryUpdateWithoutDestinationInput>;
}
export declare class DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_destination?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class DeliveryUncheckedUpdateWithoutDestinationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    id_destination?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput {
    create?: InstanceType<
        typeof DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput
    >;
    connectOrCreate?: InstanceType<
        typeof DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput
    >;
    upsert?: InstanceType<
        typeof DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput
    >;
    connect?: InstanceType<typeof DeliveryWhereUniqueInput>;
    update?: InstanceType<
        typeof DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput
    >;
}
export declare class DeliveryUpdateOneWithoutDestinationInput {
    create?: InstanceType<typeof DeliveryCreateWithoutDestinationInput>;
    connectOrCreate?: InstanceType<
        typeof DeliveryCreateOrConnectWithoutDestinationInput
    >;
    upsert?: InstanceType<typeof DeliveryUpsertWithoutDestinationInput>;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof DeliveryWhereUniqueInput>;
    update?: InstanceType<typeof DeliveryUpdateWithoutDestinationInput>;
}
export declare class DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destination?: InstanceType<
        typeof DestinationUpdateOneWithoutDelivery_destination_deliveryInput
    >;
}
export declare class DeliveryUpdateWithoutDestinationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerUpdateOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    destination?: InstanceType<
        typeof DestinationUpdateOneWithoutDelivery_destination_deliveryInput
    >;
    customer_favouriteDelivery_customer?: InstanceType<
        typeof CustomerUpdateOneWithoutFavoriteDeliveryInput
    >;
}
export declare class DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput {
    update: InstanceType<
        typeof DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput
    >;
    create: InstanceType<
        typeof DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput
    >;
}
export declare class DeliveryUpsertWithoutDestinationInput {
    update: InstanceType<typeof DeliveryUpdateWithoutDestinationInput>;
    create: InstanceType<typeof DeliveryCreateWithoutDestinationInput>;
}
export declare class DeliveryWhereUniqueInput {
    id?: string;
    id_destination?: string;
}
export declare class DeliveryWhereInput {
    AND?: Array<DeliveryWhereInput>;
    OR?: Array<DeliveryWhereInput>;
    NOT?: Array<DeliveryWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    destination?: InstanceType<typeof DestinationRelationFilter>;
    id_destination?: InstanceType<typeof StringNullableFilter>;
    customer_favouriteDelivery_customer?: InstanceType<typeof CustomerRelationFilter>;
}
export declare class Delivery {
    id: string;
    destination?: InstanceType<typeof Destination> | null;
    id_destination: string | null;
    customer_favouriteDelivery_customer?: InstanceType<typeof Customer> | null;
}
export declare class FindFirstDeliveryArgs {
    where?: InstanceType<typeof DeliveryWhereInput>;
    orderBy?: Array<DeliveryOrderByWithRelationInput>;
    cursor?: InstanceType<typeof DeliveryWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DeliveryScalarFieldEnum>;
}
export declare class FindManyDeliveryArgs {
    where?: InstanceType<typeof DeliveryWhereInput>;
    orderBy?: Array<DeliveryOrderByWithRelationInput>;
    cursor?: InstanceType<typeof DeliveryWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DeliveryScalarFieldEnum>;
}
export declare class FindUniqueDeliveryArgs {
    where: InstanceType<typeof DeliveryWhereUniqueInput>;
}
export declare class UpdateManyDeliveryArgs {
    data: InstanceType<typeof DeliveryUpdateManyMutationInput>;
    where?: InstanceType<typeof DeliveryWhereInput>;
}
export declare class UpdateOneDeliveryArgs {
    data: InstanceType<typeof DeliveryUpdateInput>;
    where: InstanceType<typeof DeliveryWhereUniqueInput>;
}
export declare class UpsertOneDeliveryArgs {
    where: InstanceType<typeof DeliveryWhereUniqueInput>;
    create: InstanceType<typeof DeliveryCreateInput>;
    update: InstanceType<typeof DeliveryUpdateInput>;
}
export declare class AggregateDestination {
    _count?: InstanceType<typeof DestinationCountAggregate>;
    _min?: InstanceType<typeof DestinationMinAggregate>;
    _max?: InstanceType<typeof DestinationMaxAggregate>;
}
export declare class CreateManyDestinationArgs {
    data: Array<DestinationCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDestinationArgs {
    data: InstanceType<typeof DestinationCreateInput>;
}
export declare class DeleteManyDestinationArgs {
    where?: InstanceType<typeof DestinationWhereInput>;
}
export declare class DeleteOneDestinationArgs {
    where: InstanceType<typeof DestinationWhereUniqueInput>;
}
export declare class DestinationAggregateArgs {
    where?: InstanceType<typeof DestinationWhereInput>;
    orderBy?: Array<DestinationOrderByWithRelationInput>;
    cursor?: InstanceType<typeof DestinationWhereUniqueInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DestinationCountAggregateInput>;
    _min?: InstanceType<typeof DestinationMinAggregateInput>;
    _max?: InstanceType<typeof DestinationMaxAggregateInput>;
}
export declare class DestinationCountAggregateInput {
    id?: true;
    customer_number?: true;
    _all?: true;
}
export declare class DestinationCountAggregate {
    id: number;
    customer_number: number;
    _all: number;
}
export declare class DestinationCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    customer_number?: keyof typeof SortOrder;
}
export declare class DestinationCreateManyCustomer_destination_customerInputEnvelope {
    data: Array<DestinationCreateManyCustomer_destination_customerInput>;
    skipDuplicates?: boolean;
}
export declare class DestinationCreateManyCustomer_destination_customerInput {
    id?: string;
}
export declare class DestinationCreateManyInput {
    id?: string;
    customer_number?: string;
}
export declare class DestinationCreateNestedManyWithoutCustomer_destination_customerInput {
    create?: Array<DestinationCreateWithoutCustomer_destination_customerInput>;
    connectOrCreate?: Array<DestinationCreateOrConnectWithoutCustomer_destination_customerInput>;
    createMany?: InstanceType<
        typeof DestinationCreateManyCustomer_destination_customerInputEnvelope
    >;
    connect?: Array<DestinationWhereUniqueInput>;
}
export declare class DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput {
    create?: InstanceType<
        typeof DestinationCreateWithoutDelivery_destination_deliveryInput
    >;
    connectOrCreate?: InstanceType<
        typeof DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput
    >;
    connect?: InstanceType<typeof DestinationWhereUniqueInput>;
}
export declare class DestinationCreateOrConnectWithoutCustomer_destination_customerInput {
    where: InstanceType<typeof DestinationWhereUniqueInput>;
    create: InstanceType<
        typeof DestinationCreateWithoutCustomer_destination_customerInput
    >;
}
export declare class DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput {
    where: InstanceType<typeof DestinationWhereUniqueInput>;
    create: InstanceType<
        typeof DestinationCreateWithoutDelivery_destination_deliveryInput
    >;
}
export declare class DestinationCreateWithoutCustomer_destination_customerInput {
    id?: string;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryCreateNestedOneWithoutDestinationInput
    >;
}
export declare class DestinationCreateWithoutDelivery_destination_deliveryInput {
    id?: string;
    customer_destination_customer?: InstanceType<
        typeof CustomerCreateNestedOneWithoutDestinationsInput
    >;
}
export declare class DestinationCreateInput {
    id?: string;
    customer_destination_customer?: InstanceType<
        typeof CustomerCreateNestedOneWithoutDestinationsInput
    >;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryCreateNestedOneWithoutDestinationInput
    >;
}
export declare class DestinationGroupByArgs {
    where?: InstanceType<typeof DestinationWhereInput>;
    orderBy?: Array<DestinationOrderByWithAggregationInput>;
    by: Array<keyof typeof DestinationScalarFieldEnum>;
    having?: InstanceType<typeof DestinationScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DestinationCountAggregateInput>;
    _min?: InstanceType<typeof DestinationMinAggregateInput>;
    _max?: InstanceType<typeof DestinationMaxAggregateInput>;
}
export declare class DestinationGroupBy {
    id: string;
    customer_number?: string;
    _count?: InstanceType<typeof DestinationCountAggregate>;
    _min?: InstanceType<typeof DestinationMinAggregate>;
    _max?: InstanceType<typeof DestinationMaxAggregate>;
}
export declare class DestinationListRelationFilter {
    every?: InstanceType<typeof DestinationWhereInput>;
    some?: InstanceType<typeof DestinationWhereInput>;
    none?: InstanceType<typeof DestinationWhereInput>;
}
export declare class DestinationMaxAggregateInput {
    id?: true;
    customer_number?: true;
}
export declare class DestinationMaxAggregate {
    id?: string;
    customer_number?: string;
}
export declare class DestinationMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    customer_number?: keyof typeof SortOrder;
}
export declare class DestinationMinAggregateInput {
    id?: true;
    customer_number?: true;
}
export declare class DestinationMinAggregate {
    id?: string;
    customer_number?: string;
}
export declare class DestinationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    customer_number?: keyof typeof SortOrder;
}
export declare class DestinationOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class DestinationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    customer_number?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DestinationCountOrderByAggregateInput>;
    _max?: InstanceType<typeof DestinationMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DestinationMinOrderByAggregateInput>;
}
export declare class DestinationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    customer_destination_customer?: InstanceType<
        typeof CustomerOrderByWithRelationInput
    >;
    customer_number?: keyof typeof SortOrder;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryOrderByWithRelationInput
    >;
}
export declare class DestinationRelationFilter {
    is?: InstanceType<typeof DestinationWhereInput>;
    isNot?: InstanceType<typeof DestinationWhereInput>;
}
export declare class DestinationScalarWhereWithAggregatesInput {
    AND?: Array<DestinationScalarWhereWithAggregatesInput>;
    OR?: Array<DestinationScalarWhereWithAggregatesInput>;
    NOT?: Array<DestinationScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    customer_number?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class DestinationScalarWhereInput {
    AND?: Array<DestinationScalarWhereInput>;
    OR?: Array<DestinationScalarWhereInput>;
    NOT?: Array<DestinationScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    customer_number?: InstanceType<typeof StringNullableFilter>;
}
export declare class DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput {
    create?: Array<DestinationCreateWithoutCustomer_destination_customerInput>;
    connectOrCreate?: Array<DestinationCreateOrConnectWithoutCustomer_destination_customerInput>;
    createMany?: InstanceType<
        typeof DestinationCreateManyCustomer_destination_customerInputEnvelope
    >;
    connect?: Array<DestinationWhereUniqueInput>;
}
export declare class DestinationUncheckedCreateWithoutCustomer_destination_customerInput {
    id?: string;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryUncheckedCreateNestedOneWithoutDestinationInput
    >;
}
export declare class DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput {
    id?: string;
    customer_number?: string;
}
export declare class DestinationUncheckedCreateInput {
    id?: string;
    customer_number?: string;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryUncheckedCreateNestedOneWithoutDestinationInput
    >;
}
export declare class DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput {
    create?: Array<DestinationCreateWithoutCustomer_destination_customerInput>;
    connectOrCreate?: Array<DestinationCreateOrConnectWithoutCustomer_destination_customerInput>;
    upsert?: Array<DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput>;
    createMany?: InstanceType<
        typeof DestinationCreateManyCustomer_destination_customerInputEnvelope
    >;
    set?: Array<DestinationWhereUniqueInput>;
    disconnect?: Array<DestinationWhereUniqueInput>;
    delete?: Array<DestinationWhereUniqueInput>;
    connect?: Array<DestinationWhereUniqueInput>;
    update?: Array<DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput>;
    updateMany?: Array<DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput>;
    deleteMany?: Array<DestinationScalarWhereInput>;
}
export declare class DestinationUncheckedUpdateManyWithoutDestinationsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DestinationUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class DestinationUncheckedUpdateWithoutCustomer_destination_customerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryUncheckedUpdateOneWithoutDestinationInput
    >;
}
export declare class DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class DestinationUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryUncheckedUpdateOneWithoutDestinationInput
    >;
}
export declare class DestinationUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput {
    where: InstanceType<typeof DestinationScalarWhereInput>;
    data: InstanceType<typeof DestinationUpdateManyMutationInput>;
}
export declare class DestinationUpdateManyWithoutCustomer_destination_customerInput {
    create?: Array<DestinationCreateWithoutCustomer_destination_customerInput>;
    connectOrCreate?: Array<DestinationCreateOrConnectWithoutCustomer_destination_customerInput>;
    upsert?: Array<DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput>;
    createMany?: InstanceType<
        typeof DestinationCreateManyCustomer_destination_customerInputEnvelope
    >;
    set?: Array<DestinationWhereUniqueInput>;
    disconnect?: Array<DestinationWhereUniqueInput>;
    delete?: Array<DestinationWhereUniqueInput>;
    connect?: Array<DestinationWhereUniqueInput>;
    update?: Array<DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput>;
    updateMany?: Array<DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput>;
    deleteMany?: Array<DestinationScalarWhereInput>;
}
export declare class DestinationUpdateOneWithoutDelivery_destination_deliveryInput {
    create?: InstanceType<
        typeof DestinationCreateWithoutDelivery_destination_deliveryInput
    >;
    connectOrCreate?: InstanceType<
        typeof DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput
    >;
    upsert?: InstanceType<
        typeof DestinationUpsertWithoutDelivery_destination_deliveryInput
    >;
    disconnect?: boolean;
    delete?: boolean;
    connect?: InstanceType<typeof DestinationWhereUniqueInput>;
    update?: InstanceType<
        typeof DestinationUpdateWithoutDelivery_destination_deliveryInput
    >;
}
export declare class DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput {
    where: InstanceType<typeof DestinationWhereUniqueInput>;
    data: InstanceType<
        typeof DestinationUpdateWithoutCustomer_destination_customerInput
    >;
}
export declare class DestinationUpdateWithoutCustomer_destination_customerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryUpdateOneWithoutDestinationInput
    >;
}
export declare class DestinationUpdateWithoutDelivery_destination_deliveryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_destination_customer?: InstanceType<
        typeof CustomerUpdateOneWithoutDestinationsInput
    >;
}
export declare class DestinationUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_destination_customer?: InstanceType<
        typeof CustomerUpdateOneWithoutDestinationsInput
    >;
    delivery_destination_delivery?: InstanceType<
        typeof DeliveryUpdateOneWithoutDestinationInput
    >;
}
export declare class DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput {
    where: InstanceType<typeof DestinationWhereUniqueInput>;
    update: InstanceType<
        typeof DestinationUpdateWithoutCustomer_destination_customerInput
    >;
    create: InstanceType<
        typeof DestinationCreateWithoutCustomer_destination_customerInput
    >;
}
export declare class DestinationUpsertWithoutDelivery_destination_deliveryInput {
    update: InstanceType<
        typeof DestinationUpdateWithoutDelivery_destination_deliveryInput
    >;
    create: InstanceType<
        typeof DestinationCreateWithoutDelivery_destination_deliveryInput
    >;
}
export declare class DestinationWhereUniqueInput {
    id: string;
}
export declare class DestinationWhereInput {
    AND?: Array<DestinationWhereInput>;
    OR?: Array<DestinationWhereInput>;
    NOT?: Array<DestinationWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    customer_destination_customer?: InstanceType<typeof CustomerRelationFilter>;
    customer_number?: InstanceType<typeof StringNullableFilter>;
    delivery_destination_delivery?: InstanceType<typeof DeliveryRelationFilter>;
}
export declare class Destination {
    id: string;
    customer_destination_customer?: InstanceType<typeof Customer> | null;
    customer_number: string | null;
    delivery_destination_delivery?: InstanceType<typeof Delivery> | null;
}
export declare class FindFirstDestinationArgs {
    where?: InstanceType<typeof DestinationWhereInput>;
    orderBy?: Array<DestinationOrderByWithRelationInput>;
    cursor?: InstanceType<typeof DestinationWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DestinationScalarFieldEnum>;
}
export declare class FindManyDestinationArgs {
    where?: InstanceType<typeof DestinationWhereInput>;
    orderBy?: Array<DestinationOrderByWithRelationInput>;
    cursor?: InstanceType<typeof DestinationWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DestinationScalarFieldEnum>;
}
export declare class FindUniqueDestinationArgs {
    where: InstanceType<typeof DestinationWhereUniqueInput>;
}
export declare class UpdateManyDestinationArgs {
    data: InstanceType<typeof DestinationUpdateManyMutationInput>;
    where?: InstanceType<typeof DestinationWhereInput>;
}
export declare class UpdateOneDestinationArgs {
    data: InstanceType<typeof DestinationUpdateInput>;
    where: InstanceType<typeof DestinationWhereUniqueInput>;
}
export declare class UpsertOneDestinationArgs {
    where: InstanceType<typeof DestinationWhereUniqueInput>;
    create: InstanceType<typeof DestinationCreateInput>;
    update: InstanceType<typeof DestinationUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateProfile {
    _count?: InstanceType<typeof ProfileCountAggregate>;
    _min?: InstanceType<typeof ProfileMinAggregate>;
    _max?: InstanceType<typeof ProfileMaxAggregate>;
}
export declare class CreateManyProfileArgs {
    data: Array<ProfileCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProfileArgs {
    data: InstanceType<typeof ProfileCreateInput>;
}
export declare class DeleteManyProfileArgs {
    where?: InstanceType<typeof ProfileWhereInput>;
}
export declare class DeleteOneProfileArgs {
    where: InstanceType<typeof ProfileWhereUniqueInput>;
}
export declare class FindFirstProfileArgs {
    where?: InstanceType<typeof ProfileWhereInput>;
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}
export declare class FindManyProfileArgs {
    where?: InstanceType<typeof ProfileWhereInput>;
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}
export declare class FindUniqueProfileArgs {
    where: InstanceType<typeof ProfileWhereUniqueInput>;
}
export declare class ProfileAggregateArgs {
    where?: InstanceType<typeof ProfileWhereInput>;
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}
export declare class ProfileCountAggregateInput {
    id?: true;
    customer_numbner?: true;
    _all?: true;
}
export declare class ProfileCountAggregate {
    id: number;
    customer_numbner: number;
    _all: number;
}
export declare class ProfileCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    customer_numbner?: keyof typeof SortOrder;
}
export declare class ProfileCreateManyCollector_profile_customerInputEnvelope {
    data: Array<ProfileCreateManyCollector_profile_customerInput>;
    skipDuplicates?: boolean;
}
export declare class ProfileCreateManyCollector_profile_customerInput {
    id?: string;
}
export declare class ProfileCreateManyInput {
    id?: string;
    customer_numbner?: string;
}
export declare class ProfileCreateNestedManyWithoutCollector_profile_customerInput {
    create?: Array<ProfileCreateWithoutCollector_profile_customerInput>;
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutCollector_profile_customerInput>;
    createMany?: InstanceType<
        typeof ProfileCreateManyCollector_profile_customerInputEnvelope
    >;
    connect?: Array<ProfileWhereUniqueInput>;
}
export declare class ProfileCreateNestedOneWithoutCustomerInput {
    create?: InstanceType<typeof ProfileCreateWithoutCustomerInput>;
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutCustomerInput>;
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}
export declare class ProfileCreateOrConnectWithoutCollector_profile_customerInput {
    where: InstanceType<typeof ProfileWhereUniqueInput>;
    create: InstanceType<typeof ProfileCreateWithoutCollector_profile_customerInput>;
}
export declare class ProfileCreateOrConnectWithoutCustomerInput {
    where: InstanceType<typeof ProfileWhereUniqueInput>;
    create: InstanceType<typeof ProfileCreateWithoutCustomerInput>;
}
export declare class ProfileCreateWithoutCollector_profile_customerInput {
    id?: string;
    customer?: InstanceType<typeof CustomerCreateNestedOneWithoutProfileInput>;
}
export declare class ProfileCreateWithoutCustomerInput {
    id?: string;
    collector_profile_customer?: InstanceType<
        typeof CustomerCreateNestedOneWithoutCollectorsInput
    >;
}
export declare class ProfileCreateInput {
    id?: string;
    customer?: InstanceType<typeof CustomerCreateNestedOneWithoutProfileInput>;
    collector_profile_customer?: InstanceType<
        typeof CustomerCreateNestedOneWithoutCollectorsInput
    >;
}
export declare class ProfileGroupByArgs {
    where?: InstanceType<typeof ProfileWhereInput>;
    orderBy?: Array<ProfileOrderByWithAggregationInput>;
    by: Array<keyof typeof ProfileScalarFieldEnum>;
    having?: InstanceType<typeof ProfileScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}
export declare class ProfileGroupBy {
    id: string;
    customer_numbner?: string;
    _count?: InstanceType<typeof ProfileCountAggregate>;
    _min?: InstanceType<typeof ProfileMinAggregate>;
    _max?: InstanceType<typeof ProfileMaxAggregate>;
}
export declare class ProfileListRelationFilter {
    every?: InstanceType<typeof ProfileWhereInput>;
    some?: InstanceType<typeof ProfileWhereInput>;
    none?: InstanceType<typeof ProfileWhereInput>;
}
export declare class ProfileMaxAggregateInput {
    id?: true;
    customer_numbner?: true;
}
export declare class ProfileMaxAggregate {
    id?: string;
    customer_numbner?: string;
}
export declare class ProfileMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    customer_numbner?: keyof typeof SortOrder;
}
export declare class ProfileMinAggregateInput {
    id?: true;
    customer_numbner?: true;
}
export declare class ProfileMinAggregate {
    id?: string;
    customer_numbner?: string;
}
export declare class ProfileMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    customer_numbner?: keyof typeof SortOrder;
}
export declare class ProfileOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProfileOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    customer_numbner?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProfileCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ProfileMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProfileMinOrderByAggregateInput>;
}
export declare class ProfileOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    customer?: InstanceType<typeof CustomerOrderByWithRelationInput>;
    collector_profile_customer?: InstanceType<typeof CustomerOrderByWithRelationInput>;
    customer_numbner?: keyof typeof SortOrder;
}
export declare class ProfileRelationFilter {
    is?: InstanceType<typeof ProfileWhereInput>;
    isNot?: InstanceType<typeof ProfileWhereInput>;
}
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    customer_numbner?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class ProfileScalarWhereInput {
    AND?: Array<ProfileScalarWhereInput>;
    OR?: Array<ProfileScalarWhereInput>;
    NOT?: Array<ProfileScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    customer_numbner?: InstanceType<typeof StringNullableFilter>;
}
export declare class ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput {
    create?: Array<ProfileCreateWithoutCollector_profile_customerInput>;
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutCollector_profile_customerInput>;
    createMany?: InstanceType<
        typeof ProfileCreateManyCollector_profile_customerInputEnvelope
    >;
    connect?: Array<ProfileWhereUniqueInput>;
}
export declare class ProfileUncheckedCreateWithoutCollector_profile_customerInput {
    id?: string;
    customer?: InstanceType<typeof CustomerUncheckedCreateNestedOneWithoutProfileInput>;
}
export declare class ProfileUncheckedCreateWithoutCustomerInput {
    id?: string;
    customer_numbner?: string;
}
export declare class ProfileUncheckedCreateInput {
    id?: string;
    customer?: InstanceType<typeof CustomerUncheckedCreateNestedOneWithoutProfileInput>;
    customer_numbner?: string;
}
export declare class ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput {
    create?: Array<ProfileCreateWithoutCollector_profile_customerInput>;
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutCollector_profile_customerInput>;
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput>;
    createMany?: InstanceType<
        typeof ProfileCreateManyCollector_profile_customerInputEnvelope
    >;
    set?: Array<ProfileWhereUniqueInput>;
    disconnect?: Array<ProfileWhereUniqueInput>;
    delete?: Array<ProfileWhereUniqueInput>;
    connect?: Array<ProfileWhereUniqueInput>;
    update?: Array<ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput>;
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput>;
    deleteMany?: Array<ProfileScalarWhereInput>;
}
export declare class ProfileUncheckedUpdateManyWithoutCollectorsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProfileUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_numbner?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ProfileUncheckedUpdateWithoutCollector_profile_customerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer?: InstanceType<typeof CustomerUncheckedUpdateOneWithoutProfileInput>;
}
export declare class ProfileUncheckedUpdateWithoutCustomerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer_numbner?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ProfileUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer?: InstanceType<typeof CustomerUncheckedUpdateOneWithoutProfileInput>;
    customer_numbner?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ProfileUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput {
    where: InstanceType<typeof ProfileScalarWhereInput>;
    data: InstanceType<typeof ProfileUpdateManyMutationInput>;
}
export declare class ProfileUpdateManyWithoutCollector_profile_customerInput {
    create?: Array<ProfileCreateWithoutCollector_profile_customerInput>;
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutCollector_profile_customerInput>;
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput>;
    createMany?: InstanceType<
        typeof ProfileCreateManyCollector_profile_customerInputEnvelope
    >;
    set?: Array<ProfileWhereUniqueInput>;
    disconnect?: Array<ProfileWhereUniqueInput>;
    delete?: Array<ProfileWhereUniqueInput>;
    connect?: Array<ProfileWhereUniqueInput>;
    update?: Array<ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput>;
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput>;
    deleteMany?: Array<ProfileScalarWhereInput>;
}
export declare class ProfileUpdateOneRequiredWithoutCustomerInput {
    create?: InstanceType<typeof ProfileCreateWithoutCustomerInput>;
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutCustomerInput>;
    upsert?: InstanceType<typeof ProfileUpsertWithoutCustomerInput>;
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
    update?: InstanceType<typeof ProfileUpdateWithoutCustomerInput>;
}
export declare class ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput {
    where: InstanceType<typeof ProfileWhereUniqueInput>;
    data: InstanceType<typeof ProfileUpdateWithoutCollector_profile_customerInput>;
}
export declare class ProfileUpdateWithoutCollector_profile_customerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer?: InstanceType<typeof CustomerUpdateOneWithoutProfileInput>;
}
export declare class ProfileUpdateWithoutCustomerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    collector_profile_customer?: InstanceType<
        typeof CustomerUpdateOneWithoutCollectorsInput
    >;
}
export declare class ProfileUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    customer?: InstanceType<typeof CustomerUpdateOneWithoutProfileInput>;
    collector_profile_customer?: InstanceType<
        typeof CustomerUpdateOneWithoutCollectorsInput
    >;
}
export declare class ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput {
    where: InstanceType<typeof ProfileWhereUniqueInput>;
    update: InstanceType<typeof ProfileUpdateWithoutCollector_profile_customerInput>;
    create: InstanceType<typeof ProfileCreateWithoutCollector_profile_customerInput>;
}
export declare class ProfileUpsertWithoutCustomerInput {
    update: InstanceType<typeof ProfileUpdateWithoutCustomerInput>;
    create: InstanceType<typeof ProfileCreateWithoutCustomerInput>;
}
export declare class ProfileWhereUniqueInput {
    id: string;
}
export declare class ProfileWhereInput {
    AND?: Array<ProfileWhereInput>;
    OR?: Array<ProfileWhereInput>;
    NOT?: Array<ProfileWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    customer?: InstanceType<typeof CustomerRelationFilter>;
    collector_profile_customer?: InstanceType<typeof CustomerRelationFilter>;
    customer_numbner?: InstanceType<typeof StringNullableFilter>;
}
export declare class Profile {
    id: string;
    customer?: InstanceType<typeof Customer> | null;
    collector_profile_customer?: InstanceType<typeof Customer> | null;
    customer_numbner: string | null;
}
export declare class UpdateManyProfileArgs {
    data: InstanceType<typeof ProfileUpdateManyMutationInput>;
    where?: InstanceType<typeof ProfileWhereInput>;
}
export declare class UpdateOneProfileArgs {
    data: InstanceType<typeof ProfileUpdateInput>;
    where: InstanceType<typeof ProfileWhereUniqueInput>;
}
export declare class UpsertOneProfileArgs {
    where: InstanceType<typeof ProfileWhereUniqueInput>;
    create: InstanceType<typeof ProfileCreateInput>;
    update: InstanceType<typeof ProfileUpdateInput>;
}
