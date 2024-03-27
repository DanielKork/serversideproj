class NotEnoughParametersException extends Error {
    constructor(msg) {
        super(msg);
    }
}

class WrongCategoryException extends Error {
    constructor(msg) {
        super(msg);
    }
}

class OutOfRangeDateException extends Error {
    constructor(msg) {
        super(msg);
    }
}

class UserNotFoundException extends Error {
    constructor(msg) {
        super(msg);
    }
}

module.exports = { NotEnoughParametersException, WrongCategoryException, OutOfRangeDateException, UserNotFoundException }