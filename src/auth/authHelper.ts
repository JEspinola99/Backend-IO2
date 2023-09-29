import { JwtService } from '@nestjs/jwt/dist';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { jwtSecret } from 'utils/constans';
@Injectable()
export class AuthHelper {

    constructor(
        private jwtService: JwtService
    ) { }


    checkPass(pass: string, hash: string) { return bcrypt.compare(pass, hash) }

    hashPassword(password: string) {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
    }

    signToken(id: number, email:string){
        const payload = {id, email}
        return this.jwtService.signAsync(payload, {secret: jwtSecret})
    }
}