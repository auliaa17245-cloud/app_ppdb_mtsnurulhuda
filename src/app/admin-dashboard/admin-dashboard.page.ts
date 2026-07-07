import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
  standalone: false
})
export class AdminDashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    const login = localStorage.getItem('login');

    if (login !== 'true') {
      this.router.navigate(['/admin-login']);
    }

  }

}