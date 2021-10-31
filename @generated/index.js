'use strict';
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length,
            r =
                c < 3
                    ? target
                    : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
            d;
        if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r =
                        (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                        r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
exports.__esModule = true;
exports.CustomerUncheckedUpdateOneWithoutProfileInput =
    exports.CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput =
    exports.CustomerUncheckedUpdateManyInput =
    exports.CustomerUncheckedCreateInput =
    exports.CustomerUncheckedCreateWithoutProfileInput =
    exports.CustomerUncheckedCreateWithoutFavoriteDeliveryInput =
    exports.CustomerUncheckedCreateWithoutDestinationsInput =
    exports.CustomerUncheckedCreateWithoutCollectorsInput =
    exports.CustomerUncheckedCreateNestedOneWithoutProfileInput =
    exports.CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput =
    exports.CustomerScalarWhereWithAggregatesInput =
    exports.CustomerRelationFilter =
    exports.CustomerOrderByWithRelationInput =
    exports.CustomerOrderByWithAggregationInput =
    exports.CustomerMinOrderByAggregateInput =
    exports.CustomerMinAggregate =
    exports.CustomerMinAggregateInput =
    exports.CustomerMaxOrderByAggregateInput =
    exports.CustomerMaxAggregate =
    exports.CustomerMaxAggregateInput =
    exports.CustomerGroupBy =
    exports.CustomerGroupByArgs =
    exports.CustomerCreateInput =
    exports.CustomerCreateWithoutProfileInput =
    exports.CustomerCreateWithoutFavoriteDeliveryInput =
    exports.CustomerCreateWithoutDestinationsInput =
    exports.CustomerCreateWithoutCollectorsInput =
    exports.CustomerCreateOrConnectWithoutProfileInput =
    exports.CustomerCreateOrConnectWithoutFavoriteDeliveryInput =
    exports.CustomerCreateOrConnectWithoutDestinationsInput =
    exports.CustomerCreateOrConnectWithoutCollectorsInput =
    exports.CustomerCreateNestedOneWithoutProfileInput =
    exports.CustomerCreateNestedOneWithoutFavoriteDeliveryInput =
    exports.CustomerCreateNestedOneWithoutDestinationsInput =
    exports.CustomerCreateNestedOneWithoutCollectorsInput =
    exports.CustomerCreateManyInput =
    exports.CustomerCount =
    exports.CustomerCountOrderByAggregateInput =
    exports.CustomerCountAggregate =
    exports.CustomerCountAggregateInput =
    exports.CustomerAggregateArgs =
    exports.CreateOneCustomerArgs =
    exports.CreateManyCustomerArgs =
    exports.AggregateCustomer =
    exports.CustomerScalarFieldEnum =
    exports.DeliveryScalarFieldEnum =
    exports.DestinationScalarFieldEnum =
    exports.QueryMode =
    exports.SortOrder =
    exports.ProfileScalarFieldEnum =
        void 0;
exports.DeliveryMaxAggregateInput =
    exports.DeliveryGroupBy =
    exports.DeliveryGroupByArgs =
    exports.DeliveryCreateInput =
    exports.DeliveryCreateWithoutDestinationInput =
    exports.DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryCreateOrConnectWithoutDestinationInput =
    exports.DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryCreateNestedOneWithoutDestinationInput =
    exports.DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryCreateManyInput =
    exports.DeliveryCountOrderByAggregateInput =
    exports.DeliveryCountAggregate =
    exports.DeliveryCountAggregateInput =
    exports.DeliveryAggregateArgs =
    exports.DeleteOneDeliveryArgs =
    exports.DeleteManyDeliveryArgs =
    exports.CreateOneDeliveryArgs =
    exports.CreateManyDeliveryArgs =
    exports.AggregateDelivery =
    exports.UpsertOneCustomerArgs =
    exports.UpdateOneCustomerArgs =
    exports.UpdateManyCustomerArgs =
    exports.FindUniqueCustomerArgs =
    exports.FindManyCustomerArgs =
    exports.FindFirstCustomerArgs =
    exports.DeleteOneCustomerArgs =
    exports.DeleteManyCustomerArgs =
    exports.Customer =
    exports.CustomerWhereInput =
    exports.CustomerWhereUniqueInput =
    exports.CustomerUpsertWithoutProfileInput =
    exports.CustomerUpsertWithoutFavoriteDeliveryInput =
    exports.CustomerUpsertWithoutDestinationsInput =
    exports.CustomerUpsertWithoutCollectorsInput =
    exports.CustomerUpdateInput =
    exports.CustomerUpdateWithoutProfileInput =
    exports.CustomerUpdateWithoutFavoriteDeliveryInput =
    exports.CustomerUpdateWithoutDestinationsInput =
    exports.CustomerUpdateWithoutCollectorsInput =
    exports.CustomerUpdateOneWithoutProfileInput =
    exports.CustomerUpdateOneWithoutFavoriteDeliveryInput =
    exports.CustomerUpdateOneWithoutDestinationsInput =
    exports.CustomerUpdateOneWithoutCollectorsInput =
    exports.CustomerUpdateManyMutationInput =
    exports.CustomerUncheckedUpdateInput =
    exports.CustomerUncheckedUpdateWithoutProfileInput =
    exports.CustomerUncheckedUpdateWithoutFavoriteDeliveryInput =
    exports.CustomerUncheckedUpdateWithoutDestinationsInput =
    exports.CustomerUncheckedUpdateWithoutCollectorsInput =
        void 0;
exports.DestinationCreateOrConnectWithoutCustomer_destination_customerInput =
    exports.DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput =
    exports.DestinationCreateNestedManyWithoutCustomer_destination_customerInput =
    exports.DestinationCreateManyInput =
    exports.DestinationCreateManyCustomer_destination_customerInput =
    exports.DestinationCreateManyCustomer_destination_customerInputEnvelope =
    exports.DestinationCountOrderByAggregateInput =
    exports.DestinationCountAggregate =
    exports.DestinationCountAggregateInput =
    exports.DestinationAggregateArgs =
    exports.DeleteOneDestinationArgs =
    exports.DeleteManyDestinationArgs =
    exports.CreateOneDestinationArgs =
    exports.CreateManyDestinationArgs =
    exports.AggregateDestination =
    exports.UpsertOneDeliveryArgs =
    exports.UpdateOneDeliveryArgs =
    exports.UpdateManyDeliveryArgs =
    exports.FindUniqueDeliveryArgs =
    exports.FindManyDeliveryArgs =
    exports.FindFirstDeliveryArgs =
    exports.Delivery =
    exports.DeliveryWhereInput =
    exports.DeliveryWhereUniqueInput =
    exports.DeliveryUpsertWithoutDestinationInput =
    exports.DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryUpdateInput =
    exports.DeliveryUpdateWithoutDestinationInput =
    exports.DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryUpdateOneWithoutDestinationInput =
    exports.DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryUpdateManyMutationInput =
    exports.DeliveryUncheckedUpdateInput =
    exports.DeliveryUncheckedUpdateWithoutDestinationInput =
    exports.DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryUncheckedUpdateOneWithoutDestinationInput =
    exports.DeliveryUncheckedUpdateManyInput =
    exports.DeliveryUncheckedCreateInput =
    exports.DeliveryUncheckedCreateWithoutDestinationInput =
    exports.DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput =
    exports.DeliveryUncheckedCreateNestedOneWithoutDestinationInput =
    exports.DeliveryScalarWhereWithAggregatesInput =
    exports.DeliveryRelationFilter =
    exports.DeliveryOrderByWithRelationInput =
    exports.DeliveryOrderByWithAggregationInput =
    exports.DeliveryMinOrderByAggregateInput =
    exports.DeliveryMinAggregate =
    exports.DeliveryMinAggregateInput =
    exports.DeliveryMaxOrderByAggregateInput =
    exports.DeliveryMaxAggregate =
        void 0;
exports.NestedIntFilter =
    exports.AffectedRows =
    exports.UpsertOneDestinationArgs =
    exports.UpdateOneDestinationArgs =
    exports.UpdateManyDestinationArgs =
    exports.FindUniqueDestinationArgs =
    exports.FindManyDestinationArgs =
    exports.FindFirstDestinationArgs =
    exports.Destination =
    exports.DestinationWhereInput =
    exports.DestinationWhereUniqueInput =
    exports.DestinationUpsertWithoutDelivery_destination_deliveryInput =
    exports.DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput =
    exports.DestinationUpdateInput =
    exports.DestinationUpdateWithoutDelivery_destination_deliveryInput =
    exports.DestinationUpdateWithoutCustomer_destination_customerInput =
    exports.DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput =
    exports.DestinationUpdateOneWithoutDelivery_destination_deliveryInput =
    exports.DestinationUpdateManyWithoutCustomer_destination_customerInput =
    exports.DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput =
    exports.DestinationUpdateManyMutationInput =
    exports.DestinationUncheckedUpdateInput =
    exports.DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput =
    exports.DestinationUncheckedUpdateWithoutCustomer_destination_customerInput =
    exports.DestinationUncheckedUpdateManyInput =
    exports.DestinationUncheckedUpdateManyWithoutDestinationsInput =
    exports.DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput =
    exports.DestinationUncheckedCreateInput =
    exports.DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput =
    exports.DestinationUncheckedCreateWithoutCustomer_destination_customerInput =
    exports.DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput =
    exports.DestinationScalarWhereInput =
    exports.DestinationScalarWhereWithAggregatesInput =
    exports.DestinationRelationFilter =
    exports.DestinationOrderByWithRelationInput =
    exports.DestinationOrderByWithAggregationInput =
    exports.DestinationOrderByRelationAggregateInput =
    exports.DestinationMinOrderByAggregateInput =
    exports.DestinationMinAggregate =
    exports.DestinationMinAggregateInput =
    exports.DestinationMaxOrderByAggregateInput =
    exports.DestinationMaxAggregate =
    exports.DestinationMaxAggregateInput =
    exports.DestinationListRelationFilter =
    exports.DestinationGroupBy =
    exports.DestinationGroupByArgs =
    exports.DestinationCreateInput =
    exports.DestinationCreateWithoutDelivery_destination_deliveryInput =
    exports.DestinationCreateWithoutCustomer_destination_customerInput =
    exports.DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput =
        void 0;
exports.ProfileUncheckedCreateWithoutCollector_profile_customerInput =
    exports.ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput =
    exports.ProfileScalarWhereInput =
    exports.ProfileScalarWhereWithAggregatesInput =
    exports.ProfileRelationFilter =
    exports.ProfileOrderByWithRelationInput =
    exports.ProfileOrderByWithAggregationInput =
    exports.ProfileOrderByRelationAggregateInput =
    exports.ProfileMinOrderByAggregateInput =
    exports.ProfileMinAggregate =
    exports.ProfileMinAggregateInput =
    exports.ProfileMaxOrderByAggregateInput =
    exports.ProfileMaxAggregate =
    exports.ProfileMaxAggregateInput =
    exports.ProfileListRelationFilter =
    exports.ProfileGroupBy =
    exports.ProfileGroupByArgs =
    exports.ProfileCreateInput =
    exports.ProfileCreateWithoutCustomerInput =
    exports.ProfileCreateWithoutCollector_profile_customerInput =
    exports.ProfileCreateOrConnectWithoutCustomerInput =
    exports.ProfileCreateOrConnectWithoutCollector_profile_customerInput =
    exports.ProfileCreateNestedOneWithoutCustomerInput =
    exports.ProfileCreateNestedManyWithoutCollector_profile_customerInput =
    exports.ProfileCreateManyInput =
    exports.ProfileCreateManyCollector_profile_customerInput =
    exports.ProfileCreateManyCollector_profile_customerInputEnvelope =
    exports.ProfileCountOrderByAggregateInput =
    exports.ProfileCountAggregate =
    exports.ProfileCountAggregateInput =
    exports.ProfileAggregateArgs =
    exports.FindUniqueProfileArgs =
    exports.FindManyProfileArgs =
    exports.FindFirstProfileArgs =
    exports.DeleteOneProfileArgs =
    exports.DeleteManyProfileArgs =
    exports.CreateOneProfileArgs =
    exports.CreateManyProfileArgs =
    exports.AggregateProfile =
    exports.StringWithAggregatesFilter =
    exports.StringNullableWithAggregatesFilter =
    exports.StringNullableFilter =
    exports.StringFilter =
    exports.StringFieldUpdateOperationsInput =
    exports.NullableStringFieldUpdateOperationsInput =
    exports.NestedStringWithAggregatesFilter =
    exports.NestedStringNullableWithAggregatesFilter =
    exports.NestedStringNullableFilter =
    exports.NestedStringFilter =
    exports.NestedIntNullableFilter =
        void 0;
exports.UpsertOneProfileArgs =
    exports.UpdateOneProfileArgs =
    exports.UpdateManyProfileArgs =
    exports.Profile =
    exports.ProfileWhereInput =
    exports.ProfileWhereUniqueInput =
    exports.ProfileUpsertWithoutCustomerInput =
    exports.ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput =
    exports.ProfileUpdateInput =
    exports.ProfileUpdateWithoutCustomerInput =
    exports.ProfileUpdateWithoutCollector_profile_customerInput =
    exports.ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput =
    exports.ProfileUpdateOneRequiredWithoutCustomerInput =
    exports.ProfileUpdateManyWithoutCollector_profile_customerInput =
    exports.ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput =
    exports.ProfileUpdateManyMutationInput =
    exports.ProfileUncheckedUpdateInput =
    exports.ProfileUncheckedUpdateWithoutCustomerInput =
    exports.ProfileUncheckedUpdateWithoutCollector_profile_customerInput =
    exports.ProfileUncheckedUpdateManyInput =
    exports.ProfileUncheckedUpdateManyWithoutCollectorsInput =
    exports.ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput =
    exports.ProfileUncheckedCreateInput =
    exports.ProfileUncheckedCreateWithoutCustomerInput =
        void 0;
var graphql_1 = require('@nestjs/graphql');
var graphql_2 = require('@nestjs/graphql');
var graphql_3 = require('@nestjs/graphql');
var graphql_4 = require('@nestjs/graphql');
var graphql_5 = require('@nestjs/graphql');
var graphql_6 = require('@nestjs/graphql');
var graphql_7 = require('@nestjs/graphql');
var ProfileScalarFieldEnum;
(function (ProfileScalarFieldEnum) {
    ProfileScalarFieldEnum['id'] = 'id';
    ProfileScalarFieldEnum['customer_numbner'] = 'customer_numbner';
})(
    (ProfileScalarFieldEnum =
        exports.ProfileScalarFieldEnum || (exports.ProfileScalarFieldEnum = {})),
);
var SortOrder;
(function (SortOrder) {
    SortOrder['asc'] = 'asc';
    SortOrder['desc'] = 'desc';
})((SortOrder = exports.SortOrder || (exports.SortOrder = {})));
var QueryMode;
(function (QueryMode) {
    QueryMode['default'] = 'default';
    QueryMode['insensitive'] = 'insensitive';
})((QueryMode = exports.QueryMode || (exports.QueryMode = {})));
var DestinationScalarFieldEnum;
(function (DestinationScalarFieldEnum) {
    DestinationScalarFieldEnum['id'] = 'id';
    DestinationScalarFieldEnum['customer_number'] = 'customer_number';
})(
    (DestinationScalarFieldEnum =
        exports.DestinationScalarFieldEnum ||
        (exports.DestinationScalarFieldEnum = {})),
);
var DeliveryScalarFieldEnum;
(function (DeliveryScalarFieldEnum) {
    DeliveryScalarFieldEnum['id'] = 'id';
    DeliveryScalarFieldEnum['id_destination'] = 'id_destination';
})(
    (DeliveryScalarFieldEnum =
        exports.DeliveryScalarFieldEnum || (exports.DeliveryScalarFieldEnum = {})),
);
var CustomerScalarFieldEnum;
(function (CustomerScalarFieldEnum) {
    CustomerScalarFieldEnum['number'] = 'number';
    CustomerScalarFieldEnum['id_favoriteDelivery'] = 'id_favoriteDelivery';
    CustomerScalarFieldEnum['id_profile'] = 'id_profile';
})(
    (CustomerScalarFieldEnum =
        exports.CustomerScalarFieldEnum || (exports.CustomerScalarFieldEnum = {})),
);
graphql_6.registerEnumType(CustomerScalarFieldEnum, {
    name: 'CustomerScalarFieldEnum',
    description: undefined,
});
graphql_6.registerEnumType(DeliveryScalarFieldEnum, {
    name: 'DeliveryScalarFieldEnum',
    description: undefined,
});
graphql_6.registerEnumType(DestinationScalarFieldEnum, {
    name: 'DestinationScalarFieldEnum',
    description: undefined,
});
graphql_6.registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
graphql_6.registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
graphql_6.registerEnumType(ProfileScalarFieldEnum, {
    name: 'ProfileScalarFieldEnum',
    description: undefined,
});
var AggregateCustomer = /** @class */ (function () {
    function AggregateCustomer() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCountAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateCustomer.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMinAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateCustomer.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateCustomer.prototype,
        '_max',
    );
    AggregateCustomer = __decorate([graphql_2.ObjectType()], AggregateCustomer);
    return AggregateCustomer;
})();
exports.AggregateCustomer = AggregateCustomer;
var CreateManyCustomerArgs = /** @class */ (function () {
    function CreateManyCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerCreateManyInput];
                },
                { nullable: false },
            ),
        ],
        CreateManyCustomerArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CreateManyCustomerArgs.prototype,
        'skipDuplicates',
    );
    CreateManyCustomerArgs = __decorate([graphql_3.ArgsType()], CreateManyCustomerArgs);
    return CreateManyCustomerArgs;
})();
exports.CreateManyCustomerArgs = CreateManyCustomerArgs;
var CreateOneCustomerArgs = /** @class */ (function () {
    function CreateOneCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateInput;
                },
                { nullable: false },
            ),
        ],
        CreateOneCustomerArgs.prototype,
        'data',
    );
    CreateOneCustomerArgs = __decorate([graphql_3.ArgsType()], CreateOneCustomerArgs);
    return CreateOneCustomerArgs;
})();
exports.CreateOneCustomerArgs = CreateOneCustomerArgs;
var CustomerAggregateArgs = /** @class */ (function () {
    function CustomerAggregateArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerAggregateArgs.prototype,
        '_max',
    );
    CustomerAggregateArgs = __decorate([graphql_3.ArgsType()], CustomerAggregateArgs);
    return CustomerAggregateArgs;
})();
exports.CustomerAggregateArgs = CustomerAggregateArgs;
var CustomerCountAggregateInput = /** @class */ (function () {
    function CustomerCountAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerCountAggregateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerCountAggregateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerCountAggregateInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerCountAggregateInput.prototype,
        '_all',
    );
    CustomerCountAggregateInput = __decorate(
        [graphql_5.InputType()],
        CustomerCountAggregateInput,
    );
    return CustomerCountAggregateInput;
})();
exports.CustomerCountAggregateInput = CustomerCountAggregateInput;
var CustomerCountAggregate = /** @class */ (function () {
    function CustomerCountAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        CustomerCountAggregate.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        CustomerCountAggregate.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        CustomerCountAggregate.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        CustomerCountAggregate.prototype,
        '_all',
    );
    CustomerCountAggregate = __decorate(
        [graphql_2.ObjectType()],
        CustomerCountAggregate,
    );
    return CustomerCountAggregate;
})();
exports.CustomerCountAggregate = CustomerCountAggregate;
var CustomerCountOrderByAggregateInput = /** @class */ (function () {
    function CustomerCountOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerCountOrderByAggregateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerCountOrderByAggregateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerCountOrderByAggregateInput.prototype,
        'id_profile',
    );
    CustomerCountOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        CustomerCountOrderByAggregateInput,
    );
    return CustomerCountOrderByAggregateInput;
})();
exports.CustomerCountOrderByAggregateInput = CustomerCountOrderByAggregateInput;
var CustomerCount = /** @class */ (function () {
    function CustomerCount() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        CustomerCount.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        CustomerCount.prototype,
        'collectors',
    );
    CustomerCount = __decorate([graphql_2.ObjectType()], CustomerCount);
    return CustomerCount;
})();
exports.CustomerCount = CustomerCount;
var CustomerCreateManyInput = /** @class */ (function () {
    function CustomerCreateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateManyInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateManyInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateManyInput.prototype,
        'id_profile',
    );
    CustomerCreateManyInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateManyInput,
    );
    return CustomerCreateManyInput;
})();
exports.CustomerCreateManyInput = CustomerCreateManyInput;
var CustomerCreateNestedOneWithoutCollectorsInput = /** @class */ (function () {
    function CustomerCreateNestedOneWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutCollectorsInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutCollectorsInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutCollectorsInput.prototype,
        'connect',
    );
    CustomerCreateNestedOneWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateNestedOneWithoutCollectorsInput,
    );
    return CustomerCreateNestedOneWithoutCollectorsInput;
})();
exports.CustomerCreateNestedOneWithoutCollectorsInput =
    CustomerCreateNestedOneWithoutCollectorsInput;
