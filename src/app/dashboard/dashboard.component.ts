import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private notify: NotificationService) { }

  ngOnInit(): void {
  }

  Download(): void{
    this.notify.showSuccess("Download successful!", "Thành công");
  }
}
