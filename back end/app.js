
// Dependencies

var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Data

var tables = [
    {
        routeName: 'Table1',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'

    },
    {
        routeName: 'Table2',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'

    },
    {
        routeName: 'Table3',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'

    },
    {
        routeName: 'Table4',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'

    },
    {
        routeName: 'Table5',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'

    },
    {
        routeName: 'Table6',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'

    }
];

var waitlist = [
    {
        routeName: 'Table7',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'
    },
    {
        routeName: 'Table8',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'
    },
    {
        routeName: 'Table9',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'
    },
    {
        routeName: 'Table10',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'
    },
    {
        routeName: 'Table11',
        name: 'Customer Name',
        phoneNumber: 'Customer Phone Number',
        email: 'Customer Email',
        id: 'Customer Id'
    },
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

// API for table and Wait list

app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
});

// Post to create a table reservation

app.post("/api/tables", function(req, res){
    var newTable = req.body;
    if (tables.length > 6){
        waitlist.push(newTable);
    }
    else {
        tables.push(newTable)
    };
    res.json(newTable);
});

// Start the server to begin listening

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

