import { Component, OnInit } from '@angular/core';

import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unitmaster',
  templateUrl: './unitmaster.component.html',
  styleUrls: ['./unitmaster.component.css']
})
export class UnitmasterComponent implements OnInit {
  units: Unit[];
  filter : string;
  
  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.getUnits();
  }

  getUnits(): void {
    this.unitService.getUnits()
    .subscribe(arg => this.units = arg);
  }

  getEnabled() : void {
    this.unitService.getUnitsEnabled()
    .subscribe(arg => this.units = arg);
  }

  getDisabled() : void{
    this.unitService.getUnitsDisabled()
    .subscribe(arg => this.units = arg);
  }

  getRunning(): void{
    this.unitService.getUnitsRunning()
    .subscribe(arg => this.units = arg);
  }
}