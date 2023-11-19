import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { createAppointmentInput } from '../ditos/inputs/create-appointment-input'
import { Appoinntment } from '../ditos/models/appointment-model'

@Resolver(() => Appoinntment)
export class AppointmentResolver {
    @Query(() => [Appoinntment])
    async appointments() {
        return [
            {
                startsAt: new Date(),
                endsAt: new Date(),
            }
        ]
    }

    @Mutation(() => Appoinntment)
    async createAppointment(@Arg('data') data: createAppointmentInput){
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        }

        return appointment
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment: Appoinntment) {
        console.log(appointment)

        return {
            name: 'John Doe'
        }
    }

}