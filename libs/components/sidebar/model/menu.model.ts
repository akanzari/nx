import { SubMenu } from "./submodel.model";

export class SideBarMenu {
  public code?: string;
  public defaultLabel?: string;
  public listsubmenu?: SubMenu[] = [];
  public routerLink?: string[] = [];
  public icon?: string;
  public fragment?: string;
  public show?: Boolean = false;
  constructor() { }
}
