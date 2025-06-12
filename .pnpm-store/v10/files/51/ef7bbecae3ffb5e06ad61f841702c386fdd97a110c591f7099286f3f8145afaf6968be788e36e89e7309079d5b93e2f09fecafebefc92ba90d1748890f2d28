import { describe, expect, it } from "vitest";
import { ServerObjectSchema } from "../unprocessed/server-object.js";
describe("server-object", () => {
  describe("ServerObjectSchema", () => {
    it("parses a single server", () => {
      const result = ServerObjectSchema.parse({
        url: "https://development.gigantic-server.com/v1",
        description: "Development server"
      });
      expect(result).toEqual({
        url: "https://development.gigantic-server.com/v1",
        description: "Development server"
      });
    });
  });
});
//# sourceMappingURL=server-object.test.js.map
