
const initialState = [
    {
        results: [],
        notification: [],
        notifications: [],
        error: null
    }
]

//cooper s - capture our alerts in a safe place so we can play then back later
let alert = [];

const dataReducer = (state=initialState, action) => {
    console.log('Get DataReducer: ', action )

    switch(action.type) {
        case 'NEW_NOTIFY':
            console.log('NEW Notification payload: ', action.payload );
            alert.push( action.payload);
            console.log("New notifications array: ", alert.toString());
            state = { 
                ...state, 
                notification: action.payload,
                notifications: alert
            };
        break;
    }

    return state;
}

export default dataReducer
