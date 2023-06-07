import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class navMenuService {
    private _menuSubject: Subject<any> = new Subject();

    navMenu$ = this._menuSubject.asObservable()

    onMenuChange(menu) {
        this._menuSubject.next(menu)
    }
}