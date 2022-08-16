const defaultState = {
  testList: [],
};
export const testReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TEST":
      return {
        testList: [
          ...state.testList,
          { score: action.payload.score, date: action.payload.date },
        ],
      };
    default:
      return state;
  }
};
