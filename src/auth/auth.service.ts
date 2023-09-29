import { BadRequestException, ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { AuthDto, SigninDto } from './dto/auth.dto';
import { AuthHelper } from './authHelper';
import { PrismaHelper } from 'prisma/prismaHelper';
import { Response, Request } from 'express';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {

    constructor(
        private authUtils: AuthHelper,
        private userService: UsersService
    ) { }


    async signup(user: AuthDto) {
        try {
            const { password, email, nombre } = user;

            const foundUser = await this.userService.getMyUser(email)

            if (foundUser) throw new BadRequestException('Email already exists')

            const hashedPassword = await this.authUtils.hashPassword(password)

            const res = await this.userService.createUser({ email, password: hashedPassword, nombre })
            console.log(res)

            return { message: 'Signup succes' };

        } catch (error) {
            throw error;
        }
    }

    async signin(user: SigninDto, res: Response) {
        try {
            const { password, email } = user;

            const foundUser = await this.userService.getMyUser(email)

            if (!foundUser) throw new BadRequestException('Usuario o Contraseña no validos')

            const checkPass = await this.authUtils.checkPass(password, foundUser.hashedPassword);

            if (!checkPass) throw new BadRequestException('Usuario o Contraseña no validos')

            const token = await this.authUtils.signToken(foundUser.id, email)

            res.cookie('token', token, {
                secure: true,
                httpOnly: true
            })
            const resUser = {id: foundUser.id, email: foundUser.email}
            return res.send(resUser);

        } catch (error) {
            throw error;
        }
    }

    async signout(res: Response) {
        res.clearCookie('token')
        return res.send({ message: "Logged out succesful" })
    }


}
