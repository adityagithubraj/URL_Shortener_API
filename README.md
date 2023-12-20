# URL Shortener API

## Overview

This API provides URL shortening services. Users can register, login, and shorten URLs.

## Getting Started

### Prerequisites

- Node.js (LTS version)
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

## npm install

- PORT=3000
- MONGODB_URI=your-mongodb-uri
- JWT_SECRET=your-secret-key

## 1. Register User
- Endpoint: POST /auth/register
- Request: 

 {
  "username": "exampleuser",
  "password": "examplepassword"
}


##  Login User
- Endpoint: POST /auth/login
- Request:

{
  "username": "exampleuser",
  "password": "examplepassword"
}

##  Shorten URL
- Endpoint: POST /url/shorten
- Headers:
- Key: Authorization
- Value: Bearer your-jwt-token
- Request:

{
  "originalUrl": "https://www.example.com"
}