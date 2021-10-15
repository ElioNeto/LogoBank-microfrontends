import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  ngOnInit() {
    const extrato = document.createElement("script");
    extrato.src = "http://localhost:8080/extrato/main.js";
    document.body.appendChild(extrato);
    const pagamento = document.createElement("script");
    pagamento.src = "http://localhost:8080/pagamento/main.js";
    document.body.appendChild(pagamento);
    const header = document.createElement("script");
    header.src = "http://localhost:8080/header/main.js";
    document.body.appendChild(header);
  }
}
