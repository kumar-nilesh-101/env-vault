import { Column, Entity } from 'typeorm';

@Entity()
export class EnvironmentsRegistry {
    @Column({
        unique: true,
        nullable: false,
        type: 'varchar',
    })
    environmentName: string;

    @Column({
        primary: true,
        type: 'uuid',
    })
    registryKey: string;
}
