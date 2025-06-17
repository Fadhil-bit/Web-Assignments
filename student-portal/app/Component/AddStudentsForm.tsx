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
    <form onSubmit={handleSubmit} className="mt-8 space-y-2 max-w-md">
      <h3 className="text-xl font-semibold">Add New Student</h3>
      {error && <p className="text-red-500">{error}</p>}
      <input className="block border p-2 w-full" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input className="block border p-2 w-full" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input className="block border p-2 w-full" type="date" name="dob" value={formData.dob} onChange={handleChange} />
      <input className="block border p-2 w-full" type="number" name="grade" placeholder="Grade (1-12)" value={formData.grade} onChange={handleChange} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Student</button>
    </form>
  );
}