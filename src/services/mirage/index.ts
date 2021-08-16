import { createServer, Model, Factory } from 'miragejs'
import faker from 'faker'

interface User {
  name: string;
  email: string;
  created_at: string;
}

export const makeServer = () => {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: { // Gerar dados em massa
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    seeds(server) { // Gerar lista de dados a partir de factories
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api' 
      this.timing = 750; // Tempo para executar a request

      this.get('/users');
      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}