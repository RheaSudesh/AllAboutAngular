import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>('../data.json');

  }
  
}