var CustomerCreateNestedOneWithoutDestinationsInput = /** @class */ (function () {
    function CustomerCreateNestedOneWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutDestinationsInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutDestinationsInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutDestinationsInput.prototype,
        'connect',
    );
    CustomerCreateNestedOneWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateNestedOneWithoutDestinationsInput,
    );
    return CustomerCreateNestedOneWithoutDestinationsInput;
})();
exports.CustomerCreateNestedOneWithoutDestinationsInput =
    CustomerCreateNestedOneWithoutDestinationsInput;
var CustomerCreateNestedOneWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerCreateNestedOneWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutFavoriteDeliveryInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutFavoriteDeliveryInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutFavoriteDeliveryInput.prototype,
        'connect',
    );
    CustomerCreateNestedOneWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateNestedOneWithoutFavoriteDeliveryInput,
    );
    return CustomerCreateNestedOneWithoutFavoriteDeliveryInput;
})();
exports.CustomerCreateNestedOneWithoutFavoriteDeliveryInput =
    CustomerCreateNestedOneWithoutFavoriteDeliveryInput;
var CustomerCreateNestedOneWithoutProfileInput = /** @class */ (function () {
    function CustomerCreateNestedOneWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutProfileInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutProfileInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateNestedOneWithoutProfileInput.prototype,
        'connect',
    );
    CustomerCreateNestedOneWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateNestedOneWithoutProfileInput,
    );
    return CustomerCreateNestedOneWithoutProfileInput;
})();
exports.CustomerCreateNestedOneWithoutProfileInput =
    CustomerCreateNestedOneWithoutProfileInput;
var CustomerCreateOrConnectWithoutCollectorsInput = /** @class */ (function () {
    function CustomerCreateOrConnectWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutCollectorsInput.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutCollectorsInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutCollectorsInput.prototype,
        'create',
    );
    CustomerCreateOrConnectWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateOrConnectWithoutCollectorsInput,
    );
    return CustomerCreateOrConnectWithoutCollectorsInput;
})();
exports.CustomerCreateOrConnectWithoutCollectorsInput =
    CustomerCreateOrConnectWithoutCollectorsInput;
var CustomerCreateOrConnectWithoutDestinationsInput = /** @class */ (function () {
    function CustomerCreateOrConnectWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutDestinationsInput.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutDestinationsInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutDestinationsInput.prototype,
        'create',
    );
    CustomerCreateOrConnectWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateOrConnectWithoutDestinationsInput,
    );
    return CustomerCreateOrConnectWithoutDestinationsInput;
})();
exports.CustomerCreateOrConnectWithoutDestinationsInput =
    CustomerCreateOrConnectWithoutDestinationsInput;
var CustomerCreateOrConnectWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerCreateOrConnectWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutFavoriteDeliveryInput.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutFavoriteDeliveryInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutFavoriteDeliveryInput.prototype,
        'create',
    );
    CustomerCreateOrConnectWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateOrConnectWithoutFavoriteDeliveryInput,
    );
    return CustomerCreateOrConnectWithoutFavoriteDeliveryInput;
})();
exports.CustomerCreateOrConnectWithoutFavoriteDeliveryInput =
    CustomerCreateOrConnectWithoutFavoriteDeliveryInput;
var CustomerCreateOrConnectWithoutProfileInput = /** @class */ (function () {
    function CustomerCreateOrConnectWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutProfileInput.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutProfileInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateOrConnectWithoutProfileInput.prototype,
        'create',
    );
    CustomerCreateOrConnectWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateOrConnectWithoutProfileInput,
    );
    return CustomerCreateOrConnectWithoutProfileInput;
})();
exports.CustomerCreateOrConnectWithoutProfileInput =
    CustomerCreateOrConnectWithoutProfileInput;
var CustomerCreateWithoutCollectorsInput = /** @class */ (function () {
    function CustomerCreateWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutCollectorsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateWithoutCollectorsInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutCollectorsInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedOneWithoutCustomerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutCollectorsInput.prototype,
        'profile',
    );
    CustomerCreateWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateWithoutCollectorsInput,
    );
    return CustomerCreateWithoutCollectorsInput;
})();
exports.CustomerCreateWithoutCollectorsInput = CustomerCreateWithoutCollectorsInput;
var CustomerCreateWithoutDestinationsInput = /** @class */ (function () {
    function CustomerCreateWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutDestinationsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateWithoutDestinationsInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutDestinationsInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedOneWithoutCustomerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutDestinationsInput.prototype,
        'profile',
    );
    CustomerCreateWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateWithoutDestinationsInput,
    );
    return CustomerCreateWithoutDestinationsInput;
})();
exports.CustomerCreateWithoutDestinationsInput = CustomerCreateWithoutDestinationsInput;
var CustomerCreateWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerCreateWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutFavoriteDeliveryInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateWithoutFavoriteDeliveryInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateWithoutFavoriteDeliveryInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedOneWithoutCustomerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutFavoriteDeliveryInput.prototype,
        'profile',
    );
    CustomerCreateWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateWithoutFavoriteDeliveryInput,
    );
    return CustomerCreateWithoutFavoriteDeliveryInput;
})();
exports.CustomerCreateWithoutFavoriteDeliveryInput =
    CustomerCreateWithoutFavoriteDeliveryInput;
var CustomerCreateWithoutProfileInput = /** @class */ (function () {
    function CustomerCreateWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutProfileInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateWithoutProfileInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateWithoutProfileInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateWithoutProfileInput.prototype,
        'favoriteDelivery',
    );
    CustomerCreateWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerCreateWithoutProfileInput,
    );
    return CustomerCreateWithoutProfileInput;
})();
exports.CustomerCreateWithoutProfileInput = CustomerCreateWithoutProfileInput;
var CustomerCreateInput = /** @class */ (function () {
    function CustomerCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerCreateInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateNestedOneWithoutCustomerInput;
                },
                { nullable: false },
            ),
        ],
        CustomerCreateInput.prototype,
        'profile',
    );
    CustomerCreateInput = __decorate([graphql_5.InputType()], CustomerCreateInput);
    return CustomerCreateInput;
})();
exports.CustomerCreateInput = CustomerCreateInput;
var CustomerGroupByArgs = /** @class */ (function () {
    function CustomerGroupByArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerOrderByWithAggregationInput];
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerScalarFieldEnum];
                },
                { nullable: false },
            ),
        ],
        CustomerGroupByArgs.prototype,
        'by',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerScalarWhereWithAggregatesInput;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        'having',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupByArgs.prototype,
        '_max',
    );
    CustomerGroupByArgs = __decorate([graphql_3.ArgsType()], CustomerGroupByArgs);
    return CustomerGroupByArgs;
})();
exports.CustomerGroupByArgs = CustomerGroupByArgs;
var CustomerGroupBy = /** @class */ (function () {
    function CustomerGroupBy() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerGroupBy.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerGroupBy.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerGroupBy.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCountAggregate;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupBy.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMinAggregate;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupBy.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        CustomerGroupBy.prototype,
        '_max',
    );
    CustomerGroupBy = __decorate([graphql_2.ObjectType()], CustomerGroupBy);
    return CustomerGroupBy;
})();
exports.CustomerGroupBy = CustomerGroupBy;
var CustomerMaxAggregateInput = /** @class */ (function () {
    function CustomerMaxAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxAggregateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxAggregateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxAggregateInput.prototype,
        'id_profile',
    );
    CustomerMaxAggregateInput = __decorate(
        [graphql_5.InputType()],
        CustomerMaxAggregateInput,
    );
    return CustomerMaxAggregateInput;
})();
exports.CustomerMaxAggregateInput = CustomerMaxAggregateInput;
var CustomerMaxAggregate = /** @class */ (function () {
    function CustomerMaxAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxAggregate.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxAggregate.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxAggregate.prototype,
        'id_profile',
    );
    CustomerMaxAggregate = __decorate([graphql_2.ObjectType()], CustomerMaxAggregate);
    return CustomerMaxAggregate;
})();
exports.CustomerMaxAggregate = CustomerMaxAggregate;
var CustomerMaxOrderByAggregateInput = /** @class */ (function () {
    function CustomerMaxOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxOrderByAggregateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxOrderByAggregateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerMaxOrderByAggregateInput.prototype,
        'id_profile',
    );
    CustomerMaxOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        CustomerMaxOrderByAggregateInput,
    );
    return CustomerMaxOrderByAggregateInput;
})();
exports.CustomerMaxOrderByAggregateInput = CustomerMaxOrderByAggregateInput;
var CustomerMinAggregateInput = /** @class */ (function () {
    function CustomerMinAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerMinAggregateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerMinAggregateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerMinAggregateInput.prototype,
        'id_profile',
    );
    CustomerMinAggregateInput = __decorate(
        [graphql_5.InputType()],
        CustomerMinAggregateInput,
    );
    return CustomerMinAggregateInput;
})();
exports.CustomerMinAggregateInput = CustomerMinAggregateInput;
var CustomerMinAggregate = /** @class */ (function () {
    function CustomerMinAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerMinAggregate.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerMinAggregate.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerMinAggregate.prototype,
        'id_profile',
    );
    CustomerMinAggregate = __decorate([graphql_2.ObjectType()], CustomerMinAggregate);
    return CustomerMinAggregate;
})();
exports.CustomerMinAggregate = CustomerMinAggregate;
var CustomerMinOrderByAggregateInput = /** @class */ (function () {
    function CustomerMinOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerMinOrderByAggregateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerMinOrderByAggregateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerMinOrderByAggregateInput.prototype,
        'id_profile',
    );
    CustomerMinOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        CustomerMinOrderByAggregateInput,
    );
    return CustomerMinOrderByAggregateInput;
})();
exports.CustomerMinOrderByAggregateInput = CustomerMinOrderByAggregateInput;
var CustomerOrderByWithAggregationInput = /** @class */ (function () {
    function CustomerOrderByWithAggregationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithAggregationInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithAggregationInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithAggregationInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCountOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithAggregationInput.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMaxOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithAggregationInput.prototype,
        '_max',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerMinOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithAggregationInput.prototype,
        '_min',
    );
    CustomerOrderByWithAggregationInput = __decorate(
        [graphql_5.InputType()],
        CustomerOrderByWithAggregationInput,
    );
    return CustomerOrderByWithAggregationInput;
})();
exports.CustomerOrderByWithAggregationInput = CustomerOrderByWithAggregationInput;
var CustomerOrderByWithRelationInput = /** @class */ (function () {
    function CustomerOrderByWithRelationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithRelationInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationOrderByRelationAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithRelationInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileOrderByRelationAggregateInput;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithRelationInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithRelationInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithRelationInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithRelationInput.prototype,
        'profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        CustomerOrderByWithRelationInput.prototype,
        'id_profile',
    );
    CustomerOrderByWithRelationInput = __decorate(
        [graphql_5.InputType()],
        CustomerOrderByWithRelationInput,
    );
    return CustomerOrderByWithRelationInput;
})();
exports.CustomerOrderByWithRelationInput = CustomerOrderByWithRelationInput;
var CustomerRelationFilter = /** @class */ (function () {
    function CustomerRelationFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        CustomerRelationFilter.prototype,
        'is',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        CustomerRelationFilter.prototype,
        'isNot',
    );
    CustomerRelationFilter = __decorate(
        [graphql_5.InputType()],
        CustomerRelationFilter,
    );
    return CustomerRelationFilter;
})();
exports.CustomerRelationFilter = CustomerRelationFilter;
var CustomerScalarWhereWithAggregatesInput = /** @class */ (function () {
    function CustomerScalarWhereWithAggregatesInput() {}
    CustomerScalarWhereWithAggregatesInput_1 = CustomerScalarWhereWithAggregatesInput;
    var CustomerScalarWhereWithAggregatesInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        CustomerScalarWhereWithAggregatesInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        CustomerScalarWhereWithAggregatesInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        CustomerScalarWhereWithAggregatesInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerScalarWhereWithAggregatesInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerScalarWhereWithAggregatesInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerScalarWhereWithAggregatesInput.prototype,
        'id_profile',
    );
    CustomerScalarWhereWithAggregatesInput = CustomerScalarWhereWithAggregatesInput_1 =
        __decorate([graphql_5.InputType()], CustomerScalarWhereWithAggregatesInput);
    return CustomerScalarWhereWithAggregatesInput;
})();
exports.CustomerScalarWhereWithAggregatesInput = CustomerScalarWhereWithAggregatesInput;
var CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput =
    /** @class */ (function () {
        function CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerCreateWithoutFavoriteDeliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerCreateOrConnectWithoutFavoriteDeliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerWhereUniqueInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput.prototype,
            'connect',
        );
        CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput = __decorate(
            [graphql_5.InputType()],
            CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput,
        );
        return CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput;
    })();
exports.CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput =
    CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput;
var CustomerUncheckedCreateNestedOneWithoutProfileInput = /** @class */ (function () {
    function CustomerUncheckedCreateNestedOneWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateNestedOneWithoutProfileInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateNestedOneWithoutProfileInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateNestedOneWithoutProfileInput.prototype,
        'connect',
    );
    CustomerUncheckedCreateNestedOneWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedCreateNestedOneWithoutProfileInput,
    );
    return CustomerUncheckedCreateNestedOneWithoutProfileInput;
})();
exports.CustomerUncheckedCreateNestedOneWithoutProfileInput =
    CustomerUncheckedCreateNestedOneWithoutProfileInput;
var CustomerUncheckedCreateWithoutCollectorsInput = /** @class */ (function () {
    function CustomerUncheckedCreateWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutCollectorsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutCollectorsInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutCollectorsInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateWithoutCollectorsInput.prototype,
        'destinations',
    );
    CustomerUncheckedCreateWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedCreateWithoutCollectorsInput,
    );
    return CustomerUncheckedCreateWithoutCollectorsInput;
})();
exports.CustomerUncheckedCreateWithoutCollectorsInput =
    CustomerUncheckedCreateWithoutCollectorsInput;
var CustomerUncheckedCreateWithoutDestinationsInput = /** @class */ (function () {
    function CustomerUncheckedCreateWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutDestinationsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutDestinationsInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutDestinationsInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateWithoutDestinationsInput.prototype,
        'collectors',
    );
    CustomerUncheckedCreateWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedCreateWithoutDestinationsInput,
    );
    return CustomerUncheckedCreateWithoutDestinationsInput;
})();
exports.CustomerUncheckedCreateWithoutDestinationsInput =
    CustomerUncheckedCreateWithoutDestinationsInput;
var CustomerUncheckedCreateWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerUncheckedCreateWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutFavoriteDeliveryInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutFavoriteDeliveryInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateWithoutFavoriteDeliveryInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateWithoutFavoriteDeliveryInput.prototype,
        'collectors',
    );
    CustomerUncheckedCreateWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedCreateWithoutFavoriteDeliveryInput,
    );
    return CustomerUncheckedCreateWithoutFavoriteDeliveryInput;
})();
exports.CustomerUncheckedCreateWithoutFavoriteDeliveryInput =
    CustomerUncheckedCreateWithoutFavoriteDeliveryInput;
var CustomerUncheckedCreateWithoutProfileInput = /** @class */ (function () {
    function CustomerUncheckedCreateWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutProfileInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateWithoutProfileInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateWithoutProfileInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateWithoutProfileInput.prototype,
        'collectors',
    );
    CustomerUncheckedCreateWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedCreateWithoutProfileInput,
    );
    return CustomerUncheckedCreateWithoutProfileInput;
})();
exports.CustomerUncheckedCreateWithoutProfileInput =
    CustomerUncheckedCreateWithoutProfileInput;
var CustomerUncheckedCreateInput = /** @class */ (function () {
    function CustomerUncheckedCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        CustomerUncheckedCreateInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedCreateInput.prototype,
        'collectors',
    );
    CustomerUncheckedCreateInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedCreateInput,
    );
    return CustomerUncheckedCreateInput;
})();
exports.CustomerUncheckedCreateInput = CustomerUncheckedCreateInput;
var CustomerUncheckedUpdateManyInput = /** @class */ (function () {
    function CustomerUncheckedUpdateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateManyInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateManyInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateManyInput.prototype,
        'id_profile',
    );
    CustomerUncheckedUpdateManyInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedUpdateManyInput,
    );
    return CustomerUncheckedUpdateManyInput;
})();
exports.CustomerUncheckedUpdateManyInput = CustomerUncheckedUpdateManyInput;
var CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput =
    /** @class */ (function () {
        function CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerCreateWithoutFavoriteDeliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerCreateOrConnectWithoutFavoriteDeliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerUpsertWithoutFavoriteDeliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput.prototype,
            'upsert',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerWhereUniqueInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput.prototype,
            'connect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return Boolean;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput.prototype,
            'disconnect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return Boolean;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput.prototype,
            'delete',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerUpdateWithoutFavoriteDeliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput.prototype,
            'update',
        );
        CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput = __decorate(
            [graphql_5.InputType()],
            CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput,
        );
        return CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput;
    })();
