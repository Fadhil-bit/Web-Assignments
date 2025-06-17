
interface Student {
  firstName: string;
  lastName: string;
  dob: string;
  grade: number;
}

export default function StudentCard({
  student,
  onDelete,
}: {
  student: Student;
  onDelete: () => void;
}) {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded p-4 shadow space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">
        {student.firstName} {student.lastName}
      </h3>
      <p className="text-gray-600"><strong>Date of Birth:</strong> {student.dob}</p>
      <p className="text-gray-600"><strong>Grade:</strong> {student.grade}</p>
      <button
        onClick={onDelete}
        className="mt-2 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
      >
        Remove
      </button>
    </div>
  );
}
