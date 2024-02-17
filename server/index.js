const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const EmployeeModel = require('./model/Employee');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.json(err));
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('Success');
                } else {
                    res.json('Password incorrect');
                }
            } else {
                res.json('Record not found');
            }
        })
        .catch(err => {
            console.error('Error occurred during login:', err);
            res.status(500).json('Internal Server Error');
        });
});


app.listen(9999);
