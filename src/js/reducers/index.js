export function reducer(state, action) {
    switch (action.type) {
        case 'SET_LENGTH':
            return Object.assign({}, state, {length: action.length});
        case 'IS_LETTERS':
            return Object.assign({}, state, {isLetters: action.isLetters});
        case 'IS_UPPER':
            return Object.assign({}, state, {isUpper: action.isUpper});
        case 'IS_NUMS':
            return Object.assign({}, state, {isNums: action.isNums});
        case 'IS_SYMBOLS':
            return Object.assign({}, state, {isSymbols: action.isSymbols});
        case 'ADD_CURRENT':
            return Object.assign({}, state, {current: action.current});
        case 'ADD_HISTORY':
            return Object.assign({}, state, {pswArr: action.pswArr});
    }
    return state;
}
