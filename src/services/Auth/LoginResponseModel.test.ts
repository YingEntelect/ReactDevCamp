import { describe, it, expect } from "@jest/globals";

import { loginResponseModel } from "./LoginResponseModel";

describe("loginResponseModel", () => {
  it('maps success "true" to true', () => {
    const result = loginResponseModel({ success: "true" });

    expect(result.success).toBe(true);
  });

  it.each(["false", "TRUE", ""])("maps success %j to false", (success) => {
    const result = loginResponseModel({ success });

    expect(result.success).toBe(false);
  });

  it("passes errorMessage and loginAccessKey through when present", () => {
    const result = loginResponseModel({
      success: "false",
      errorMessage: "Invalid credentials",
      loginAccessKey: "abc123",
    });

    expect(result.errorMessage).toBe("Invalid credentials");
    expect(result.loginAccessKey).toBe("abc123");
  });

  it("passes errorMessage and loginAccessKey through as undefined when absent", () => {
    const result = loginResponseModel({ success: "true" });

    expect(result.errorMessage).toBeUndefined();
    expect(result.loginAccessKey).toBeUndefined();
  });
});
