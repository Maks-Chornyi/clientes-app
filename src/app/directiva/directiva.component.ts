import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directiva",
  templateUrl: "./directiva.component.html",
  styleUrls: ["./directiva.component.css"]
})
export class DirectivaComponent implements OnInit {
  listOfCourses: string[] = ["TypeScript", "JavaScript", "Java", "C#", "PHP"];
  enable: boolean = true;
  constructor() {}

  setEnabled(): void {
    this.enable = this.enable == false ? true : false;
  }

  ngOnInit() {}
}
