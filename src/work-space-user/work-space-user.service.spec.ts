import { Test, TestingModule } from '@nestjs/testing';
import { WorkSpaceUserService } from './work-space-user.service';

describe('WorkSpaceUserService', () => {
  let service: WorkSpaceUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkSpaceUserService],
    }).compile();

    service = module.get<WorkSpaceUserService>(WorkSpaceUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
