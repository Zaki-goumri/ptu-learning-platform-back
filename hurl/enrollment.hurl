# Enrollment Controller Tests
# Test enrollment endpoints

# Get enrollments with pagination
GET http://localhost:80/enrollments?page=1&limit=10
HTTP 200

# Get enrollment by ID (replace with actual enrollment ID from seeds)
GET http://localhost:80/enrollments/{{enrollmentId}}
HTTP 200

# Update enrollment status (replace with actual enrollment ID from seeds)
PATCH http://localhost:80/enrollments/{{enrollmentId}}
Content-Type: application/json
"ACCEPTED"
HTTP 200

# Delete enrollment (replace with actual enrollment ID from seeds)
DELETE http://localhost:80/enrollments/{{enrollmentId}}
HTTP 200

# Test invalid enrollment ID
GET http://localhost:80/enrollments/invalid-id
HTTP 404

# Test invalid status update
PATCH http://localhost:80/enrollments/{{enrollmentId}}
Content-Type: application/json
"INVALID_STATUS"
HTTP 400 