interface StateType {
    count:number
}
const initialState : StateType = {
    count: 0,
}
const counterReducer = (state = initialState,action:any) =>{
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + action.payload
            }
        }
    
        default:
            return state
    }
}
export default counterReducer