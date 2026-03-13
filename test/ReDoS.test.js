import { strictEqual } from 'assert';

describe('# ReDoS', () => {
  it('# fix re do regex', () => {
    for (let i = 0; i < 1000; i += 50) {
      const url =
        'data:' + Array.from({ length: i }).fill(',#').join('') + '\ra';

      const start = Date.now();

      try {
        // const match = /^data:(?<type>.*?),(?<data>.*?)(?:#(?<hash>.*))?$/.exec(url);

        const match =
          /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(url);
      } catch { }

      const diff = Date.now() - start;
      strictEqual(diff < 100, true);
    }
  });
});
