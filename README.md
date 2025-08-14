# PTU Learning Platform Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

A comprehensive learning management system backend built with NestJS, featuring real-time chat, course management, user authentication, and GraphQL API support.

## 🚀 Features

### Core Modules
- **Authentication & Authorization**: JWT-based authentication with role-based access control (Admin, Teacher, Student)
- **User Management**: Complete user lifecycle with department assignment and role management
- **Course Management**: Full CRUD operations for courses with enrollment system
- **Real-time Chat**: WebSocket-based messaging system with conversation management
- **Department Management**: Academic department organization
- **Email Notifications**: Queue-based email system with templates
- **Health Monitoring**: Application health checks and monitoring
- **Search Integration**: Elasticsearch integration for enhanced search capabilities

### Technical Features
- **GraphQL API**: Modern API with auto-generated schema
- **REST API**: Traditional REST endpoints with Swagger documentation
- **Rate Limiting**: Redis-based throttling protection
- **Caching**: Redis caching layer
- **Queue System**: BullMQ for background job processing
- **Database**: PostgreSQL with TypeORM
- **Real-time Communication**: Socket.IO integration
- **File Uploads**: Multer integration for file handling

## 🛠️ Tech Stack

- **Framework**: NestJS (Node.js)
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Cache/Queue**: Redis + BullMQ
- **Authentication**: JWT + Passport
- **API**: GraphQL (Apollo) + REST
- **Real-time**: Socket.IO
- **Documentation**: Swagger + Scalar
- **Testing**: Jest
- **Containerization**: Docker

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.11.0+)
- PostgreSQL (v15+)
- Redis (v7+)
- Docker & Docker Compose (optional)

## 🚦 Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone <repository-url>
cd ptu-learning-platform-backend
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```env
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=ptu_learning
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your-secret-key
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d
```

4. **Start Services**
```bash
# Start PostgreSQL and Redis (if using Docker)
docker compose up db redis -d

# Start the application
pnpm run start:dev
```

### Using Docker (Recommended)

This project includes a comprehensive Docker Compose setup that deploys the NestJS application along with a full ELK (Elasticsearch, Logstash, Kibana) stack for centralized logging.

```bash
# Build and start all services in detached mode
docker compose up --build -d
```

This command will bring up the following services:
- **`server`**: The NestJS backend application.
- **`db`**: PostgreSQL database.
- **`redis`**: Redis for caching and queueing.
- **`elasticsearch`**: Distributed search and analytics engine (data store for logs).
- **`logstash`**: Data processing pipeline (receives logs from Filebeat).
- **`filebeat`**: Lightweight shipper for forwarding logs from the NestJS app to Logstash.
- **`kibana`**: Data visualization dashboard for Elasticsearch.
- **`nginx`**: Reverse proxy for the NestJS application.

## 📊 ELK Stack Logging

Logs from the NestJS application are collected and processed by the ELK stack:

1.  **NestJS Application**: Writes logs to `logs/application.log` and `logs/error.log` files within the container using Winston.
2.  **Filebeat**: Reads these log files from the `logs` directory (mounted as a Docker volume) and forwards them to Logstash.
3.  **Logstash**: Receives log events from Filebeat, processes them (e.g., adds metadata), and then sends them to Elasticsearch.
4.  **Elasticsearch**: Stores and indexes the processed log data.
5.  **Kibana**: Provides a web interface to search, analyze, and visualize the logs stored in Elasticsearch.

### Accessing Kibana

Once all services are up and running, you can access the Kibana dashboard in your browser:

- **Kibana UI**: http://localhost:5601

From Kibana, you can create index patterns (e.g., `nestjs-logs-*`) to explore your application logs.

### Accessing Grafana

Once all services are up and running, you can access the Grafana dashboard in your browser:

- **Grafana UI**: http://localhost:3000

Use `admin` as both username and password to log in.



## 📚 API Documentation

Once the application is running:

- **REST API Documentation**: http://localhost:3000/api (Scalar UI)
- **GraphQL Playground**: http://localhost:3000/graphql
- **Health Check**: http://localhost:3000/health

## 🏗️ Project Structure

