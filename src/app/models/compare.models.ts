export interface CompareStudent {
  id: string;
  name: string;
}

import { NoteData } from './grid.models';

export interface SkillProfileEntry {
  studentId: string;
  basicValue: string;           // text label shown in values row under "Basic"
  advancedValue: number | null; // score shown under "Advanced"
  expertValue: number | null;   // score shown under "Expert"
  note?: NoteData;              // optional note; popover shown on cell hover when present
}

export interface SkillProfile {
  id: string;
  name: string;
  entries: SkillProfileEntry[];
}

export interface CompareData {
  students: CompareStudent[];
  skillProfiles: SkillProfile[];
}