import { Action, createAction, props } from '@ngrx/store';
import { Person } from '../models/Person.model';

export enum PersonActionTypes {
    PERSON_ALL = '[PERSON_ALL] Get all people',
    PERSON_NEW = '[PERSON_NEW] Add new people',
    PERSON_UPDATE = '[PERSON_UPDATE] Update a person',
    PERSON_DELETE = '[PERSON_DELETE] Delete a person',
}

// export class PersonAll implements Action {
//     readonly type = PersonActionTypes.PERSON_ALL
// }

// export class PersonNew implements Action {
//     readonly type = PersonActionTypes.PERSON_NEW
//     constructor(public payLoad: {person: Person}){ }
// }

// export class PersonUpdate implements Action {
//     readonly type = PersonActionTypes.PERSON_UPDATE
//     constructor(public payLoad: {person: Person}){ }
// }

// export class PersonDelete implements Action {
//     readonly type = PersonActionTypes.PERSON_DELETE
//     constructor(public payLoad: {id: string}){ }
// }

//export type PersonActions = PersonAll | PersonNew | PersonUpdate | PersonDelete


export const PersonAll = createAction(PersonActionTypes.PERSON_ALL, props<{error?: any}>())
export const PersonNew = createAction(PersonActionTypes.PERSON_NEW, props<{person: Person}>())
// export const PersonUpdate = createAction(PersonActionTypes.PERSON_UPDATE, props<{person: Person}>())
export const PersonUpdate = createAction(PersonActionTypes.PERSON_UPDATE, props<{id: string, changes: Partial<Person>}>())
export const PersonDelete = createAction(PersonActionTypes.PERSON_DELETE, props<{id: string}>())
