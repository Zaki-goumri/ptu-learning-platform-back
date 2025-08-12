# Achievements Controller Tests
# Test achievements endpoints

# Get all achievements with pagination
GET http://localhost:80/achievements?page=1&limit=10
HTTP 200

# Get user achievements (replace with actual user ID from seeds)
GET http://localhost:80/achievements/users/37e9e673-e74a-4b41-a1ab-812a23ff8a0e?page=1&limit=10
HTTP 200

# Test invalid pagination
GET http://localhost:80/achievements?page=-1&limit=0
HTTP 400

# Test invalid user ID
GET http://localhost:80/achievements/users/invalid-id?page=1&limit=10
HTTP 404 