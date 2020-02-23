import { Component, OnInit } from "@angular/core";
import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html"
})
export class FormComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  private titulo: string = "Crear Cliente";

  constructor(private clientService: ClienteService, private router: Router) {}

  public create(): void {
    this.clientService
      .create(this.cliente)
      .subscribe(resp => this.router.navigate(["/clientes"]));
  }

  ngOnInit() {}
}
