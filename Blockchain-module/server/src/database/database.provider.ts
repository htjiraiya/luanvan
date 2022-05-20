import { Sequelize } from 'sequelize-typescript';
import { tbl_xavien } from '../xavien/xavien.entity';
import { tbl_thuonglai } from '../thuonglai/thuonglai.entity';
import { tbl_thuocbaovethucvat } from '../thuocbaovethucvat/thuocbaovethucvat.entity';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        port: Number(process.env.DB_PORT),
        dialect: 'mysql',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        models: [tbl_xavien, tbl_thuonglai, tbl_thuocbaovethucvat],
      });
      console.log('DB connect successfully');
      // await sequelize.sync();
      return sequelize;
    },
  },
];
