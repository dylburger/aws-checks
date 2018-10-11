import { doesHostedZoneExist } from "../route53";

test("test domain does not exist", async () => {
  const state = await doesHostedZoneExist("test.com.");
  expect(state).toBe(false);
});
