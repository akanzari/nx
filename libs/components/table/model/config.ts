import { ALTableButton } from "./table-button";



/**
 * For more information Visit https://www.primefaces.org/primeng/#/table
 */
export class AlTableConfig {
  
  //Badge
  badge: Boolean = false;
  //Badge
  pop: Boolean = false;
  //fixer colonne
  fix: Boolean = false;
  editCellCol: Boolean;

  actionButtonsHeader: string;

  // start , end
  actionButtonsPosition: string;

  // Enable pagination 
  pagination: Boolean = false;

  expandable: Boolean = false;
  // number of rows by pages
  // Works only when pagination = true
  rowsPerPage: number = 5;
  //Resize columns
  resizable: Boolean = false;
  //Reorder
  reorderable: Boolean = false;
  // A select list to change the number of rows by page
  // Works only when pagination = true
  rowsPerPageOptions: number[] = [5, 10, 20, 30, 50];

  reorderableColumns: Boolean = false;

  // Use 'single' for single selection mode
  // Use 'multiple for multiple selection mode
  selectionMode: string = null;
  var: String = 'Ajout dans le tableau';

  // Add a column that contains checkbox to select row 
  checkboxSelection: Boolean = false;

  globalFilter: Boolean = false;
  // Show the total number of rows of the table

  showTotalDataNumber: Boolean = false;

  // The message to show next to total number o frows
  // this meesage will be show only if "showTotalDataNumber" set to true

  totalDataMessage: String = "rows found";
  // The column name wich will be used by default to sort the table

  defaultSortedColumns: string;

  sortedColumns: Boolean = false;

  // sortOrder : 1 :asc , desc -1
  sortOrder: number;

  hideRowWithzeroValue: string;


  rowdataButtons: ALTableButton[] = [];

  lazy: Boolean = false;

  editCell: Boolean = false

  //to activate drag option you need to set this property
  dragName: string;

  //to activate lock columns set this property to true
  lockColumns: Boolean = false;

  //to activate lock buttons set this property to true
  lock_buttons: Boolean = false;

  //to change table button position from end of the table to contextual overview set this property to true
  buttons_contextual_overview: Boolean = false;
  //Edit row
  editRow: Boolean = false;
  //Add row
  addRow: Boolean = false;
  //add dynamique
  addDyn: Boolean = false;
  // add style to row base on condition
  rowStyle: any = () => { };

  constructor() { }

}