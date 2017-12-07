# Url shortener Microservice

## User Stories

- [x] I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
- [x] If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
- [x] When I visit that shortened URL, it will redirect me to my original link.

### Example creation usage:
```
https://freecodecamp-shurli-d4n13le.herokuapp.com/new/https://www.google.com
```

### Example creation output
```json
{
  "original_url": "https://www.google.com", 
  "short_url": "https://freecodecamp-shurli-d4n13le.herokuapp.com/2871"
}
```

### Example usage:
```
https://freecodecamp-shurli-d4n13le.herokuapp.com/2871
```
Will redirect to:
```
https://www.google.com
```
