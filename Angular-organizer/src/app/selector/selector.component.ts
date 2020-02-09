import { Component, OnInit } from '@angular/core';
import { DateService } from '../shared/data.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

  constructor(public dateService: DateService) { }

  go(dir: number) {
    this.dateService.changeMonth(dir)
  }

}
