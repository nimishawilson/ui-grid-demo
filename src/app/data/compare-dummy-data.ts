import { CompareData } from '../models/compare.models';

export const COMPARE_DATA: CompareData = {
  students: [
    { id: 's1', name: 'Alice Johnson' },
    { id: 's2', name: 'Bob Smith' },
    { id: 's3', name: 'Carol White' },
    { id: 's4', name: 'David Brown' },
    { id: 's5', name: 'Emma Davis' }
  ],
  skillProfiles: [
    {
      id: 'sp1',
      name: 'Communication_Skills_sdfkskdf_pp_testdftsdsndfsnk',
      entries: [
        { studentId: 's1', basicValue: '+1 level', advancedValue: 88, expertValue: 82 },
        { studentId: 's2', basicValue: 'No change', advancedValue: 74, expertValue: 68 },
        { studentId: 's3', basicValue: '+2 levels', advancedValue: 93, expertValue: 88 },
        { studentId: 's4', basicValue: '-1 level',  advancedValue: 61, expertValue: 55 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 96, expertValue: 91 }
      ]
    },
    {
      id: 'sp2',
      name: 'Problem Solving',
      entries: [
        { studentId: 's1', basicValue: '+1 level', advancedValue: 85, expertValue: 79 },
        { studentId: 's2', basicValue: '+1 level', advancedValue: 76, expertValue: 70 },
        { studentId: 's3', basicValue: '+1 level', advancedValue: 91, expertValue: 86 },
        { studentId: 's4', basicValue: 'No change', advancedValue: 63, expertValue: 57 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 95, expertValue: 90 }
      ]
    },
    {
      id: 'sp3',
      name: 'Leadership',
      entries: [
        { studentId: 's1', basicValue: '+2 levels', advancedValue: 90, expertValue: 85 },
        { studentId: 's2', basicValue: 'No change', advancedValue: 72, expertValue: 65 },
        { studentId: 's3', basicValue: '+1 level',  advancedValue: 89, expertValue: 84 },
        { studentId: 's4', basicValue: '-1 level',  advancedValue: 58, expertValue: 52 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 97, expertValue: 93 }
      ]
    },
    {
      id: 'sp4',
      name: 'Critical Thinking',
      entries: [
        { studentId: 's1', basicValue: '+1 level',  advancedValue: 87, expertValue: 81 },
        { studentId: 's2', basicValue: '+1 level',  advancedValue: 78, expertValue: 72 },
        { studentId: 's3', basicValue: '+2 levels', advancedValue: 94, expertValue: 89 },
        { studentId: 's4', basicValue: 'No change', advancedValue: 64, expertValue: 58 },
        { studentId: 's5', basicValue: '+1 level',  advancedValue: 94, expertValue: 90 }
      ]
    },
    {
      id: 'sp5',
      name: 'Teamwork & Collaboration',
      entries: [
        { studentId: 's1', basicValue: '+1 level',  advancedValue: 86, expertValue: 80 },
        { studentId: 's2', basicValue: '+1 level',  advancedValue: 77, expertValue: 71 },
        { studentId: 's3', basicValue: '+1 level',  advancedValue: 92, expertValue: 87 },
        { studentId: 's4', basicValue: '+1 level',  advancedValue: 66, expertValue: 60 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 96, expertValue: 92 }
      ]
    },
    {
      id: 'sp6',
      name: 'Time Management',
      entries: [
        { studentId: 's1', basicValue: 'No change', advancedValue: 83, expertValue: 76 },
        { studentId: 's2', basicValue: '-1 level',  advancedValue: 70, expertValue: 63 },
        { studentId: 's3', basicValue: '+1 level',  advancedValue: 90, expertValue: 85 },
        { studentId: 's4', basicValue: 'No change', advancedValue: 60, expertValue: 54 },
        { studentId: 's5', basicValue: '+1 level',  advancedValue: 93, expertValue: 88 }
      ]
    },
    {
      id: 'sp7',
      name: 'Creativity & Innovation',
      entries: [
        { studentId: 's1', basicValue: '+2 levels', advancedValue: 91, expertValue: 86 },
        { studentId: 's2', basicValue: '+1 level',  advancedValue: 79, expertValue: 73 },
        { studentId: 's3', basicValue: '+2 levels', advancedValue: 95, expertValue: 91 },
        { studentId: 's4', basicValue: '-1 level',  advancedValue: 59, expertValue: 53 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 98, expertValue: 94 }
      ]
    },
    {
      id: 'sp8',
      name: 'Digital Literacy',
      entries: [
        { studentId: 's1', basicValue: '+1 level',  advancedValue: 89, expertValue: 83 },
        { studentId: 's2', basicValue: 'No change', advancedValue: 75, expertValue: 69 },
        { studentId: 's3', basicValue: '+1 level',  advancedValue: 92, expertValue: 88 },
        { studentId: 's4', basicValue: '+1 level',  advancedValue: 65, expertValue: 59 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 97, expertValue: 92 }
      ]
    },
     {
      id: 'sp9',
      name: 'Emotional Intelligence',
      entries: [
        { studentId: 's1', basicValue: '+1 level',  advancedValue: 89, expertValue: 83 },
        { studentId: 's2', basicValue: 'No change', advancedValue: 75, expertValue: 69 },
        { studentId: 's3', basicValue: '+1 level',  advancedValue: 92, expertValue: 88 },
        { studentId: 's4', basicValue: '+1 level',  advancedValue: 65, expertValue: 59 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 97, expertValue: 92 }
      ]
    },
     {
      id: 'sp10',
      name: 'Research & Analysis',
      entries: [
        { studentId: 's1', basicValue: '+1 level',  advancedValue: 89, expertValue: 83 },
        { studentId: 's2', basicValue: 'No change', advancedValue: 75, expertValue: 69 },
        { studentId: 's3', basicValue: '+1 level',  advancedValue: 92, expertValue: 88 },
        { studentId: 's4', basicValue: '+1 level',  advancedValue: 65, expertValue: 59 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 97, expertValue: 92 }
      ]
    },
     {
      id: 'sp11',
      name: 'Adaptability',
      entries: [
        { studentId: 's1', basicValue: '+1 level',  advancedValue: 89, expertValue: 83 },
        { studentId: 's2', basicValue: 'No change', advancedValue: 75, expertValue: 69 },
        { studentId: 's3', basicValue: '+1 level',  advancedValue: 92, expertValue: 88 },
        { studentId: 's4', basicValue: '+1 level',  advancedValue: 65, expertValue: 59 },
        { studentId: 's5', basicValue: '+2 levels', advancedValue: 97, expertValue: 92 }
      ]
    }
  ]
};