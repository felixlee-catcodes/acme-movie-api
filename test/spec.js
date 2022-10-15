const { expect } = require("chai");
const app = require("../app");

describe("1st test", () => {
  it("has a testSpec variable", () => {
    const testSpec = null;
    expect(testSpec).to.equal(null);
  });

  describe("home page get route", () => {
    it("has a message", async () => {
      const response = await app.get("/");
      expect(response.status).to.equal(200);
      expect(response.text).to.contain("hello world");
    });
  });
});
