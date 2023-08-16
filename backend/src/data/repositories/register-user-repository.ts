import { UserModel } from "../models/user";

export interface RegisterUserRepository {
    registerUser: (user: UserModel) => Promise<UserModel>;
}
