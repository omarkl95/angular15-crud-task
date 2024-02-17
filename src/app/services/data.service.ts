import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = 'http://localhost:3000/posts';

  constructor() { }
}
