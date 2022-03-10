import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../notification.service';
import { MyCurrencyFormatterDirective } from '../Directives/digitDecimalNumber.directive';

declare var $: any

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
	public products: any[] = [];
	public users: any[] = [];
	public file: any;
	public user: any = [];
	public currentUser: any = [];
	public product: any = [];

	constructor(
		private _userService: UserService,
		private router: Router,
		private noti: NotificationService
	) {}

	ngOnInit(): void {
		this.getAllUser();

		// this._homeService.get().subscribe(res => {
		// 	if(this.users.length <= 0){
		// 		this.users = res;
		// 	}
		// });
	}

	openAddNewUserModal(): void {

	}

	dbClickFunc(name: string): void {
		// this.router.navigate(['/user-detail/' + name], {
		//   queryParams: {

		//   }
		// });
		this.noti.showSuccess("Hello " + name, "Success");

	}
	upload(e: Event): void {
		this.file = e;
	}

	getAllUser(): void{
		this._userService.getUsers().subscribe(res => {
			this.users = res.data;
		}, error => {
			this.noti.showError(error.message, "Error");
		});
	}

	addUser(): void {
		const data = {
			Name: this.user.Name,
			Email: this.user.Email
		};

		if(data.Name == null) {
			this.noti.showError("Name can not be empty", "Error");
			return;
		}

		if(data.Email == null) {
			this.noti.showError("Email can not be empty", "Error");
			return;
		}

		var result = this._userService.create(data).subscribe(res => {
			this.users.push(res.data);
			this.noti.showSuccess("Add successfully", "Success");
		}, error => {
			this.noti.showError(error.message, "Error");
		});
		$("#addUser").modal("hide");
	}

	selectUser(id: Number): void {
		// this.updateuser = { ...user }
		var result = this._userService.getById(id).subscribe(res => {
			this.currentUser = res.data;
		}, error => {
			this.noti.showError(error.message, "Error");
		});
	}

	updateUser(id: Number, user: User): void {
		// this.users.forEach((element: User) => {
		// 	if (element.city === user.city) {
		// 		element.name = user.name;
		// 	}
		// });

		var result = this._userService.update(id, user).subscribe(res => {
			this.getAllUser();
		});

		this.noti.showSuccess("Update successfully", "Success");
		$("#updateUser").modal("hide");
	}

	deleteUser(id: Number): void{
		var result = this._userService.delete(id).subscribe(res => {
			this.getAllUser();
		}, error => {
			this.noti.showError(error.message, "Error");
		});

		this.noti.showSuccess("Delete successfully", "Success");
	}
}

// export interface User {
//   name!: string;
//   city!: string;
// }

// export class User {
// 	name: string;
// 	city: string;

// 	constructor(name: string, city: string) {
// 		this.name = name;
// 		this.city = city;
// 	}
// }

export interface ProductResponse {
	rs: string,
	code: number,
	data: Product[]
}

export interface Product {
	Id: number;
	Name: string;
	Price: string;

	// constructor(id: number, name: string, city: string) 
	// {
	// 	this.Id = id;
	// 	this.Name = name;
	// 	this.Price = city;
	// }
}

export interface UserResponse {
	rs: string,
	code: number,
	data: User[]
}

export interface User {
	Id: number;
	Name: string;
	Email: string;
}

