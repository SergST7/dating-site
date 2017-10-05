import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Model} from "./models";
import {ModelsService} from "./models.service";
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";

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

  constructor(private modelsService: ModelsService,
              private vcr: ViewContainerRef,
              private mdDialog: MdDialog) {}

  ngOnInit(){
    this.models = this.modelsService.getAll();
  }

  showDetails(model: Model){
    // 1. set selected models
    this.selectedModel = model;
    // 2. open sidenav
    this.sidenav.open();
  }

  addMessage(){
    // Open dialog to add add message
    // 1. create dialog config
    const dialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = this.vcr;
    // 2. open dialog
    // 3. pass selected model to dialog
  }
}
