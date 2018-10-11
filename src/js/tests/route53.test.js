import { doesHostedZoneExist } from "../route53";

test("test domain does exist", async () => {
  const state = await doesHostedZoneExist("dylbaum.com.");
  expect(state).toBe(true);
});
