import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) { }

    async getMyUser(id: number) {
        return await this.prismaService.user.findUnique({where : {id}, select: {id: true, email: true}})
    }

    async getUsers() {
        return await this.prismaService.user.findMany({ select: { id: true, email: true } })
    }
}
