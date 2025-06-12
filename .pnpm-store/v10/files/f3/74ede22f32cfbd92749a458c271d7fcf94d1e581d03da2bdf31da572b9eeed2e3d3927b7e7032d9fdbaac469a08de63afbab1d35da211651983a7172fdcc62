import { safeParseJSON } from './filter.utils.js';
export const JSONParser = {
    isParserForType: (filter) => ['boolean', 'number', 'float', 'object', 'array'].includes(filter.property.type()),
    parse: (filter, fieldKey) => ({
        filterKey: fieldKey,
        filterValue: safeParseJSON(filter.value),
    }),
};
//# sourceMappingURL=json-filter.parser.js.map