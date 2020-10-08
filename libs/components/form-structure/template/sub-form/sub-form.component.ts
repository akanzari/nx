import { Component, OnInit, HostBinding, Input,  ElementRef, Output, EventEmitter } from '@angular/core';
import { ColumnsService } from '../service/columns.service';

@Component({
  selector: 'sof-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.css'],
  providers: [ColumnsService]
})
export class SubFormComponent implements OnInit {

  constructor(private data:ColumnsService, private _host: ElementRef) { }

  public columns: number = 1;

  @Output() columnChange = new EventEmitter();

  @Input() get column(){return this.columns}

  set column(column){
    this.columns = column;
    this.columnChange.emit(this.columns);
    this.data.changeColumns(this.columns);
  }

  @Input() title:string;
  @Input() border:boolean = false;
  @Input() flexible : boolean = false;
  @HostBinding('class') public classes: String = '';

  ngOnInit() {
    this.data.changeColumns(this.columns);
    this.setWidth();
    this.data.currentColumns.subscribe(columns => {this.columns = columns;
      this.setWidth();
    });
  }

  setWidth(){
    
    switch (+this.columns) {
      case 0 :this.classes = "col-lg-11 offset-lg-1";
       break;
      case 1:  this.classes = "col-lg-9 offset-lg-1";

        break;
      default:
        this.classes = "col-12"
        break;
    }
  
  }
 
  get borderStyle(){
    switch (+this.columns) {
      case 0 : return  this.border == true ? "border padding-15 border-radius bg-white marging-2" : "padding-15 marging-2";
  

      default:
      return  this.border == true ? "border padding-15 border-radius bg-white marging-2" : "marging-2";
      
    
    }
  }
}
