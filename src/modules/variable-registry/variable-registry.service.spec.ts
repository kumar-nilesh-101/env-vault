import { Test, TestingModule } from '@nestjs/testing';
import { VariableRegistryService } from './variable-registry.service';

describe('VariableRegistryService', () => {
    let service: VariableRegistryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [VariableRegistryService],
        }).compile();

        service = module.get<VariableRegistryService>(VariableRegistryService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
