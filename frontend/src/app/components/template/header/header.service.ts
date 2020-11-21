import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Header } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<Header>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  });

  constructor() {}

  get headerData(): Header {
    return this._headerData.value;
  }

  set headerData(header: Header) {
    this._headerData.next(header);
  }
}
