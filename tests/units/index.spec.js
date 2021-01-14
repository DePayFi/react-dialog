import { DialogContext } from 'dist/es/index.js';

describe('depay-react-dialog', () => {
  it('should export DialogContext', () => {
    expect(typeof(DialogContext.Provider)).toBe('object');
    expect(typeof(DialogContext.Consumer)).toBe('object');
  });
});
