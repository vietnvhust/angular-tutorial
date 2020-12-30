import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {

  todo = ["Học TypeScript", "Học Angular 4", "Học HTML5"]; // Khai báo mảng dữ liệu

  is_available = false;

  constructor() { }

  ngOnInit(): void {
  }

}
