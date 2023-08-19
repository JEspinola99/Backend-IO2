import {  Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PrismaHelper } from "./prismaHelper";

@Module({
    providers: [PrismaService, PrismaHelper],
    exports: [PrismaService, PrismaHelper],
})

export class PrismaModule {}