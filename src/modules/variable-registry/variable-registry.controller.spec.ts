import { Test, TestingModule } from '@nestjs/testing';
import { VariableRegistryController } from './variable-registry.controller';

describe('VariableRegistryController', () => {
    let controller: VariableRegistryController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [VariableRegistryController],
        }).compile();

        controller = module.get<VariableRegistryController>(
            VariableRegistryController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
