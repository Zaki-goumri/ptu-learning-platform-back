import { describe, expect, it } from "vitest";
import { LicenseObjectSchema } from "../unprocessed/license-object.js";
describe("license-object", () => {
  describe("LicenseObjectSchema", () => {
    it("License Object Example", () => {
      const result = LicenseObjectSchema.parse({
        name: "Apache 2.0",
        identifier: "Apache-2.0"
      });
      expect(result).toEqual({
        name: "Apache 2.0",
        identifier: "Apache-2.0"
      });
    });
  });
});
//# sourceMappingURL=license-object.test.js.map