exports.CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput =
    CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput;
var CustomerUncheckedUpdateOneWithoutProfileInput = /** @class */ (function () {
    function CustomerUncheckedUpdateOneWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateOneWithoutProfileInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateOneWithoutProfileInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpsertWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateOneWithoutProfileInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateOneWithoutProfileInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateOneWithoutProfileInput.prototype,
        'disconnect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateOneWithoutProfileInput.prototype,
        'delete',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateOneWithoutProfileInput.prototype,
        'update',
    );
    CustomerUncheckedUpdateOneWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedUpdateOneWithoutProfileInput,
    );
    return CustomerUncheckedUpdateOneWithoutProfileInput;
})();
exports.CustomerUncheckedUpdateOneWithoutProfileInput =
    CustomerUncheckedUpdateOneWithoutProfileInput;
var CustomerUncheckedUpdateWithoutCollectorsInput = /** @class */ (function () {
    function CustomerUncheckedUpdateWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutCollectorsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutCollectorsInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutCollectorsInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutCollectorsInput.prototype,
        'destinations',
    );
    CustomerUncheckedUpdateWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedUpdateWithoutCollectorsInput,
    );
    return CustomerUncheckedUpdateWithoutCollectorsInput;
})();
exports.CustomerUncheckedUpdateWithoutCollectorsInput =
    CustomerUncheckedUpdateWithoutCollectorsInput;
var CustomerUncheckedUpdateWithoutDestinationsInput = /** @class */ (function () {
    function CustomerUncheckedUpdateWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutDestinationsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutDestinationsInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutDestinationsInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutDestinationsInput.prototype,
        'collectors',
    );
    CustomerUncheckedUpdateWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedUpdateWithoutDestinationsInput,
    );
    return CustomerUncheckedUpdateWithoutDestinationsInput;
})();
exports.CustomerUncheckedUpdateWithoutDestinationsInput =
    CustomerUncheckedUpdateWithoutDestinationsInput;
var CustomerUncheckedUpdateWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerUncheckedUpdateWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutFavoriteDeliveryInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutFavoriteDeliveryInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutFavoriteDeliveryInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutFavoriteDeliveryInput.prototype,
        'collectors',
    );
    CustomerUncheckedUpdateWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedUpdateWithoutFavoriteDeliveryInput,
    );
    return CustomerUncheckedUpdateWithoutFavoriteDeliveryInput;
})();
exports.CustomerUncheckedUpdateWithoutFavoriteDeliveryInput =
    CustomerUncheckedUpdateWithoutFavoriteDeliveryInput;
var CustomerUncheckedUpdateWithoutProfileInput = /** @class */ (function () {
    function CustomerUncheckedUpdateWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutProfileInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutProfileInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutProfileInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateWithoutProfileInput.prototype,
        'collectors',
    );
    CustomerUncheckedUpdateWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedUpdateWithoutProfileInput,
    );
    return CustomerUncheckedUpdateWithoutProfileInput;
})();
exports.CustomerUncheckedUpdateWithoutProfileInput =
    CustomerUncheckedUpdateWithoutProfileInput;
var CustomerUncheckedUpdateInput = /** @class */ (function () {
    function CustomerUncheckedUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateInput.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUncheckedUpdateInput.prototype,
        'collectors',
    );
    CustomerUncheckedUpdateInput = __decorate(
        [graphql_5.InputType()],
        CustomerUncheckedUpdateInput,
    );
    return CustomerUncheckedUpdateInput;
})();
exports.CustomerUncheckedUpdateInput = CustomerUncheckedUpdateInput;
var CustomerUpdateManyMutationInput = /** @class */ (function () {
    function CustomerUpdateManyMutationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateManyMutationInput.prototype,
        'number',
    );
    CustomerUpdateManyMutationInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateManyMutationInput,
    );
    return CustomerUpdateManyMutationInput;
})();
exports.CustomerUpdateManyMutationInput = CustomerUpdateManyMutationInput;
var CustomerUpdateOneWithoutCollectorsInput = /** @class */ (function () {
    function CustomerUpdateOneWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutCollectorsInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutCollectorsInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpsertWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutCollectorsInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutCollectorsInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutCollectorsInput.prototype,
        'disconnect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutCollectorsInput.prototype,
        'delete',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutCollectorsInput.prototype,
        'update',
    );
    CustomerUpdateOneWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateOneWithoutCollectorsInput,
    );
    return CustomerUpdateOneWithoutCollectorsInput;
})();
exports.CustomerUpdateOneWithoutCollectorsInput =
    CustomerUpdateOneWithoutCollectorsInput;
var CustomerUpdateOneWithoutDestinationsInput = /** @class */ (function () {
    function CustomerUpdateOneWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutDestinationsInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutDestinationsInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpsertWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutDestinationsInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutDestinationsInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutDestinationsInput.prototype,
        'disconnect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutDestinationsInput.prototype,
        'delete',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutDestinationsInput.prototype,
        'update',
    );
    CustomerUpdateOneWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateOneWithoutDestinationsInput,
    );
    return CustomerUpdateOneWithoutDestinationsInput;
})();
exports.CustomerUpdateOneWithoutDestinationsInput =
    CustomerUpdateOneWithoutDestinationsInput;
var CustomerUpdateOneWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerUpdateOneWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutFavoriteDeliveryInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutFavoriteDeliveryInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpsertWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutFavoriteDeliveryInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutFavoriteDeliveryInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutFavoriteDeliveryInput.prototype,
        'disconnect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutFavoriteDeliveryInput.prototype,
        'delete',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutFavoriteDeliveryInput.prototype,
        'update',
    );
    CustomerUpdateOneWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateOneWithoutFavoriteDeliveryInput,
    );
    return CustomerUpdateOneWithoutFavoriteDeliveryInput;
})();
exports.CustomerUpdateOneWithoutFavoriteDeliveryInput =
    CustomerUpdateOneWithoutFavoriteDeliveryInput;
var CustomerUpdateOneWithoutProfileInput = /** @class */ (function () {
    function CustomerUpdateOneWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutProfileInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateOrConnectWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutProfileInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpsertWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutProfileInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutProfileInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutProfileInput.prototype,
        'disconnect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutProfileInput.prototype,
        'delete',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateOneWithoutProfileInput.prototype,
        'update',
    );
    CustomerUpdateOneWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateOneWithoutProfileInput,
    );
    return CustomerUpdateOneWithoutProfileInput;
})();
exports.CustomerUpdateOneWithoutProfileInput = CustomerUpdateOneWithoutProfileInput;
var CustomerUpdateWithoutCollectorsInput = /** @class */ (function () {
    function CustomerUpdateWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutCollectorsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutCollectorsInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutCollectorsInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateOneRequiredWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutCollectorsInput.prototype,
        'profile',
    );
    CustomerUpdateWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateWithoutCollectorsInput,
    );
    return CustomerUpdateWithoutCollectorsInput;
})();
exports.CustomerUpdateWithoutCollectorsInput = CustomerUpdateWithoutCollectorsInput;
var CustomerUpdateWithoutDestinationsInput = /** @class */ (function () {
    function CustomerUpdateWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutDestinationsInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutDestinationsInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutDestinationsInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateOneRequiredWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutDestinationsInput.prototype,
        'profile',
    );
    CustomerUpdateWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateWithoutDestinationsInput,
    );
    return CustomerUpdateWithoutDestinationsInput;
})();
exports.CustomerUpdateWithoutDestinationsInput = CustomerUpdateWithoutDestinationsInput;
var CustomerUpdateWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerUpdateWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutFavoriteDeliveryInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutFavoriteDeliveryInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutFavoriteDeliveryInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateOneRequiredWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutFavoriteDeliveryInput.prototype,
        'profile',
    );
    CustomerUpdateWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateWithoutFavoriteDeliveryInput,
    );
    return CustomerUpdateWithoutFavoriteDeliveryInput;
})();
exports.CustomerUpdateWithoutFavoriteDeliveryInput =
    CustomerUpdateWithoutFavoriteDeliveryInput;
var CustomerUpdateWithoutProfileInput = /** @class */ (function () {
    function CustomerUpdateWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutProfileInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutProfileInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutProfileInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateWithoutProfileInput.prototype,
        'favoriteDelivery',
    );
    CustomerUpdateWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpdateWithoutProfileInput,
    );
    return CustomerUpdateWithoutProfileInput;
})();
exports.CustomerUpdateWithoutProfileInput = CustomerUpdateWithoutProfileInput;
var CustomerUpdateInput = /** @class */ (function () {
    function CustomerUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateManyWithoutCustomer_destination_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateManyWithoutCollector_profile_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateOneRequiredWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        CustomerUpdateInput.prototype,
        'profile',
    );
    CustomerUpdateInput = __decorate([graphql_5.InputType()], CustomerUpdateInput);
    return CustomerUpdateInput;
})();
exports.CustomerUpdateInput = CustomerUpdateInput;
var CustomerUpsertWithoutCollectorsInput = /** @class */ (function () {
    function CustomerUpsertWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutCollectorsInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutCollectorsInput.prototype,
        'update',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutCollectorsInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutCollectorsInput.prototype,
        'create',
    );
    CustomerUpsertWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpsertWithoutCollectorsInput,
    );
    return CustomerUpsertWithoutCollectorsInput;
})();
exports.CustomerUpsertWithoutCollectorsInput = CustomerUpsertWithoutCollectorsInput;
var CustomerUpsertWithoutDestinationsInput = /** @class */ (function () {
    function CustomerUpsertWithoutDestinationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutDestinationsInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutDestinationsInput.prototype,
        'update',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutDestinationsInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutDestinationsInput.prototype,
        'create',
    );
    CustomerUpsertWithoutDestinationsInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpsertWithoutDestinationsInput,
    );
    return CustomerUpsertWithoutDestinationsInput;
})();
exports.CustomerUpsertWithoutDestinationsInput = CustomerUpsertWithoutDestinationsInput;
var CustomerUpsertWithoutFavoriteDeliveryInput = /** @class */ (function () {
    function CustomerUpsertWithoutFavoriteDeliveryInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutFavoriteDeliveryInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutFavoriteDeliveryInput.prototype,
        'update',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutFavoriteDeliveryInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutFavoriteDeliveryInput.prototype,
        'create',
    );
    CustomerUpsertWithoutFavoriteDeliveryInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpsertWithoutFavoriteDeliveryInput,
    );
    return CustomerUpsertWithoutFavoriteDeliveryInput;
})();
exports.CustomerUpsertWithoutFavoriteDeliveryInput =
    CustomerUpsertWithoutFavoriteDeliveryInput;
var CustomerUpsertWithoutProfileInput = /** @class */ (function () {
    function CustomerUpsertWithoutProfileInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateWithoutProfileInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutProfileInput.prototype,
        'update',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateWithoutProfileInput;
                },
                { nullable: false },
            ),
        ],
        CustomerUpsertWithoutProfileInput.prototype,
        'create',
    );
    CustomerUpsertWithoutProfileInput = __decorate(
        [graphql_5.InputType()],
        CustomerUpsertWithoutProfileInput,
    );
    return CustomerUpsertWithoutProfileInput;
})();
exports.CustomerUpsertWithoutProfileInput = CustomerUpsertWithoutProfileInput;
var CustomerWhereUniqueInput = /** @class */ (function () {
    function CustomerWhereUniqueInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereUniqueInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereUniqueInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereUniqueInput.prototype,
        'id_profile',
    );
    CustomerWhereUniqueInput = __decorate(
        [graphql_5.InputType()],
        CustomerWhereUniqueInput,
    );
    return CustomerWhereUniqueInput;
})();
exports.CustomerWhereUniqueInput = CustomerWhereUniqueInput;
var CustomerWhereInput = /** @class */ (function () {
    function CustomerWhereInput() {}
    CustomerWhereInput_1 = CustomerWhereInput;
    var CustomerWhereInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationListRelationFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileListRelationFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryRelationFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileRelationFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        CustomerWhereInput.prototype,
        'id_profile',
    );
    CustomerWhereInput = CustomerWhereInput_1 = __decorate(
        [graphql_5.InputType()],
        CustomerWhereInput,
    );
    return CustomerWhereInput;
})();
exports.CustomerWhereInput = CustomerWhereInput;
var Customer = /** @class */ (function () {
    function Customer() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_7.ID;
                },
                { nullable: false },
            ),
        ],
        Customer.prototype,
        'number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [Destination];
                },
                { nullable: true },
            ),
        ],
        Customer.prototype,
        'destinations',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [Profile];
                },
                { nullable: true },
            ),
        ],
        Customer.prototype,
        'collectors',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Delivery;
                },
                { nullable: false },
            ),
        ],
        Customer.prototype,
        'favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        Customer.prototype,
        'id_favoriteDelivery',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Profile;
                },
                { nullable: false },
            ),
        ],
        Customer.prototype,
        'profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        Customer.prototype,
        'id_profile',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCount;
                },
                { nullable: true },
            ),
        ],
        Customer.prototype,
        '_count',
    );
    Customer = __decorate([graphql_2.ObjectType()], Customer);
    return Customer;
})();
exports.Customer = Customer;
var DeleteManyCustomerArgs = /** @class */ (function () {
    function DeleteManyCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeleteManyCustomerArgs.prototype,
        'where',
    );
    DeleteManyCustomerArgs = __decorate([graphql_3.ArgsType()], DeleteManyCustomerArgs);
    return DeleteManyCustomerArgs;
})();
exports.DeleteManyCustomerArgs = DeleteManyCustomerArgs;
var DeleteOneCustomerArgs = /** @class */ (function () {
    function DeleteOneCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        DeleteOneCustomerArgs.prototype,
        'where',
    );
    DeleteOneCustomerArgs = __decorate([graphql_3.ArgsType()], DeleteOneCustomerArgs);
    return DeleteOneCustomerArgs;
})();
exports.DeleteOneCustomerArgs = DeleteOneCustomerArgs;
var FindFirstCustomerArgs = /** @class */ (function () {
    function FindFirstCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstCustomerArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindFirstCustomerArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstCustomerArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstCustomerArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstCustomerArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindFirstCustomerArgs.prototype,
        'distinct',
    );
    FindFirstCustomerArgs = __decorate([graphql_3.ArgsType()], FindFirstCustomerArgs);
    return FindFirstCustomerArgs;
})();
exports.FindFirstCustomerArgs = FindFirstCustomerArgs;
var FindManyCustomerArgs = /** @class */ (function () {
    function FindManyCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindManyCustomerArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindManyCustomerArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindManyCustomerArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyCustomerArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyCustomerArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [CustomerScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindManyCustomerArgs.prototype,
        'distinct',
    );
    FindManyCustomerArgs = __decorate([graphql_3.ArgsType()], FindManyCustomerArgs);
    return FindManyCustomerArgs;
})();
exports.FindManyCustomerArgs = FindManyCustomerArgs;
var FindUniqueCustomerArgs = /** @class */ (function () {
    function FindUniqueCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        FindUniqueCustomerArgs.prototype,
        'where',
    );
    FindUniqueCustomerArgs = __decorate([graphql_3.ArgsType()], FindUniqueCustomerArgs);
    return FindUniqueCustomerArgs;
})();
exports.FindUniqueCustomerArgs = FindUniqueCustomerArgs;
var UpdateManyCustomerArgs = /** @class */ (function () {
    function UpdateManyCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateManyMutationInput;
                },
                { nullable: false },
            ),
        ],
        UpdateManyCustomerArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereInput;
                },
                { nullable: true },
            ),
        ],
        UpdateManyCustomerArgs.prototype,
        'where',
    );
    UpdateManyCustomerArgs = __decorate([graphql_3.ArgsType()], UpdateManyCustomerArgs);
    return UpdateManyCustomerArgs;
})();
exports.UpdateManyCustomerArgs = UpdateManyCustomerArgs;
var UpdateOneCustomerArgs = /** @class */ (function () {
    function UpdateOneCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneCustomerArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneCustomerArgs.prototype,
        'where',
    );
    UpdateOneCustomerArgs = __decorate([graphql_3.ArgsType()], UpdateOneCustomerArgs);
    return UpdateOneCustomerArgs;
})();
exports.UpdateOneCustomerArgs = UpdateOneCustomerArgs;
var UpsertOneCustomerArgs = /** @class */ (function () {
    function UpsertOneCustomerArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneCustomerArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneCustomerArgs.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneCustomerArgs.prototype,
        'update',
    );
    UpsertOneCustomerArgs = __decorate([graphql_3.ArgsType()], UpsertOneCustomerArgs);
    return UpsertOneCustomerArgs;
})();
exports.UpsertOneCustomerArgs = UpsertOneCustomerArgs;
var AggregateDelivery = /** @class */ (function () {
    function AggregateDelivery() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCountAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateDelivery.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMinAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateDelivery.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateDelivery.prototype,
        '_max',
    );
    AggregateDelivery = __decorate([graphql_2.ObjectType()], AggregateDelivery);
    return AggregateDelivery;
})();
exports.AggregateDelivery = AggregateDelivery;
var CreateManyDeliveryArgs = /** @class */ (function () {
    function CreateManyDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryCreateManyInput];
                },
                { nullable: false },
            ),
        ],
        CreateManyDeliveryArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CreateManyDeliveryArgs.prototype,
        'skipDuplicates',
    );
    CreateManyDeliveryArgs = __decorate([graphql_3.ArgsType()], CreateManyDeliveryArgs);
    return CreateManyDeliveryArgs;
})();
exports.CreateManyDeliveryArgs = CreateManyDeliveryArgs;
var CreateOneDeliveryArgs = /** @class */ (function () {
    function CreateOneDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateInput;
                },
                { nullable: false },
            ),
        ],
        CreateOneDeliveryArgs.prototype,
        'data',
    );
    CreateOneDeliveryArgs = __decorate([graphql_3.ArgsType()], CreateOneDeliveryArgs);
    return CreateOneDeliveryArgs;
})();
exports.CreateOneDeliveryArgs = CreateOneDeliveryArgs;
var DeleteManyDeliveryArgs = /** @class */ (function () {
    function DeleteManyDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeleteManyDeliveryArgs.prototype,
        'where',
    );
    DeleteManyDeliveryArgs = __decorate([graphql_3.ArgsType()], DeleteManyDeliveryArgs);
    return DeleteManyDeliveryArgs;
})();
exports.DeleteManyDeliveryArgs = DeleteManyDeliveryArgs;
var DeleteOneDeliveryArgs = /** @class */ (function () {
    function DeleteOneDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        DeleteOneDeliveryArgs.prototype,
        'where',
    );
    DeleteOneDeliveryArgs = __decorate([graphql_3.ArgsType()], DeleteOneDeliveryArgs);
    return DeleteOneDeliveryArgs;
})();
exports.DeleteOneDeliveryArgs = DeleteOneDeliveryArgs;
var DeliveryAggregateArgs = /** @class */ (function () {
    function DeliveryAggregateArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryAggregateArgs.prototype,
        '_max',
    );
    DeliveryAggregateArgs = __decorate([graphql_3.ArgsType()], DeliveryAggregateArgs);
    return DeliveryAggregateArgs;
})();
exports.DeliveryAggregateArgs = DeliveryAggregateArgs;
var DeliveryCountAggregateInput = /** @class */ (function () {
    function DeliveryCountAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryCountAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryCountAggregateInput.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryCountAggregateInput.prototype,
        '_all',
    );
    DeliveryCountAggregateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryCountAggregateInput,
    );
    return DeliveryCountAggregateInput;
})();
exports.DeliveryCountAggregateInput = DeliveryCountAggregateInput;
var DeliveryCountAggregate = /** @class */ (function () {
    function DeliveryCountAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        DeliveryCountAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        DeliveryCountAggregate.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        DeliveryCountAggregate.prototype,
        '_all',
    );
    DeliveryCountAggregate = __decorate(
        [graphql_2.ObjectType()],
        DeliveryCountAggregate,
    );
    return DeliveryCountAggregate;
})();
exports.DeliveryCountAggregate = DeliveryCountAggregate;
var DeliveryCountOrderByAggregateInput = /** @class */ (function () {
    function DeliveryCountOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryCountOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryCountOrderByAggregateInput.prototype,
        'id_destination',
    );
    DeliveryCountOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryCountOrderByAggregateInput,
    );
    return DeliveryCountOrderByAggregateInput;
})();
exports.DeliveryCountOrderByAggregateInput = DeliveryCountOrderByAggregateInput;
var DeliveryCreateManyInput = /** @class */ (function () {
    function DeliveryCreateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateManyInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateManyInput.prototype,
        'id_destination',
    );
    DeliveryCreateManyInput = __decorate(
        [graphql_5.InputType()],
        DeliveryCreateManyInput,
    );
    return DeliveryCreateManyInput;
})();
exports.DeliveryCreateManyInput = DeliveryCreateManyInput;
var DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryWhereUniqueInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'connect',
        );
        DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput,
            );
        return DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryCreateNestedOneWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryCreateNestedOneWithoutDestinationInput = /** @class */ (function () {
    function DeliveryCreateNestedOneWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateNestedOneWithoutDestinationInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateOrConnectWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateNestedOneWithoutDestinationInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateNestedOneWithoutDestinationInput.prototype,
        'connect',
    );
    DeliveryCreateNestedOneWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryCreateNestedOneWithoutDestinationInput,
    );
    return DeliveryCreateNestedOneWithoutDestinationInput;
})();
exports.DeliveryCreateNestedOneWithoutDestinationInput =
    DeliveryCreateNestedOneWithoutDestinationInput;
var DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'create',
        );
        DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput,
            );
        return DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryCreateOrConnectWithoutDestinationInput = /** @class */ (function () {
    function DeliveryCreateOrConnectWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        DeliveryCreateOrConnectWithoutDestinationInput.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateWithoutDestinationInput;
                },
                { nullable: false },
            ),
        ],
        DeliveryCreateOrConnectWithoutDestinationInput.prototype,
        'create',
    );
    DeliveryCreateOrConnectWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryCreateOrConnectWithoutDestinationInput,
    );
    return DeliveryCreateOrConnectWithoutDestinationInput;
})();
exports.DeliveryCreateOrConnectWithoutDestinationInput =
    DeliveryCreateOrConnectWithoutDestinationInput;
var DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'destination',
        );
        DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput = __decorate(
            [graphql_5.InputType()],
            DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput,
        );
        return DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryCreateWithoutDestinationInput = /** @class */ (function () {
    function DeliveryCreateWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateWithoutDestinationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateNestedOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateWithoutDestinationInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryCreateWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryCreateWithoutDestinationInput,
    );
    return DeliveryCreateWithoutDestinationInput;
})();
exports.DeliveryCreateWithoutDestinationInput = DeliveryCreateWithoutDestinationInput;
var DeliveryCreateInput = /** @class */ (function () {
    function DeliveryCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateInput.prototype,
        'destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateNestedOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryCreateInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryCreateInput = __decorate([graphql_5.InputType()], DeliveryCreateInput);
    return DeliveryCreateInput;
})();
exports.DeliveryCreateInput = DeliveryCreateInput;
var DeliveryGroupByArgs = /** @class */ (function () {
    function DeliveryGroupByArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryOrderByWithAggregationInput];
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryScalarFieldEnum];
                },
                { nullable: false },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        'by',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryScalarWhereWithAggregatesInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        'having',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupByArgs.prototype,
        '_max',
    );
    DeliveryGroupByArgs = __decorate([graphql_3.ArgsType()], DeliveryGroupByArgs);
    return DeliveryGroupByArgs;
})();
exports.DeliveryGroupByArgs = DeliveryGroupByArgs;
var DeliveryGroupBy = /** @class */ (function () {
    function DeliveryGroupBy() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        DeliveryGroupBy.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupBy.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCountAggregate;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupBy.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMinAggregate;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupBy.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        DeliveryGroupBy.prototype,
        '_max',
    );
    DeliveryGroupBy = __decorate([graphql_2.ObjectType()], DeliveryGroupBy);
    return DeliveryGroupBy;
})();
exports.DeliveryGroupBy = DeliveryGroupBy;
var DeliveryMaxAggregateInput = /** @class */ (function () {
    function DeliveryMaxAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryMaxAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryMaxAggregateInput.prototype,
        'id_destination',
    );
    DeliveryMaxAggregateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryMaxAggregateInput,
    );
    return DeliveryMaxAggregateInput;
})();
exports.DeliveryMaxAggregateInput = DeliveryMaxAggregateInput;
var DeliveryMaxAggregate = /** @class */ (function () {
    function DeliveryMaxAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryMaxAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryMaxAggregate.prototype,
        'id_destination',
    );
    DeliveryMaxAggregate = __decorate([graphql_2.ObjectType()], DeliveryMaxAggregate);
    return DeliveryMaxAggregate;
})();
exports.DeliveryMaxAggregate = DeliveryMaxAggregate;
var DeliveryMaxOrderByAggregateInput = /** @class */ (function () {
    function DeliveryMaxOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryMaxOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryMaxOrderByAggregateInput.prototype,
        'id_destination',
    );
    DeliveryMaxOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryMaxOrderByAggregateInput,
    );
    return DeliveryMaxOrderByAggregateInput;
})();
exports.DeliveryMaxOrderByAggregateInput = DeliveryMaxOrderByAggregateInput;
var DeliveryMinAggregateInput = /** @class */ (function () {
    function DeliveryMinAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryMinAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryMinAggregateInput.prototype,
        'id_destination',
    );
    DeliveryMinAggregateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryMinAggregateInput,
    );
    return DeliveryMinAggregateInput;
})();
exports.DeliveryMinAggregateInput = DeliveryMinAggregateInput;
var DeliveryMinAggregate = /** @class */ (function () {
    function DeliveryMinAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryMinAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryMinAggregate.prototype,
        'id_destination',
    );
    DeliveryMinAggregate = __decorate([graphql_2.ObjectType()], DeliveryMinAggregate);
    return DeliveryMinAggregate;
})();
exports.DeliveryMinAggregate = DeliveryMinAggregate;
var DeliveryMinOrderByAggregateInput = /** @class */ (function () {
    function DeliveryMinOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryMinOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryMinOrderByAggregateInput.prototype,
        'id_destination',
    );
    DeliveryMinOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryMinOrderByAggregateInput,
    );
    return DeliveryMinOrderByAggregateInput;
})();
exports.DeliveryMinOrderByAggregateInput = DeliveryMinOrderByAggregateInput;
var DeliveryOrderByWithAggregationInput = /** @class */ (function () {
    function DeliveryOrderByWithAggregationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithAggregationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithAggregationInput.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCountOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithAggregationInput.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMaxOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithAggregationInput.prototype,
        '_max',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryMinOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithAggregationInput.prototype,
        '_min',
    );
    DeliveryOrderByWithAggregationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryOrderByWithAggregationInput,
    );
    return DeliveryOrderByWithAggregationInput;
})();
exports.DeliveryOrderByWithAggregationInput = DeliveryOrderByWithAggregationInput;
var DeliveryOrderByWithRelationInput = /** @class */ (function () {
    function DeliveryOrderByWithRelationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithRelationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithRelationInput.prototype,
        'destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithRelationInput.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryOrderByWithRelationInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryOrderByWithRelationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryOrderByWithRelationInput,
    );
    return DeliveryOrderByWithRelationInput;
})();
exports.DeliveryOrderByWithRelationInput = DeliveryOrderByWithRelationInput;
var DeliveryRelationFilter = /** @class */ (function () {
    function DeliveryRelationFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryRelationFilter.prototype,
        'is',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryRelationFilter.prototype,
        'isNot',
    );
    DeliveryRelationFilter = __decorate(
        [graphql_5.InputType()],
        DeliveryRelationFilter,
    );
    return DeliveryRelationFilter;
})();
exports.DeliveryRelationFilter = DeliveryRelationFilter;
var DeliveryScalarWhereWithAggregatesInput = /** @class */ (function () {
    function DeliveryScalarWhereWithAggregatesInput() {}
    DeliveryScalarWhereWithAggregatesInput_1 = DeliveryScalarWhereWithAggregatesInput;
    var DeliveryScalarWhereWithAggregatesInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        DeliveryScalarWhereWithAggregatesInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        DeliveryScalarWhereWithAggregatesInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        DeliveryScalarWhereWithAggregatesInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        DeliveryScalarWhereWithAggregatesInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        DeliveryScalarWhereWithAggregatesInput.prototype,
        'id_destination',
    );
    DeliveryScalarWhereWithAggregatesInput = DeliveryScalarWhereWithAggregatesInput_1 =
        __decorate([graphql_5.InputType()], DeliveryScalarWhereWithAggregatesInput);
    return DeliveryScalarWhereWithAggregatesInput;
})();
exports.DeliveryScalarWhereWithAggregatesInput = DeliveryScalarWhereWithAggregatesInput;
var DeliveryUncheckedCreateNestedOneWithoutDestinationInput =
    /** @class */ (function () {
        function DeliveryUncheckedCreateNestedOneWithoutDestinationInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateWithoutDestinationInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUncheckedCreateNestedOneWithoutDestinationInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateOrConnectWithoutDestinationInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUncheckedCreateNestedOneWithoutDestinationInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryWhereUniqueInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUncheckedCreateNestedOneWithoutDestinationInput.prototype,
            'connect',
        );
        DeliveryUncheckedCreateNestedOneWithoutDestinationInput = __decorate(
            [graphql_5.InputType()],
            DeliveryUncheckedCreateNestedOneWithoutDestinationInput,
        );
        return DeliveryUncheckedCreateNestedOneWithoutDestinationInput;
    })();
exports.DeliveryUncheckedCreateNestedOneWithoutDestinationInput =
    DeliveryUncheckedCreateNestedOneWithoutDestinationInput;
var DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'id_destination',
        );
        DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput,
            );
        return DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryUncheckedCreateWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryUncheckedCreateWithoutDestinationInput = /** @class */ (function () {
    function DeliveryUncheckedCreateWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedCreateWithoutDestinationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedCreateWithoutDestinationInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryUncheckedCreateWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUncheckedCreateWithoutDestinationInput,
    );
    return DeliveryUncheckedCreateWithoutDestinationInput;
})();
exports.DeliveryUncheckedCreateWithoutDestinationInput =
    DeliveryUncheckedCreateWithoutDestinationInput;
var DeliveryUncheckedCreateInput = /** @class */ (function () {
    function DeliveryUncheckedCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedCreateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedCreateInput.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUncheckedCreateNestedOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedCreateInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryUncheckedCreateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUncheckedCreateInput,
    );
    return DeliveryUncheckedCreateInput;
})();
exports.DeliveryUncheckedCreateInput = DeliveryUncheckedCreateInput;
var DeliveryUncheckedUpdateManyInput = /** @class */ (function () {
    function DeliveryUncheckedUpdateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateManyInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NullableStringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateManyInput.prototype,
        'id_destination',
    );
    DeliveryUncheckedUpdateManyInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUncheckedUpdateManyInput,
    );
    return DeliveryUncheckedUpdateManyInput;
})();
exports.DeliveryUncheckedUpdateManyInput = DeliveryUncheckedUpdateManyInput;
var DeliveryUncheckedUpdateOneWithoutDestinationInput = /** @class */ (function () {
    function DeliveryUncheckedUpdateOneWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateOneWithoutDestinationInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateOrConnectWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateOneWithoutDestinationInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpsertWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateOneWithoutDestinationInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateOneWithoutDestinationInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateOneWithoutDestinationInput.prototype,
        'disconnect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateOneWithoutDestinationInput.prototype,
        'delete',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateOneWithoutDestinationInput.prototype,
        'update',
    );
    DeliveryUncheckedUpdateOneWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUncheckedUpdateOneWithoutDestinationInput,
    );
    return DeliveryUncheckedUpdateOneWithoutDestinationInput;
})();
exports.DeliveryUncheckedUpdateOneWithoutDestinationInput =
    DeliveryUncheckedUpdateOneWithoutDestinationInput;
var DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return NullableStringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'id_destination',
        );
        DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput,
            );
        return DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryUncheckedUpdateWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryUncheckedUpdateWithoutDestinationInput = /** @class */ (function () {
    function DeliveryUncheckedUpdateWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateWithoutDestinationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateWithoutDestinationInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryUncheckedUpdateWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUncheckedUpdateWithoutDestinationInput,
    );
    return DeliveryUncheckedUpdateWithoutDestinationInput;
})();
exports.DeliveryUncheckedUpdateWithoutDestinationInput =
    DeliveryUncheckedUpdateWithoutDestinationInput;
var DeliveryUncheckedUpdateInput = /** @class */ (function () {
    function DeliveryUncheckedUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NullableStringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateInput.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUncheckedUpdateOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUncheckedUpdateInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryUncheckedUpdateInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUncheckedUpdateInput,
    );
    return DeliveryUncheckedUpdateInput;
})();
exports.DeliveryUncheckedUpdateInput = DeliveryUncheckedUpdateInput;
var DeliveryUpdateManyMutationInput = /** @class */ (function () {
    function DeliveryUpdateManyMutationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateManyMutationInput.prototype,
        'id',
    );
    DeliveryUpdateManyMutationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUpdateManyMutationInput,
    );
    return DeliveryUpdateManyMutationInput;
})();
exports.DeliveryUpdateManyMutationInput = DeliveryUpdateManyMutationInput;
var DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateOrConnectWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'upsert',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryWhereUniqueInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'connect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'update',
        );
        DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput,
            );
        return DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryUpdateOneRequiredWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryUpdateOneWithoutDestinationInput = /** @class */ (function () {
    function DeliveryUpdateOneWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateOneWithoutDestinationInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateOrConnectWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateOneWithoutDestinationInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpsertWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateOneWithoutDestinationInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateOneWithoutDestinationInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateOneWithoutDestinationInput.prototype,
        'disconnect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateOneWithoutDestinationInput.prototype,
        'delete',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateOneWithoutDestinationInput.prototype,
        'update',
    );
    DeliveryUpdateOneWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUpdateOneWithoutDestinationInput,
    );
    return DeliveryUpdateOneWithoutDestinationInput;
})();
exports.DeliveryUpdateOneWithoutDestinationInput =
    DeliveryUpdateOneWithoutDestinationInput;
var DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationUpdateOneWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'destination',
        );
        DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput = __decorate(
            [graphql_5.InputType()],
            DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput,
        );
        return DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryUpdateWithoutDestinationInput = /** @class */ (function () {
    function DeliveryUpdateWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateWithoutDestinationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateWithoutDestinationInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryUpdateWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUpdateWithoutDestinationInput,
    );
    return DeliveryUpdateWithoutDestinationInput;
})();
exports.DeliveryUpdateWithoutDestinationInput = DeliveryUpdateWithoutDestinationInput;
var DeliveryUpdateInput = /** @class */ (function () {
    function DeliveryUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateOneWithoutDelivery_destination_deliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateInput.prototype,
        'destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateOneWithoutFavoriteDeliveryInput;
                },
                { nullable: true },
            ),
        ],
        DeliveryUpdateInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryUpdateInput = __decorate([graphql_5.InputType()], DeliveryUpdateInput);
    return DeliveryUpdateInput;
})();
exports.DeliveryUpdateInput = DeliveryUpdateInput;
var DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput =
    /** @class */ (function () {
        function DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryUpdateWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateWithoutCustomer_favouriteDelivery_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput.prototype,
            'create',
        );
        DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput = __decorate(
            [graphql_5.InputType()],
            DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput,
        );
        return DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput;
    })();
exports.DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput =
    DeliveryUpsertWithoutCustomer_favouriteDelivery_customerInput;
