# NOTEAPP





##### About the stack

MERN(mongo, express, react, node) - both frontend and backend are in JavaScript.

mongodb - NoSQL

express - web framework - prebuilt toolkit for building web apps - useful for handling common tasks (routing, error handling, etc.)

NodeJs - allows to run app in server





##### Setting up

1. start with 2 folders - frontend \& backend
2. In terminal open backend folder - run command 'npm init --y' this installs the package.json - here we can install other packages
3. install express using - npm install express
4. In package.json after script add - "type":"module" - by default its common

 	common.js - require statement for module imports and module.exports for module exports

 	module.js - enables the use of 'import' and 'export'

4\. in script add an object for "dev":"node server.js" this allows us to just run the server.js with the npm command

5\. connecting to db - mongodb - get the db uri from the website and add it to an async frunction in a db.js file

6\. since the db uri cannot be just freely out there - can be accessed by anyone, not secure. so we create a .env file in to store the .env - for that need to install the dotenv package using - npm i dotenv

 \*\*\* .env file will be hidden when uploading to git \*\*\*

 	in the server.js file - import dotenv and vonfug it using - dotenv.config()

8\. add middleware - app.use(express.json()) - allows u to access the content in json of each note which is not accessible otherwise -> then add the routing to the notes

7\. define all the controller functions



Setting up react:

1. with nodejs running in another terminal open -





* Create note schema - to be repeated for each note

 	- import mongoose to file

 	- use new mongoose.Schema to create a new schema - what all a note must have - here title, content, date - noteSchema- name of the schema (structure)

 	- mongoose.model creates a model based on the schema - save to name Note

 	-  export default Note - to export the model to create notes - this is format for when "type":"module"







**API - Application Programming Interface**

client  <---> API <---> server --(changes)--> Database

* allows different apps to communicate
* helps to provide security - attack on database - only allows predefined requests to be take place
* Rest API - using standard HTTP methods

 	- GET - get some data from server based on the request - get notes

 	- POST - create  - create new note

 	- PUT - update data

 	- DELETE - delete data

* other types of APIs based on Architectural Style/Protocol -

 	- SOAP (Simple Object Access Protocol) - enterprise environments, XML based with HTTP or other protocols

 	- GraphQL - query language for APIs - avoiding over-fetching or under-fetching of data - more flexible than rest

 	- RPC (Remote Procedure Call) - Allow a program to execute a procedure or function in a different address space (e.g., on a remote server) -  XML-RPC and JSON-RPC

 	- WebSockets -  full-duplex communication - single TCP connection, enabling real-time, bidirectional data exchange between a client and a server

 	- Webhooks - User-defined HTTP callbacks triggered by specific events in a system -  real-time notifications and automated actions based on events

* types of API based on access level/audience - Open APIs (or Public APIs), Partner APIs, Internal APIs, Composite APIs.



###### **HTTP Status codes:**

* 1XX - informational
* 2XX - status message

 	200 Ok = everything done successfully

 	201 Creates = new resource created successfully

* 3xx - for redirection - resource not found here

 	301 redirect - Moved Permanently

* 4xx - client error - fault on the users side - browser or app made wrong/bad request

 	400 Bad request - invalid request

 	401 Unauthorized - need to login to perform action

 	403 Forbidden - not allowed to access

 	404 Not found - URL doesn't exist

 	429 too many request

* 5xx - server error - wrong on the server sides

 	500 internal server error

 	503 service is unavailable -





Endpoint - URL + HTTP method allows client to interact with specific resource



SQL - table -rows and column - sq queries

NO SQL - flexible data format, json, key value pairs - simpler query language/api



Good practices:

* create a routes and control folder

 	- router folder - has controls for url path - social media, bank need strict structure

 	- control folder - defines the control functions - http method - fast changing , big data

* put all the files like routes, control, and server.js in 'src' folder and update the changes, also update the package.json



###### **MIDDLEWARE:**

* function that runs between a req and res - do something between that transaction
* popular use - Authentication check



Rate Limiting:

* control how often user can do something on a website
* limit the number of requests that can be send by a user
* prevent server overload
* redis - key value store - in-memory data structure store used as a database, cache, and message broker








