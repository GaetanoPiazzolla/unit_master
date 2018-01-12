import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Unit } from '../unit'
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unitdetail',
  templateUrl: './unitdetail.component.html',
  styleUrls: ['./unitdetail.component.css']
})
export class UnitdetailComponent implements OnInit {

  @Input() unit: Unit;

  id: string;
  message: string;
  code: number;
  newconf : string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private unitService: UnitService,
  ) { }

  ngOnInit() {
    this.getUnit();
  }

  handleSuccess(data): void {
    this.code = data.code;
    this.message = data.description;
    this.getUnit();
  }

  handleError(err): void {
    this.code = err.error.code;
    this.message = err.error.description;
  }

  getUnit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.unitService.getUnit(id)
      .subscribe(arg => { this.unit = arg; console.log('get unit finish'); });
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.unitService.updateUnit(this.id,this.unit.conf).subscribe(data => {
      this.handleSuccess(data);
    },
      err => {
        this.handleError(err);
      });
  }

  insert() : void {
    this.unitService.insertUnit(this.newconf).subscribe(data => {
      this.handleSuccess(data);
    },
      err => {
        this.handleError(err);
      });
  }

  restart(): void {
    this.unitService.restartUnit(this.id).subscribe(data => {
      this.handleSuccess(data);
    },
      err => {
        this.handleError(err);
      });
  }

  start(): void {
    this.unitService.startUnit(this.id).subscribe(data => {
      this.handleSuccess(data);
    },
      err => {
        this.handleError(err);
      });
  }

  stop(): void {
    this.unitService.stopUnit(this.id).subscribe(data => {
      this.handleSuccess(data);
    },
      err => {
        this.handleError(err);
      });
  }

  enable(): void {
    this.unitService.enableUnit(this.id)
      .subscribe(data => {
        this.handleSuccess(data);
      },
      err => {
        this.handleError(err);
      });
  }

  disable(): void {
    this.unitService.disableUnit(this.id)
      .subscribe(data => {
        this.handleSuccess(data);
      },
      err => {
        this.handleError(err);
      });
  }

  remove(): void {
    this.unitService.removeUnit(this.id)
      .subscribe(data => {
        this.handleSuccess(data);
      },
      err => {
        this.handleError(err);
      });
  }

 
}

