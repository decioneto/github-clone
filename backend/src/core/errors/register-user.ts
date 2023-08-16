export class RegisterUserError extends Error {
    constructor() {
        super("It was not possible to hash the password");
        this.name = "RegisterUserError";
    }
}
