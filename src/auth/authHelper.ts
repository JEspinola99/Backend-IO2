import { JwtService } from '@nestjs/jwt/dist';
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { jwtSecret } from 'utils/constans';
@Injectable()
export class AuthHelper {

    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService
    ) { }

    checkUser(email: string) { return this.prismaService.user.findUnique({ where: { email } }) }

    checkPass(pass: string, hash: string) { return bcrypt.compare(pass, hash) }

    hashPassword(password: string) {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
    }

    signToken(id: string, email:string){
        const payload = {id, email}
        return this.jwtService.signAsync(payload, {secret: jwtSecret})
    }
}