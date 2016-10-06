import {Meteor} from 'meteor/meteor';
import {Router} from 'meteor/iron:router';
import {_} from 'meteor/underscore';

//create a local database (Mongo) to simulate API calls
Users = new Mongo.Collection('Users');

//on startup
Meteor.startup(function () {

    //dummy data
    var dummyData = [
        {
            "id": 5,
            "firstname": "Felix",
            "lastname": "Ender",
            "email": "felix@riskident.com",
            "color": "red",
            "disabled": false
        }, {
            "id": 9,
            "firstname": "John",
            "lastname": "Doe",
            "email": "john@riskident.com",
            "color": "blue",
            "disabled": false
        }, {
            "id": 8,
            "firstname": "Christina",
            "lastname": "Marta",
            "email": "christina@riskident.com",
            "color": "#fff",
            "disabled": false
        }, {
            "id": 4,
            "firstname": "Till",
            "lastname": "Tenner",
            "email": "till@riskident.com",
            "color": "#e00",
            "disabled": true
        }, {
            "id": 10,
            "firstname": "Richard",
            "lastname": "Wagner",
            "email": "richard@riskident.com",
            "color": "#000",
            "disabled": false
        }, {
            "id": 3,
            "firstname": "Dominik",
            "lastname": "Schulze",
            "email": "dominik@riskident.com",
            "color": "#00B200",
            "disabled": false
        }];

    //import dummy data into database if not done yet
    if (Users.findOne() === undefined) {
        _.each(dummyData, function (o) {
            Users.insert(o);
        })
    }
    // code to run on server at startup
});

//setting up a simple "REST server" to simulate the server side
Router.route('/api/users/:id?', function (params) {

    var filter = {};

    if (this.params.id !== undefined) {
        filter.id = parseInt(this.params.id);
    }

    if (this.request.method === 'POST') {

        var lastUser = Users.findOne({}, {sort: {id: -1}});
        var id = lastUser.id + 1;

        this.request.body.id = id;
        Users.insert(this.request.body);

        this.response.end(JSON.stringify(id));
    }
    if (this.request.method === 'GET') {

        var users = Users.find(filter, {fields: {_id: 0}}).fetch();
        this.response.end(JSON.stringify({data: users}));
    }

}, {where: 'server'});