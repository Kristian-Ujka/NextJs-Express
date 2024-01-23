const request = require("supertest");
const app = require("../server"); // Supponiamo che il tuo server sia nell'archivio 'app.js'

describe("GET /api/users", () => {
  it("should return a list of users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([])); // Assicurati che il corpo della risposta sia un array
  });
});

describe("POST /api/users", () => {
  it("should create a new user", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({ username: "john_doe" });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.username).toBe("john_doe");
  });
});
