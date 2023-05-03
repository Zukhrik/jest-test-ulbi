const delay = require("./delay");

describe("delay", function() {
  test("5+5", async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});