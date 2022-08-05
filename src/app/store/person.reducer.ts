import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, State } from '@ngrx/store';
import { Person } from '../models/Person.model';
//import * as fromPersonActions from './person.actions';
import * as PersonActions from './person.actions';

// export const initialState: Person[] = []

// export function reducer(state = initialState, action: fromPersonActions.PersonActions){
//     switch(action.type) {
//         case fromPersonActions.PersonActionTypes.PERSON_ALL:
//             return state

//         case fromPersonActions.PersonActionTypes.PERSON_DELETE:
//             return state.filter(p => p._id != action.payLoad.id)

//         case fromPersonActions.PersonActionTypes.PERSON_NEW:
//             return state.concat([action.payLoad.person])

//         case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
//             let people = state.slice()
//             let i = people.findIndex(p => p._id == action.payLoad.person._id)
//             if(i>=0)
//                 people[i] = action.payLoad.person
//             return people

//         default:
//             return state
//     }
// }

// ----------------------------------------------------------------------

// export const reducer = createReducer(
//     initialState,
//     on(PersonActions.PersonDelete, (state: Person[], action) => {
//         return state.filter(p => p._id != action.id)
//     }),
//     on(PersonActions.PersonNew, (state: Person[], action) => {
//         return state.concat([action.person])
//     }),
//     on(PersonActions.PersonUpdate, (state: Person[], action) => {
//         let people = state.slice()
//         let i = people.findIndex(p => p._id == action.person._id)
//         if(i>=0)
//             people[i] = action.person
//         return people
//     }),
//     on(PersonActions.PersonAll, (state: Person[]) => {
//         return state
//     })
// )

export interface PeopleState extends EntityState<Person> {

}

export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
    selectId: (p: Person) => p._id!
})
export const initialState: PeopleState = peopleAdapter.getInitialState([])

export const reducer = createReducer(
    initialState,
    on(PersonActions.PersonDelete, (state: PeopleState, action) => {
        return peopleAdapter.removeOne(action.id, state)
    }),
    on(PersonActions.PersonNew, (state: PeopleState, action) => {
        return peopleAdapter.addOne(action.person, state)
    }),
    on(PersonActions.PersonUpdate, (state: PeopleState, action) => {
        return peopleAdapter.updateOne(action, state)
    }),
    on(PersonActions.PersonAll, (state) => {
        return state
    })
)