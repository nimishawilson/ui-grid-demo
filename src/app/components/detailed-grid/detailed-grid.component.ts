import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category, Student, SubjectMark } from '../../models/grid.models';

type SortDirection = 'none' | 'asc' | 'desc';

interface DisplaySubject {
  id: string;
  name: string;
}

interface DisplayCategory {
  id: string;
  name: string;
  subjects: DisplaySubject[];
}

@Component({
  selector: 'app-detailed-grid',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detailed-grid.component.html',
  styleUrl: './detailed-grid.component.scss'
})
export class DetailedGridComponent implements OnChanges, OnInit {
  @Input() students: Student[] = [];
  @Input() categories: Category[] = [];

  sortDirection: SortDirection = 'none';
  displayCategories: DisplayCategory[] = [];
  marksMap: { [subjectId: string]: { [studentId: string]: SubjectMark } } = {};

  get sortIcon(): string {
    if (this.sortDirection === 'asc') return '↑';
    if (this.sortDirection === 'desc') return '↓';
    return '⇅';
  }

  get sortTitle(): string {
    if (this.sortDirection === 'none') return 'Sort ascending';
    if (this.sortDirection === 'asc') return 'Sort descending';
    return 'Clear sort';
  }

  ngOnInit(): void {
    this.initMarksMap();
    this.updateDisplayCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories'] || changes['students']) {
      this.initMarksMap();
      this.updateDisplayCategories();
    }
  }

  toggleSort(): void {
    if (this.sortDirection === 'none') {
      this.sortDirection = 'asc';
    } else if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'none';
    }
    this.updateDisplayCategories();
  }

  readonly maxLabelChars = 13;

  truncate(name: string): string {
    return name.length > this.maxLabelChars
      ? name.slice(0, this.maxLabelChars) + '…'
      : name;
  }

  truncateTooltip(name: string): string {
    return name.length > this.maxLabelChars ? name : '';
  }

  getMark(subjectId: string, studentId: string): SubjectMark {
    if (!this.marksMap[subjectId]) {
      this.marksMap[subjectId] = {};
    }
    if (!this.marksMap[subjectId][studentId]) {
      this.marksMap[subjectId][studentId] = {
        studentId,
        basic: null,
        advanced: null,
        expert: null
      };
    }
    return this.marksMap[subjectId][studentId];
  }

  private initMarksMap(): void {
    this.marksMap = {};
    for (const category of this.categories) {
      for (const subject of category.subjects) {
        this.marksMap[subject.id] = {};
        for (const student of this.students) {
          const existing = subject.marks.find(m => m.studentId === student.id);
          this.marksMap[subject.id][student.id] = existing
            ? { ...existing }
            : { studentId: student.id, basic: null, advanced: null, expert: null };
        }
      }
    }
  }

  private updateDisplayCategories(): void {
    this.displayCategories = this.categories.map(category => {
      let subjects: DisplaySubject[] = category.subjects.map(s => ({ id: s.id, name: s.name }));
      if (this.sortDirection === 'asc') {
        subjects = [...subjects].sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortDirection === 'desc') {
        subjects = [...subjects].sort((a, b) => b.name.localeCompare(a.name));
      }
      return { id: category.id, name: category.name, subjects };
    });
  }
}