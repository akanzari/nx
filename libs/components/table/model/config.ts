import { ALTableButton } from "./ALTableButton";



/**
 * For more information Visit https://www.primefaces.org/primeng/#/table
 */
export class AlTableConfig {

    actionButtonsHeader: string;

    // start , end
    actionButtonsPosition: string;

    // Enable pagination 
    pagination: boolean = false;

    expandable: Boolean = false;
    // number of rows by pages
    // Works only when pagination = true
    rowsPerPage: number = 5;
     //Resize columns
    resizable: boolean = false;
      //Reorder
    reorderable: boolean = false;
    // A select list to change the number of rows by page
    // Works only when pagination = true
    rowsPerPageOptions: number[] = [5, 10, 20, 30, 50];

    reorderableColumns: boolean = false;

    // Use 'single' for single selection mode
    // Use 'multiple for multiple selection mode
    selectionMode: string = null;
    var: string = 'Ajout dans le tableau';
   
    // Add a column that contains checkbox to select row 
    checkboxSelection: boolean = false;

    globalFilter: boolean = false;
    // Show the total number of rows of the table

    showTotalDataNumber: boolean = false;

    // The message to show next to total number o frows
    // this meesage will be show only if "showTotalDataNumber" set to true

    totalDataMessage: string = "rows found";
    // The column name wich will be used by default to sort the table

    defaultSortedColumns: string;

    sortedColumns: boolean = false;

    // sortOrder : 1 :asc , desc -1
    sortOrder: number;

    hideRowWithzeroValue: string;


    rowdataButtons: ALTableButton[] = [];

    lazy: boolean = false;

    editCell:boolean=false

    //to activate drag option you need to set this property
    dragName: string;

    //to activate lock columns set this property to true
    lockColumns: boolean = false;

    //to activate lock buttons set this property to true
    lock_buttons: boolean = false;

    //to change table button position from end of the table to contextual overview set this property to true
    buttons_contextual_overview: boolean = false;
    //Edit row
    editRow:boolean = false;
    //Add row
    addRow:boolean = false;
    //add dynamique
    addDyn:boolean =false;
    // add style to row base on condition
    rowStyle: any = () => { };
     //Badge
     badge:boolean = false;
     //Badge
     pop:boolean = false;
//fixer colonne
fix:boolean =false;
  editCellCol: boolean;

    constructor() { }

}