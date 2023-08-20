import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) { }

    getMyUser(id: string) {

    }

    async getUsers() {
        return await this.prismaService.user.findMany({ select: { id: true, email: true } })
    }
}
