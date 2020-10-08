import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mbl',
  password: 'mbl2020',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
