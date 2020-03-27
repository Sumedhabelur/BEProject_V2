import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  @Input() notes = [];

  constructor() { }

  ngOnInit() { }
}
