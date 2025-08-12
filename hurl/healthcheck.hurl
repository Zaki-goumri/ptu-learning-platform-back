# Health Check Controller Tests
# Test all health check endpoints

# Main health check (comprehensive check of all services)
GET http://localhost:80/health
HTTP 200

# Database health check
GET http://localhost:80/health/db
HTTP 200

# Redis health check
GET http://localhost:80/health/redis
HTTP 200

# Elasticsearch health check
GET http://localhost:80/health/elasticsearch
HTTP 200

# Test health endpoint with invalid path
GET http://localhost:80/health/invalid
HTTP 404
