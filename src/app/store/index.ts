import { Person } from "../models/Person.model"
import { ActionReducerMap } from '@ngrx/store'
import * as fromPersonReducer from "./person.reducer"

export interface AppState {
    // people: Person[]
    people: fromPersonReducer.PeopleState
}

export const appReducers: ActionReducerMap<AppState> = {
    people: fromPersonReducer.reducer
}