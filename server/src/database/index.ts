import { createConnection } from 'typeorm';

import Produto from './model/Produto';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'varejo360',
  entities: [Produto],
});
