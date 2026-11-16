const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests) and serve static files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to validate and parse two numbers
function parseNumbers(num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return { error: 'Invalid input: please provide valid numbers for num1 and num2.' };
    }
    return { a, b };
}

// 1. GET endpoint to add two numbers via query string: /add?num1=10&num2=5
app.get('/add', (req, res) => {
    const { a, b, error } = parseNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ statusCode: 400, error });

    res.json({
        statusCode: 200,
        operation: 'addition',
        num1: a,
        num2: b,
        result: a + b
    });
});

// 2. GET endpoint for general calculator operations: /calculate?op=subtract&num1=10&num2=5
app.get('/calculate', (req, res) => {
    const { op } = req.query;
    const { a, b, error } = parseNumbers(req.query.num1, req.query.num2);
    if (error) return res.status(400).json({ statusCode: 400, error });

    let result;
    switch (op) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b === 0) return res.status(400).json({ statusCode: 400, error: 'Division by zero is not allowed.' });
            result = a / b;
            break;
        default:
            return res.status(400).json({ statusCode: 400, error: 'Invalid operation. Use add, subtract, multiply, or divide.' });
    }

    res.json({
        statusCode: 200,
        operation: op,
        num1: a,
        num2: b,
        result
    });
});

// 3. POST endpoint for calculator operations via JSON payload
app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    const { a, b, error } = parseNumbers(num1, num2);
    if (error) return res.status(400).json({ statusCode: 400, error });

    let result;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b === 0) return res.status(400).json({ statusCode: 400, error: 'Division by zero is not allowed.' });
            result = a / b;
            break;
        default:
            return res.status(400).json({ statusCode: 400, error: 'Invalid operation. Use add, subtract, multiply, or divide.' });
    }

    res.json({
        statusCode: 200,
        method: 'POST',
        operation,
        num1: a,
        num2: b,
        result
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});