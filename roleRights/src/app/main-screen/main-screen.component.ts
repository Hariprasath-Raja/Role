import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  

  ngOnInit() {
      this.items = [
          {
              label: 'Master',
              items: [
                  {
                      label: 'Role',
                      routerLink: ['/main/role']
                  },
                  {
                      label: 'RoleDetail',
                      routerLink: ['/main/role-detail']
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'UserInfo',
                      routerLink: ['/main/user-info']
                  }
              ]
          },
          {
              label: 'Menu',
              items: [
                  {
                      label: 'GateIn',
                      routerLink: ['/main/gate-in']
                  },
                  {
                      label: 'GateOut',
                      routerLink: ['/main/gate-out']
                  },
                  {
                      label: 'State',
                      routerLink: ['/main/state']
                  },
                  {
                      label: 'Country',
                      routerLink: ['/main/country']
                  }
              ]
          }
      ];
  }
}
