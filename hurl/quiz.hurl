# Quiz Controller Tests
# Test quiz and grades endpoints

# Get quizzes by course (replace with actual course ID from seeds)
GET http://localhost:80/courses/{{courseId}}/quizzes
HTTP 200

# Get quiz by ID (replace with actual quiz ID from seeds)
GET http://localhost:80/quizzes/{{quizId}}
HTTP 200

# Get grades (requires authentication)
GET http://localhost:80/grades
Authorization: Bearer {{accessToken}}
HTTP 200

# Get ungraded submissions (requires teacher authentication)
GET http://localhost:80/submissions/ungraded?page=1&limit=10
Authorization: Bearer {{accessToken}}
HTTP 200

# Get submission by ID (requires teacher authentication)
GET http://localhost:80/submissions/{{submissionId}}
Authorization: Bearer {{accessToken}}
HTTP 200

# Grade submission (requires teacher authentication)
POST http://localhost:80/submissions/{{submissionId}}/grade
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "points": 8,
  "feedback": "Good answer, but could be more detailed"
}
HTTP 200

# Test invalid quiz ID
GET http://localhost:80/quizzes/invalid-id
HTTP 404

# Test unauthorized access to protected endpoints
GET http://localhost:80/grades
HTTP 401

GET http://localhost:80/submissions/ungraded?page=1&limit=10
HTTP 401 