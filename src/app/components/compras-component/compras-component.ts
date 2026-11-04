import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Compra } from '../../models/compra';
import { ServiceLogin } from '../../services/service.login';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-compras-component',
  standalone: false,
  styleUrl: './compras-component.css',
  templateUrl: './compras-component.html',
})
export class ComprasComponent implements OnInit{
  public compras! : Array<Compra>;
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceLogin,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ){}
  async ngOnInit(): Promise<void> {
    this.compras = await this._service.obtenerComprasAync();
    this._cdr.detectChanges()
  }

  generarDocumento() : void {
    let  documento : jsPDF = new jsPDF();
    documento.setFontSize(18);
    documento.text("Mi documento", 10, 10);
    const headers = [["Id Cubo", "Id Pedido","Usuario","Fecha Pedido"]];
    autoTable(documento,{
      head: headers,
      body: this.compras.map(compra => Object.values(compra)),
      startY: 20
    })
    documento.save("compras.pdf")
  }
}
