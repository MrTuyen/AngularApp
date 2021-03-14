import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public users: any[] = [];

  constructor(private _homeService: HomeService) {
   
  }

  ngOnInit(): void {
    this._homeService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

}

export interface User{
  name: string;
  city: string;
}
