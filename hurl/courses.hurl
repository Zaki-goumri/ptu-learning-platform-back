# Courses Controller Tests
# Test courses endpoints

# Get courses with pagination
GET http://localhost:80/courses?page=1&limit=10
HTTP 200

# Get course by ID (replace with actual course ID from seeds)
GET http://localhost:80/courses/{{courseId}}
HTTP 200

# Create course (requires teacher authentication)
POST http://localhost:80/courses
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "title": "Test Course",
  "description": "A test course for testing purposes",
  "teacherId": "{{teacherId}}"
}
HTTP 201

# Update course (requires teacher authentication)
PATCH http://localhost:80/courses/{{courseId}}
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "title": "Updated Course Title"
}
HTTP 200

# Delete course (requires teacher authentication)
DELETE http://localhost:80/courses/{{courseId}}
Authorization: Bearer {{accessToken}}
HTTP 200

# Test invalid course ID
GET http://localhost:80/courses/invalid-id
HTTP 404

# Test unauthorized access to protected endpoints
POST http://localhost:80/courses
Content-Type: application/json
{
  "title": "Should Fail",
  "description": "This should fail without auth",
  "teacherId": "{{teacherId}}"
}
HTTP 401

PATCH http://localhost:80/courses/{{courseId}}
Content-Type: application/json
{
  "title": "Should Fail"
}
HTTP 401 