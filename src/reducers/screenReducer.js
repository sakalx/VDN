
const screenReducer = (state='Login Screen', action) => {
    console.log('Get ScreenReducer: ', action );

    switch(action.type) {
        case 'SHOW_LOGIN':
            console.log('SHOW_LOGIN payload: ', action.payload );
            return action.payload;
        break;
        case 'MAIN_SCREEN':
            console.log('MAIN_SCREEN payload: ', action.payload );
            return action.payload;
        break; 
        case 'SHOW_SCREEN1':
            console.log('SHOW SCREEN 1 payload: ', action.payload );
            return action.payload ;
        break;
        case 'SHOW_SCREEN2':
            console.log('SHOW SCREEN 2 payload: ', action.payload );
            return action.payload ;
        break; 
        case 'SHOW_SCREEN3':
            console.log('SHOW SCREEN 3 payload: ', action.payload );
            return action.payload ;
        break; 
        case 'SHOW_SCREEN4':
            console.log('SHOW SCREEN 4 payload: ', action.payload );
            return action.payload ;
        break;  
    case 'CLOSE_SCREEN':
        console.log('CLOSE SCREEN payload: ', action.payload );
        return   action.payload ;
    break;
    }//end switch

    return state;
}

export default screenReducer
