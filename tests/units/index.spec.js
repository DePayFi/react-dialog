import { DialogContext } from 'dist/cjs/index.js';

describe('library', () => {
  it('should export DialogContext', () => {
    expect(typeof(DialogContext.Provider)).toBe('object');
    expect(typeof(DialogContext.Consumer)).toBe('object');
  });
});
