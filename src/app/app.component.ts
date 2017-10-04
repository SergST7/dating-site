import {Component, OnInit, ViewChild} from '@angular/core';
import {Model} from "./models";
import {ModelsService} from "./models.service";
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  models: Model[] = [];
  selectedModel: Model;
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private modelsService: ModelsService) {}

  ngOnInit(){
    this.models = this.modelsService.getAll();
  }

  showDetails(model: Model){
    // 1. set selected models
    this.selectedModel = model;
    // 2. open sidenav
    this.sidenav.open();
  }
}
