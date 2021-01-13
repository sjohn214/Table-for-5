// Dependencies

var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

// Data

var tables = [
    {
        routeName: 'Table1',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id',

    },
    {
        routeName: 'Table2',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id',

    },
    {
        routeName: 'Table3',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id',

    },
    {
        routeName: 'Table4',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id',

    },
    {
        routeName: 'Table5',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id',

    },
    {
        routeName: 'Table6',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id',

    }
];

//Routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
});

app.get("/reservation", function(req, res){
    res.sendFile(path.join(__dirname, "./reservation.html"));
});