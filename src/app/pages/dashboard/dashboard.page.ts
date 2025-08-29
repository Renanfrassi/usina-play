import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteMock } from 'src/app/services/cliente-mock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {

  cliente: any = {};
  clienteId: number | null = null;

  constructor(private _clienteMock: ClienteMock,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.clienteId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.clienteId) {
      this.cliente = this._clienteMock.getClientePorId(1);
      return;
    }
    this.cliente = this._clienteMock.getClientePorId(this.clienteId);

  }

  getCorPorNivel(nivel: string): string {

    let cor: any = {
      rosa: "color: pink;",
      roxo: "color: purple;",
      verde: "color: green;",
    }

    return cor[nivel] ? cor[nivel] : "color: white;";

  }

}
