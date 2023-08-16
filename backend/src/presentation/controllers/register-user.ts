import { RegisterUser } from "@backend/core/use-cases";
import { Controller, HttpResponse } from "../repositories";
import { RegisterUserViewModel } from "../view-models/register-user";

export class RegisterUserController implements Controller {
    constructor(private registerUser: RegisterUser) {}

    async handle(
        request: RegisterUserViewModel
    ): Promise<HttpResponse<RegisterUserViewModel>> {
        const { email, password, username } = request;

        const user = await this.registerUser.register({
            email,
            password,
            username,
        });

        return {
            statusCode: 201,
            data: user,
        };
    }
}
