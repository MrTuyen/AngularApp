import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../notification.service';
import { MyCurrencyFormatterDirective } from '../Directives/digitDecimalNumber.directive';

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
	public currentProduct: any = [];
	public product: any = [];

	constructor(private _homeService: HomeService,
		private router: Router,
		private noti: NotificationService) {
	}

	ngOnInit(): void {
		this.getAllProduct();

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

	getAllProduct(): void{
		this._homeService.getUsers().subscribe(res => {
			this.products = res.data;
		}, error => {
			this.noti.showError(error.message, "Error");
		});
	}

	addProduct(): void {
		const data = {
			Name: this.product.Name,
			Price: this.product.Price
		};

		var result = this._homeService.create(data).subscribe(res => {
			this.products.push(res.data);
			this.noti.showSuccess("Add successfully", "Success");
		}, error => {
			this.noti.showError(error.message, "Error");
		});
		$("#addUser").modal("hide");
	}

	selectProduct(id: Number): void {
		// this.updateuser = { ...user }
		var result = this._homeService.getById(id).subscribe(res => {
			this.currentProduct = res.data;
		}, error => {
			this.noti.showError(error.message, "Error");
		});
	}

	updateProduct(id: Number, product: Product): void {
		// this.users.forEach((element: User) => {
		// 	if (element.city === user.city) {
		// 		element.name = user.name;
		// 	}
		// });

		var result = this._homeService.update(id, product).subscribe(res => {
			this.getAllProduct();
		});

		this.noti.showSuccess("Update successfully", "Success");
		$("#updateUser").modal("hide");
	}

	deleteProduct(id: Number): void{
		var result = this._homeService.delete(id).subscribe(res => {
			this.getAllProduct();
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
