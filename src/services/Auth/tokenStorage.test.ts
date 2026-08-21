import { describe, it, expect, beforeEach } from "@jest/globals";

import {
  readStoredToken,
  writeStoredToken,
  clearStoredToken,
} from "./tokenStorage";

describe("tokenStorage", () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  it("returns null when no token has been stored", () => {
    expect(readStoredToken()).toBeNull();
  });

  it("stores in sessionStorage when rememberMe is false", () => {
    writeStoredToken("abc123", false);

    expect(sessionStorage.getItem("authToken")).toBe("abc123");
    expect(localStorage.getItem("authToken")).toBeNull();
    expect(readStoredToken()).toBe("abc123");
  });

  it("stores in localStorage when rememberMe is true", () => {
    writeStoredToken("abc123", true);

    expect(localStorage.getItem("authToken")).toBe("abc123");
    expect(sessionStorage.getItem("authToken")).toBeNull();
    expect(readStoredToken()).toBe("abc123");
  });

  it("clears the other storage when rememberMe changes between calls", () => {
    writeStoredToken("session-token", false);
    writeStoredToken("remembered-token", true);

    expect(sessionStorage.getItem("authToken")).toBeNull();
    expect(localStorage.getItem("authToken")).toBe("remembered-token");
  });

  it("clears the token from both storages", () => {
    writeStoredToken("abc123", true);

    clearStoredToken();

    expect(readStoredToken()).toBeNull();
  });
});
