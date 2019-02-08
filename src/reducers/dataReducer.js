
const initialState = [
    {
        results: [],
        notification: [],
        error: null
    }
]

const dataReducer = (state=initialState, action) => {
    console.log('Get DataReducer: ', action )

    switch(action.type) {
        case 'NEW_NOTIFY':
            console.log('NEW Notification payload: ', action.payload );
            state = { 
                ...state, 
                notification: action.payload
            };
        break;
    }

    return state;
}

export default dataReducer
