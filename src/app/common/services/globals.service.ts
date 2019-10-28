import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  isInstructor: boolean = false;
  constructor() { }
}
