import { Epic } from "redux-observable";
import { of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { RootAction } from "../../../store/root-action";
import { RootState, Dependencies } from "../../../reduxStore";
import { authActions } from "../auth.actions";

export const loggoutEpic: Epic<RootAction, RootAction, RootState, Dependencies> = (
  action$,
  state$,
  { authGateway: apiGateway },
) =>
  action$.pipe(
    filter(isActionOf(authActions.loggout)),
    switchMap(() =>
      apiGateway.loggout().pipe(
        map(authActions.loggoutSuccess),
        catchError(err => of(authActions.loggoutError(err))),
      ),
    ),
  );