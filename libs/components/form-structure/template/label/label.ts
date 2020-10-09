import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ColumnsService } from '../service/columns.service';

@Component({
  selector: 'sof-form-label',
  templateUrl: './label.html'
})
export class LabelComponent implements OnInit {
  
  
 
  @Input() public  columns: number = 1;
  
  @HostBinding('class') public labelClasses: String;



  constructor(private data:ColumnsService) { }

  ngOnInit() {
    this.data.currentColumns.subscribe(columns => { 
      this.setColumns(columns);
    })
  }



  setColumns(columns){
    this.columns = columns;
    switch (+this.columns) {
      case 0:  this.labelClasses = "control-label";
      break;
      case 1:  this.labelClasses = "col-md-3 control-label";
      break;
      case 2: this.labelClasses = "col-sm-12 col-md-2 col-lg-2 col-xl-2 control-label";
        break;
      case 3: this.labelClasses = "col-sm-12 col-md-2 col-lg-2 col-xl-2 control-label";
        break;
      case 4: this.labelClasses = "col-sm-12 col-md-2 col-lg-1 col-xl-1 control-label";
        break;
      case 6: this.labelClasses = "col-sm-12 col-md-2 col-lg-1 col-xl-1 control-label";
        break;
      default:
      this.labelClasses = "col-md-3 control-label";
        break;
    }
  }
}
