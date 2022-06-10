const request = require("supertest");
const app = require("../../../app");

describe("POST /v1/cars", () => {
  test("should response with 201 as status code", async () => {
    const name = 'mobil jelek';
    const price = 100000;
    const size = 'Classic';
    const image =  'mobil.jpg';
    const isCurrentlyRented = true;

    return request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .send({ name, price, size, image, isCurrentlyRented })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
            name,
            price,
            size,
            image,
            isCurrentlyRented
          })
        );
      });
  });

  test("should response with 422 as status code", async () => {
    const name = [];
    const price = [];
    const size = [];
    const image =  [];
    const isCurrentlyRented = [];
    return request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .send({ name, price, size, image, isCurrentlyRented })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: expect.any(String),
              price: expect.any(Number),
              size: expect.any(String),
              image: expect.any(String),
              isCurrentlyRented: expect.any(Boolean),
              message: expect.any(String),
            },
          })
        );
      });
  });
});