var DeliveryUpsertWithoutDestinationInput = /** @class */ (function () {
    function DeliveryUpsertWithoutDestinationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateWithoutDestinationInput;
                },
                { nullable: false },
            ),
        ],
        DeliveryUpsertWithoutDestinationInput.prototype,
        'update',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateWithoutDestinationInput;
                },
                { nullable: false },
            ),
        ],
        DeliveryUpsertWithoutDestinationInput.prototype,
        'create',
    );
    DeliveryUpsertWithoutDestinationInput = __decorate(
        [graphql_5.InputType()],
        DeliveryUpsertWithoutDestinationInput,
    );
    return DeliveryUpsertWithoutDestinationInput;
})();
exports.DeliveryUpsertWithoutDestinationInput = DeliveryUpsertWithoutDestinationInput;
var DeliveryWhereUniqueInput = /** @class */ (function () {
    function DeliveryWhereUniqueInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereUniqueInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereUniqueInput.prototype,
        'id_destination',
    );
    DeliveryWhereUniqueInput = __decorate(
        [graphql_5.InputType()],
        DeliveryWhereUniqueInput,
    );
    return DeliveryWhereUniqueInput;
})();
exports.DeliveryWhereUniqueInput = DeliveryWhereUniqueInput;
var DeliveryWhereInput = /** @class */ (function () {
    function DeliveryWhereInput() {}
    DeliveryWhereInput_1 = DeliveryWhereInput;
    var DeliveryWhereInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationRelationFilter;
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereInput.prototype,
        'destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereInput.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerRelationFilter;
                },
                { nullable: true },
            ),
        ],
        DeliveryWhereInput.prototype,
        'customer_favouriteDelivery_customer',
    );
    DeliveryWhereInput = DeliveryWhereInput_1 = __decorate(
        [graphql_5.InputType()],
        DeliveryWhereInput,
    );
    return DeliveryWhereInput;
})();
exports.DeliveryWhereInput = DeliveryWhereInput;
var Delivery = /** @class */ (function () {
    function Delivery() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_7.ID;
                },
                { nullable: false },
            ),
        ],
        Delivery.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Destination;
                },
                { nullable: true },
            ),
        ],
        Delivery.prototype,
        'destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        Delivery.prototype,
        'id_destination',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Customer;
                },
                { nullable: true },
            ),
        ],
        Delivery.prototype,
        'customer_favouriteDelivery_customer',
    );
    Delivery = __decorate([graphql_2.ObjectType()], Delivery);
    return Delivery;
})();
exports.Delivery = Delivery;
var FindFirstDeliveryArgs = /** @class */ (function () {
    function FindFirstDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstDeliveryArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindFirstDeliveryArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstDeliveryArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstDeliveryArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstDeliveryArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindFirstDeliveryArgs.prototype,
        'distinct',
    );
    FindFirstDeliveryArgs = __decorate([graphql_3.ArgsType()], FindFirstDeliveryArgs);
    return FindFirstDeliveryArgs;
})();
exports.FindFirstDeliveryArgs = FindFirstDeliveryArgs;
var FindManyDeliveryArgs = /** @class */ (function () {
    function FindManyDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindManyDeliveryArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindManyDeliveryArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindManyDeliveryArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyDeliveryArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyDeliveryArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DeliveryScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindManyDeliveryArgs.prototype,
        'distinct',
    );
    FindManyDeliveryArgs = __decorate([graphql_3.ArgsType()], FindManyDeliveryArgs);
    return FindManyDeliveryArgs;
})();
exports.FindManyDeliveryArgs = FindManyDeliveryArgs;
var FindUniqueDeliveryArgs = /** @class */ (function () {
    function FindUniqueDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        FindUniqueDeliveryArgs.prototype,
        'where',
    );
    FindUniqueDeliveryArgs = __decorate([graphql_3.ArgsType()], FindUniqueDeliveryArgs);
    return FindUniqueDeliveryArgs;
})();
exports.FindUniqueDeliveryArgs = FindUniqueDeliveryArgs;
var UpdateManyDeliveryArgs = /** @class */ (function () {
    function UpdateManyDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateManyMutationInput;
                },
                { nullable: false },
            ),
        ],
        UpdateManyDeliveryArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereInput;
                },
                { nullable: true },
            ),
        ],
        UpdateManyDeliveryArgs.prototype,
        'where',
    );
    UpdateManyDeliveryArgs = __decorate([graphql_3.ArgsType()], UpdateManyDeliveryArgs);
    return UpdateManyDeliveryArgs;
})();
exports.UpdateManyDeliveryArgs = UpdateManyDeliveryArgs;
var UpdateOneDeliveryArgs = /** @class */ (function () {
    function UpdateOneDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneDeliveryArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneDeliveryArgs.prototype,
        'where',
    );
    UpdateOneDeliveryArgs = __decorate([graphql_3.ArgsType()], UpdateOneDeliveryArgs);
    return UpdateOneDeliveryArgs;
})();
exports.UpdateOneDeliveryArgs = UpdateOneDeliveryArgs;
var UpsertOneDeliveryArgs = /** @class */ (function () {
    function UpsertOneDeliveryArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneDeliveryArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneDeliveryArgs.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneDeliveryArgs.prototype,
        'update',
    );
    UpsertOneDeliveryArgs = __decorate([graphql_3.ArgsType()], UpsertOneDeliveryArgs);
    return UpsertOneDeliveryArgs;
})();
exports.UpsertOneDeliveryArgs = UpsertOneDeliveryArgs;
var AggregateDestination = /** @class */ (function () {
    function AggregateDestination() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCountAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateDestination.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMinAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateDestination.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateDestination.prototype,
        '_max',
    );
    AggregateDestination = __decorate([graphql_2.ObjectType()], AggregateDestination);
    return AggregateDestination;
})();
exports.AggregateDestination = AggregateDestination;
var CreateManyDestinationArgs = /** @class */ (function () {
    function CreateManyDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationCreateManyInput];
                },
                { nullable: false },
            ),
        ],
        CreateManyDestinationArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CreateManyDestinationArgs.prototype,
        'skipDuplicates',
    );
    CreateManyDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        CreateManyDestinationArgs,
    );
    return CreateManyDestinationArgs;
})();
exports.CreateManyDestinationArgs = CreateManyDestinationArgs;
var CreateOneDestinationArgs = /** @class */ (function () {
    function CreateOneDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCreateInput;
                },
                { nullable: false },
            ),
        ],
        CreateOneDestinationArgs.prototype,
        'data',
    );
    CreateOneDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        CreateOneDestinationArgs,
    );
    return CreateOneDestinationArgs;
})();
exports.CreateOneDestinationArgs = CreateOneDestinationArgs;
var DeleteManyDestinationArgs = /** @class */ (function () {
    function DeleteManyDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeleteManyDestinationArgs.prototype,
        'where',
    );
    DeleteManyDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        DeleteManyDestinationArgs,
    );
    return DeleteManyDestinationArgs;
})();
exports.DeleteManyDestinationArgs = DeleteManyDestinationArgs;
var DeleteOneDestinationArgs = /** @class */ (function () {
    function DeleteOneDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        DeleteOneDestinationArgs.prototype,
        'where',
    );
    DeleteOneDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        DeleteOneDestinationArgs,
    );
    return DeleteOneDestinationArgs;
})();
exports.DeleteOneDestinationArgs = DeleteOneDestinationArgs;
var DestinationAggregateArgs = /** @class */ (function () {
    function DestinationAggregateArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationAggregateArgs.prototype,
        '_max',
    );
    DestinationAggregateArgs = __decorate(
        [graphql_3.ArgsType()],
        DestinationAggregateArgs,
    );
    return DestinationAggregateArgs;
})();
exports.DestinationAggregateArgs = DestinationAggregateArgs;
var DestinationCountAggregateInput = /** @class */ (function () {
    function DestinationCountAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DestinationCountAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DestinationCountAggregateInput.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DestinationCountAggregateInput.prototype,
        '_all',
    );
    DestinationCountAggregateInput = __decorate(
        [graphql_5.InputType()],
        DestinationCountAggregateInput,
    );
    return DestinationCountAggregateInput;
})();
exports.DestinationCountAggregateInput = DestinationCountAggregateInput;
var DestinationCountAggregate = /** @class */ (function () {
    function DestinationCountAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        DestinationCountAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        DestinationCountAggregate.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        DestinationCountAggregate.prototype,
        '_all',
    );
    DestinationCountAggregate = __decorate(
        [graphql_2.ObjectType()],
        DestinationCountAggregate,
    );
    return DestinationCountAggregate;
})();
exports.DestinationCountAggregate = DestinationCountAggregate;
var DestinationCountOrderByAggregateInput = /** @class */ (function () {
    function DestinationCountOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationCountOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationCountOrderByAggregateInput.prototype,
        'customer_number',
    );
    DestinationCountOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        DestinationCountOrderByAggregateInput,
    );
    return DestinationCountOrderByAggregateInput;
})();
exports.DestinationCountOrderByAggregateInput = DestinationCountOrderByAggregateInput;
var DestinationCreateManyCustomer_destination_customerInputEnvelope =
    /** @class */ (function () {
        function DestinationCreateManyCustomer_destination_customerInputEnvelope() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateManyCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: false },
                ),
            ],
            DestinationCreateManyCustomer_destination_customerInputEnvelope.prototype,
            'data',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return Boolean;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateManyCustomer_destination_customerInputEnvelope.prototype,
            'skipDuplicates',
        );
        DestinationCreateManyCustomer_destination_customerInputEnvelope = __decorate(
            [graphql_5.InputType()],
            DestinationCreateManyCustomer_destination_customerInputEnvelope,
        );
        return DestinationCreateManyCustomer_destination_customerInputEnvelope;
    })();
exports.DestinationCreateManyCustomer_destination_customerInputEnvelope =
    DestinationCreateManyCustomer_destination_customerInputEnvelope;
var DestinationCreateManyCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationCreateManyCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateManyCustomer_destination_customerInput.prototype,
            'id',
        );
        DestinationCreateManyCustomer_destination_customerInput = __decorate(
            [graphql_5.InputType()],
            DestinationCreateManyCustomer_destination_customerInput,
        );
        return DestinationCreateManyCustomer_destination_customerInput;
    })();
exports.DestinationCreateManyCustomer_destination_customerInput =
    DestinationCreateManyCustomer_destination_customerInput;
var DestinationCreateManyInput = /** @class */ (function () {
    function DestinationCreateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationCreateManyInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationCreateManyInput.prototype,
        'customer_number',
    );
    DestinationCreateManyInput = __decorate(
        [graphql_5.InputType()],
        DestinationCreateManyInput,
    );
    return DestinationCreateManyInput;
})();
exports.DestinationCreateManyInput = DestinationCreateManyInput;
var DestinationCreateNestedManyWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationCreateNestedManyWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateOrConnectWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateManyCustomer_destination_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'connect',
        );
        DestinationCreateNestedManyWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationCreateNestedManyWithoutCustomer_destination_customerInput,
            );
        return DestinationCreateNestedManyWithoutCustomer_destination_customerInput;
    })();
exports.DestinationCreateNestedManyWithoutCustomer_destination_customerInput =
    DestinationCreateNestedManyWithoutCustomer_destination_customerInput;
var DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationWhereUniqueInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput.prototype,
            'connect',
        );
        DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput,
            );
        return DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput =
    DestinationCreateNestedOneWithoutDelivery_destination_deliveryInput;
var DestinationCreateOrConnectWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationCreateOrConnectWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationCreateOrConnectWithoutCustomer_destination_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateWithoutCustomer_destination_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationCreateOrConnectWithoutCustomer_destination_customerInput.prototype,
            'create',
        );
        DestinationCreateOrConnectWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationCreateOrConnectWithoutCustomer_destination_customerInput,
            );
        return DestinationCreateOrConnectWithoutCustomer_destination_customerInput;
    })();
exports.DestinationCreateOrConnectWithoutCustomer_destination_customerInput =
    DestinationCreateOrConnectWithoutCustomer_destination_customerInput;
var DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput.prototype,
            'create',
        );
        DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput,
            );
        return DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput =
    DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput;
var DestinationCreateWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationCreateWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateWithoutCustomer_destination_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryCreateNestedOneWithoutDestinationInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateWithoutCustomer_destination_customerInput.prototype,
            'delivery_destination_delivery',
        );
        DestinationCreateWithoutCustomer_destination_customerInput = __decorate(
            [graphql_5.InputType()],
            DestinationCreateWithoutCustomer_destination_customerInput,
        );
        return DestinationCreateWithoutCustomer_destination_customerInput;
    })();
exports.DestinationCreateWithoutCustomer_destination_customerInput =
    DestinationCreateWithoutCustomer_destination_customerInput;
var DestinationCreateWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationCreateWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateWithoutDelivery_destination_deliveryInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerCreateNestedOneWithoutDestinationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationCreateWithoutDelivery_destination_deliveryInput.prototype,
            'customer_destination_customer',
        );
        DestinationCreateWithoutDelivery_destination_deliveryInput = __decorate(
            [graphql_5.InputType()],
            DestinationCreateWithoutDelivery_destination_deliveryInput,
        );
        return DestinationCreateWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationCreateWithoutDelivery_destination_deliveryInput =
    DestinationCreateWithoutDelivery_destination_deliveryInput;
var DestinationCreateInput = /** @class */ (function () {
    function DestinationCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationCreateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateNestedOneWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationCreateInput.prototype,
        'customer_destination_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryCreateNestedOneWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DestinationCreateInput.prototype,
        'delivery_destination_delivery',
    );
    DestinationCreateInput = __decorate(
        [graphql_5.InputType()],
        DestinationCreateInput,
    );
    return DestinationCreateInput;
})();
exports.DestinationCreateInput = DestinationCreateInput;
var DestinationGroupByArgs = /** @class */ (function () {
    function DestinationGroupByArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationOrderByWithAggregationInput];
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarFieldEnum];
                },
                { nullable: false },
            ),
        ],
        DestinationGroupByArgs.prototype,
        'by',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationScalarWhereWithAggregatesInput;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        'having',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupByArgs.prototype,
        '_max',
    );
    DestinationGroupByArgs = __decorate([graphql_3.ArgsType()], DestinationGroupByArgs);
    return DestinationGroupByArgs;
})();
exports.DestinationGroupByArgs = DestinationGroupByArgs;
var DestinationGroupBy = /** @class */ (function () {
    function DestinationGroupBy() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        DestinationGroupBy.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupBy.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCountAggregate;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupBy.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMinAggregate;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupBy.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        DestinationGroupBy.prototype,
        '_max',
    );
    DestinationGroupBy = __decorate([graphql_2.ObjectType()], DestinationGroupBy);
    return DestinationGroupBy;
})();
exports.DestinationGroupBy = DestinationGroupBy;
var DestinationListRelationFilter = /** @class */ (function () {
    function DestinationListRelationFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DestinationListRelationFilter.prototype,
        'every',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DestinationListRelationFilter.prototype,
        'some',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DestinationListRelationFilter.prototype,
        'none',
    );
    DestinationListRelationFilter = __decorate(
        [graphql_5.InputType()],
        DestinationListRelationFilter,
    );
    return DestinationListRelationFilter;
})();
exports.DestinationListRelationFilter = DestinationListRelationFilter;
var DestinationMaxAggregateInput = /** @class */ (function () {
    function DestinationMaxAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DestinationMaxAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DestinationMaxAggregateInput.prototype,
        'customer_number',
    );
    DestinationMaxAggregateInput = __decorate(
        [graphql_5.InputType()],
        DestinationMaxAggregateInput,
    );
    return DestinationMaxAggregateInput;
})();
exports.DestinationMaxAggregateInput = DestinationMaxAggregateInput;
var DestinationMaxAggregate = /** @class */ (function () {
    function DestinationMaxAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationMaxAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationMaxAggregate.prototype,
        'customer_number',
    );
    DestinationMaxAggregate = __decorate(
        [graphql_2.ObjectType()],
        DestinationMaxAggregate,
    );
    return DestinationMaxAggregate;
})();
exports.DestinationMaxAggregate = DestinationMaxAggregate;
var DestinationMaxOrderByAggregateInput = /** @class */ (function () {
    function DestinationMaxOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationMaxOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationMaxOrderByAggregateInput.prototype,
        'customer_number',
    );
    DestinationMaxOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        DestinationMaxOrderByAggregateInput,
    );
    return DestinationMaxOrderByAggregateInput;
})();
exports.DestinationMaxOrderByAggregateInput = DestinationMaxOrderByAggregateInput;
var DestinationMinAggregateInput = /** @class */ (function () {
    function DestinationMinAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DestinationMinAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        DestinationMinAggregateInput.prototype,
        'customer_number',
    );
    DestinationMinAggregateInput = __decorate(
        [graphql_5.InputType()],
        DestinationMinAggregateInput,
    );
    return DestinationMinAggregateInput;
})();
exports.DestinationMinAggregateInput = DestinationMinAggregateInput;
var DestinationMinAggregate = /** @class */ (function () {
    function DestinationMinAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationMinAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationMinAggregate.prototype,
        'customer_number',
    );
    DestinationMinAggregate = __decorate(
        [graphql_2.ObjectType()],
        DestinationMinAggregate,
    );
    return DestinationMinAggregate;
})();
exports.DestinationMinAggregate = DestinationMinAggregate;
var DestinationMinOrderByAggregateInput = /** @class */ (function () {
    function DestinationMinOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationMinOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationMinOrderByAggregateInput.prototype,
        'customer_number',
    );
    DestinationMinOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        DestinationMinOrderByAggregateInput,
    );
    return DestinationMinOrderByAggregateInput;
})();
exports.DestinationMinOrderByAggregateInput = DestinationMinOrderByAggregateInput;
var DestinationOrderByRelationAggregateInput = /** @class */ (function () {
    function DestinationOrderByRelationAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByRelationAggregateInput.prototype,
        '_count',
    );
    DestinationOrderByRelationAggregateInput = __decorate(
        [graphql_5.InputType()],
        DestinationOrderByRelationAggregateInput,
    );
    return DestinationOrderByRelationAggregateInput;
})();
exports.DestinationOrderByRelationAggregateInput =
    DestinationOrderByRelationAggregateInput;
var DestinationOrderByWithAggregationInput = /** @class */ (function () {
    function DestinationOrderByWithAggregationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithAggregationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithAggregationInput.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCountOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithAggregationInput.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMaxOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithAggregationInput.prototype,
        '_max',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationMinOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithAggregationInput.prototype,
        '_min',
    );
    DestinationOrderByWithAggregationInput = __decorate(
        [graphql_5.InputType()],
        DestinationOrderByWithAggregationInput,
    );
    return DestinationOrderByWithAggregationInput;
})();
exports.DestinationOrderByWithAggregationInput = DestinationOrderByWithAggregationInput;
var DestinationOrderByWithRelationInput = /** @class */ (function () {
    function DestinationOrderByWithRelationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithRelationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithRelationInput.prototype,
        'customer_destination_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithRelationInput.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        DestinationOrderByWithRelationInput.prototype,
        'delivery_destination_delivery',
    );
    DestinationOrderByWithRelationInput = __decorate(
        [graphql_5.InputType()],
        DestinationOrderByWithRelationInput,
    );
    return DestinationOrderByWithRelationInput;
})();
exports.DestinationOrderByWithRelationInput = DestinationOrderByWithRelationInput;
var DestinationRelationFilter = /** @class */ (function () {
    function DestinationRelationFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DestinationRelationFilter.prototype,
        'is',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        DestinationRelationFilter.prototype,
        'isNot',
    );
    DestinationRelationFilter = __decorate(
        [graphql_5.InputType()],
        DestinationRelationFilter,
    );
    return DestinationRelationFilter;
})();
exports.DestinationRelationFilter = DestinationRelationFilter;
var DestinationScalarWhereWithAggregatesInput = /** @class */ (function () {
    function DestinationScalarWhereWithAggregatesInput() {}
    DestinationScalarWhereWithAggregatesInput_1 =
        DestinationScalarWhereWithAggregatesInput;
    var DestinationScalarWhereWithAggregatesInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereWithAggregatesInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereWithAggregatesInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereWithAggregatesInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereWithAggregatesInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereWithAggregatesInput.prototype,
        'customer_number',
    );
    DestinationScalarWhereWithAggregatesInput =
        DestinationScalarWhereWithAggregatesInput_1 = __decorate(
            [graphql_5.InputType()],
            DestinationScalarWhereWithAggregatesInput,
        );
    return DestinationScalarWhereWithAggregatesInput;
})();
exports.DestinationScalarWhereWithAggregatesInput =
    DestinationScalarWhereWithAggregatesInput;
