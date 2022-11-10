import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from 'core/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MergedRouterStateSerializer } from 'core/reducers/router-state/merged-route-serialzer';
import { RouterEffect } from 'core/reducers/router-state/router.effects';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'core/core.module';
import { CountryService } from 'shared/services/country.service';
import { CustomerService } from 'shared/services/customer.service';
import { EventService } from 'shared/services/event.service';
import { IconService } from 'shared/services/icon.service';
import { NodeService } from 'shared/services/node.service';
import { PhotoService } from 'shared/services/photo.service';
import { ProductService } from 'shared/services/product.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule,
        CoreModule,
        
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
          autoPause: true
        }),
        EffectsModule.forRoot([RouterEffect]),

        StoreRouterConnectingModule.forRoot({
          stateKey: 'router',
          serializer: MergedRouterStateSerializer
        }),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, LayoutUtilsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
