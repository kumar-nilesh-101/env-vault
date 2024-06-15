import { EnvironmentsRegistry } from 'src/modules/environments-registry/entities/environments-registry.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class ServiceRegistry {
    @Column({
        unique: true,
        nullable: false,
        type: 'varchar',
    })
    serviceName: string;

    @Column({
        primary: true,
        type: 'uuid',
    })
    registryKey: string;

    @ManyToOne(() => EnvironmentsRegistry)
    environment: string;
}

export type ServiceRegistryRepository = typeof ServiceRegistry;
