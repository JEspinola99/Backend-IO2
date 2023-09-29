import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SigninDto } from './dto/auth.dto';
import { Response, Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(@Body() user: AuthDto) {
    return this.authService.signup(user);
  }

  @Get('signout')
  signout(@Res() res: Response) {
    return this.authService.signout(res);
  }

  @Post('signin')
  async signin(@Body() user: SigninDto, @Res() res: Response) {
    return await this.authService.signin(user, res);
  }
}
