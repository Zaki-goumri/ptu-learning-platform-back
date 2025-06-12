import { describe, expect, it } from "vitest";
import { ContactObjectSchema } from "../unprocessed/contact-object.js";
describe("contact-object", () => {
  describe("ContactObjectSchema", () => {
    it("Contact Object Example", () => {
      const result = ContactObjectSchema.parse({
        name: "API Support",
        url: "https://www.example.com/support",
        email: "support@example.com"
      });
      expect(result).toEqual({
        name: "API Support",
        url: "https://www.example.com/support",
        email: "support@example.com"
      });
    });
  });
});
//# sourceMappingURL=contact-object.test.js.map
