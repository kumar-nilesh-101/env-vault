import { Column, Entity } from 'typeorm';

@Entity()
export class VariablesRegistry {
    @Column({
        type: 'varchar',
        nullable: false,
    })
    variableName: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    variableValue: string;

    @Column({
        type: 'uuid',
        nullable: false,
    })
    serviceRegistrationKey: string;
}
