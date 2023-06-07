import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import routerActions from 'core/reducers/router-state/router.actions';
import { routerSelectors } from 'core/reducers/router-state/router.selectors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() hideGoBackBtn = false;
  private currentUrl: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(routerSelectors.url)).subscribe(url => this.currentUrl = url)
  }
  get showGoBack() {
    return this.currentUrl.includes('view') && !this.hideGoBackBtn
  }
  goBack() {
    const prevUrl = this.currentUrl.split('/').slice(0, -2)
    this.store.dispatch(routerActions.navigate({ url: prevUrl }))
  }
}
