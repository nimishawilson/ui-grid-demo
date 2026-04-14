import { Component } from '@angular/core';
import { DetailedGridComponent } from '../../components/detailed-grid/detailed-grid.component';
import { DUMMY_GRID_DATA } from '../../data/dummy-data';
import { Category, Student } from '../../models/grid.models';

@Component({
  selector: 'app-detailed-view',
  standalone: true,
  imports: [DetailedGridComponent],
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.scss'
})
export class DetailedViewComponent {
  students: Student[] = DUMMY_GRID_DATA.students;
  categories: Category[] = DUMMY_GRID_DATA.categories;
}