# Schedule Controller Tests
# Test schedule endpoints (requires admin authentication)

# Get weekly schedule (requires admin authentication)
GET http://localhost:80/schedules
Authorization: Bearer {{accessToken}}
HTTP 200

# Get session by ID (requires admin authentication)
GET http://localhost:80/schedules/{{sessionId}}
Authorization: Bearer {{accessToken}}
HTTP 200

# Generate automatic schedule (requires admin authentication)
POST http://localhost:80/schedules/generate
Authorization: Bearer {{accessToken}}
HTTP 200

# Test invalid session ID
GET http://localhost:80/schedules/invalid-id
Authorization: Bearer {{accessToken}}
HTTP 404

# Test unauthorized access to protected endpoints
GET http://localhost:80/schedules
HTTP 401

POST http://localhost:80/schedules/generate
HTTP 401 