# PZ Cheeseria - Demo Project

## The Brief

Build a small POC of the front-end and an API showing CRUD capabilities that displays 5
different cheeses with pictures, price per kilo and the cheese color. This data should reside
within the backend (API) of the app.

As an optional addition, we would like to offer a calculator that allows our customers to
select a particular type of cheese and show them the total price based on the weight they&#39;re
interested in.

## Chosen Technologies

API
- .NET Core
- Swashbuckle for OpenApi/Swagger doc generation
- Entity Framework (In-memory database used for convenience)

Front-end
- React/Redux
- Typescript
- Bootstrap 4 (reactstrap)

Docker (run Dockerfile to build and serve the website)

## Usage

1. Run provided Dockerfile (mapping container port 80 to some port on the host, for example 8080)
2. Visit http://localhost:8080 in your browser to see the website.

To see the generated swagger docs, visit http://localhost:8080/swagger.

## Example Remaining Tasks/Improvements

API
- Correctly handle error cases (404 when entity not found, etc)
- Use separate persistent storage instead of in-memory DB (PostgreSQL)
- Upload/store images in DB instead of third party image url
- Authentication for CRUD operations

Front-end
- Tests for views

General
- Integration tests
- Separate deployments for front-end and API so they can be scaled independently
