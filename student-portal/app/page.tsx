'use client';

import { useState } from 'react';
import StudentCard from './components/StudentCard';
import AddStudentForm from './components/AddStudentForm';
import studentsData from './data/students.json';

/**
 * Name: Fadhil Bedgel
 * Date: June 16, 2025
 * Description: This is the homepage of the New Generation High School Student Portal.
 * It lists students and includes a form to add new ones with full validation.
 */

export default function HomePage() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (student: any) => {
    setStudents([...students, { id: students.length + 1, ...student }]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Student List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
      <AddStudentForm onAdd={handleAddStudent} />
    </>
  );
}