module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mysql@2002',
    database: 'Nest_TasksCRUD',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
  