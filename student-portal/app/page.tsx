
'use client';

import { useState } from 'react';
import StudentCard from './components/StudentCard';
import AddStudentForm from './components/AddStudentForm';

/**
 * Name: Fadhil Bedgel
 * Date: June 16, 2025
 * Description: This is the homepage of the New Generation High School Student Portal.
 * It lists students and includes a form to add new ones with full validation.
 */

const defaultStudents = [
  { firstName: 'Jane', lastName: 'Doe', dob: '2008-04-12', grade: 10 },
  { firstName: 'John', lastName: 'Smith', dob: '2009-01-25', grade: 9 },
  { firstName: 'Carl', lastName: 'Jobs', dob: '2013-02-22', grade: 6 },
];

export default function StudentPage() {
  const [students, setStudents] = useState(defaultStudents);

  const addStudent = (student: any) => {
    setStudents(prev => [...prev, student]);
  };

  const removeStudent = (indexToRemove: number) => {
    setStudents(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <main className="min-h-screen bg-transparent p-6 text-white">
      <AddStudentForm onAdd={addStudent} />

      <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {students.map((student, idx) => (
          <StudentCard
            key={idx}
            student={student}
            onDelete={() => removeStudent(idx)}
          />
        ))}
      </div>
    </main>
  );
}
