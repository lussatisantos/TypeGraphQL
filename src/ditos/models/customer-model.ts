import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Costumer {
    @Field()
    name: string
}