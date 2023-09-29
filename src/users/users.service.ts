import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Prisma, Usuario } from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) { }

    hashPassword(password: string) {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
    }

    async createUser(user: AuthDto){
        return this.prismaService.usuario.create({data: {nombre: user.nombre, hashedPassword: user.password, email: user.email}})
    }

    async getMyUser(email: string) {
        return this.prismaService.usuario.findUnique({where : {email}, select: {id: true, email: true, hashedPassword: true}})
    }
}
