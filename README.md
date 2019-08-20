## TEST APPLICATION SKY  

Its a simple test application for sky, made with node, express, mongo




[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)[![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger)[![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger)[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 


### ENDPOINTS #####

 # For create a user :
POST: http://localhost:8080/api/v1/users

---

## For create a user :
- POST:
-  http://localhost:8080/api/v1/users
- Json:

```javascript
{
  "nome": "matheus",
  "email":"alfafa@alfafa.com",
  "senha":"123456",
  "telefones":
  	{
  		"ddd":"11",
  		"numero":"976456666"
  	}
  	
}
```

---

## For login:
- POST:
-  http://localhost:8080/api/v1/login
 - Json plus Auth JWT token in the header
```javascript
{
  "email":"alfafa@alfafa.com",
  "senha":"123456",	
}
```

---
## For retrieve an user:
- GET: 
 - http://localhost:8080/api/v1/users
- Json plus Auth JWT token in the header
```javascript
{
  "email":"alfafa@alfafa.com",
}
```

---
## Installation

- Require Node js
- Mongoose
- bcrypt
- JsonWebToken
- body-parser
- express
- Dotenv
### Clone

- Clone this repo to your local machine 

### Setup



> Install dependencies

```shell
$ npm install

```

> Run application

```shell
$ npm run dev

```
#### Deployed at HEROKU  ####

