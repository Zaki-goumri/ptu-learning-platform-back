import { describe, expect, it } from "vitest";
import { SecuritySchemeObjectSchema } from "../unprocessed/security-scheme-object.js";
describe("security-scheme-object", () => {
  describe("SecuritySchemeObjectSchema", () => {
    describe("Security Scheme Object Examples", () => {
      it("Basic Authentication Example", () => {
        const result = SecuritySchemeObjectSchema.parse({
          type: "http",
          scheme: "basic"
        });
        expect(result).toEqual({
          type: "http",
          scheme: "basic"
        });
      });
      it("API Key Example", () => {
        const result = SecuritySchemeObjectSchema.parse({
          type: "apiKey",
          name: "api-key",
          in: "header"
        });
        expect(result).toEqual({
          type: "apiKey",
          name: "api-key",
          in: "header"
        });
      });
      it("JWT Bearer Example", () => {
        const result = SecuritySchemeObjectSchema.parse({
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        });
        expect(result).toEqual({
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        });
      });
      it("MutualTLS Example", () => {
        const result = SecuritySchemeObjectSchema.parse({
          type: "mutualTLS",
          description: "Cert must be signed by example.com CA"
        });
        expect(result).toEqual({
          type: "mutualTLS",
          description: "Cert must be signed by example.com CA"
        });
      });
      it("Implicit OAuth2 Example", () => {
        const result = SecuritySchemeObjectSchema.parse({
          type: "oauth2",
          flows: {
            implicit: {
              authorizationUrl: "https://example.com/api/oauth/dialog",
              scopes: {
                "write:pets": "modify pets in your account",
                "read:pets": "read your pets"
              }
            }
          }
        });
        expect(result).toEqual({
          type: "oauth2",
          flows: {
            implicit: {
              authorizationUrl: "https://example.com/api/oauth/dialog",
              scopes: {
                "write:pets": "modify pets in your account",
                "read:pets": "read your pets"
              }
            }
          }
        });
      });
    });
  });
  describe("OAuth Flow Object Example", () => {
    it("Implicit Flow", () => {
      const result = SecuritySchemeObjectSchema.parse({
        type: "oauth2",
        flows: {
          implicit: {
            authorizationUrl: "https://example.com/api/oauth/dialog",
            scopes: {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          },
          authorizationCode: {
            authorizationUrl: "https://example.com/api/oauth/dialog",
            tokenUrl: "https://example.com/api/oauth/token",
            scopes: {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        }
      });
      expect(result).toEqual({
        type: "oauth2",
        flows: {
          implicit: {
            authorizationUrl: "https://example.com/api/oauth/dialog",
            scopes: {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          },
          authorizationCode: {
            authorizationUrl: "https://example.com/api/oauth/dialog",
            tokenUrl: "https://example.com/api/oauth/token",
            scopes: {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        }
      });
    });
  });
});
//# sourceMappingURL=security-scheme-object.test.js.map
