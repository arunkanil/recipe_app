import { NgModule } from "@angular/core";
import { APOLLO_OPTIONS, APOLLO_NAMED_OPTIONS } from "apollo-angular";
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { HttpLink } from "apollo-angular/http";

const uri = "https://jewel-core.telemarketing.untanglepro.com/graphql"; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: "charset=utf-8",
    },
  }));
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }));

  return {
    link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

export function createNamedApollo(
  httpLink: HttpLink
): Record<string, ApolloClientOptions<any>> {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: "charset=utf-8",
    },
  }));
  return {
    second: {
      name: "second",
      link: ApolloLink.from([ basic, httpLink.create({ uri }) ]),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      deps: [HttpLink],
      useFactory: createNamedApollo,
    },
  ],
})
export class GraphQLModule {}
