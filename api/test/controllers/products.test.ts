import connect, { MongodHelper } from "./../db-helper";
// test - controller - unit
// integration:

// test for - createProduct
// to check if the product is saved/ created in database
// product: name: test1, price:123

// fake database - db-helper.ts

import request from "supertest";
import {
  describe,
  it,
  beforeAll,
  afterAll,
  expect,
  afterEach,
} from "@jest/globals";
import app from "../../src/app";

// app - access route: product route
async function createProduct() {
  // new product
  let product = {
    name: "test1",
    price: 123,
  };
  // endpoint:/products
  // method: post
  return await request(app).post("/products").send(product);
}

// check if product in database (fake) or not
// a test suite
describe("create product controller", () => {
  // fake database
  let mongoHelper: MongodHelper;
  beforeAll(async () => {
    // connect to fake database
    mongoHelper = await connect();
  });
  afterEach(async () => {
    await mongoHelper.clearDatabase();
  });
  afterAll(async () => {
    await mongoHelper.closeDatabase();
  });

  // write test: it
  it("should create a movie ", async () => {
    const response = await createProduct();
    // product: name: test1, price:123
    // Property: name, price, _id
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.name).toBe("test1");
    expect(response.body.price).toBe(123);
  });
});
