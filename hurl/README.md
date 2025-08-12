# Hurl API Tests

This directory contains Hurl test files for testing all API endpoints in the PTU Learning Platform.

## What is Hurl?

Hurl is a command-line tool for running HTTP requests and testing HTTP responses. It's great for API testing and can be used for both development and CI/CD pipelines.

## Test Files

- **`healthcheck.hurl`** - Health check endpoints (comprehensive system monitoring)
- **`auth.hurl`** - Authentication endpoints (signup, signin, OTP, refresh)
- **`user.hurl`** - User CRUD operations (public + authenticated)
- **`department.hurl`** - Department management (public + authenticated)
- **`courses.hurl`** - Course management (public + authenticated)
- **`enrollment.hurl`** - Enrollment operations
- **`quiz.hurl`** - Quiz and grading system (public + authenticated)
- **`attendance.hurl`** - Attendance tracking (public + authenticated)
- **`schedule.hurl`** - Schedule management (admin authenticated)
- **`achievements.hurl`** - Achievement system
- **`notifications.hurl`** - Notification system (authenticated)
- **`all-tests.hurl`** - Master test suite (runs all tests)
- **`variables.env`** - Environment variables and test data

## Prerequisites

1. Install Hurl: https://hurl.dev/docs/installation.html
2. Ensure your application is running on `http://localhost:80`
3. Run the seed script first: `pnpm seed`

## Variables Management

The tests use a centralized `variables.env` file for consistent variable management:

### **Variables File (`variables.env`)**
- **Base URL**: `baseUrl=http://localhost:80`
- **JWT Token**: `accessToken` for authenticated requests
- **Entity IDs**: Pre-configured IDs for testing (courseId, userId, etc.)
- **Test Data**: Common test values (emails, names, descriptions)

### **Benefits of Variables File**
- ✅ **Centralized**: All variables in one place
- ✅ **Consistent**: Same values across all tests
- ✅ **Maintainable**: Easy to update test data
- ✅ **Environment-specific**: Can have different files for dev/staging/prod
- ✅ **CI/CD friendly**: Easy to inject variables in automated testing

### **Using Variables in Tests**
```hurl
# Variables are automatically available in all test files
GET {{baseUrl}}/user/{{userId}}
Authorization: Bearer {{accessToken}}
HTTP 200
```

## Health Check Endpoints

The health check system provides comprehensive monitoring of all services:

- **`GET /health`** - Complete system health check (database, Redis, Elasticsearch, disk, memory, external services)
- **`GET /health/db`** - Database connectivity check
- **`GET /health/redis`** - Redis service health check
- **`GET /health/elasticsearch`** - Elasticsearch service health check

These endpoints are useful for:
- **Monitoring**: Check system status in real-time
- **Load balancers**: Health checks for deployment
- **DevOps**: Automated monitoring and alerting
- **Debugging**: Identify service connectivity issues

## Authentication

The tests now include JWT token authentication for protected endpoints:

- **Public endpoints**: Can be accessed without authentication
- **Protected endpoints**: Require valid JWT token in Authorization header
- **Admin endpoints**: Require admin role in JWT token

### JWT Token

The tests use a pre-configured JWT token for admin user:
- **Token**: Stored in `variables.env` as `accessToken`
- **User**: admin@ptu.local
- **Role**: ADMIN
- **Permissions**: Full access to all endpoints

### Token Usage

```hurl
# Authenticated request
GET {{baseUrl}}/schedules
Authorization: Bearer {{accessToken}}
HTTP 200

# Unauthenticated request (should fail)
GET {{baseUrl}}/schedules
HTTP 401
```

## Usage

### Run All Tests
```bash
pnpm test:api
```

### Run Individual Controller Tests
```bash
# Test specific controllers
pnpm test:api:user
pnpm test:api:quiz
pnpm test:api:auth
pnpm test:api:health

# Test all available controllers
pnpm test:api:user
pnpm test:api:quiz
pnpm test:api:schedule
pnpm test:api:attendance
pnpm test:api:achievements
pnpm test:api:enrollment
pnpm test:api:department
pnpm test:api:notifications
pnpm test:api:courses
pnpm test:api:auth
pnpm test:api:health
```

### Run with Shell Script (Better Output)
```bash
pnpm test:api:shell
```

### Manual Hurl Commands
```bash
# Test specific file with variables
hurl --variables-file hurl/variables.env hurl/user.hurl

# Test with custom variables
hurl --variables-file hurl/variables.env --variable courseId=123 hurl/quiz.hurl

# Test with verbose output
hurl --variables-file hurl/variables.env --verbose hurl/all-tests.hurl

# Test and save results
hurl --variables-file hurl/variables.env --report html hurl/all-tests.hurl
```

## Test Variables

All variables are now managed in `variables.env`:

- `{{baseUrl}}` - Base URL for all tests
- `{{accessToken}}` - JWT token for authentication
- `{{courseId}}` - Course ID from seeds
- `{{quizId}}` - Quiz ID from seeds
- `{{userId}}` - User ID from seeds
- `{{departmentId}}` - Department ID from seeds
- `{{enrollmentId}}` - Enrollment ID from seeds
- `{{attendanceId}}` - Attendance ID from seeds
- `{{notificationId}}` - Notification ID from seeds
- `{{submissionId}}` - Quiz submission ID from seeds
- `{{teacherId}}` - Teacher user ID from seeds
- `{{studentId}}` - Student user ID from seeds
- `{{sessionId}}` - Session ID from seeds

## Expected Responses

### Public Endpoints
- **200** - Successful GET requests
- **201** - Successful POST requests (creation)

### Protected Endpoints (with valid token)
- **200** - Successful requests
- **201** - Successful creation requests
- **404** - Not found (for invalid IDs)

### Protected Endpoints (without token)
- **401** - Unauthorized (expected)

### Error Cases
- **400** - Bad request (invalid data)
- **404** - Not found (invalid IDs)
- **403** - Forbidden (insufficient permissions)

## Test Structure

Each test file now includes:

1. **Public endpoint tests** - Verify basic functionality
2. **Authenticated endpoint tests** - Verify protected functionality with valid token
3. **Unauthorized tests** - Verify that protected endpoints reject unauthenticated requests
4. **Error case tests** - Verify proper error handling

## Running in CI/CD

```bash
# Install Hurl in CI
curl -L --output hurl https://github.com/Orange-OpenSource/hurl/releases/latest/download/hurl-x86_64-linux
chmod +x hurl

# Run tests with variables file
hurl --variables-file hurl/variables.env hurl/all-tests.hurl

# Or inject variables from environment
hurl --variable accessToken=$JWT_TOKEN --variable baseUrl=$API_URL hurl/all-tests.hurl
```

## Troubleshooting

1. **Connection refused**: Ensure your app is running on port 80
2. **404 errors**: Check if the endpoint paths are correct
3. **401 errors**: Expected for protected endpoints without auth
4. **Variable errors**: Check `variables.env` file exists and has correct values
5. **Token expired**: Update the JWT token in `variables.env`
6. **Health check failures**: Check if Redis, Elasticsearch, or database services are running

## Adding New Tests

1. Create a new `.hurl` file in the `hurl/` directory
2. Add the test command to `package.json` scripts (use `--variables-file hurl/variables.env`)
3. Update `all-tests.hurl` to include key endpoints
4. Add any new variables to `variables.env`
5. Document any required variables or authentication
6. Include both authenticated and unauthenticated test cases 