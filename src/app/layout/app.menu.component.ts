import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

import { statics as FreelancersStatics } from 'freelancer/freelancer.statics'

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    {
                        label: FreelancersStatics.moduleName,
                        icon: 'pi pi-fw pi-user',
                        routerLink: [FreelancersStatics.urls.root]
                    },

                    {
                        label: FreelancersStatics.labels.SpecialityType,
                        icon: 'pi pi-fw pi-user',
                        routerLink: [FreelancersStatics.urls.root, FreelancersStatics.urls.SpecialityType]
                    },
                    {
                        label: FreelancersStatics.labels.Team,
                        icon: 'pi pi-fw pi-user',
                        routerLink: [FreelancersStatics.urls.root, FreelancersStatics.urls.Team]
                    },
                    {
                        label: FreelancersStatics.labels.Project,
                        icon: 'pi pi-fw pi-user',
                        routerLink: [FreelancersStatics.urls.root, FreelancersStatics.urls.Project]
                    },
                ]
            }
        ];
    }
}
