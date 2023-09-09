import { BadRequestException, ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthHelper } from './authHelper';
import { PrismaHelper } from 'prisma/prismaHelper';
import { Response, Request } from 'express';
@Injectable()
export class AuthService {

    constructor(
        private authUtils: AuthHelper,
        private prismaUtils: PrismaHelper
    ) { }


    async signup(user: AuthDto) {
        try {
            const { password, email } = user;

            const foundUser = await this.authUtils.checkUser(email)

            if (foundUser) throw new BadRequestException('Email already exists')

            const hashedPassword = await this.authUtils.hashPassword(password)

            await this.prismaUtils.createUser({ email, password: hashedPassword })

            return { message: 'Signup succes' };

        } catch (error) {
            throw error;
        }
    }

    async signin(user: AuthDto, res: Response) {
        try {
            const { password, email } = user;

            const foundUser = await this.authUtils.checkUser(email)

            if (!foundUser) throw new BadRequestException('Usuario o Contraseña no validos')

            const checkPass = await this.authUtils.checkPass(password, foundUser.hashedPassword);

            if (!checkPass) throw new BadRequestException('Usuario o Contraseña no validos')

            const token = await this.authUtils.signToken(foundUser.id, email)

            res.cookie('token', token, {
                secure: true,
                httpOnly: true
            })

            return res.send("Logged in succesfully");

        } catch (error) {
            throw error;
        }
    }

    async signout(res: Response) {
        res.clearCookie('token')
        return res.send({ message: "Logged out succesful" })
    }


}
