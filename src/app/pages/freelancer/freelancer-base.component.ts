import { Component, OnDestroy, OnInit } from '@angular/core';
import { navMenuService } from 'app/layout/service/nav-menu.service';
import { statics } from './freelancer.statics';

const navMenu = [
  {
    label: statics.components.SpecialityType, routerLink: [statics.urls.root, statics.urls.SpecialityType]
  }
]

@Component({
  selector: 'app-freelancer-base',
  template: `<router-outlet></router-outlet>`
})
export class FreelancerBaseComponent implements OnInit, OnDestroy {

  constructor(private menuService: navMenuService) {
    menuService.onMenuChange(navMenu)
  }
  
  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.menuService.reset();
  }

}
