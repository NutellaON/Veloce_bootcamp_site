import { Injectable } from '@angular/core';
import { Subject , Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TotalCountService {

  private totalCountSubject: Subject<number> = new Subject<number>();

  constructor() { }

  setTotalCount(count: number): void {
    this.totalCountSubject.next(count);
  }

  getTotalCount(): Observable<number> {
    return this.totalCountSubject.asObservable();
  }

}
