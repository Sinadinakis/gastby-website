const LANGUAGE_UPDATE = 'LANGUAGE_UPDATE';

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case LANGUAGE_UPDATE: {
      let { lang } = payload;
      return {
        ...state,
        lang,
      };
    }

    default:
      return state;
  }
}
