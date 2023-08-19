import { Injectable, Inject } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { AuthDto } from "src/auth/dto/auth.dto";

@Injectable()
export class PrismaHelper {

    constructor(@Inject(PrismaService) private  prismaService: PrismaService){}

    createUser(user: AuthDto) {
        return this.prismaService.user.create({data: {email:user.email, hashedPassword: user.password}});
    }
}