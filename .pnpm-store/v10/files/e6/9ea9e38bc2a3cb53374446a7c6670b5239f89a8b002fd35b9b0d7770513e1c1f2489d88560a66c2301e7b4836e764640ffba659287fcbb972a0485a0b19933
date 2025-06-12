import { describe, expect, it } from "vitest";
import { ResponsesObjectSchema } from "../unprocessed/responses-object.js";
describe("responses-object", () => {
  describe("ResponsesObjectSchema", () => {
    it("Responses Object Example", () => {
      const result = ResponsesObjectSchema.parse({
        200: {
          description: "a pet to be returned",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet"
              }
            }
          }
        },
        default: {
          description: "Unexpected error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorModel"
              }
            }
          }
        }
      });
      expect(result).toEqual({
        200: {
          description: "a pet to be returned",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet"
              }
            }
          }
        },
        default: {
          description: "Unexpected error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorModel"
              }
            }
          }
        }
      });
    });
  });
});
//# sourceMappingURL=responses-object.test.js.map
