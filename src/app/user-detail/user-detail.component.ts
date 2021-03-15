import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location) 
    { }

  ngOnInit(): void {
  }

  id = this.route.snapshot.paramMap.get('id');

  goBack(): void {
    this.location.back();
  }
}
