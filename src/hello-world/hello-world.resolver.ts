import { Args, Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    
    @Query(() => String, {
        description: 'Retorna hola mundo',
        name: 'hello'
    })
    helloWorld(@Args('to', {type: () => String}) to: string): string {
        return 'Hola mundo: ' + to
    }

    @Query(() => Float)
    randomNumber(): number {
        return Math.random() * 100
    }
}
