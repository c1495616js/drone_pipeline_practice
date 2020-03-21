const request = require("supertest");
const app = require("./server.js").app;
const expect = require("expect");

describe('Test function "testMe"', function() {
  it("should return an user obj", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect(res => {
        expect(res.body).toMatchObject({
          name: "John",
          age: 26
        });
      })
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
