
/* 
Actions File 

cooper s - app is broken down into four main screens
    Screen 1 - Search History
    Screen 2 - Internal Resources (Links)
    Screen 3 - Social Media Resources
    Screen 4 - Article Editor
*/

//cooper s - I'll have to come back to this one...
export function loginScreen (data) {
    console.log('Action - loginScreen: ', data );
    //an action needs to return an action
    return {
        type: 'LOGIN_SCREEN',
        payload: data
    }; 
}//end loginScreen

export function mainScreen (data) {
    console.log('Action - mainScreen: ', data );
    //an action needs to return an action
    return {
        type: 'MAIN_SCREEN',
        payload: data
    }; 
}//end mainScreen

export function firstScreen (data) {
    console.log('Actions ScreenOne - Data is live!!!', data );
    //an action needs to return an action
    return {
        type: 'SHOW_SCREEN1',
        payload: data
    }; 
}

export function secondScreen (data) {
    console.log('Actions ScreenTwo - Data is live!!!', data );
    //an action needs to return an action
    return {
        type: 'SHOW_SCREEN2',
        payload: data
    }; 
}

export function thirdScreen (data) {
    console.log('Actions ScreenThree - Data is live!!!', data );
    //an action needs to return an action
    return {
        type: 'SHOW_SCREEN3',
        payload: data
    }; 
}

export function newNotification (data) {
    alert('Actions Notify - New Notification', data );
    //an action needs to return an action
    return {
        type: 'NEW_NOTIFY',
        payload: data
    }; 
}

export function fourthScreen (data) {
    console.log('Actions ScreenFour - Data is live!!!', data );
    //an action needs to return an action
    return {
        type: 'SHOW_SCREEN4',
        payload: data
    }; 
}

//cooper s - action to close any screen thats open
export function closeScreen (data) {
    console.log('Actions CloseScreen: ', data );
    //an action needs to return an action
    return {
        type: 'CLOSE_SCREEN',
        payload: data
    }; 
}//end closeScreen
