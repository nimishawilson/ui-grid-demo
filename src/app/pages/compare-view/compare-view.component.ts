import { Component } from '@angular/core';
import { CompareGridComponent } from '../../components/compare-grid/compare-grid.component';
import { CompareStudent, SkillProfile } from '../../models/compare.models';
import { COMPARE_DATA } from '../../data/compare-dummy-data';

@Component({
  selector: 'app-compare-view',
  standalone: true,
  imports: [CompareGridComponent],
  templateUrl: './compare-view.component.html',
  styleUrl: './compare-view.component.scss'
})
export class CompareViewComponent {
  students: CompareStudent[] = COMPARE_DATA.students;
  skillProfiles: SkillProfile[] = COMPARE_DATA.skillProfiles;
}