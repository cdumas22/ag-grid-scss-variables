import { Component } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import { GridOptions, ISimpleFilterParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-test';

  gridOptions: GridOptions = {
    enableSorting: true,
    enableColResize: true,
    enableFilter: true,
    columnDefs: [
      {
        field: 'test',
        checkboxSelection: true,
        headerCheckboxSelection: true
      },
      {
        field: 'test2'
      }
    ],
    defaultColDef: {
      filterParams: {
        clearButton: true,
        resetButton: true,
        applyButton: true,
      } as ISimpleFilterParams
    }
  };

  data = [
    { test: 'a', test2: 'b' },
    { test: 'c', test2: 'd' }
  ];

  modules = [ClientSideRowModelModule];
}
