
'use client';
import { useState } from 'react';

export default function AddStudentForm({ onAdd }: { onAdd: (student: any) => void }) {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', dob: '', grade: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidDate = (dateStr: string) => /^\d{4}-\d{2}-\d{2}$/.test(dateStr);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, dob, grade } = formData;
    const gradeNum = Number(grade);

    if (!firstName.trim() || !lastName.trim()) {
      setError('First and last names are required.');
      return;
    }
    if (!isValidDate(dob)) {
      setError('Please enter a valid date in YYYY-MM-DD format.');
      return;
    }
    if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 12) {
      setError('Grade must be a number between 1 and 12.');
      return;
    }

    onAdd({ ...formData, grade: gradeNum });
    setFormData({ firstName: '', lastName: '', dob: '', grade: '' });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded p-6 space-y-4 max-w-md mx-auto mt-8">
      <h3 className="text-2xl font-semibold text-gray-300">Add New Student</h3>
      {error && <p className="text-red-500 font-medium">{error}</p>}

      <input
        className="block border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-gray-400 placeholder-white"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        className="block border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-gray-400 placeholder-white"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        className="block border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-gray-400 placeholder-white"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <input
        className="block border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-gray-400 placeholder-white"
        type="number"
        name="grade"
        placeholder="Grade (1-12)"
        value={formData.grade}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-gray-700 text-white font-medium px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Add Student
      </button>
    </form>
  );
}
