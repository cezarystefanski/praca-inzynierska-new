const localStorageMock = () => {
  let store = {};

  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => { store = {}; },
  };
};

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock(),
});

Object.defineProperty(window, 'localStorage', {
  value: global.localStorage,
});
