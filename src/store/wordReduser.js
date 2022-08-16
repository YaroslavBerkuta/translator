const defaultState = {
  wordList: [],
};
export const wordReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_WORDS":
      return {
        wordList: [
          ...state.wordList,
          { word: action.payload.name, translation: action.payload.translate },
        ],
      };
    default:
      return state;
  }
};
