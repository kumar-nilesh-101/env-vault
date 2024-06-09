import { Test, TestingModule } from '@nestjs/testing';
import { VariablesRegistryService } from './variables-registry.service';

describe('VariablesRegistryService', () => {
    let service: VariablesRegistryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [VariablesRegistryService],
        }).compile();

        service = module.get<VariablesRegistryService>(
            VariablesRegistryService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
