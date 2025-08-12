# Attendance Controller Tests
# Test attendance endpoints

# Get attendance records by course (replace with actual course ID from seeds)
GET http://localhost:80/attendance/course/{{courseId}}?page=1&limit=10
HTTP 200

# Create attendance record (requires admin/teacher authentication)
POST http://localhost:80/attendance
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "date": "2025-08-12",
  "session": "morning",
  "status": "present",
  "courseId": "{{courseId}}",
  "studentId": "{{studentId}}"
}
HTTP 201

# Update attendance record (requires admin/teacher authentication)
PATCH http://localhost:80/attendance/{{attendanceId}}
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "status": "late"
}
HTTP 200

# Delete attendance record (requires admin/teacher authentication)
DELETE http://localhost:80/attendance/{{attendanceId}}
Authorization: Bearer {{accessToken}}
HTTP 200

# Test invalid course ID
GET http://localhost:80/attendance/course/invalid-id?page=1&limit=10
HTTP 400

# Test unauthorized access to protected endpoints
POST http://localhost:80/attendance
Content-Type: application/json
{
  "date": "2025-08-12",
  "session": "morning",
  "status": "present",
  "courseId": "{{courseId}}",
  "studentId": "{{studentId}}"
}
HTTP 401

PATCH http://localhost:80/attendance/{{attendanceId}}
Content-Type: application/json
{
  "status": "late"
}
HTTP 401 