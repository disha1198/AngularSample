import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students = [
    {id:101, name: "alex", description: "alex details", email: "alex@xyz.com"},
    {id:201, name: "ana", description: "ana details", email: "ana@xyz.com"},
    {id:301, name: "christian", description: " christian details", email: "christian@xyz.com"},
    {id:401, name: "jon", description: "jon details", email: "@jon@xyz.com"}
  ]

  constructor() { }
  
  public getStudents(): Array<{id,name, description, email}>{
    return this.students;
  }

  public createStudent(students: {id,name, description, email}){
    this.students.push
  }
}
