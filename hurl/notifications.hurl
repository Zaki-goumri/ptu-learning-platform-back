# Notifications Controller Tests
# Test notifications endpoints

# Get notifications with pagination (requires authentication)
GET http://localhost:80/notifications?page=1&limit=10
Authorization: Bearer {{accessToken}}
HTTP 200

# Update notification (requires authentication)
PATCH http://localhost:80/notifications/{{notificationId}}
Authorization: Bearer {{accessToken}}
Content-Type: application/json
{
  "read": true
}
HTTP 200

# Delete notification (requires authentication)
DELETE http://localhost:80/notifications/{{notificationId}}
Authorization: Bearer {{accessToken}}
HTTP 200

# Test notification stream (requires authentication)
GET http://localhost:80/notifications/{{userId}}/stream
Authorization: Bearer {{accessToken}}
HTTP 200

# Test invalid notification ID
GET http://localhost:80/notifications/invalid-id
Authorization: Bearer {{accessToken}}
HTTP 404

# Test unauthorized access to protected endpoints
GET http://localhost:80/notifications?page=1&limit=10
HTTP 401

PATCH http://localhost:80/notifications/{{notificationId}}
Content-Type: application/json
{
  "read": true
}
HTTP 401

DELETE http://localhost:80/notifications/{{notificationId}}
HTTP 401 