import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

private errorsSubject = new BehaviorSubject<string[]>([]);
errors$: Observable<string[]> = this.errorsSubject.asObservable();

constructor() { 
  console.log('Messages service instance created');
}

error(...errors: string[]){
  this.errorsSubject.next(errors);
}

}
