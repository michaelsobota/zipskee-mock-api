# Zipskee Mock API
## Getting Started
First, clone this repo

The swagger spec is located in `/swagger-ui/dist/`. Any updates to the spec should be done on a feature branch, then PR'd back to master.

Then...
`npm install`

To run:
`node index.js`

To access the pretty spec docs:
`http://localhost:8000/swagger`

This is a (nearly)fully-functional mock, including data persistence. So any POST you make,  you'll be able to GET that data back. Data is NOT kept once the server is killed.
