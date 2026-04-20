export interface StudentPercentages {
  current: number;
  shortTerm: number;
  midTerm: number;
}

export interface Student {
  id: string;
  name: string;
  percentages: StudentPercentages;
}

export interface SubjectMark {
  studentId: string;
  basic: number | null;
  advanced: number | null;
  expert: number | null;
}

export interface Subject {
  id: string;
  name: string;
  marks: SubjectMark[];
}

export interface Category {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface GridData {
  students: Student[];
  categories: Category[];
}

export interface NoteData {
  date: string;    // e.g. "Apr 16, 2026"
  content: string;
}