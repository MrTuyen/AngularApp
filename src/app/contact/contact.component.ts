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
	public products: any[] = [];
	public users: any[] = [];
	public file: any;
	public user = new User("", "");
	public updateuser = new User("", "");
	public product: any = [];

	constructor(private _homeService: HomeService,
		private router: Router,
		private noti: NotificationService) {
	}

	ngOnInit(): void {
		this._homeService.getUsers().subscribe(res => {
			this.products = res.data;
		});

		// this._homeService.get().subscribe(res => {
		// 	if(this.users.length <= 0){
		// 		this.users = res;
		// 	}
		// });
	}

	OpenAddNewUserModal(): void {

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

	AddProduct(): void {

		const data = {
			Name: this.product.Name,
			Price: this.product.Price
		};

		var result = this._homeService.create(data).subscribe(res => {
			this.products.push(res.data);
		});

		this.noti.showSuccess("Add successfully", "Success");
		$("#addUser").modal("hide");
	}

	SelectUser(user: User): void {
		this.updateuser = { ...user }
	}

	UpdateUser(user: User): void {
		this.users.forEach((element: User) => {
			if (element.city === user.city) {
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

export class User {
	name: string;
	city: string;

	constructor(name: string, city: string) {
		this.name = name;
		this.city = city;
	}
}

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
