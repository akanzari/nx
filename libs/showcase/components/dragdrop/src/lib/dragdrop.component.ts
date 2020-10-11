import { Component, OnInit, Inject } from '@angular/core';
import { AlTableConfig } from 'ng-softilys/table';
import { HighlightService, DataService } from '@showcase/service';

@Component({
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss'],
  providers: [HighlightService, DataService]
})
export class DragDropComponent implements OnInit {

  availableCars: any[];
  selectedCars: any[];
  draggedCar: any;
  persons: any[];
  persons2: any[];
  personsDrop: any[] = [];
  columns: any[];
  tableConf: AlTableConfig = new AlTableConfig();
  tableConf0: AlTableConfig = new AlTableConfig();
  draggedPerson: any;
  message: String = "Drop here."
  isTable: Boolean = true;
  radioValue = 'Table vers Table'
  rowDragged = false

  constructor(private dataservice: DataService, @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.isTable = true;
    this.tableConf.dragName = "persons"
    this.tableConf0.dragName = "persons"
    this.persons = this.dataservice.getAllDtata();
    this.persons2 = this.dataservice.getlazypersons();
    this.columns = [
      { field: 'name', header: 'Nom' },
      { field: 'firstName', header: 'Prénom' },
      { field: 'job', header: 'Profession' },
      { field: 'birthDate', header: 'Date d\'anniversaire', type: 'date', filter: 'DATE', format: 'dd/MM/yyyy', width: '' },
      { field: 'language', header: 'Langue' }
    ];
    this.tableConf.pagination = true;
    this.tableConf.rowsPerPage = 3;
    this.tableConf.rowsPerPageOptions = [3, 5, 10, 20, 30, 50];
    this.tableConf0.pagination = true;
    this.tableConf0.rowsPerPage = 3;
    this.tableConf0.rowsPerPageOptions = [3, 5, 10, 20, 30, 50];
  }

  onRadioClick() {
    if (this.radioValue == 'Table vers Table')
      this.isTable = true
    else this.isTable = false
  }

  dragStart(person: any) {
    setTimeout(() => {
      this.rowDragged = true
    }, 100);
    if (!person.isTrusted) {

      this.draggedPerson = person;
    }
  }

