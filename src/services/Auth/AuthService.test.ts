import { describe, it, expect, afterEach, jest } from "@jest/globals";
import axios, { AxiosError, type AxiosResponse } from "axios";

import { login } from "./AuthService";
import type { LoginResponseType } from "./types";

describe("AuthService", () => {
  const username = "John";
  const password = "securePassword";

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("builds the auth header correctly", async () => {
    const postSpy = jest.spyOn(axios, "post").mockResolvedValueOnce({
      data: { success: "true" },
    });

    await login(username, password);

    expect(postSpy).toHaveBeenCalledWith(
      expect.any(String),
      undefined,
      expect.objectContaining({
        headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` },
      }),
    );
  });

  it("returns with the correctly mapped model on success", async () => {
    const responseData: LoginResponseType = {
      success: "true",
      loginAccessKey: "key123",
    };

    jest.spyOn(axios, "post").mockResolvedValueOnce({ data: responseData });

    await expect(login(username, password)).resolves.toEqual({
      success: true,
      loginAccessKey: "key123",
      errorMessage: undefined,
    });
  });

  it("rejects with the original error when it isn't an Axios error", async () => {
    const networkError = new Error("Network Error");

    jest.spyOn(axios, "post").mockRejectedValueOnce(networkError);

    await expect(login(username, password)).rejects.toBe(networkError);
  });

  it("resolves with the mapped model when Axios rejects with a response body", async () => {
    const axiosErrorResponse = {
      data: {
        success: "false",
        errorMessage: "Invalid credentials",
      },
      status: 401,
    } as AxiosResponse;

    const axiosError = new AxiosError(
      "Request failed with status code 401",
      undefined,
      undefined,
      undefined,
      axiosErrorResponse,
    );

    jest.spyOn(axios, "post").mockRejectedValueOnce(axiosError);

    await expect(login(username, password)).resolves.toEqual({
      success: false,
      errorMessage: "Invalid credentials",
      loginAccessKey: undefined,
    });
  });
});
