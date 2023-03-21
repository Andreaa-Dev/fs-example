import request from "supertest";
import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  it,
} from "@jest/globals";

import app from "../../src/app";
import connect, { MongodHelper } from "../db-helper";

async function createProduct() {
  let product = {
    name: "product",
    price: 123,
    imageLink: "example.com",
  };
  return await request(app).post("/products").send(product);
}

// test suite
describe("movie controller", () => {
  //connect database
  let mongodHelper: MongodHelper;

  //Jest: set up and tear down. before all (small test)
  beforeAll(async () => {
    mongodHelper = await connect();
  });
  // clear database
  afterEach(async () => {
    await mongodHelper.clearDatabase();
  });

  afterAll(async () => {
    await mongodHelper.closeDatabase();
  });

  //small test
  it("should create a movie", async () => {
    const res = await createProduct();
    //assertion: check
    //toBe: matcher. toBe (==, no type), toEqual(===, type)
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("product");
  });
});
