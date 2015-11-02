schemas = {};

schemas['config'] = {
    "details.1" : require(__dirname + "/config/details.1"),
    "details_edit.1" : require(__dirname + "/config/details_edit.1"),
    "infographics.1" : require(__dirname + "/config/infographics.1"),
    "list.1" : require(__dirname + "/config/list.1"),
    "list_filters.1" : require(__dirname + "/config/list_filters.1"),
    "public_api.1" : require(__dirname + "/config/public_api.1"),
    "system.1" : require(__dirname + "/config/system.1")
};

schemas['config-stubs'] = {
    "details.1" : require(__dirname + "/config-stubs/details.1"),
    "details_edit.1" : require(__dirname + "/config-stubs/details_edit.1"),
    "infographics.1" : require(__dirname + "/config-stubs/infographics.1"),
    "list.1" : require(__dirname + "/config-stubs/list.1"),
    "list_filters.1" : require(__dirname + "/config-stubs/list_filters.1"),
    "public_api.1" : require(__dirname + "/config-stubs/public_api.1"),
    "system.1" : require(__dirname + "/config-stubs/system.1")
};

schemas['core'] = {
    "document_change_suggestion.1" : require(__dirname + "/core/document_change_suggestion.1"),
    "document_state.1" : require(__dirname + "/core/document_state.1"),
    "feature_change_document_state.1" : require(__dirname + "/core/feature_change_document_state.1"),
    "feature_generic.1" : require(__dirname + "/core/feature_generic.1"),
    "schema.4" : require(__dirname + "/core/schema.4"),
    "schema_field.1" : require(__dirname + "/core/schema_field.1"),
    "user.1" : require(__dirname + "/core/user.1"),
    "user_role.1" : require(__dirname + "/core/user_role.1"),
    "user_role_feature_set.1" : require(__dirname + "/core/user_role_feature_set.1")
};

schemas['dictionary'] = {
    "date_time.1" : require(__dirname + "/dictionary/date_time.1"),
    "location.1" : require(__dirname + "/dictionary/location.1"),
    "organization.1" : require(__dirname + "/dictionary/organization.1"),
    "person.1" : require(__dirname + "/dictionary/person.1")
};

schemas['test'] = {};

schemas['test']['config'] = {
    "details.1" : require(__dirname + "/config/details.1"),
    "details_edit.1" : require(__dirname + "/config/details_edit.1"),
    "infographics.1" : require(__dirname + "/config/infographics.1"),
    "list.1" : require(__dirname + "/config/list.1"),
    "list_filters.1" : require(__dirname + "/config/list_filters.1"),
    "public_api.1" : require(__dirname + "/config/public_api.1"),
    "system.1" : require(__dirname + "/config/system.1")
};

schemas['test']['core'] = {
    "document_change_suggestion.1" : require(__dirname + "/core/document_change_suggestion.1"),
    "document_state.1" : require(__dirname + "/core/document_state.1"),
    "feature_change_document_state.1" : require(__dirname + "/core/feature_change_document_state.1"),
    "feature_generic.1" : require(__dirname + "/core/feature_generic.1"),
    "schema.4" : require(__dirname + "/core/schema.4"),
    "schema_field.1" : require(__dirname + "/core/schema_field.1"),
    "user.1" : require(__dirname + "/core/user.1"),
    "user_role.1" : require(__dirname + "/core/user_role.1"),
    "user_role_feature_set.1" : require(__dirname + "/core/user_role_feature_set.1")
};

module.exports = schemas;