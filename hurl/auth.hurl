# Authentication Tests
# Test auth endpoints

# Test signup (should work without auth)
POST http://localhost:80/auth/signup
Content-Type: application/json
{
  "email": "test@example.com",
  "password": "testpassword",
  "firstName": "Test",
  "lastName": "User",
  "phoneNumber": "1234567890",
  "role": "STUDENT",
  "departmentId": "{{departmentId}}"
}
HTTP 201

# Test signin with valid credentials
POST http://localhost:80/auth/signin
Content-Type: application/json
{
  "email": "admin@ptu.local",
  "password": "admin"
}
HTTP 200

# Test signin with invalid credentials
POST http://localhost:80/auth/signin
Content-Type: application/json
{
  "email": "admin@ptu.local",
  "password": "wrongpassword"
}
HTTP 401

# Test signin with non-existent user
POST http://localhost:80/auth/signin
Content-Type: application/json
{
  "email": "nonexistent@example.com",
  "password": "password"
}
HTTP 404

# Test refresh token (requires valid token)
POST http://localhost:80/auth/refresh
Authorization: Bearer {{accessToken}}
HTTP 200

# Test generate OTP
POST http://localhost:80/auth/otp/generate
Content-Type: application/json
{
  "email": "admin@ptu.local"
}
HTTP 200

# Test unauthorized refresh token
POST http://localhost:80/auth/refresh
HTTP 401 