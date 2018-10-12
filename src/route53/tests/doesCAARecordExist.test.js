import doesCAARecordExist from 'src/route53/doesCAARecordExist';

test('CAA record does not exist', async () => {
  const state = await doesCAARecordExist('test.com.');
  expect(state).toBe(false);
});
