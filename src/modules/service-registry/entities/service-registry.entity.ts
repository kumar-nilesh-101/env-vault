import { Entity, Column } from 'typeorm';

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
}

export type ServiceRegistryRepository = typeof ServiceRegistry;
