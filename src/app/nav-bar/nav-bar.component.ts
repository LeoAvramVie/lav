import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuIsClicked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickMenu(){
    this.menuIsClicked = !this.menuIsClicked;
    this.menuIsClicked ? this.router.navigateByUrl('menu') : this.router.navigateByUrl('')
  }
}
