const { syncAndSeed } = require("../db");
const { expect } = require("chai");
const { beforeEach } = require("mocha");
const app = require("supertest")(require("../app"));

describe("1st test", () => {
  beforeEach(async () => {
    syncAndSeed();
  });

  describe("home page get route", () => {
    it("has a message", async () => {
      const response = await app.get("/");
      expect(response.status).to.equal(200);
      expect(response.text).to.contain("hello world");
    });
  });
});
