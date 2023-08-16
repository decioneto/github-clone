import { User } from "@backend/core/entities";
import { RegisterUser } from "@backend/core/use-cases";
import { RegisterUserRepository } from "../repositories";
import { RegisterUserError } from "@backend/core/errors";
import bcrypt from "bcrypt";

export class RegisterUserService implements RegisterUser {
    constructor(private registerUserRepository: RegisterUserRepository) {}

    async register(user: User): Promise<User> {
        const salt = user.username;
        const password = user.password;
        const hashedPass = await bcrypt.hash(password, salt);

        if (!hashedPass) throw new RegisterUserError();

        const newUser: User = {
            ...user,
            password: hashedPass,
        };

        return await this.registerUserRepository.registerUser(newUser);
    }
}
