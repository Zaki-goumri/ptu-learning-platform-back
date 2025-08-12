#!/bin/bash

# PTU Learning Platform - Run All Hurl Tests
# This script runs all Hurl test files and provides a summary

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test results
PASSED=0
FAILED=0
SKIPPED=0

# Variables file path
VARIABLES_FILE="hurl/variables.env"

echo -e "${BLUE}🚀 PTU Learning Platform - API Test Suite${NC}"
echo "=================================================="
echo -e "${YELLOW}🔐 Using JWT token for authenticated endpoints${NC}"
echo -e "${BLUE}📁 Using variables file: $VARIABLES_FILE${NC}"
echo ""

# Check if Hurl is installed
if ! command -v hurl &> /dev/null; then
    echo -e "${RED}❌ Hurl is not installed. Please install it first:${NC}"
    echo "   https://hurl.dev/docs/installation.html"
    exit 1
fi

# Check if variables file exists
if [ ! -f "$VARIABLES_FILE" ]; then
    echo -e "${RED}❌ Variables file not found: $VARIABLES_FILE${NC}"
    echo "   Please ensure the variables file exists"
    exit 1
fi

# Check if app is running
if ! curl -s http://localhost:80/health/redis > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Warning: Application doesn't seem to be running on localhost:80${NC}"
    echo "   Make sure your app is running and accessible"
    echo ""
fi

# Function to run a test file
run_test() {
    local test_file=$1
    local test_name=$2
    
    if [ ! -f "$test_file" ]; then
        echo -e "${YELLOW}⚠️  Skipping $test_name: File not found${NC}"
        ((SKIPPED++))
        return
    fi
    
    echo -e "${BLUE}🧪 Testing $test_name...${NC}"
    
    if hurl --silent --variables-file "$VARIABLES_FILE" "$test_file" > /dev/null 2>&1; then
        echo -e "   ${GREEN}✅ PASSED${NC}"
        ((PASSED++))
    else
        echo -e "   ${RED}❌ FAILED${NC}"
        ((FAILED++))
    fi
}

# Run all tests
echo -e "${BLUE}📋 Running all test files...${NC}"
echo ""

run_test "hurl/healthcheck.hurl" "Health Check (All Services)"
run_test "hurl/auth.hurl" "Authentication"
run_test "hurl/user.hurl" "User Management (Public + Auth)"
run_test "hurl/department.hurl" "Department Management (Public + Auth)"
run_test "hurl/courses.hurl" "Course Management (Public + Auth)"
run_test "hurl/enrollment.hurl" "Enrollment System"
run_test "hurl/quiz.hurl" "Quiz System (Public + Auth)"
run_test "hurl/attendance.hurl" "Attendance Tracking (Public + Auth)"
run_test "hurl/schedule.hurl" "Schedule Management (Admin Auth)"
run_test "hurl/achievements.hurl" "Achievement System"
run_test "hurl/notifications.hurl" "Notification System (Auth)"

echo ""
echo "=================================================="
echo -e "${BLUE}📊 Test Summary:${NC}"
echo -e "   ${GREEN}✅ Passed: $PASSED${NC}"
echo -e "   ${RED}❌ Failed: $FAILED${NC}"
echo -e "   ${YELLOW}⚠️  Skipped: $SKIPPED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    echo -e "${BLUE}💡 Tests include both public and authenticated endpoints${NC}"
    echo -e "${BLUE}💡 Health checks verify database, Redis, and Elasticsearch connectivity${NC}"
    echo -e "${BLUE}💡 Using variables file for consistent test data${NC}"
    exit 0
else
    echo -e "${RED}💥 Some tests failed. Check the output above for details.${NC}"
    echo -e "${YELLOW}💡 Remember: 401 errors are expected for unauthenticated requests to protected endpoints${NC}"
    exit 1
fi 