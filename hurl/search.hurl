# Search Controller Tests
# Test searching for users

# Search for users by name (public endpoint)
GET http://localhost:80/search/users?query=John&page=1&limit=10
HTTP 200

# Search for users by email
GET http://localhost:80/search/users?query=john@example.com&page=1&limit=10
HTTP 200

# Search for users with pagination
GET http://localhost:80/search/users?query=student&page=2&limit=5
HTTP 200

# Search for users with no results
GET http://localhost:80/search/users?query=nonexistentuser&page=1&limit=10
HTTP 200

# Health check for search
GET http://localhost:80/search/health
HTTP 200