  dragEnd(event) {
    this.draggedPerson = null;
    setTimeout(() => {
      this.rowDragged = false
    }, 100);
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    import { SofDragDropModule } from 'framework-front-softilys';
    imports : [SofDragDropModule ];`
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n // Drag from a table to an other table" +
      "\n &lt;sof-table [dragDrop]='true'  [(data)]=" + "\"" + "persons" + " " + " [(columnsOrdered)]=" + "\"" + "columns" + " " + "[(config)]=" + "\"" + "tableConf" + " " + " totalElements =" + "\"" + "10" + " " + " (onDragStart)=" + "\"" + "dragStart($event)\n" + " " + " (onDragEnd)=" + "\"" + "dragEnd($event)" + "> &lt;/sof-table>" +
      " \n&lt;sof-table [(data)]=" + "\"" + "personsDrop" + " " + " [(columnsOrdered)]=" + "\"" + "columns" + " " + " [(config)]=" + "\"" + "tableConf" + " " +
      " totalElements =" + "\"" + "10" + " " + " sof-drop=" + "\"" + "persons" + " " + " (onDrop)=" + "\"" + "drop($event)\"" + " \n[rowDragged]='rowDragged'" + "> &lt;/sof-table>" + "\n \n \n// Drag from a list to a table" + "\n &lt;ul>\n" +
      "    &lt;li *ngFor=" + "\"" + "let person of persons" + "\"" + " " + "style=" + "\"" + "font-size: 20px" + "\"" + " " + " sof-drag=" + "\"" + "persons" + "\"" + " " + " (onDragStart)=" + "\"" + "dragStart(person)" + "\"" + " " + " (onDragEnd)=" + "\"" + "dragEnd($event)" + "\"" + "\n " +
      "     sof-drop=" + "\"" + "persons" + "\"" + " " + "(onDrop)=" + "\"" + "drop($event)" +
      ">\n" + "      &lt;i class=" + "\"" + "fa fa-arrows fa-1x\"" + " " + " style=" + "\"" + "float:right;margin-top:6px" + "\"" + ">&lt;/i>" +
      "\n" + "            &lt;div>{{person.name}}&lt;/div>\n     &lt;/li>\n  &lt;/ul>\n &lt;sof-table [(data)]=" + "\"" + "personsDrop" + "\"" + " " + " [(columnsOrdered)]=" + "\"" + "columns" + "\"" + " " + "  [(config)]=" + "\"" + "tableConf" + "\"" + " " + "totalElements =" + "\"" + "10" + "\"" + " " + " sof-drop=" + "\"" + "persons" + "\"" + " " + " (onDrop)=" + "\"" + "drop($event)" + "\"" + ">&lt;/sof-table>";
  }

  getTsCode() {
    return "\npersons: any[];\n" +
      "personsDrop: any[] = [];\n" +
      "rowDragged=false \n" +
      "columns: any[];\n" +
      "tableConf: AlTableConfig = new AlTableConfig();\n" +
      "ngOnInit() {\n" +
      "this.persons = this.dataservice.getAllDtata();\n" +
      "this.tableConf.dragName = " + "persons" + ";\n" +
      "this.columns = [\n" +
      " { field: 'name', header: 'Nom' },\n" +
      " { field: 'firstName', header: 'Prénom' },\n" +
      " { field: 'job', header: 'Profession' },\n" +
      " { field: 'birthDate', header: " + "Date d'anniversaire" + "}" + ",\n" +
      "  { field: 'language', header: 'Langue' }\n" +
      "];\n" +
      "}\n" +



      "dragStart(person: any) {" +
      "\n setTimeout(() => {" +
      "\n this.rowDragged=true" +
      "\n  }, 100);" +
      "\n  if (!person.isTrusted) {" +
      "\n    console.log(person)" +
      "\n    this.draggedPerson = person;" +
      "\n  }" +
      "\n }" +





      "\n dragEnd(event) {\n" +
      " this.draggedPerson = null;\n" +
      "\nsetTimeout(() => {" +
      "\nthis.rowDragged=false" +
      "\n}, 100);" +
      "}\n" +
      "drop(event) {\n" +
      "\n setTimeout(() => {" +
      "\n  this.rowDragged=false;" +
      "\n  }, 100);" +
      "let draggedPersonIndex = this.findIndex(this.draggedPerson, this.persons);\n" +
      "if (draggedPersonIndex != -1) {\n" +
      "  this.personsDrop = [...this.personsDrop, this.draggedPerson];\n" +
      " this.persons = this.persons.filter((val, i) => i != draggedPersonIndex);\n" +
      " this.draggedPerson = null;\n" +
      " }\n" +
      "}\n" +
      "findIndex(person: any, persons) {\n" +
      "let index = -1;\n" +
      "for (let i = 0; i < persons.length; i++) {\n" +
      " if (person === persons[i]) {\n" +
      "   index = i;\n" +
      "   break;\n" +
      "  }\n" +
      " }\n" +
      " return index;\n" +
      "}"
  }


  drop(event) {
    setTimeout(() => {
      this.rowDragged = false;
    }, 100);
    if (this.draggedPerson) {
      let draggedPersonIndex = this.findIndex(this.draggedPerson, this.persons);
      if (draggedPersonIndex != -1) {
        // this.personsDrop = [...this.personsDrop, this.draggedPerson];
        this.personsDrop.splice(0, 0, this.draggedPerson)
        this.persons = this.persons.filter((val, i) => i != draggedPersonIndex);
        this.draggedPerson = null;
      } else {
        draggedPersonIndex = this.findIndex(this.draggedPerson, this.persons2);
        this.personsDrop.splice(0, 0, this.draggedPerson)
        this.persons2 = this.persons2.filter((val, i) => i != draggedPersonIndex);
        this.draggedPerson = null;
      }
    }
  }

  findIndex(person: any, persons) {
    let index = -1;
    for (let i = 0; i < persons.length; i++) {
      if (person === persons[i]) {
        index = i;
        break;
      }
    }
    return index;
  }

  SelectAllPre() {
    let code = this.getPrerequis();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentt').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test11';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('tr1').style.height = '184px';
  }

  SelectAll() {
    let code = this.getHtmlCode();
    let codeF;
    var regex = /&lt;/gi;
    codeF = code.replace(regex, "<");
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parent').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test1';
    (textnode as HTMLTextAreaElement).value = codeF;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o').style.height = '470px';
  }

  str2DOMElement(html) {
    var frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    document.body.removeChild(frame);
    return el;
  }

  SelectAllTs() {
    let code = this.getTsCode();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parenty').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test21';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o2').style.height = '1084px';
  }
  
}
