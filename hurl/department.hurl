# Get all departments
GET http://localhost:80/departement?page=1&limit=10
[Options]
variable: baseUrl=http://localhost:80
variable: accessToken=eyJhbGciOiJIUzI1NiIsInR5...
variable: departmentId=57e9e673-e74a-4b41-a1ab-812a23ff8a0e
Authorization: Bearer {{accessToken}}
HTTP 200


# Get department by ID
GET {{baseUrl}}/departement/{{departmentId}}
HTTP 200

# Create department
POST {{baseUrl}}/departement
Authorization: Bearer {{accessToken}}
Content-Type: application/json

{
  "label": "Test Department"
}
HTTP 201

# Update department
PATCH {{baseUrl}}/departement/{{departmentId}}
Authorization: Bearer {{accessToken}}
Content-Type: application/json

{
  "label": "Updated Department"
}
HTTP 200

# Delete department
DELETE {{baseUrl}}/departement/{{departmentId}}
Authorization: Bearer {{accessToken}}
HTTP 200

# Invalid department ID
GET {{baseUrl}}/departement/invalid-id
HTTP 404

# Unauthorized create
POST {{baseUrl}}/departement
Content-Type: application/json

{
  "label": "Should Fail"
}
HTTP 401

# Unauthorized update
PATCH {{baseUrl}}/departement/{{departmentId}}
Content-Type: application/json

{
  "label": "Should Fail"
}
HTTP 401
