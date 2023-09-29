import { PartialType } from '@nestjs/swagger';
import { CreateWorkSpaceUserDto } from './create-work-space-user.dto';

export class UpdateWorkSpaceUserDto extends PartialType(CreateWorkSpaceUserDto) {}
