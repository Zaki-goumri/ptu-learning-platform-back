import { describe, it, expect } from "vitest";
import { nanoidSchema } from "./nanoid.js";
import { z } from "zod";
describe("nanoidSchema", () => {
  it("should generate a string with minimum length of 7 characters when no value is provided", () => {
    const result = nanoidSchema.parse(void 0);
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThanOrEqual(7);
  });
  it("should accept valid strings with length >= 7", () => {
    const validString = "1234567";
    const result = nanoidSchema.parse(validString);
    expect(result).toBe(validString);
  });
  it("should reject strings shorter than 7 characters", () => {
    const invalidString = "123456";
    expect(() => nanoidSchema.parse(invalidString)).toThrow(z.ZodError);
  });
  it("should generate different IDs for multiple calls", () => {
    const id1 = nanoidSchema.parse(void 0);
    const id2 = nanoidSchema.parse(void 0);
    expect(id1).not.toBe(id2);
  });
  it("should properly type the generated ID as Nanoid", () => {
    const id = nanoidSchema.parse(void 0);
    expect(typeof id).toBe("string");
  });
});
//# sourceMappingURL=nanoid.test.js.map
