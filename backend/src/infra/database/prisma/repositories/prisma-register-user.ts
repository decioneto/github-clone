import { UserModel } from "@backend/data/models/user";
import { RegisterUserRepository } from "@backend/data/repositories";
import { PrismaService } from "../prisma-service";

export class PrismaRegisterUserRepository implements RegisterUserRepository {
    constructor(private prismaService: PrismaService) {}

    async registerUser(user: UserModel): Promise<UserModel> {
        const newUser = await this.prismaService.user.create({
            data: user,
        });

        return {
            id: user.id,
            email: newUser.email,
            password: newUser.password,
            username: newUser.username,
        };
    }
}
