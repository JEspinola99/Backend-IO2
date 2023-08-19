import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(@Body() user: AuthDto) {
    return this.authService.signup(user);
  }

  @Get('signout')
  signout(@Req() @Res() res: Response) {
    return this.authService.signout(res);
  }

  @Post('signin')
  signin(@Body() user: AuthDto, @Res() res: Response) {
    return this.authService.signin(user, res);
  }
}
