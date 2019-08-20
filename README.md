### TEST APPLICATION SKY  ####

Its a simple test application for sky, made with node, express, mongo

### ENDPOINTS #####

 # For create a user :
POST: http://localhost:8080/api/v1/users
Json 

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

# For login:
POST: http://localhost:8080/api/v1/login
Json plus Auth JWT token in the header
{
	"email":"alfafa@alfafa.com",
	"senha":"123456"
}

# For retrieve an user:
GET: http://localhost:8080/api/v1/users
Json plus Auth JWT token in the header
{
    "email" : "alfafa@alfafa.com"
}

#### Deployed at HEROKU  ####

