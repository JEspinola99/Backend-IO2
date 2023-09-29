import { Test, TestingModule } from '@nestjs/testing';
import { WorkSpaceUserController } from './work-space-user.controller';
import { WorkSpaceUserService } from './work-space-user.service';

describe('WorkSpaceUserController', () => {
  let controller: WorkSpaceUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkSpaceUserController],
      providers: [WorkSpaceUserService],
    }).compile();

    controller = module.get<WorkSpaceUserController>(WorkSpaceUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
