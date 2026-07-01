// Shared course utilities for both lecturer and student pages
const courses = [
  { code: 'GEO101', name: 'Geospatial Systems' },
  { code: 'CS101', name: 'Introduction to Computer Science' },
  { code: 'IT202', name: 'Networking Fundamentals' },
  { code: 'DBM205', name: 'Database Management' },
  { code: 'ACC110', name: 'Accounting Basics' }
];

export function getAvailableCourses() {
  return courses;
}

export function getCourseByCode(courseCode) {
  return courses.find(course => course.code === courseCode) || { code: courseCode, name: courseCode };
}

export function populateCourseSelect(selectId) {
  const selectElement = document.getElementById(selectId);
  if (!selectElement) return;

  selectElement.innerHTML = '<option value="">Select course</option>';
  courses.forEach(course => {
    const option = document.createElement('option');
    option.value = course.code;
    option.textContent = `${course.code} — ${course.name}`;
    selectElement.appendChild(option);
  });
}

export function formatCourseLabel(course) {
  if (!course) return '-';
  return `${course.code} — ${course.name}`;
}
