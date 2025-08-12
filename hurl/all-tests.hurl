# Master Test Suite
# This file includes all controller tests

# Health check endpoints
GET http://localhost:80/health
HTTP 200

GET http://localhost:80/health/db
HTTP 200

GET http://localhost:80/health/redis
HTTP 200

GET http://localhost:80/health/elasticsearch
HTTP 200

# User tests
GET http://localhost:80/user?page=1&limit=10
HTTP 200

# Department tests
GET http://localhost:80/departement?page=1&limit=10
HTTP 200

# Course tests
GET http://localhost:80/courses?page=1&limit=10
HTTP 200

# Enrollment tests
GET http://localhost:80/enrollments?page=1&limit=10
HTTP 200

# Achievement tests
GET http://localhost:80/achievements?page=1&limit=10
HTTP 200

# Attendance tests (public endpoint)
GET http://localhost:80/attendance/course/{{courseId}}?page=1&limit=10
HTTP 200

# Quiz tests (public endpoint)
GET http://localhost:80/courses/{{courseId}}/quizzes
HTTP 200

# Authenticated endpoints tests
# User management (authenticated)
PATCH http://localhost:80/user/37e9e673-e74a-4b41-a1ab-812a23ff8a0e
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "firstName": "Updated Name"
}
HTTP 200

# Department management (authenticated)
POST http://localhost:80/departement
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "label": "Test Department"
}
HTTP 201

# Course management (authenticated)
POST http://localhost:80/courses
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "title": "Test Course",
  "description": "A test course for testing purposes",
  "teacherId": "{{teacherId}}"
}
HTTP 201

# Schedule management (authenticated)
GET http://localhost:80/schedules
Authorization: Bearer {{accessToken}}
HTTP 200

# Notifications (authenticated)
GET http://localhost:80/notifications?page=1&limit=10
Authorization: Bearer {{accessToken}}
HTTP 200

# Test unauthorized access
GET http://localhost:80/schedules
HTTP 401

GET http://localhost:80/notifications?page=1&limit=10
HTTP 401 