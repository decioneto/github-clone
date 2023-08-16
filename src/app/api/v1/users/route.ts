import { UserModel } from "@backend/data/models/user";
import { RegisterUserService } from "@backend/data/services";
import { PrismaService } from "@backend/infra/database/prisma/prisma-service";
import { PrismaRegisterUserRepository } from "@backend/infra/database/prisma/repositories/prisma-register-user";
import { RegisterUserController } from "@backend/presentation/controllers";
import { NextApiRequest } from "next";

interface RegisterUserData extends NextApiRequest {
    body: UserModel;
}

export async function POST(req: RegisterUserData) {
    const { email, password, username } = req.body;

    const prismaService = new PrismaService();
    const registerUserRepository = new PrismaRegisterUserRepository(
        prismaService
    );
    const registerUserService = new RegisterUserService(registerUserRepository);
    const registerUserController = new RegisterUserController(
        registerUserService
    );

    await registerUserController.handle({
        email,
        password,
        username,
    });
}
