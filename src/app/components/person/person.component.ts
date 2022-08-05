import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/Person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person?: Person
  @Output() delete: EventEmitter<Person> = new EventEmitter<Person>()
  @Output() update: EventEmitter<Person> = new EventEmitter<Person>()

  constructor() { }

  ngOnInit(): void {
  }

}
