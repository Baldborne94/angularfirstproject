import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos-list-element',
  templateUrl: './todos-list-element.component.html',
  styleUrls: ['./todos-list-element.component.scss']
})
export class TodosListElementComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => params.get('id'));
  }

}
