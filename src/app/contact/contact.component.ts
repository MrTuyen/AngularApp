import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../notification.service';

declare var $: any

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	public users: any[] = [];
	public file: any;
	public user = new User("", "");
	public updateuser = new User("","");

	constructor(private _homeService: HomeService,
		private router: Router,
		private noti: NotificationService) {
	}

	ngOnInit(): void {
		// this._homeService.getUsers().subscribe(res => {
		//   this.users = res;
		// });

		this._homeService.get().subscribe(res => {
			if(this.users.length <= 0){
				this.users = res;
			}
		});
	}

	OpenAddNewUserModal(): void{
		
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
		this.noti.showSuccess("Add successfully", "Success");
		$("#addUser").modal("hide");
	}

	SelectUser(user: User): void{
		this.updateuser = { ...user }
	}

	UpdateUser(user: User): void {
		this.users.forEach((element: User) => {
			if(element.city === user.city)
			{
				element.name = user.name;
			}
		});
		this.noti.showSuccess("Update successfully", "Success");
		$("#updateUser").modal("hide");
	}
}

// export interface User {
//   name!: string;
//   city!: string;
// }

export class User 
{
	name: string;
	city: string;
	
	constructor(name: string, city: string) 
	{
		this.name = name;
		this.city = city;
	}
}
