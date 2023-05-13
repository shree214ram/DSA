function setDisplayedAll(callback, value) {
  if (value !== false) {
    callback(value);
  }
}

describe('after change filter', () => {
  test('change the value is true to false', () => {
    const setDisplayed = jest.fn();
    setDisplayedAll(setDisplayed, true);
    expect(setDisplayed).toHaveBeenCalled();
  });

  test('ignore if value is false', () => {
    const setDisplayed = jest.fn();
    setDisplayedAll(setDisplayed, false);
    expect(setDisplayed).not.toHaveBeenCalled();
  });
});