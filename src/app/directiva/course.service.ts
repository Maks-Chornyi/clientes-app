import { Injectable } from "@angular/core";
import { Course } from "./course";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  private urlEndPoint: string = "http://localhost:8085/api/courses";

  constructor(private http: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.http.get(this.urlEndPoint).pipe(map(resp => resp as Course[]));
  }
}
