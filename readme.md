# NUMBER CLASSIFICATION API

The Number Classification API is a RESTful service that takes a number as input and returns various mathematical properties of that number along with a fun fact.

## API Features

- Determines if a number is prime

- Checks if a number is perfect

- Identifies if a number is an Armstrong number

- Classifies the number as odd or even

- Calculates the digit sum

- Fetches a fun fact about the number from Numbers API

- Returns responses in JSON format

## Technologies Used

- Programming Language: Node.js with Express.js

- Deployment Platform: Render

- Version Control: GitHub

- Response Format: JSON

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS version)

- Git

### Installation and Setup

1.  Clone the repository:

        git clone https://github.com/hi-heavens/number-classification.git

2.  Navigate to the project directory:

        cd number-classification

3.  Install dependencies:

        npm install

4.  Start the application:

        npm start

The server should now be running on http://localhost:3000/

## API Documentation

### Base URL

    https://number-classification-shef.onrender.com/

### Endpoint

#### GET /api/classify-number?number={number}

number: The integer number to be classified

#### Response:

    {
      "number": 37,
      "is_prime": true,
      "digit_sum": 10,
      "fun_fact": "37 is the maximum number of 5^{th} powers needed to sum to any number."
    }

### Deployment

This API has been deployed and is accessible [here](https://number-classification-shef.onrender.com/api/classify-number?number=37/).

### Additional Resources

- Fun fact API: http://numbersapi.com/#42
- https://en.wikipedia.org/wiki/Parity_(mathematics)

### Author

[Kehinde Adedokun]
