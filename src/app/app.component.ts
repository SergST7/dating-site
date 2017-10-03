import {Component, OnInit} from '@angular/core';
import {Model} from "./models";
import {ModelsService} from "./models.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  models: Model[] = [];

  constructor(private modelsService: ModelsService) {}

  ngOnInit(){
    this.models = this.modelsService.getAll();
  }
}
