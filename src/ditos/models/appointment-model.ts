import { Field, ObjectType } from 'type-graphql' 

@ObjectType()
export class Appoinntment {
    @Field()
    startsAt: Date

    @Field()
    endsAt: Date
}