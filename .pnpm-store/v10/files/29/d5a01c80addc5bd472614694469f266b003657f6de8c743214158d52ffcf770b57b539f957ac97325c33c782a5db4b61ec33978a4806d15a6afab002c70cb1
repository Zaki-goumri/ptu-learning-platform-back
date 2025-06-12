/**
 * Security Scheme Object
 *
 * Defines a security scheme that can be used by the operations.
 *
 * Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query
 * parameter), mutual TLS (use of a client certificate), OAuth2's common flows (implicit, password, client credentials
 * and authorization code) as defined in RFC6749, and [[OpenID-Connect-Core]]. Please note that as of 2020, the implicit
 * flow is about to be deprecated by OAuth 2.0 Security Best Current Practice. Recommended for most use cases is
 * Authorization Code Grant flow with PKCE.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#security-scheme-object
 */
export declare const SecuritySchemeObjectSchema: import("zod").ZodUnion<[import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"apiKey">;
    name: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    in: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<["query", "header", "cookie"]>>>>;
}>, "strip", import("zod").ZodTypeAny, {
    name: string;
    in: "query" | "header" | "cookie";
    type: "apiKey";
    description?: string | undefined;
}, {
    type: "apiKey";
    description?: string | undefined;
    name?: string | undefined;
    in?: unknown;
}>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"http">;
    scheme: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodEnum<["basic", "bearer"]>>>>;
    bearerFormat: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"JWT">, import("zod").ZodLiteral<"bearer">, import("zod").ZodString]>>;
}>, "strip", import("zod").ZodTypeAny, {
    type: "http";
    scheme: "basic" | "bearer";
    description?: string | undefined;
    bearerFormat?: string | undefined;
}, {
    type: "http";
    description?: string | undefined;
    scheme?: string | undefined;
    bearerFormat?: string | undefined;
}>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"mutualTLS">;
}>, "strip", import("zod").ZodTypeAny, {
    type: "mutualTLS";
    description?: string | undefined;
}, {
    type: "mutualTLS";
    description?: string | undefined;
}>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"oauth2">;
    flows: import("zod").ZodObject<{
        implicit: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"implicit">>;
            authorizationUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
        }>>>;
        password: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"password">>;
            tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        }>>>;
        clientCredentials: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"clientCredentials">>;
            tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        }>>>;
        authorizationCode: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"authorizationCode">>;
            authorizationUrl: import("zod").ZodDefault<import("zod").ZodString>;
            tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            tokenUrl: string;
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
            tokenUrl?: string | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        implicit?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        password?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            tokenUrl: string;
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
    }, {
        implicit?: {
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
        } | undefined;
        password?: {
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
            tokenUrl?: string | undefined;
        } | undefined;
    }>;
}>, "strip", import("zod").ZodTypeAny, {
    type: "oauth2";
    flows: {
        implicit?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        password?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            tokenUrl: string;
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
}, {
    type: "oauth2";
    flows: {
        implicit?: {
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
        } | undefined;
        password?: {
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
            tokenUrl?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
}>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"openIdConnect">;
    openIdConnectUrl: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}>, "strip", import("zod").ZodTypeAny, {
    type: "openIdConnect";
    openIdConnectUrl: string;
    description?: string | undefined;
}, {
    type: "openIdConnect";
    description?: string | undefined;
    openIdConnectUrl?: string | undefined;
}>]>;
export declare const ApiKeyInValues: readonly ["query", "header", "cookie"];
export declare const ApiKeySchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"apiKey">;
    name: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    in: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<["query", "header", "cookie"]>>>>;
}>, "strip", import("zod").ZodTypeAny, {
    name: string;
    in: "query" | "header" | "cookie";
    type: "apiKey";
    description?: string | undefined;
}, {
    type: "apiKey";
    description?: string | undefined;
    name?: string | undefined;
    in?: unknown;
}>;
export declare const HttpSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"http">;
    scheme: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodEnum<["basic", "bearer"]>>>>;
    bearerFormat: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"JWT">, import("zod").ZodLiteral<"bearer">, import("zod").ZodString]>>;
}>, "strip", import("zod").ZodTypeAny, {
    type: "http";
    scheme: "basic" | "bearer";
    description?: string | undefined;
    bearerFormat?: string | undefined;
}, {
    type: "http";
    description?: string | undefined;
    scheme?: string | undefined;
    bearerFormat?: string | undefined;
}>;
export declare const MutualTlsSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"mutualTLS">;
}>, "strip", import("zod").ZodTypeAny, {
    type: "mutualTLS";
    description?: string | undefined;
}, {
    type: "mutualTLS";
    description?: string | undefined;
}>;
export declare const OpenIdConnectSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"openIdConnect">;
    openIdConnectUrl: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}>, "strip", import("zod").ZodTypeAny, {
    type: "openIdConnect";
    openIdConnectUrl: string;
    description?: string | undefined;
}, {
    type: "openIdConnect";
    description?: string | undefined;
    openIdConnectUrl?: string | undefined;
}>;
export declare const OAuthFlowsObjectSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    type: import("zod").ZodLiteral<"oauth2">;
    flows: import("zod").ZodObject<{
        implicit: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"implicit">>;
            authorizationUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
        }>>>;
        password: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"password">>;
            tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        }>>>;
        clientCredentials: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"clientCredentials">>;
            tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        }>>>;
        authorizationCode: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
            scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
        }, {
            type: import("zod").ZodOptional<import("zod").ZodLiteral<"authorizationCode">>;
            authorizationUrl: import("zod").ZodDefault<import("zod").ZodString>;
            tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            tokenUrl: string;
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
        }, {
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
            tokenUrl?: string | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        implicit?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        password?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            tokenUrl: string;
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
    }, {
        implicit?: {
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
        } | undefined;
        password?: {
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
            tokenUrl?: string | undefined;
        } | undefined;
    }>;
}>, "strip", import("zod").ZodTypeAny, {
    type: "oauth2";
    flows: {
        implicit?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        password?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            scopes: Record<string, string | undefined>;
            tokenUrl: string;
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            scopes: Record<string, string | undefined>;
            authorizationUrl: string;
            tokenUrl: string;
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
}, {
    type: "oauth2";
    flows: {
        implicit?: {
            type?: "implicit" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
        } | undefined;
        password?: {
            type?: "password" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        clientCredentials?: {
            type?: "clientCredentials" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            tokenUrl?: string | undefined;
        } | undefined;
        authorizationCode?: {
            type?: "authorizationCode" | undefined;
            refreshUrl?: string | undefined;
            scopes?: unknown;
            authorizationUrl?: string | undefined;
            tokenUrl?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
}>;
export declare const OAuthFlowObjectSchema: import("zod").ZodObject<{
    refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
    scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
}, "strip", import("zod").ZodTypeAny, {
    scopes: Record<string, string | undefined>;
    refreshUrl?: string | undefined;
}, {
    refreshUrl?: string | undefined;
    scopes?: unknown;
}>;
export declare const AuthorizationCodeFlowSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
    scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
}, {
    type: import("zod").ZodOptional<import("zod").ZodLiteral<"authorizationCode">>;
    authorizationUrl: import("zod").ZodDefault<import("zod").ZodString>;
    tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
}>, "strip", import("zod").ZodTypeAny, {
    scopes: Record<string, string | undefined>;
    authorizationUrl: string;
    tokenUrl: string;
    type?: "authorizationCode" | undefined;
    refreshUrl?: string | undefined;
}, {
    type?: "authorizationCode" | undefined;
    refreshUrl?: string | undefined;
    scopes?: unknown;
    authorizationUrl?: string | undefined;
    tokenUrl?: string | undefined;
}>;
export declare const ClientCredentialsFlowSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
    scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
}, {
    type: import("zod").ZodOptional<import("zod").ZodLiteral<"clientCredentials">>;
    tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
}>, "strip", import("zod").ZodTypeAny, {
    scopes: Record<string, string | undefined>;
    tokenUrl: string;
    type?: "clientCredentials" | undefined;
    refreshUrl?: string | undefined;
}, {
    type?: "clientCredentials" | undefined;
    refreshUrl?: string | undefined;
    scopes?: unknown;
    tokenUrl?: string | undefined;
}>;
export declare const ImplicitFlowSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
    scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
}, {
    type: import("zod").ZodOptional<import("zod").ZodLiteral<"implicit">>;
    authorizationUrl: import("zod").ZodDefault<import("zod").ZodString>;
}>, "strip", import("zod").ZodTypeAny, {
    scopes: Record<string, string | undefined>;
    authorizationUrl: string;
    type?: "implicit" | undefined;
    refreshUrl?: string | undefined;
}, {
    type?: "implicit" | undefined;
    refreshUrl?: string | undefined;
    scopes?: unknown;
    authorizationUrl?: string | undefined;
}>;
export declare const PasswordFlowSchema: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    refreshUrl: import("zod").ZodOptional<import("zod").ZodString>;
    scopes: import("zod").ZodCatch<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodString>>>>>;
}, {
    type: import("zod").ZodOptional<import("zod").ZodLiteral<"password">>;
    tokenUrl: import("zod").ZodDefault<import("zod").ZodString>;
}>, "strip", import("zod").ZodTypeAny, {
    scopes: Record<string, string | undefined>;
    tokenUrl: string;
    type?: "password" | undefined;
    refreshUrl?: string | undefined;
}, {
    type?: "password" | undefined;
    refreshUrl?: string | undefined;
    scopes?: unknown;
    tokenUrl?: string | undefined;
}>;
//# sourceMappingURL=security-scheme-object.d.ts.map