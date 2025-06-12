import { describe, expect, it } from "vitest";
import { PathItemObjectSchema } from "../unprocessed/path-item-object.js";
describe("path-item", () => {
  describe("PathItemObjectSchema", () => {
    it("Path Item Object Example", () => {
      const result = PathItemObjectSchema.parse({
        get: {
          description: "Returns pets based on ID",
          summary: "Find pets by ID",
          operationId: "getPetsById",
          responses: {
            200: {
              description: "pet response",
              content: {
                "*/*": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Pet"
                    }
                  }
                }
              }
            },
            default: {
              description: "error payload",
              content: {
                "text/html": {
                  schema: {
                    $ref: "#/components/schemas/ErrorModel"
                  }
                }
              }
            }
          }
        },
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of pet to use",
            required: true,
            schema: {
              type: "array",
              items: {
                type: "string"
              }
            },
            style: "simple"
          }
        ]
      });
      expect(result).toEqual({
        get: {
          description: "Returns pets based on ID",
          summary: "Find pets by ID",
          operationId: "getPetsById",
          responses: {
            200: {
              description: "pet response",
              content: {
                "*/*": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Pet"
                    }
                  }
                }
              }
            },
            default: {
              description: "error payload",
              content: {
                "text/html": {
                  schema: {
                    $ref: "#/components/schemas/ErrorModel"
                  }
                }
              }
            }
          }
        },
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of pet to use",
            required: true,
            schema: {
              type: "array",
              items: {
                type: "string"
              }
            },
            style: "simple"
          }
        ]
      });
    });
  });
});
//# sourceMappingURL=path-item-object.test.js.map
