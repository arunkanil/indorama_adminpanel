// import { NgModule } from "@angular/core";
// import { APOLLO_OPTIONS, APOLLO_NAMED_OPTIONS } from "apollo-angular";
// import {
//   ApolloClientOptions,
//   ApolloLink,
//   InMemoryCache,
// } from "@apollo/client/core";
// import { setContext } from "@apollo/client/link/context";
// import { HttpLink } from "apollo-angular/http";
// import { environment } from "../environments/environment";

// const uri = `${environment.apiUrl}/graphql`;

// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   const basic = setContext((operation, context) => ({
//     headers: {
//       Accept: "charset=utf-8",
//     },
//   }));
//   // Get the authentication token from local storage if it exists
//   const token = localStorage.getItem("token");
//   const auth = setContext((operation, context) => ({
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }));

//   return {
//     link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
//     cache: new InMemoryCache(),
//   };
// }

// export function createNamedApollo(
//   httpLink: HttpLink
// ): Record<string, ApolloClientOptions<any>> {
//   const basic = setContext((operation, context) => ({
//     headers: {
//       Accept: "charset=utf-8",
//     },
//   }));
//   return {
//     second: {
//       name: "second",
//       link: ApolloLink.from([ basic, httpLink.create({ uri }) ]),
//       cache: new InMemoryCache(),
//     },
//   };
// }

// @NgModule({
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       useFactory: createApollo,
//       deps: [HttpLink],
//     },
//     {
//       provide: APOLLO_NAMED_OPTIONS,
//       deps: [HttpLink],
//       useFactory: createNamedApollo,
//     },
//   ],
// })
// export class GraphQLModule {}


import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache,ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../environments/environment';

const uri = `${environment.apiUrl}/graphql`;

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}

@NgModule({
  exports: [
    HttpClientModule,
    // ApolloModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink]
  }]
})
export class GraphQLModule {}
