import { Injectable } from '@angular/core';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sortData:Log = new Log();
  constructor() { }
}
