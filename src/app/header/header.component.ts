import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

declare function hamburgerMenu(): void;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    hamburgerMenu();
  }
}
