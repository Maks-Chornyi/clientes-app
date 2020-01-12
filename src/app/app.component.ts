import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "clientes-app";
  curso: string = "spring 5 and angular 7";
  author: string = "Maks Chornyi";
}
