import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './models/Person.model';
import { faker } from '@faker-js/faker'
import { select, Store } from '@ngrx/store';
import { AppState } from './store';
import { PersonAll, PersonDelete, PersonNew, PersonUpdate } from './store/person.actions';

import * as fromPersonSelectors from './store/person.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-basic';
  people$?: Observable<Person[]>

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    // this.people$ = this.store.pipe(select('people'))
    this.people$ = this.store.pipe(select(fromPersonSelectors.selectAll))
    this.store.dispatch(PersonAll({}))
  }

  addNew(): void {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round( Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    }
    this.store.dispatch(PersonNew({person}))
  }

  update(p: Person): void {
    let person = {...p}
    person.name = faker.name.findName(),
    person.address = faker.address.streetAddress(),
    person.city = faker.address.city(),
    person.country = faker.address.country(),
    person.age = Math.round( Math.random() * 100)

    // this.store.dispatch(PersonUpdate({person}))
    this.store.dispatch(PersonUpdate({id: p._id!, changes: p}))
  }

  delete(p: Person): void {
    this.store.dispatch(PersonDelete({id: p._id!.toString()}))
  }
}
