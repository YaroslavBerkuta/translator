
const defaultState = {
    testList:[{
        score: "100%",
        date:'15.08.2022'
    }]
}
export const testReduser = (state = defaultState,action) => {
    switch (action.type){
        case "ADD_TEST":
            return {testList: [...state.testList, {score: action.payload.score, date: action.payload.date}]}
            break
        default:
            return state
    }
}