var DestinationScalarWhereInput = /** @class */ (function () {
    function DestinationScalarWhereInput() {}
    DestinationScalarWhereInput_1 = DestinationScalarWhereInput;
    var DestinationScalarWhereInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationScalarWhereInput.prototype,
        'customer_number',
    );
    DestinationScalarWhereInput = DestinationScalarWhereInput_1 = __decorate(
        [graphql_5.InputType()],
        DestinationScalarWhereInput,
    );
    return DestinationScalarWhereInput;
})();
exports.DestinationScalarWhereInput = DestinationScalarWhereInput;
var DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateOrConnectWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateManyCustomer_destination_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput.prototype,
            'connect',
        );
        DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput,
            );
        return DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput =
    DestinationUncheckedCreateNestedManyWithoutCustomer_destination_customerInput;
var DestinationUncheckedCreateWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUncheckedCreateWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateWithoutCustomer_destination_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryUncheckedCreateNestedOneWithoutDestinationInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateWithoutCustomer_destination_customerInput.prototype,
            'delivery_destination_delivery',
        );
        DestinationUncheckedCreateWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUncheckedCreateWithoutCustomer_destination_customerInput,
            );
        return DestinationUncheckedCreateWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUncheckedCreateWithoutCustomer_destination_customerInput =
    DestinationUncheckedCreateWithoutCustomer_destination_customerInput;
var DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput.prototype,
            'customer_number',
        );
        DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput,
            );
        return DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput =
    DestinationUncheckedCreateWithoutDelivery_destination_deliveryInput;
var DestinationUncheckedCreateInput = /** @class */ (function () {
    function DestinationUncheckedCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedCreateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedCreateInput.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUncheckedCreateNestedOneWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedCreateInput.prototype,
        'delivery_destination_delivery',
    );
    DestinationUncheckedCreateInput = __decorate(
        [graphql_5.InputType()],
        DestinationUncheckedCreateInput,
    );
    return DestinationUncheckedCreateInput;
})();
exports.DestinationUncheckedCreateInput = DestinationUncheckedCreateInput;
var DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateOrConnectWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'upsert',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateManyCustomer_destination_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'connect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'set',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'disconnect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'delete',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'updateMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationScalarWhereInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'deleteMany',
        );
        DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput,
            );
        return DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput =
    DestinationUncheckedUpdateManyWithoutCustomer_destination_customerInput;
var DestinationUncheckedUpdateManyWithoutDestinationsInput =
    /** @class */ (function () {
        function DestinationUncheckedUpdateManyWithoutDestinationsInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateManyWithoutDestinationsInput.prototype,
            'id',
        );
        DestinationUncheckedUpdateManyWithoutDestinationsInput = __decorate(
            [graphql_5.InputType()],
            DestinationUncheckedUpdateManyWithoutDestinationsInput,
        );
        return DestinationUncheckedUpdateManyWithoutDestinationsInput;
    })();
exports.DestinationUncheckedUpdateManyWithoutDestinationsInput =
    DestinationUncheckedUpdateManyWithoutDestinationsInput;
var DestinationUncheckedUpdateManyInput = /** @class */ (function () {
    function DestinationUncheckedUpdateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedUpdateManyInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NullableStringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedUpdateManyInput.prototype,
        'customer_number',
    );
    DestinationUncheckedUpdateManyInput = __decorate(
        [graphql_5.InputType()],
        DestinationUncheckedUpdateManyInput,
    );
    return DestinationUncheckedUpdateManyInput;
})();
exports.DestinationUncheckedUpdateManyInput = DestinationUncheckedUpdateManyInput;
var DestinationUncheckedUpdateWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUncheckedUpdateWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateWithoutCustomer_destination_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryUncheckedUpdateOneWithoutDestinationInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateWithoutCustomer_destination_customerInput.prototype,
            'delivery_destination_delivery',
        );
        DestinationUncheckedUpdateWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUncheckedUpdateWithoutCustomer_destination_customerInput,
            );
        return DestinationUncheckedUpdateWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUncheckedUpdateWithoutCustomer_destination_customerInput =
    DestinationUncheckedUpdateWithoutCustomer_destination_customerInput;
var DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return NullableStringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput.prototype,
            'customer_number',
        );
        DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput,
            );
        return DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput =
    DestinationUncheckedUpdateWithoutDelivery_destination_deliveryInput;
var DestinationUncheckedUpdateInput = /** @class */ (function () {
    function DestinationUncheckedUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedUpdateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NullableStringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedUpdateInput.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUncheckedUpdateOneWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUncheckedUpdateInput.prototype,
        'delivery_destination_delivery',
    );
    DestinationUncheckedUpdateInput = __decorate(
        [graphql_5.InputType()],
        DestinationUncheckedUpdateInput,
    );
    return DestinationUncheckedUpdateInput;
})();
exports.DestinationUncheckedUpdateInput = DestinationUncheckedUpdateInput;
var DestinationUpdateManyMutationInput = /** @class */ (function () {
    function DestinationUpdateManyMutationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUpdateManyMutationInput.prototype,
        'id',
    );
    DestinationUpdateManyMutationInput = __decorate(
        [graphql_5.InputType()],
        DestinationUpdateManyMutationInput,
    );
    return DestinationUpdateManyMutationInput;
})();
exports.DestinationUpdateManyMutationInput = DestinationUpdateManyMutationInput;
var DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationScalarWhereInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationUpdateManyMutationInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput.prototype,
            'data',
        );
        DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput,
            );
        return DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput =
    DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput;
var DestinationUpdateManyWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUpdateManyWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationCreateOrConnectWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'upsert',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateManyCustomer_destination_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'connect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'set',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'disconnect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'delete',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            DestinationUpdateManyWithWhereWithoutCustomer_destination_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'updateMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [DestinationScalarWhereInput];
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateManyWithoutCustomer_destination_customerInput.prototype,
            'deleteMany',
        );
        DestinationUpdateManyWithoutCustomer_destination_customerInput = __decorate(
            [graphql_5.InputType()],
            DestinationUpdateManyWithoutCustomer_destination_customerInput,
        );
        return DestinationUpdateManyWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUpdateManyWithoutCustomer_destination_customerInput =
    DestinationUpdateManyWithoutCustomer_destination_customerInput;
var DestinationUpdateOneWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationUpdateOneWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateOrConnectWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationUpsertWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput.prototype,
            'upsert',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationWhereUniqueInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput.prototype,
            'connect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return Boolean;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput.prototype,
            'disconnect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return Boolean;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput.prototype,
            'delete',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationUpdateWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput.prototype,
            'update',
        );
        DestinationUpdateOneWithoutDelivery_destination_deliveryInput = __decorate(
            [graphql_5.InputType()],
            DestinationUpdateOneWithoutDelivery_destination_deliveryInput,
        );
        return DestinationUpdateOneWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationUpdateOneWithoutDelivery_destination_deliveryInput =
    DestinationUpdateOneWithoutDelivery_destination_deliveryInput;
var DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationUpdateWithoutCustomer_destination_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput.prototype,
            'data',
        );
        DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput,
            );
        return DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput =
    DestinationUpdateWithWhereUniqueWithoutCustomer_destination_customerInput;
var DestinationUpdateWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUpdateWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateWithoutCustomer_destination_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DeliveryUpdateOneWithoutDestinationInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateWithoutCustomer_destination_customerInput.prototype,
            'delivery_destination_delivery',
        );
        DestinationUpdateWithoutCustomer_destination_customerInput = __decorate(
            [graphql_5.InputType()],
            DestinationUpdateWithoutCustomer_destination_customerInput,
        );
        return DestinationUpdateWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUpdateWithoutCustomer_destination_customerInput =
    DestinationUpdateWithoutCustomer_destination_customerInput;
var DestinationUpdateWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationUpdateWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateWithoutDelivery_destination_deliveryInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerUpdateOneWithoutDestinationsInput;
                    },
                    { nullable: true },
                ),
            ],
            DestinationUpdateWithoutDelivery_destination_deliveryInput.prototype,
            'customer_destination_customer',
        );
        DestinationUpdateWithoutDelivery_destination_deliveryInput = __decorate(
            [graphql_5.InputType()],
            DestinationUpdateWithoutDelivery_destination_deliveryInput,
        );
        return DestinationUpdateWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationUpdateWithoutDelivery_destination_deliveryInput =
    DestinationUpdateWithoutDelivery_destination_deliveryInput;
var DestinationUpdateInput = /** @class */ (function () {
    function DestinationUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUpdateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateOneWithoutDestinationsInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUpdateInput.prototype,
        'customer_destination_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryUpdateOneWithoutDestinationInput;
                },
                { nullable: true },
            ),
        ],
        DestinationUpdateInput.prototype,
        'delivery_destination_delivery',
    );
    DestinationUpdateInput = __decorate(
        [graphql_5.InputType()],
        DestinationUpdateInput,
    );
    return DestinationUpdateInput;
})();
exports.DestinationUpdateInput = DestinationUpdateInput;
var DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput =
    /** @class */ (function () {
        function DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationUpdateWithoutCustomer_destination_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateWithoutCustomer_destination_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput.prototype,
            'create',
        );
        DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput =
            __decorate(
                [graphql_5.InputType()],
                DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput,
            );
        return DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput;
    })();
exports.DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput =
    DestinationUpsertWithWhereUniqueWithoutCustomer_destination_customerInput;
var DestinationUpsertWithoutDelivery_destination_deliveryInput =
    /** @class */ (function () {
        function DestinationUpsertWithoutDelivery_destination_deliveryInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationUpdateWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpsertWithoutDelivery_destination_deliveryInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return DestinationCreateWithoutDelivery_destination_deliveryInput;
                    },
                    { nullable: false },
                ),
            ],
            DestinationUpsertWithoutDelivery_destination_deliveryInput.prototype,
            'create',
        );
        DestinationUpsertWithoutDelivery_destination_deliveryInput = __decorate(
            [graphql_5.InputType()],
            DestinationUpsertWithoutDelivery_destination_deliveryInput,
        );
        return DestinationUpsertWithoutDelivery_destination_deliveryInput;
    })();
exports.DestinationUpsertWithoutDelivery_destination_deliveryInput =
    DestinationUpsertWithoutDelivery_destination_deliveryInput;
var DestinationWhereUniqueInput = /** @class */ (function () {
    function DestinationWhereUniqueInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        DestinationWhereUniqueInput.prototype,
        'id',
    );
    DestinationWhereUniqueInput = __decorate(
        [graphql_5.InputType()],
        DestinationWhereUniqueInput,
    );
    return DestinationWhereUniqueInput;
})();
exports.DestinationWhereUniqueInput = DestinationWhereUniqueInput;
var DestinationWhereInput = /** @class */ (function () {
    function DestinationWhereInput() {}
    DestinationWhereInput_1 = DestinationWhereInput;
    var DestinationWhereInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationWhereInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationWhereInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        DestinationWhereInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationWhereInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerRelationFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationWhereInput.prototype,
        'customer_destination_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationWhereInput.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DeliveryRelationFilter;
                },
                { nullable: true },
            ),
        ],
        DestinationWhereInput.prototype,
        'delivery_destination_delivery',
    );
    DestinationWhereInput = DestinationWhereInput_1 = __decorate(
        [graphql_5.InputType()],
        DestinationWhereInput,
    );
    return DestinationWhereInput;
})();
exports.DestinationWhereInput = DestinationWhereInput;
var Destination = /** @class */ (function () {
    function Destination() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_7.ID;
                },
                { nullable: false },
            ),
        ],
        Destination.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Customer;
                },
                { nullable: true },
            ),
        ],
        Destination.prototype,
        'customer_destination_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        Destination.prototype,
        'customer_number',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Delivery;
                },
                { nullable: true },
            ),
        ],
        Destination.prototype,
        'delivery_destination_delivery',
    );
    Destination = __decorate([graphql_2.ObjectType()], Destination);
    return Destination;
})();
exports.Destination = Destination;
var FindFirstDestinationArgs = /** @class */ (function () {
    function FindFirstDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstDestinationArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindFirstDestinationArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstDestinationArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstDestinationArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstDestinationArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindFirstDestinationArgs.prototype,
        'distinct',
    );
    FindFirstDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        FindFirstDestinationArgs,
    );
    return FindFirstDestinationArgs;
})();
exports.FindFirstDestinationArgs = FindFirstDestinationArgs;
var FindManyDestinationArgs = /** @class */ (function () {
    function FindManyDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindManyDestinationArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindManyDestinationArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindManyDestinationArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyDestinationArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyDestinationArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [DestinationScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindManyDestinationArgs.prototype,
        'distinct',
    );
    FindManyDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        FindManyDestinationArgs,
    );
    return FindManyDestinationArgs;
})();
exports.FindManyDestinationArgs = FindManyDestinationArgs;
var FindUniqueDestinationArgs = /** @class */ (function () {
    function FindUniqueDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        FindUniqueDestinationArgs.prototype,
        'where',
    );
    FindUniqueDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        FindUniqueDestinationArgs,
    );
    return FindUniqueDestinationArgs;
})();
exports.FindUniqueDestinationArgs = FindUniqueDestinationArgs;
var UpdateManyDestinationArgs = /** @class */ (function () {
    function UpdateManyDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateManyMutationInput;
                },
                { nullable: false },
            ),
        ],
        UpdateManyDestinationArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereInput;
                },
                { nullable: true },
            ),
        ],
        UpdateManyDestinationArgs.prototype,
        'where',
    );
    UpdateManyDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        UpdateManyDestinationArgs,
    );
    return UpdateManyDestinationArgs;
})();
exports.UpdateManyDestinationArgs = UpdateManyDestinationArgs;
var UpdateOneDestinationArgs = /** @class */ (function () {
    function UpdateOneDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneDestinationArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneDestinationArgs.prototype,
        'where',
    );
    UpdateOneDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        UpdateOneDestinationArgs,
    );
    return UpdateOneDestinationArgs;
})();
exports.UpdateOneDestinationArgs = UpdateOneDestinationArgs;
var UpsertOneDestinationArgs = /** @class */ (function () {
    function UpsertOneDestinationArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneDestinationArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationCreateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneDestinationArgs.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return DestinationUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneDestinationArgs.prototype,
        'update',
    );
    UpsertOneDestinationArgs = __decorate(
        [graphql_3.ArgsType()],
        UpsertOneDestinationArgs,
    );
    return UpsertOneDestinationArgs;
})();
exports.UpsertOneDestinationArgs = UpsertOneDestinationArgs;
var AffectedRows = /** @class */ (function () {
    function AffectedRows() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        AffectedRows.prototype,
        'count',
    );
    AffectedRows = __decorate([graphql_2.ObjectType()], AffectedRows);
    return AffectedRows;
})();
exports.AffectedRows = AffectedRows;
var NestedIntFilter = /** @class */ (function () {
    function NestedIntFilter() {}
    NestedIntFilter_1 = NestedIntFilter;
    var NestedIntFilter_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [graphql_4.Int];
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [graphql_4.Int];
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedIntFilter_1;
                },
                { nullable: true },
            ),
        ],
        NestedIntFilter.prototype,
        'not',
    );
    NestedIntFilter = NestedIntFilter_1 = __decorate(
        [graphql_5.InputType()],
        NestedIntFilter,
    );
    return NestedIntFilter;
})();
exports.NestedIntFilter = NestedIntFilter;
var NestedIntNullableFilter = /** @class */ (function () {
    function NestedIntNullableFilter() {}
    NestedIntNullableFilter_1 = NestedIntNullableFilter;
    var NestedIntNullableFilter_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [graphql_4.Int];
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [graphql_4.Int];
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedIntNullableFilter_1;
                },
                { nullable: true },
            ),
        ],
        NestedIntNullableFilter.prototype,
        'not',
    );
    NestedIntNullableFilter = NestedIntNullableFilter_1 = __decorate(
        [graphql_5.InputType()],
        NestedIntNullableFilter,
    );
    return NestedIntNullableFilter;
})();
exports.NestedIntNullableFilter = NestedIntNullableFilter;
var NestedStringFilter = /** @class */ (function () {
    function NestedStringFilter() {}
    NestedStringFilter_1 = NestedStringFilter;
    var NestedStringFilter_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringFilter_1;
                },
                { nullable: true },
            ),
        ],
        NestedStringFilter.prototype,
        'not',
    );
    NestedStringFilter = NestedStringFilter_1 = __decorate(
        [graphql_5.InputType()],
        NestedStringFilter,
    );
    return NestedStringFilter;
})();
exports.NestedStringFilter = NestedStringFilter;
var NestedStringNullableFilter = /** @class */ (function () {
    function NestedStringNullableFilter() {}
    NestedStringNullableFilter_1 = NestedStringNullableFilter;
    var NestedStringNullableFilter_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableFilter_1;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableFilter.prototype,
        'not',
    );
    NestedStringNullableFilter = NestedStringNullableFilter_1 = __decorate(
        [graphql_5.InputType()],
        NestedStringNullableFilter,
    );
    return NestedStringNullableFilter;
})();
exports.NestedStringNullableFilter = NestedStringNullableFilter;
var NestedStringNullableWithAggregatesFilter = /** @class */ (function () {
    function NestedStringNullableWithAggregatesFilter() {}
    NestedStringNullableWithAggregatesFilter_1 =
        NestedStringNullableWithAggregatesFilter;
    var NestedStringNullableWithAggregatesFilter_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableWithAggregatesFilter_1;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        'not',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedIntNullableFilter;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        NestedStringNullableWithAggregatesFilter.prototype,
        '_max',
    );
    NestedStringNullableWithAggregatesFilter =
        NestedStringNullableWithAggregatesFilter_1 = __decorate(
            [graphql_5.InputType()],
            NestedStringNullableWithAggregatesFilter,
        );
    return NestedStringNullableWithAggregatesFilter;
})();
exports.NestedStringNullableWithAggregatesFilter =
    NestedStringNullableWithAggregatesFilter;
