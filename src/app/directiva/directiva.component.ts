import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  selector: "app-directiva",
  templateUrl: "./directiva.component.html",
  styleUrls: ["./directiva.component.css"]
})
export class DirectivaComponent implements OnInit {
  listOfCourses: string[] = ["TypeScript", "JavaScript", "Java", "C#", "PHP"];
  enable: boolean = true;
  courses: Course[];

  constructor(private courseService: CourseService) {}

  setEnabled(): void {
    this.enable = this.enable == false ? true : false;
  }

  ngOnInit() {
    this.courseService
      .getCourses()
      .subscribe(courses => (this.courses = courses));
  }
}
