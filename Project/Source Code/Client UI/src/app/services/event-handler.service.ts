import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  private courseData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  setCourseValue(val: any): void{
    this.courseData.next(val);
  }

  getCourseValue(): Observable<any>{
    return this.courseData.asObservable();
  }
}
