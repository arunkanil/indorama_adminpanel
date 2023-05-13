import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  template: `<span
    ><button
      style="height: 20px"
      (click)="invokeParentMethod()"
      class="btn btn-info"
    >
      Edit
    </button></span
  >`,
  styles: [
    `
      .btn {
        line-height: 0.5;
      }
    `,
  ],
})
export class ActionRenderer implements ICellRendererAngularComp {
  public params!: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.onRowClicked(
      `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef?.headerName}`
    );
  }

  refresh(): boolean {
    return false;
  }
}