```
src/
├── auth/                 # Authentication & authorization
│   ├── decorators/       # Custom decorators (roles, user)
│   ├── dto/              # Data transfer objects
│   ├── guards/           # Auth guards (access token, refresh token, roles)
│   ├── strategies/       # Passport strategies
│   └── types/            # Auth-related types
├── chat/                 # Real-time messaging system
│   ├── dtos/             # Chat DTOs
│   ├── entities/         # Chat entities (conversations, messages)
│   ├── guards/           # WebSocket auth guards
│   └── types/            # Chat types
├── courses/              # Course management
│   ├── dtos/             # Course DTOs
│   ├── entities/         # Course and enrollment entities
│   └── types/            # GraphQL types
├── user/                 # User management
├── departement/          # Department management
├── mail/                 # Email service with templates
├── redis/                # Redis service
├── worker/               # Background job processing
├── health/               # Health check endpoints
├── config/               # Configuration files
├── common/               # Shared utilities and constants
└── global/               # Global interceptors and middleware
```

## 🔐 Authentication & Authorization

The system implements a comprehensive authentication system:

### User Roles
- **ADMIN**: Full system access
- **TEACHER**: Course creation and management
- **STUDENT**: Course enrollment and participation

### Endpoints
```http
POST /auth/signup         # User registration
POST /auth/signin         # User login
POST /auth/refresh        # Token refresh
POST /auth/logout         # User logout
```

### Protected Routes
Most endpoints require authentication. Include JWT token in Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 📊 Database Schema

### Core Entities

**User**
- id (UUID)
- email, firstName, lastName
- phoneNumber, role, yearGroup
- department (relation)
- createdAt, updatedAt

**Course**
- id (UUID)
- title, description, coverImage
- teacher (relation to User)
- enrollments (relation)
- createdAt, updatedAt

**Enrollment**
- id (UUID)
- student (relation to User)
- course (relation to Course)
- status (PENDING, ACCEPTED, REJECTED, SUSPENDED)
- createdAt, updatedAt

**Department**
- id (UUID)
- label
- createdAt, updatedAt

## 🔄 Real-time Features

### Chat System
- Real-time messaging with Socket.IO
- Conversation management
- Member roles and permissions
- Message persistence

### WebSocket Events
```javascript
// Join conversation
socket.emit('joinConversation', { conversationId: 'uuid' });

// Send message
socket.emit('sendMessage', { 
  conversationId: 'uuid', 
  content: 'message content' 
});

// Receive messages
socket.on('newMessage', (message) => {
  // Handle new message
});
```

## 📧 Email System

Queue-based email system with templates:

- **Welcome emails** for new users
- **OTP verification** emails
- **Course notifications**
- **RSVP confirmations**

Templates use modern email styling and are processed asynchronously via BullMQ.

## 🧪 Testing

```bash
# Unit tests
pnpm run test

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov

# Watch mode
pnpm run test:watch
```

## 📈 Performance Features

### Caching
- Redis-based caching for frequently accessed data
- Session storage
- Queue job results caching

### Rate Limiting
Multiple throttling strategies:
- **Short**: 5 requests per 5 seconds
- **Medium**: 10 requests per 30 seconds  
- **Long**: 25 requests per minute

### Background Processing
- Email queue processing
- File upload handling
- Database cleanup tasks

## 🚀 Deployment

### Docker Deployment
```bash
# Build and start all services
docker compose up --build -d

# Check logs
docker compose logs -f server

# Stop services
docker compose down
```

### Production Environment Variables
```env
NODE_ENV=production
DB_HOST=your-production-db-host
REDIS_HOST=your-production-redis-host
JWT_SECRET=your-production-secret
# Add other production-specific variables
```

## 🔍 Health Monitoring

Health check endpoint provides system status:
```http
GET /health
```

Response includes:
- Database connectivity
- Redis connectivity
- Queue system status
- Application uptime

## 🛡️ Security Features

- **JWT Authentication** with refresh tokens
- **Password hashing** with bcrypt
- **Rate limiting** to prevent abuse
- **Input validation** with class-validator
- **CORS protection**
- **Helmet security headers**

## 📝 API Examples

### GraphQL Queries
```graphql
# Get courses with pagination
query GetCourses($page: Int, $limit: Int) {
  courses(page: $page, limit: $limit) {
    data {
      id
      title
      description
      teacher {
        firstName
        lastName
      }
    }
    meta {
      total
      page
      totalPages
    }
  }
}

# Create a course
mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(createCourseDto: $input) {
    id
    title
    description
  }
}
```

### REST API Examples
```bash
# Get user profile
curl -H "Authorization: Bearer <token>" \
     http://localhost:3000/users/profile

# Enroll in course
curl -X POST \
     -H "Authorization: Bearer <token>" \
     -H "Content-Type: application/json" \
     -d '{"courseId": "uuid", "studentId": "uuid"}' \
     http://localhost:3000/courses/enroll
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the API documentation at `/api`


**let me see your feedbacks**
