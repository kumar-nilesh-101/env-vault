import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export type ServiceRegistryRepository = typeof ServiceRegistry;