var NestedStringWithAggregatesFilter = /** @class */ (function () {
    function NestedStringWithAggregatesFilter() {}
    NestedStringWithAggregatesFilter_1 = NestedStringWithAggregatesFilter;
    var NestedStringWithAggregatesFilter_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringWithAggregatesFilter_1;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        'not',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedIntFilter;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringFilter;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringFilter;
                },
                { nullable: true },
            ),
        ],
        NestedStringWithAggregatesFilter.prototype,
        '_max',
    );
    NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = __decorate(
        [graphql_5.InputType()],
        NestedStringWithAggregatesFilter,
    );
    return NestedStringWithAggregatesFilter;
})();
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
var NullableStringFieldUpdateOperationsInput = /** @class */ (function () {
    function NullableStringFieldUpdateOperationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        NullableStringFieldUpdateOperationsInput.prototype,
        'set',
    );
    NullableStringFieldUpdateOperationsInput = __decorate(
        [graphql_5.InputType()],
        NullableStringFieldUpdateOperationsInput,
    );
    return NullableStringFieldUpdateOperationsInput;
})();
exports.NullableStringFieldUpdateOperationsInput =
    NullableStringFieldUpdateOperationsInput;
var StringFieldUpdateOperationsInput = /** @class */ (function () {
    function StringFieldUpdateOperationsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFieldUpdateOperationsInput.prototype,
        'set',
    );
    StringFieldUpdateOperationsInput = __decorate(
        [graphql_5.InputType()],
        StringFieldUpdateOperationsInput,
    );
    return StringFieldUpdateOperationsInput;
})();
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput;
var StringFilter = /** @class */ (function () {
    function StringFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return QueryMode;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'mode',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringFilter;
                },
                { nullable: true },
            ),
        ],
        StringFilter.prototype,
        'not',
    );
    StringFilter = __decorate([graphql_5.InputType()], StringFilter);
    return StringFilter;
})();
exports.StringFilter = StringFilter;
var StringNullableFilter = /** @class */ (function () {
    function StringNullableFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return QueryMode;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'mode',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        StringNullableFilter.prototype,
        'not',
    );
    StringNullableFilter = __decorate([graphql_5.InputType()], StringNullableFilter);
    return StringNullableFilter;
})();
exports.StringNullableFilter = StringNullableFilter;
var StringNullableWithAggregatesFilter = /** @class */ (function () {
    function StringNullableWithAggregatesFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return QueryMode;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'mode',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        'not',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedIntNullableFilter;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        StringNullableWithAggregatesFilter.prototype,
        '_max',
    );
    StringNullableWithAggregatesFilter = __decorate(
        [graphql_5.InputType()],
        StringNullableWithAggregatesFilter,
    );
    return StringNullableWithAggregatesFilter;
})();
exports.StringNullableWithAggregatesFilter = StringNullableWithAggregatesFilter;
var StringWithAggregatesFilter = /** @class */ (function () {
    function StringWithAggregatesFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'equals',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'in',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [String];
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'notIn',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'lt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'lte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'gt',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'gte',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'contains',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'startsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'endsWith',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return QueryMode;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'mode',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        'not',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedIntFilter;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringFilter;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NestedStringFilter;
                },
                { nullable: true },
            ),
        ],
        StringWithAggregatesFilter.prototype,
        '_max',
    );
    StringWithAggregatesFilter = __decorate(
        [graphql_5.InputType()],
        StringWithAggregatesFilter,
    );
    return StringWithAggregatesFilter;
})();
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
var AggregateProfile = /** @class */ (function () {
    function AggregateProfile() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCountAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateProfile.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMinAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateProfile.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        AggregateProfile.prototype,
        '_max',
    );
    AggregateProfile = __decorate([graphql_2.ObjectType()], AggregateProfile);
    return AggregateProfile;
})();
exports.AggregateProfile = AggregateProfile;
var CreateManyProfileArgs = /** @class */ (function () {
    function CreateManyProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileCreateManyInput];
                },
                { nullable: false },
            ),
        ],
        CreateManyProfileArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        CreateManyProfileArgs.prototype,
        'skipDuplicates',
    );
    CreateManyProfileArgs = __decorate([graphql_3.ArgsType()], CreateManyProfileArgs);
    return CreateManyProfileArgs;
})();
exports.CreateManyProfileArgs = CreateManyProfileArgs;
var CreateOneProfileArgs = /** @class */ (function () {
    function CreateOneProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateInput;
                },
                { nullable: false },
            ),
        ],
        CreateOneProfileArgs.prototype,
        'data',
    );
    CreateOneProfileArgs = __decorate([graphql_3.ArgsType()], CreateOneProfileArgs);
    return CreateOneProfileArgs;
})();
exports.CreateOneProfileArgs = CreateOneProfileArgs;
var DeleteManyProfileArgs = /** @class */ (function () {
    function DeleteManyProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        DeleteManyProfileArgs.prototype,
        'where',
    );
    DeleteManyProfileArgs = __decorate([graphql_3.ArgsType()], DeleteManyProfileArgs);
    return DeleteManyProfileArgs;
})();
exports.DeleteManyProfileArgs = DeleteManyProfileArgs;
var DeleteOneProfileArgs = /** @class */ (function () {
    function DeleteOneProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        DeleteOneProfileArgs.prototype,
        'where',
    );
    DeleteOneProfileArgs = __decorate([graphql_3.ArgsType()], DeleteOneProfileArgs);
    return DeleteOneProfileArgs;
})();
exports.DeleteOneProfileArgs = DeleteOneProfileArgs;
var FindFirstProfileArgs = /** @class */ (function () {
    function FindFirstProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstProfileArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindFirstProfileArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindFirstProfileArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstProfileArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindFirstProfileArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindFirstProfileArgs.prototype,
        'distinct',
    );
    FindFirstProfileArgs = __decorate([graphql_3.ArgsType()], FindFirstProfileArgs);
    return FindFirstProfileArgs;
})();
exports.FindFirstProfileArgs = FindFirstProfileArgs;
var FindManyProfileArgs = /** @class */ (function () {
    function FindManyProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        FindManyProfileArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        FindManyProfileArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        FindManyProfileArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyProfileArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        FindManyProfileArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarFieldEnum];
                },
                { nullable: true },
            ),
        ],
        FindManyProfileArgs.prototype,
        'distinct',
    );
    FindManyProfileArgs = __decorate([graphql_3.ArgsType()], FindManyProfileArgs);
    return FindManyProfileArgs;
})();
exports.FindManyProfileArgs = FindManyProfileArgs;
var FindUniqueProfileArgs = /** @class */ (function () {
    function FindUniqueProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        FindUniqueProfileArgs.prototype,
        'where',
    );
    FindUniqueProfileArgs = __decorate([graphql_3.ArgsType()], FindUniqueProfileArgs);
    return FindUniqueProfileArgs;
})();
exports.FindUniqueProfileArgs = FindUniqueProfileArgs;
var ProfileAggregateArgs = /** @class */ (function () {
    function ProfileAggregateArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileOrderByWithRelationInput];
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        'cursor',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileAggregateArgs.prototype,
        '_max',
    );
    ProfileAggregateArgs = __decorate([graphql_3.ArgsType()], ProfileAggregateArgs);
    return ProfileAggregateArgs;
})();
exports.ProfileAggregateArgs = ProfileAggregateArgs;
var ProfileCountAggregateInput = /** @class */ (function () {
    function ProfileCountAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        ProfileCountAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        ProfileCountAggregateInput.prototype,
        'customer_numbner',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        ProfileCountAggregateInput.prototype,
        '_all',
    );
    ProfileCountAggregateInput = __decorate(
        [graphql_5.InputType()],
        ProfileCountAggregateInput,
    );
    return ProfileCountAggregateInput;
})();
exports.ProfileCountAggregateInput = ProfileCountAggregateInput;
var ProfileCountAggregate = /** @class */ (function () {
    function ProfileCountAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        ProfileCountAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        ProfileCountAggregate.prototype,
        'customer_numbner',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: false },
            ),
        ],
        ProfileCountAggregate.prototype,
        '_all',
    );
    ProfileCountAggregate = __decorate([graphql_2.ObjectType()], ProfileCountAggregate);
    return ProfileCountAggregate;
})();
exports.ProfileCountAggregate = ProfileCountAggregate;
var ProfileCountOrderByAggregateInput = /** @class */ (function () {
    function ProfileCountOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileCountOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileCountOrderByAggregateInput.prototype,
        'customer_numbner',
    );
    ProfileCountOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        ProfileCountOrderByAggregateInput,
    );
    return ProfileCountOrderByAggregateInput;
})();
exports.ProfileCountOrderByAggregateInput = ProfileCountOrderByAggregateInput;
var ProfileCreateManyCollector_profile_customerInputEnvelope =
    /** @class */ (function () {
        function ProfileCreateManyCollector_profile_customerInputEnvelope() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileCreateManyCollector_profile_customerInput];
                    },
                    { nullable: false },
                ),
            ],
            ProfileCreateManyCollector_profile_customerInputEnvelope.prototype,
            'data',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return Boolean;
                    },
                    { nullable: true },
                ),
            ],
            ProfileCreateManyCollector_profile_customerInputEnvelope.prototype,
            'skipDuplicates',
        );
        ProfileCreateManyCollector_profile_customerInputEnvelope = __decorate(
            [graphql_5.InputType()],
            ProfileCreateManyCollector_profile_customerInputEnvelope,
        );
        return ProfileCreateManyCollector_profile_customerInputEnvelope;
    })();
exports.ProfileCreateManyCollector_profile_customerInputEnvelope =
    ProfileCreateManyCollector_profile_customerInputEnvelope;
var ProfileCreateManyCollector_profile_customerInput = /** @class */ (function () {
    function ProfileCreateManyCollector_profile_customerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateManyCollector_profile_customerInput.prototype,
        'id',
    );
    ProfileCreateManyCollector_profile_customerInput = __decorate(
        [graphql_5.InputType()],
        ProfileCreateManyCollector_profile_customerInput,
    );
    return ProfileCreateManyCollector_profile_customerInput;
})();
exports.ProfileCreateManyCollector_profile_customerInput =
    ProfileCreateManyCollector_profile_customerInput;
var ProfileCreateManyInput = /** @class */ (function () {
    function ProfileCreateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateManyInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateManyInput.prototype,
        'customer_numbner',
    );
    ProfileCreateManyInput = __decorate(
        [graphql_5.InputType()],
        ProfileCreateManyInput,
    );
    return ProfileCreateManyInput;
})();
exports.ProfileCreateManyInput = ProfileCreateManyInput;
var ProfileCreateNestedManyWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileCreateNestedManyWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileCreateWithoutCollector_profile_customerInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileCreateOrConnectWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileCreateManyCollector_profile_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            ProfileCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'connect',
        );
        ProfileCreateNestedManyWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileCreateNestedManyWithoutCollector_profile_customerInput,
        );
        return ProfileCreateNestedManyWithoutCollector_profile_customerInput;
    })();
exports.ProfileCreateNestedManyWithoutCollector_profile_customerInput =
    ProfileCreateNestedManyWithoutCollector_profile_customerInput;
var ProfileCreateNestedOneWithoutCustomerInput = /** @class */ (function () {
    function ProfileCreateNestedOneWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateNestedOneWithoutCustomerInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateOrConnectWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateNestedOneWithoutCustomerInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateNestedOneWithoutCustomerInput.prototype,
        'connect',
    );
    ProfileCreateNestedOneWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileCreateNestedOneWithoutCustomerInput,
    );
    return ProfileCreateNestedOneWithoutCustomerInput;
})();
exports.ProfileCreateNestedOneWithoutCustomerInput =
    ProfileCreateNestedOneWithoutCustomerInput;
var ProfileCreateOrConnectWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileCreateOrConnectWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileCreateOrConnectWithoutCollector_profile_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileCreateWithoutCollector_profile_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileCreateOrConnectWithoutCollector_profile_customerInput.prototype,
            'create',
        );
        ProfileCreateOrConnectWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileCreateOrConnectWithoutCollector_profile_customerInput,
        );
        return ProfileCreateOrConnectWithoutCollector_profile_customerInput;
    })();
exports.ProfileCreateOrConnectWithoutCollector_profile_customerInput =
    ProfileCreateOrConnectWithoutCollector_profile_customerInput;
var ProfileCreateOrConnectWithoutCustomerInput = /** @class */ (function () {
    function ProfileCreateOrConnectWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        ProfileCreateOrConnectWithoutCustomerInput.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateWithoutCustomerInput;
                },
                { nullable: false },
            ),
        ],
        ProfileCreateOrConnectWithoutCustomerInput.prototype,
        'create',
    );
    ProfileCreateOrConnectWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileCreateOrConnectWithoutCustomerInput,
    );
    return ProfileCreateOrConnectWithoutCustomerInput;
})();
exports.ProfileCreateOrConnectWithoutCustomerInput =
    ProfileCreateOrConnectWithoutCustomerInput;
var ProfileCreateWithoutCollector_profile_customerInput = /** @class */ (function () {
    function ProfileCreateWithoutCollector_profile_customerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateWithoutCollector_profile_customerInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateNestedOneWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateWithoutCollector_profile_customerInput.prototype,
        'customer',
    );
    ProfileCreateWithoutCollector_profile_customerInput = __decorate(
        [graphql_5.InputType()],
        ProfileCreateWithoutCollector_profile_customerInput,
    );
    return ProfileCreateWithoutCollector_profile_customerInput;
})();
exports.ProfileCreateWithoutCollector_profile_customerInput =
    ProfileCreateWithoutCollector_profile_customerInput;
var ProfileCreateWithoutCustomerInput = /** @class */ (function () {
    function ProfileCreateWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateWithoutCustomerInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateNestedOneWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateWithoutCustomerInput.prototype,
        'collector_profile_customer',
    );
    ProfileCreateWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileCreateWithoutCustomerInput,
    );
    return ProfileCreateWithoutCustomerInput;
})();
exports.ProfileCreateWithoutCustomerInput = ProfileCreateWithoutCustomerInput;
var ProfileCreateInput = /** @class */ (function () {
    function ProfileCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateNestedOneWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateInput.prototype,
        'customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerCreateNestedOneWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileCreateInput.prototype,
        'collector_profile_customer',
    );
    ProfileCreateInput = __decorate([graphql_5.InputType()], ProfileCreateInput);
    return ProfileCreateInput;
})();
exports.ProfileCreateInput = ProfileCreateInput;
var ProfileGroupByArgs = /** @class */ (function () {
    function ProfileGroupByArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileOrderByWithAggregationInput];
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        'orderBy',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarFieldEnum];
                },
                { nullable: false },
            ),
        ],
        ProfileGroupByArgs.prototype,
        'by',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileScalarWhereWithAggregatesInput;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        'having',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        'take',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_4.Int;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        'skip',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCountAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMinAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMaxAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupByArgs.prototype,
        '_max',
    );
    ProfileGroupByArgs = __decorate([graphql_3.ArgsType()], ProfileGroupByArgs);
    return ProfileGroupByArgs;
})();
exports.ProfileGroupByArgs = ProfileGroupByArgs;
var ProfileGroupBy = /** @class */ (function () {
    function ProfileGroupBy() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        ProfileGroupBy.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupBy.prototype,
        'customer_numbner',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCountAggregate;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupBy.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMinAggregate;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupBy.prototype,
        '_min',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMaxAggregate;
                },
                { nullable: true },
            ),
        ],
        ProfileGroupBy.prototype,
        '_max',
    );
    ProfileGroupBy = __decorate([graphql_2.ObjectType()], ProfileGroupBy);
    return ProfileGroupBy;
})();
exports.ProfileGroupBy = ProfileGroupBy;
var ProfileListRelationFilter = /** @class */ (function () {
    function ProfileListRelationFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        ProfileListRelationFilter.prototype,
        'every',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        ProfileListRelationFilter.prototype,
        'some',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        ProfileListRelationFilter.prototype,
        'none',
    );
    ProfileListRelationFilter = __decorate(
        [graphql_5.InputType()],
        ProfileListRelationFilter,
    );
    return ProfileListRelationFilter;
})();
exports.ProfileListRelationFilter = ProfileListRelationFilter;
var ProfileMaxAggregateInput = /** @class */ (function () {
    function ProfileMaxAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        ProfileMaxAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        ProfileMaxAggregateInput.prototype,
        'customer_numbner',
    );
    ProfileMaxAggregateInput = __decorate(
        [graphql_5.InputType()],
        ProfileMaxAggregateInput,
    );
    return ProfileMaxAggregateInput;
})();
exports.ProfileMaxAggregateInput = ProfileMaxAggregateInput;
var ProfileMaxAggregate = /** @class */ (function () {
    function ProfileMaxAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileMaxAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileMaxAggregate.prototype,
        'customer_numbner',
    );
    ProfileMaxAggregate = __decorate([graphql_2.ObjectType()], ProfileMaxAggregate);
    return ProfileMaxAggregate;
})();
exports.ProfileMaxAggregate = ProfileMaxAggregate;
var ProfileMaxOrderByAggregateInput = /** @class */ (function () {
    function ProfileMaxOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileMaxOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileMaxOrderByAggregateInput.prototype,
        'customer_numbner',
    );
    ProfileMaxOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        ProfileMaxOrderByAggregateInput,
    );
    return ProfileMaxOrderByAggregateInput;
})();
exports.ProfileMaxOrderByAggregateInput = ProfileMaxOrderByAggregateInput;
var ProfileMinAggregateInput = /** @class */ (function () {
    function ProfileMinAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        ProfileMinAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Boolean;
                },
                { nullable: true },
            ),
        ],
        ProfileMinAggregateInput.prototype,
        'customer_numbner',
    );
    ProfileMinAggregateInput = __decorate(
        [graphql_5.InputType()],
        ProfileMinAggregateInput,
    );
    return ProfileMinAggregateInput;
})();
exports.ProfileMinAggregateInput = ProfileMinAggregateInput;
var ProfileMinAggregate = /** @class */ (function () {
    function ProfileMinAggregate() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileMinAggregate.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileMinAggregate.prototype,
        'customer_numbner',
    );
    ProfileMinAggregate = __decorate([graphql_2.ObjectType()], ProfileMinAggregate);
    return ProfileMinAggregate;
})();
exports.ProfileMinAggregate = ProfileMinAggregate;
var ProfileMinOrderByAggregateInput = /** @class */ (function () {
    function ProfileMinOrderByAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileMinOrderByAggregateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileMinOrderByAggregateInput.prototype,
        'customer_numbner',
    );
    ProfileMinOrderByAggregateInput = __decorate(
        [graphql_5.InputType()],
        ProfileMinOrderByAggregateInput,
    );
    return ProfileMinOrderByAggregateInput;
})();
exports.ProfileMinOrderByAggregateInput = ProfileMinOrderByAggregateInput;
var ProfileOrderByRelationAggregateInput = /** @class */ (function () {
    function ProfileOrderByRelationAggregateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByRelationAggregateInput.prototype,
        '_count',
    );
    ProfileOrderByRelationAggregateInput = __decorate(
        [graphql_5.InputType()],
        ProfileOrderByRelationAggregateInput,
    );
    return ProfileOrderByRelationAggregateInput;
})();
exports.ProfileOrderByRelationAggregateInput = ProfileOrderByRelationAggregateInput;
var ProfileOrderByWithAggregationInput = /** @class */ (function () {
    function ProfileOrderByWithAggregationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithAggregationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithAggregationInput.prototype,
        'customer_numbner',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCountOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithAggregationInput.prototype,
        '_count',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMaxOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithAggregationInput.prototype,
        '_max',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileMinOrderByAggregateInput;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithAggregationInput.prototype,
        '_min',
    );
    ProfileOrderByWithAggregationInput = __decorate(
        [graphql_5.InputType()],
        ProfileOrderByWithAggregationInput,
    );
    return ProfileOrderByWithAggregationInput;
})();
exports.ProfileOrderByWithAggregationInput = ProfileOrderByWithAggregationInput;
var ProfileOrderByWithRelationInput = /** @class */ (function () {
    function ProfileOrderByWithRelationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithRelationInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithRelationInput.prototype,
        'customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerOrderByWithRelationInput;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithRelationInput.prototype,
        'collector_profile_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return SortOrder;
                },
                { nullable: true },
            ),
        ],
        ProfileOrderByWithRelationInput.prototype,
        'customer_numbner',
    );
    ProfileOrderByWithRelationInput = __decorate(
        [graphql_5.InputType()],
        ProfileOrderByWithRelationInput,
    );
    return ProfileOrderByWithRelationInput;
})();
exports.ProfileOrderByWithRelationInput = ProfileOrderByWithRelationInput;
var ProfileRelationFilter = /** @class */ (function () {
    function ProfileRelationFilter() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        ProfileRelationFilter.prototype,
        'is',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        ProfileRelationFilter.prototype,
        'isNot',
    );
    ProfileRelationFilter = __decorate([graphql_5.InputType()], ProfileRelationFilter);
    return ProfileRelationFilter;
})();
exports.ProfileRelationFilter = ProfileRelationFilter;
var ProfileScalarWhereWithAggregatesInput = /** @class */ (function () {
    function ProfileScalarWhereWithAggregatesInput() {}
    ProfileScalarWhereWithAggregatesInput_1 = ProfileScalarWhereWithAggregatesInput;
    var ProfileScalarWhereWithAggregatesInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereWithAggregatesInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereWithAggregatesInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarWhereWithAggregatesInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereWithAggregatesInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereWithAggregatesInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableWithAggregatesFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereWithAggregatesInput.prototype,
        'customer_numbner',
    );
    ProfileScalarWhereWithAggregatesInput = ProfileScalarWhereWithAggregatesInput_1 =
        __decorate([graphql_5.InputType()], ProfileScalarWhereWithAggregatesInput);
    return ProfileScalarWhereWithAggregatesInput;
})();
exports.ProfileScalarWhereWithAggregatesInput = ProfileScalarWhereWithAggregatesInput;
var ProfileScalarWhereInput = /** @class */ (function () {
    function ProfileScalarWhereInput() {}
    ProfileScalarWhereInput_1 = ProfileScalarWhereInput;
    var ProfileScalarWhereInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileScalarWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileScalarWhereInput.prototype,
        'customer_numbner',
    );
    ProfileScalarWhereInput = ProfileScalarWhereInput_1 = __decorate(
        [graphql_5.InputType()],
        ProfileScalarWhereInput,
    );
    return ProfileScalarWhereInput;
})();
exports.ProfileScalarWhereInput = ProfileScalarWhereInput;
var ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileCreateWithoutCollector_profile_customerInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileCreateOrConnectWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileCreateManyCollector_profile_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput.prototype,
            'connect',
        );
        ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput =
            __decorate(
                [graphql_5.InputType()],
                ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput,
            );
        return ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput;
    })();
