export function setLength(length) {
    return {
        type: 'SET_LENGTH',
        length
    }
}

export function isLetters(isLetters) {
    return {
        type: 'IS_LETTERS',
        isLetters
    }
}

export function isSymbols(isSymbols) {
    return {
        type: 'IS_SYMBOLS',
        isSymbols
    }
}

export function isNums(isNums) {
    return {
        type: 'IS_NUMS',
        isNums
    }
}

export function isUpper(isUpper) {
    return {
        type: 'IS_UPPER',
        isUpper
    }
}

export function setCurrent(current) {
    return {
        type: 'ADD_CURRENT',
        current
    }
}

export function getArr(pswArr) {
    return {
        type: 'ADD_HISTORY',
        pswArr
    }
}