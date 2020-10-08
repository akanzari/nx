import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs";

export class ColumnsService {

  private columnsSource = new BehaviorSubject(1);
  currentColumns = this.columnsSource.asObservable();

  constructor() { }

  changeColumns(columns: number) {
    this.columnsSource.next(columns)
  }
}
