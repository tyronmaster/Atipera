import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { ELEMENT_DATA } from '../../../env/data';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../../services/data.service';
import { PeriodicElement } from '../../types/types';

@Component({
  selector: 'app-table-component',
  imports: [MatTableModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
  standalone: true,
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  dataSource: PeriodicElement[] = [];
  cdr = inject(ChangeDetectorRef);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getElements().subscribe((elements) => {
      // console.log(elements);
      this.dataSource = elements;
      this.cdr.detectChanges();
    });
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
}
