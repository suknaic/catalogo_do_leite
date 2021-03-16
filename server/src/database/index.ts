import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'varejo360',
});
