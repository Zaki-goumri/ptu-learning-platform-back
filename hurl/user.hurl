# User Controller Tests
# Test user CRUD operations

# Get users with pagination (public endpoint)
GET http://localhost:80/user?page=1&limit=10
HTTP 200

# Get user by ID (replace with actual user ID from seeds)
GET http://localhost:80/user/37e9e673-e74a-4b41-a1ab-812a23ff8a0e
HTTP 200

# Update user (requires authentication)
PATCH http://localhost:80/user/37e9e673-e74a-4b41-a1ab-812a23ff8a0e
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "firstName": "Updated Name"
}
HTTP 200

# Delete user (requires authentication)
DELETE http://localhost:80/user/37e9e673-e74a-4b41-a1ab-812a23ff8a0e
Authorization: Bearer {{accessToken}}
HTTP 200

# Test invalid user ID
GET http://localhost:80/user/invalid-id
HTTP 404

# Test unauthorized access to protected endpoints
PATCH http://localhost:80/user/37e9e673-e74a-4b41-a1ab-812a23ff8a0e
Content-Type: application/json
{
  "firstName": "Should Fail"
}
HTTP 401 