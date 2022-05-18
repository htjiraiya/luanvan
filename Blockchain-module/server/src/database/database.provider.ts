import { Sequelize } from 'sequelize-typescript';
import { tbl_xavien } from '../xavien/xavien.entity';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        host: 'localhost',
        database: 'agriculture',
        port: 3306,
        dialect: 'mysql',
        username: 'root',
        password: '',
        models: [tbl_xavien],
      });
      console.log('DB connect successfully');
      // await sequelize.sync();
      return sequelize;
    },
  },
];
