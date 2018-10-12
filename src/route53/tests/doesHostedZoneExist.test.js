import doesHostedZoneExist from "src/route53/doesHostedZoneExist";

test("test domain does not exist", async () => {
  const state = await doesHostedZoneExist("test.com.");
  expect(state).toBe(false);
});
