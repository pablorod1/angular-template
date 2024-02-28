import { Component } from '@angular/core';
import { regularData, User } from './regular-data';

@Component({
  selector: 'app-regular-tables',
  templateUrl: './regular-tables.component.html',
  styleUrl: './regular-tables.component.css'
})
export class RegularTablesComponent {
  regularData: User[] = regularData;
}
