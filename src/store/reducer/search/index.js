import searchRoutine from '../../routines/search'

const initState = {
    searchValue: '', 
    searchData:'',
    searchResult:[]
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case searchRoutine.SUCCESS:
            console.log(action)
            return {
                ...state,
                searchValue:action.payload.searchValue,
                searchData: action.payload.data,
                searchResult: action.payload.data.info
            }
        case searchRoutine.FAILURE:
            return {
                ...state,
                searchData: action.payload.data
            }
        case searchRoutine.FULFILL:
            return {
                ...state,
            }
        default:
            return state
    }
}


export default searchReducer