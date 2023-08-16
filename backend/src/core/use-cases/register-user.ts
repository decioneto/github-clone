import { User } from "../entities";

export interface RegisterUser {
    register: (user: User) => Promise<User>;
}
