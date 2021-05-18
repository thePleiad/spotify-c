export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after developing
    // token: 'BQDdi0DmxuArYrZsMDf_dU0TdsbLt9JSrU_9UyQdrEbJi0b0-ZQTTXmqCFBUZXBEOecFuljh8iXOcftsM6AVToM-o0r43wbcfN7Dv1MB3CykCYEGidZOquxH43bZWGb8EQkKR6JNP2dOLi-QxcFpgnJf_ZZpNK0'
}


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;