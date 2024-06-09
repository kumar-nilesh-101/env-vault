import { Test, TestingModule } from '@nestjs/testing';
import { VariablesRegistryController } from './variables-registry.controller';

describe('VariablesRegistryController', () => {
    let controller: VariablesRegistryController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [VariablesRegistryController],
        }).compile();

        controller = module.get<VariablesRegistryController>(
            VariablesRegistryController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
