import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.status(200).send();
});

app.listen(3333, () => console.log('server started on por 3333'));
