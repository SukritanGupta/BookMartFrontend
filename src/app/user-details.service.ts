import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  userName=new BehaviorSubject<string>("");
  password=new BehaviorSubject<string>("");
  constructor() { }
}
