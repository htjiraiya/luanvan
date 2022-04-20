const updateShowMenu = (payload:boolean) => {
    return {
        type: 'UPDATE_SHOW_MENU',
        data: payload
    }
}

export {
    updateShowMenu
}