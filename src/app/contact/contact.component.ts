import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../notification.service';
import { $ } from 'protractor';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public users: any[] = [];
	public file: any;
	public user = new User("", "");

	constructor(private _homeService: HomeService,
		private router: Router,
		private noti: NotificationService) {
	}

	ngOnInit(): void {
		// this._homeService.getUsers().subscribe(res => {
		//   this.users = res;
		// });

		this._homeService.Get().subscribe(res => {
			if(this.users.length <= 0){
				this.users = res;
			}
		});
	}

	OpenAddNewUserModal(): void{
		this.user = new User("", "");
	}

	DbClickFunc(name: string): void {
		// this.router.navigate(['/user-detail/' + name], {
		//   queryParams: {

		//   }
		// });
		this.noti.showSuccess("Hello " + name, "Success");

	}
	Upload(e: Event): void {
		this.file = e;
	}

	AddNewUser(): void {
		this.users.push(this.user);
		this.user = new User("", "");
		document.getElementById('city')?.focus();
	}

	SelectUser(user: User): void{
		this.user = user;
	}

	UpdateUser(): void {
		console.log(this.users);
	}
}

// export interface User {
//   name!: string;
//   city!: string;
// }

export class User {
	name: string;
	city: string;
	constructor(
		name: string,
		city: string
	) {
		this.name = name;
		this.city = city;
	}
}
