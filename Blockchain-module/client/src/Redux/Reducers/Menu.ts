const initial = {
    isShow: false
}

export default function menuReducer(state = initial, action:any) {
    switch (action.type) {
        case 'UPDATE_SHOW_MENU': {
            return {
                ...state,
                isShow: action.data
            }
            
            break;
        }

        default: {
            return {
                ...state
            }
        }
    }
}