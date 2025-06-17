interface Student {
  firstName: string;
  lastName: string;
  dob: string;
  grade: number;
}

export default function StudentCard({ student }: { student: Student }) {
  return (
    <div className="border p-4 shadow rounded">
      <h3 className="text-lg font-bold">
        {student.firstName} {student.lastName}
      </h3>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
    </div>
  );
}