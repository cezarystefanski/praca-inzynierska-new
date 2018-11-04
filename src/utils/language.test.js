import { getLocale, setLocale } from './language';

describe('utils utils/language', () => {
  it('should have localStorage', () => {
    const { localStorage } = window;

    expect(localStorage)
      .toHaveProperty('setItem');
  });

  it('should get locale when localstorage is not populated', () => {
    Object.defineProperty(navigator, 'language', {
      get: () => 'en-GB',
      configurable: true,
    });

    const { localStorage } = window;
    localStorage.clear();

    expect(getLocale())
      .toEqual('en-GB');
  });

  it('should get locale when localstorage is not populated and navigator is empty', () => {
    Object.defineProperty(navigator, 'language', {
      get: () => null,
      configurable: true,
    });

    const { localStorage } = window;
    localStorage.clear();

    expect(getLocale())
      .toEqual('en');
  });

  it('should get locale when localstorage is populated', () => {
    const { localStorage } = window;

    localStorage.setItem('Usic:Language', 'en');

    expect(getLocale())
      .toEqual('en');
  });

  it('should set locale', () => {
    const { localStorage } = window;
    localStorage.clear();

    window.location.reload = jest.fn();

    expect(window.location.reload)
      .not.toHaveBeenCalled();

    expect(setLocale('fr'))
      .toBeTruthy();

    expect(window.location.reload)
      .toHaveBeenCalled();

    window.location.reload.mockRestore();
  });
});