exports.ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput =
    ProfileUncheckedCreateNestedManyWithoutCollector_profile_customerInput;
var ProfileUncheckedCreateWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUncheckedCreateWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return String;
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedCreateWithoutCollector_profile_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerUncheckedCreateNestedOneWithoutProfileInput;
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedCreateWithoutCollector_profile_customerInput.prototype,
            'customer',
        );
        ProfileUncheckedCreateWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileUncheckedCreateWithoutCollector_profile_customerInput,
        );
        return ProfileUncheckedCreateWithoutCollector_profile_customerInput;
    })();
exports.ProfileUncheckedCreateWithoutCollector_profile_customerInput =
    ProfileUncheckedCreateWithoutCollector_profile_customerInput;
var ProfileUncheckedCreateWithoutCustomerInput = /** @class */ (function () {
    function ProfileUncheckedCreateWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedCreateWithoutCustomerInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedCreateWithoutCustomerInput.prototype,
        'customer_numbner',
    );
    ProfileUncheckedCreateWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileUncheckedCreateWithoutCustomerInput,
    );
    return ProfileUncheckedCreateWithoutCustomerInput;
})();
exports.ProfileUncheckedCreateWithoutCustomerInput =
    ProfileUncheckedCreateWithoutCustomerInput;
var ProfileUncheckedCreateInput = /** @class */ (function () {
    function ProfileUncheckedCreateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedCreateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedCreateInput.prototype,
        'customer_numbner',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUncheckedCreateNestedOneWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedCreateInput.prototype,
        'customer',
    );
    ProfileUncheckedCreateInput = __decorate(
        [graphql_5.InputType()],
        ProfileUncheckedCreateInput,
    );
    return ProfileUncheckedCreateInput;
})();
exports.ProfileUncheckedCreateInput = ProfileUncheckedCreateInput;
var ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileCreateWithoutCollector_profile_customerInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileCreateOrConnectWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'upsert',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileCreateManyCollector_profile_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'connect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'set',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'disconnect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'delete',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'updateMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileScalarWhereInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput.prototype,
            'deleteMany',
        );
        ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput,
        );
        return ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput;
    })();
exports.ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput =
    ProfileUncheckedUpdateManyWithoutCollector_profile_customerInput;
var ProfileUncheckedUpdateManyWithoutCollectorsInput = /** @class */ (function () {
    function ProfileUncheckedUpdateManyWithoutCollectorsInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateManyWithoutCollectorsInput.prototype,
        'id',
    );
    ProfileUncheckedUpdateManyWithoutCollectorsInput = __decorate(
        [graphql_5.InputType()],
        ProfileUncheckedUpdateManyWithoutCollectorsInput,
    );
    return ProfileUncheckedUpdateManyWithoutCollectorsInput;
})();
exports.ProfileUncheckedUpdateManyWithoutCollectorsInput =
    ProfileUncheckedUpdateManyWithoutCollectorsInput;
var ProfileUncheckedUpdateManyInput = /** @class */ (function () {
    function ProfileUncheckedUpdateManyInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateManyInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NullableStringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateManyInput.prototype,
        'customer_numbner',
    );
    ProfileUncheckedUpdateManyInput = __decorate(
        [graphql_5.InputType()],
        ProfileUncheckedUpdateManyInput,
    );
    return ProfileUncheckedUpdateManyInput;
})();
exports.ProfileUncheckedUpdateManyInput = ProfileUncheckedUpdateManyInput;
var ProfileUncheckedUpdateWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUncheckedUpdateWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return StringFieldUpdateOperationsInput;
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateWithoutCollector_profile_customerInput.prototype,
            'id',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return CustomerUncheckedUpdateOneWithoutProfileInput;
                    },
                    { nullable: true },
                ),
            ],
            ProfileUncheckedUpdateWithoutCollector_profile_customerInput.prototype,
            'customer',
        );
        ProfileUncheckedUpdateWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileUncheckedUpdateWithoutCollector_profile_customerInput,
        );
        return ProfileUncheckedUpdateWithoutCollector_profile_customerInput;
    })();
exports.ProfileUncheckedUpdateWithoutCollector_profile_customerInput =
    ProfileUncheckedUpdateWithoutCollector_profile_customerInput;
var ProfileUncheckedUpdateWithoutCustomerInput = /** @class */ (function () {
    function ProfileUncheckedUpdateWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateWithoutCustomerInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NullableStringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateWithoutCustomerInput.prototype,
        'customer_numbner',
    );
    ProfileUncheckedUpdateWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileUncheckedUpdateWithoutCustomerInput,
    );
    return ProfileUncheckedUpdateWithoutCustomerInput;
})();
exports.ProfileUncheckedUpdateWithoutCustomerInput =
    ProfileUncheckedUpdateWithoutCustomerInput;
var ProfileUncheckedUpdateInput = /** @class */ (function () {
    function ProfileUncheckedUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return NullableStringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateInput.prototype,
        'customer_numbner',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUncheckedUpdateOneWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUncheckedUpdateInput.prototype,
        'customer',
    );
    ProfileUncheckedUpdateInput = __decorate(
        [graphql_5.InputType()],
        ProfileUncheckedUpdateInput,
    );
    return ProfileUncheckedUpdateInput;
})();
exports.ProfileUncheckedUpdateInput = ProfileUncheckedUpdateInput;
var ProfileUpdateManyMutationInput = /** @class */ (function () {
    function ProfileUpdateManyMutationInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateManyMutationInput.prototype,
        'id',
    );
    ProfileUpdateManyMutationInput = __decorate(
        [graphql_5.InputType()],
        ProfileUpdateManyMutationInput,
    );
    return ProfileUpdateManyMutationInput;
})();
exports.ProfileUpdateManyMutationInput = ProfileUpdateManyMutationInput;
var ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileScalarWhereInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileUpdateManyMutationInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput.prototype,
            'data',
        );
        ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput,
        );
        return ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput;
    })();
exports.ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput =
    ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput;
var ProfileUpdateManyWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUpdateManyWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileCreateWithoutCollector_profile_customerInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'create',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileCreateOrConnectWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'connectOrCreate',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'upsert',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileCreateManyCollector_profile_customerInputEnvelope;
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'createMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'connect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'set',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'disconnect',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileWhereUniqueInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'delete',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [
                            ProfileUpdateManyWithWhereWithoutCollector_profile_customerInput,
                        ];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'updateMany',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return [ProfileScalarWhereInput];
                    },
                    { nullable: true },
                ),
            ],
            ProfileUpdateManyWithoutCollector_profile_customerInput.prototype,
            'deleteMany',
        );
        ProfileUpdateManyWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileUpdateManyWithoutCollector_profile_customerInput,
        );
        return ProfileUpdateManyWithoutCollector_profile_customerInput;
    })();
exports.ProfileUpdateManyWithoutCollector_profile_customerInput =
    ProfileUpdateManyWithoutCollector_profile_customerInput;
var ProfileUpdateOneRequiredWithoutCustomerInput = /** @class */ (function () {
    function ProfileUpdateOneRequiredWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateOneRequiredWithoutCustomerInput.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateOrConnectWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateOneRequiredWithoutCustomerInput.prototype,
        'connectOrCreate',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpsertWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateOneRequiredWithoutCustomerInput.prototype,
        'upsert',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateOneRequiredWithoutCustomerInput.prototype,
        'connect',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateWithoutCustomerInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateOneRequiredWithoutCustomerInput.prototype,
        'update',
    );
    ProfileUpdateOneRequiredWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileUpdateOneRequiredWithoutCustomerInput,
    );
    return ProfileUpdateOneRequiredWithoutCustomerInput;
})();
exports.ProfileUpdateOneRequiredWithoutCustomerInput =
    ProfileUpdateOneRequiredWithoutCustomerInput;
var ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileUpdateWithoutCollector_profile_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput.prototype,
            'data',
        );
        ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput,
        );
        return ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput;
    })();
exports.ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput =
    ProfileUpdateWithWhereUniqueWithoutCollector_profile_customerInput;
var ProfileUpdateWithoutCollector_profile_customerInput = /** @class */ (function () {
    function ProfileUpdateWithoutCollector_profile_customerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateWithoutCollector_profile_customerInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateOneWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateWithoutCollector_profile_customerInput.prototype,
        'customer',
    );
    ProfileUpdateWithoutCollector_profile_customerInput = __decorate(
        [graphql_5.InputType()],
        ProfileUpdateWithoutCollector_profile_customerInput,
    );
    return ProfileUpdateWithoutCollector_profile_customerInput;
})();
exports.ProfileUpdateWithoutCollector_profile_customerInput =
    ProfileUpdateWithoutCollector_profile_customerInput;
var ProfileUpdateWithoutCustomerInput = /** @class */ (function () {
    function ProfileUpdateWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateWithoutCustomerInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateOneWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateWithoutCustomerInput.prototype,
        'collector_profile_customer',
    );
    ProfileUpdateWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileUpdateWithoutCustomerInput,
    );
    return ProfileUpdateWithoutCustomerInput;
})();
exports.ProfileUpdateWithoutCustomerInput = ProfileUpdateWithoutCustomerInput;
var ProfileUpdateInput = /** @class */ (function () {
    function ProfileUpdateInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFieldUpdateOperationsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateOneWithoutProfileInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateInput.prototype,
        'customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerUpdateOneWithoutCollectorsInput;
                },
                { nullable: true },
            ),
        ],
        ProfileUpdateInput.prototype,
        'collector_profile_customer',
    );
    ProfileUpdateInput = __decorate([graphql_5.InputType()], ProfileUpdateInput);
    return ProfileUpdateInput;
})();
exports.ProfileUpdateInput = ProfileUpdateInput;
var ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput =
    /** @class */ (function () {
        function ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput() {}
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileWhereUniqueInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput.prototype,
            'where',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileUpdateWithoutCollector_profile_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput.prototype,
            'update',
        );
        __decorate(
            [
                graphql_1.Field(
                    function () {
                        return ProfileCreateWithoutCollector_profile_customerInput;
                    },
                    { nullable: false },
                ),
            ],
            ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput.prototype,
            'create',
        );
        ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput = __decorate(
            [graphql_5.InputType()],
            ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput,
        );
        return ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput;
    })();
exports.ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput =
    ProfileUpsertWithWhereUniqueWithoutCollector_profile_customerInput;
var ProfileUpsertWithoutCustomerInput = /** @class */ (function () {
    function ProfileUpsertWithoutCustomerInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateWithoutCustomerInput;
                },
                { nullable: false },
            ),
        ],
        ProfileUpsertWithoutCustomerInput.prototype,
        'update',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateWithoutCustomerInput;
                },
                { nullable: false },
            ),
        ],
        ProfileUpsertWithoutCustomerInput.prototype,
        'create',
    );
    ProfileUpsertWithoutCustomerInput = __decorate(
        [graphql_5.InputType()],
        ProfileUpsertWithoutCustomerInput,
    );
    return ProfileUpsertWithoutCustomerInput;
})();
exports.ProfileUpsertWithoutCustomerInput = ProfileUpsertWithoutCustomerInput;
var ProfileWhereUniqueInput = /** @class */ (function () {
    function ProfileWhereUniqueInput() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: false },
            ),
        ],
        ProfileWhereUniqueInput.prototype,
        'id',
    );
    ProfileWhereUniqueInput = __decorate(
        [graphql_5.InputType()],
        ProfileWhereUniqueInput,
    );
    return ProfileWhereUniqueInput;
})();
exports.ProfileWhereUniqueInput = ProfileWhereUniqueInput;
var ProfileWhereInput = /** @class */ (function () {
    function ProfileWhereInput() {}
    ProfileWhereInput_1 = ProfileWhereInput;
    var ProfileWhereInput_1;
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileWhereInput.prototype,
        'AND',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileWhereInput.prototype,
        'OR',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return [ProfileWhereInput_1];
                },
                { nullable: true },
            ),
        ],
        ProfileWhereInput.prototype,
        'NOT',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileWhereInput.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerRelationFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileWhereInput.prototype,
        'customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return CustomerRelationFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileWhereInput.prototype,
        'collector_profile_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return StringNullableFilter;
                },
                { nullable: true },
            ),
        ],
        ProfileWhereInput.prototype,
        'customer_numbner',
    );
    ProfileWhereInput = ProfileWhereInput_1 = __decorate(
        [graphql_5.InputType()],
        ProfileWhereInput,
    );
    return ProfileWhereInput;
})();
exports.ProfileWhereInput = ProfileWhereInput;
var Profile = /** @class */ (function () {
    function Profile() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return graphql_7.ID;
                },
                { nullable: false },
            ),
        ],
        Profile.prototype,
        'id',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Customer;
                },
                { nullable: true },
            ),
        ],
        Profile.prototype,
        'customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return Customer;
                },
                { nullable: true },
            ),
        ],
        Profile.prototype,
        'collector_profile_customer',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return String;
                },
                { nullable: true },
            ),
        ],
        Profile.prototype,
        'customer_numbner',
    );
    Profile = __decorate([graphql_2.ObjectType()], Profile);
    return Profile;
})();
exports.Profile = Profile;
var UpdateManyProfileArgs = /** @class */ (function () {
    function UpdateManyProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateManyMutationInput;
                },
                { nullable: false },
            ),
        ],
        UpdateManyProfileArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereInput;
                },
                { nullable: true },
            ),
        ],
        UpdateManyProfileArgs.prototype,
        'where',
    );
    UpdateManyProfileArgs = __decorate([graphql_3.ArgsType()], UpdateManyProfileArgs);
    return UpdateManyProfileArgs;
})();
exports.UpdateManyProfileArgs = UpdateManyProfileArgs;
var UpdateOneProfileArgs = /** @class */ (function () {
    function UpdateOneProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneProfileArgs.prototype,
        'data',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpdateOneProfileArgs.prototype,
        'where',
    );
    UpdateOneProfileArgs = __decorate([graphql_3.ArgsType()], UpdateOneProfileArgs);
    return UpdateOneProfileArgs;
})();
exports.UpdateOneProfileArgs = UpdateOneProfileArgs;
var UpsertOneProfileArgs = /** @class */ (function () {
    function UpsertOneProfileArgs() {}
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileWhereUniqueInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneProfileArgs.prototype,
        'where',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileCreateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneProfileArgs.prototype,
        'create',
    );
    __decorate(
        [
            graphql_1.Field(
                function () {
                    return ProfileUpdateInput;
                },
                { nullable: false },
            ),
        ],
        UpsertOneProfileArgs.prototype,
        'update',
    );
    UpsertOneProfileArgs = __decorate([graphql_3.ArgsType()], UpsertOneProfileArgs);
    return UpsertOneProfileArgs;
})();
exports.UpsertOneProfileArgs = UpsertOneProfileArgs;
