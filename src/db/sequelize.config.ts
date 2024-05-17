import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const SequelizeConfig: SequelizeModuleOptions = {
    dialect: 'sqlite',
    storage: '../static/services-meta.sqlite3',
    autoLoadModels: true,
    synchronize: true,
};
