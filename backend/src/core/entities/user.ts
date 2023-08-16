import { randomUUID } from "crypto";

export class User {
    id?: string;
    email: string;
    password: string;
    username: string;
    createdAt?: string;

    constructor(email: string, password: string, username: string) {
        this.id = randomUUID();
        this.email = email;
        this.password = password;
        this.username = username;
    }
}
