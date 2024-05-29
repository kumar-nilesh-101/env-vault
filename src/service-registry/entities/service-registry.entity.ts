import { Entity, Column } from 'typeorm';

@Entity()
export class ServiceRegistry {
    @Column({
        unique: true,
        nullable: false,
        type: 'text',
        name: 'service_name',
    })
    serviceName: string;

    @Column({
        primary: true,
        type: 'uuid',
        name: 'registry_key',
    })
    registryKey: string;
}

export type ServiceRegistryRepository = typeof ServiceRegistry;
