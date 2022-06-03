import { Component, OnInit } from '@angular/core';
import { InfoPagina } from '../../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _infoService: InfoPagina) { }

  ngOnInit(): void {
  }

}
