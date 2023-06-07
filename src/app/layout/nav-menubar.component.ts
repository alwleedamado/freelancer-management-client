import { Store, select } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuService } from './app.menu.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { routerNavigatedAction } from '@ngrx/router-store';
import { AppState } from 'core/reducers';
import { routerSelectors } from 'core/reducers/router-state/router.selectors';
import { navMenuService } from './service/nav-menu.service';
import { statics } from 'pages/freelancer/freelancer.statics';

@Component({
  selector: 'app-nav-menubar',
  template: `
 <p-menubar [model]="menu"></p-menubar>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class NavMenubarComponent implements OnInit, OnDestroy {
  menu: any[] = []
  
  navMenuSubscription;
  constructor(private menuService: navMenuService,private cdr: ChangeDetectorRef, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.navMenuSubscription = this.menuService.navMenu$.subscribe(menu => {
      this.menu = menu;
      this.cdr.markForCheck();
    })
  }

  ngOnDestroy(): void {
    if (this.navMenuSubscription)
      this.navMenuSubscription.unsubscribe()
  }
}
