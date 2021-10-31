import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit {
  menuIsClicked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickMenu(){
    this.menuIsClicked = !this.menuIsClicked;
    this.menuIsClicked ? this.router.navigateByUrl('') : this.router.navigateByUrl('menu')
  }

}
