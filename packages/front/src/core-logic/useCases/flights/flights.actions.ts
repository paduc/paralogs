import { createStandardAction } from "typesafe-actions";
import { Flight } from "@paralogs/shared";
import { ErrorFromAction } from "../../utils";

export const flightActions = {
  retreiveFlightsRequest: createStandardAction("RETREIVE_FLIGHTS_REQUEST")(),
  retreiveFlightsSuccess: createStandardAction("RETREIVE_FLIGHTS_SUCCESS")<Flight[]>(),
  retreiveFlightsError: createStandardAction("RETREIVE_FLIGHTS_ERROR")<ErrorFromAction>(),

  addFlight: createStandardAction("ADD_FLIGHT")<Flight>(),

  // QUESTION: addedFlight action has been remove, I added {isSaving: false} to retreiveFlightsSuccess reducer
  // not sure if this is the right way

  // addedFlight: createStandardAction("ADDED_FLIGHT")(),

  addFlightFailed: createStandardAction("ADD_FLIGHT_FAILED")<ErrorFromAction>(),

  showAddFlightForm: createStandardAction("SHOW_ADD_FLIGHT_FORM")(),
  hideAddFlightForm: createStandardAction("HIDE_ADD_FLIGHT_FORM")(),
};