import { ServiceRegistry } from 'src/modules/service-registry/entities/service-registry.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class VariablesRegistry {
    @Column({
        type: 'varchar',
        nullable: false,
        primary: true,
    })
    variableName: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    variableValue: string;

    @ManyToOne(() => ServiceRegistry)
    service: string;
}
