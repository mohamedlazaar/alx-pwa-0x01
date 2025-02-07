# MoviesDatabase API Documentation
=====================================
The MoviesDatabase API provides a comprehensive set of endpoints for accessing a vast collection of movie-related data. Users can retrieve information about movies, TV shows, actors, and more. The API supports advanced search functionalities, allowing filtering by criteria such as genre, release date, and ratings. Additionally, users can access detailed information about specific titles, including cast and crew details, reviews, and ratings.

The MoviesDatabase API provides a comprehensive set of endpoints for accessing a vast collection of movie-related data. Users can retrieve information about movies, TV shows, actors, and more. The API supports advanced search functionalities, allowing filtering by criteria such as genre, release date, and ratings. Additionally, users can access detailed information about specific titles, including cast and crew details, reviews, and ratings.
=====================================

## Available Endpoints
#### 1. Get Movies
* **GET /movies**
+ Retrieves a list of all movies in the database.
+ Response: JSON array of movie objects
+ Example: `GET /movies?genre=action&release_date=2020-01-
#### 2. Get Movie Details
* **GET /movies/{id}**
+ Retrieves detailed information about a specific movie.
+ Response: JSON object containing movie details
+ Example: `GET /movies/12345`
#### 3. Get TV Shows
* **GET /tvshows**
+ Retrieves a list of all TV shows in the database.
+ Response: JSON array of TV show objects
+ Example: `GET /tvshows?genre=drama&release_date=2019-01
#### 4. Get TV Show Details
* **GET /tvshows/{id}**
+ Retrieves detailed information about a specific TV show.
+ Response: JSON object containing TV show details
+ Example: `GET /tvshows/67890`
#### 5. Get Actor Information
* **GET /actors/{id}**
+ Retrieves detailed information about a specific actor.
+ Response: JSON object containing actor details
+ Example: `GET /actors/11111`
#### 6. Search Movies
* **GET /movies/search**
+ Performs an advanced search for movies based on specified criteria.
+ Response: JSON array of movie objects
+ Example: `GET /movies/search?genre=action&release_date=2020-01
#### 7. Get Movie Reviews
* **GET /movies/{id}/reviews**
+ Retrieves a list of reviews for a specific movie.
+ Response: JSON array of review objects
+ Example: `GET /movies/12345/reviews`
#### 8. Get Movie Ratings
* **GET /movies/{id}/ratings**
+ Retrieves a list of ratings for a specific movie.
+ Response: JSON array of rating objects
+ Example: `GET /movies/12345/ratings`

=====================================
## Request and Response Formats
The MoviesDatabase API uses JSON (JavaScript Object Notation) as the primary data format for requests and
responses. All API endpoints expect JSON-formatted data in the request body, and return JSON-formatted
data in the response body.
{
  "results": [
    {
      "id": 123,
      "title": "Action Movie",
      "release_date": "2022-05-01",
      "genre": "Action",
      "rating": 7.5
    },
    {
      "id": 124,
      "title": "Another Action Movie",
      "release_date": "2022-06-15",
      "genre": "Action",
      "rating": 8.0
    }
  ],
  "total_results": 2
}
=====================================
=====================================

## 1. Authentication
The MoviesDatabase API uses JSON Web Tokens (JWT) for authentication. To obtain a JWT token,
send a POST request to the `/login` endpoint with your username and password.
json
{
    "username": "your_username",
    "password": "your_password"
}
    Response: JSON object containing the JWT token
    Example: `POST /login` with the above JSON payload
Authentication
Authorization: Bearer YOUR_API_KEY
## 2. Authorization
To access protected endpoints, include the JWT token in the `Authorization` header of your request.
Example: `Authorization: Bearer your_jwt_token`
## 3. Error Handling
The API returns the following error codes:
* 400: Bad Request (invalid request data)
* 401: Unauthorized (invalid or missing JWT token)
* 403: Forbidden (access denied)
* 404: Not Found (resource not found)
* 500: Internal Server Error (server-side error)
{
  "status": "error",
  "code": 400,
  
  "message": "Invalid request. Missing required parameter: genre."
}

=====================================
## Usage Limits and Best Practices
* The API has a rate limit of 100 requests per minute per IP address.
* Use the `Accept` header to specify the desired response format (e.g., `application/json`)
* Use the `Content-Type` header to specify the request body format (e.g., `application/json`)
* Use the `Authorization` header to include the JWT token for protected endpoints.
* Handle errors and exceptions properly to ensure a smooth user experience.
* Use the API responsibly and do not overload the server with excessive requests.
=====================================