import { Field, InputType } from 'type-graphql'

@InputType()
export class createAppointmentInput {
    @Field()
    CostumerId: string

    @Field()
    startsAt: Date

    @Field()
    endsAt: Date
}