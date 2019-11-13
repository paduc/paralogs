import { Observable } from "rxjs";

import { Flight } from "@paralogs/shared";
import { CurrentUserWithToken } from "./currentUser/currentUser.types";

export interface AuthParams {
  email: string;
  password: string;
}

export interface APIGateway {
  login(params: AuthParams): Observable<CurrentUserWithToken | null>;
  signUp(params: AuthParams): Observable<CurrentUserWithToken | null>;
  loggout(): Observable<unknown>;
  getCurrentSession(): Observable<unknown>;
  retrieveFlights(): Observable<Flight[]>;
  addFlight(
    flight: Flight,
  ): Observable<null> /* QUESTION: return null, void or Flight ? */;
}