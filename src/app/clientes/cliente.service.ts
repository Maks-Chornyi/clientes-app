import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  private urlEndPoint: string = "http://localhost:8085/api/clientes";
  private httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });

  constructor(private http: HttpClient) {}

  public getClientes(): Observable<Cliente[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map(response => response as Cliente[]));
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {
      headers: this.httpHeaders
    });
  }
}
