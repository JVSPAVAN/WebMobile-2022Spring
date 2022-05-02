import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  private courseData: BehaviorSubject<any> = new BehaviorSubject(null);
  private loginReset: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor() { }

  setCourseValue(val: any): void{
    this.courseData.next(val);
  }

  getCourseValue(): Observable<any>{
    return this.courseData.asObservable();
  }

  setLoginReset(state: any): void {
    this.loginReset.next(state);
  }
  getLoginReset(): Observable<any> {
    return this.loginReset.asObservable();
  }
}
