import { Column, Table, Model, IsUUID } from 'sequelize-typescript';

@Table({
    tableName: 'service_registry',
    underscored: true,
})
export class ServiceRegistry extends Model {
    @Column({
        unique: true,
        allowNull: false,
    })
    serviceName: string;

    @IsUUID(4)
    @Column({
        primaryKey: true,
        unique: true,
        allowNull: false,
    })
    registryKey: string;
}

export type ServiceRegistryRepository = typeof ServiceRegistry;
