import { Controller, Get, Param , UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMyUser(@Param('id') id: number){
    return this.usersService.getMyUser(id)
  }

  @Get()
  getUsers(){
    return this.usersService.getUsers()
  }
}
