import { ApolloServer } from "apollo-server"
import path from 'node:path'
import { buildSchema } from "graphql"
import "reflect-metadata"
import { AppointmentResolver } from "./resolvers/Appoinntment-resolver"

 async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            AppointmentResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })
    
    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(`HTTP Server running on ${url}`)
 }

 bootstrap()