import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  content = [{ page: "extrato" }, { page: "pagamento" }];
  ngOnInit() {
    for (let item in this.content) {
      let node = document.createElement("script");
      node.src = `http://localhost:8080/${this.content[item].page}/main.js`;
      document.body.appendChild(node);
    }
  }
}
