import {RESTCollection} from 'meteor/dasdeck:restcollection';
import {User} from '/lib/User';

//creates the RESTCollection for the user data type
Users = new RESTCollection('/api/users', User);

//set primary key for updates and data identification
Users.setPrimaryKey('id');

//create schema for data validation
var schema = new SimpleSchema({
    firstname: {
        type: String,
        label: 'first name'
    },
    lastname: {
        type: String,
        label: 'last name'
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: 'email'
    },
    color: {
        type: String,
        label: 'color'
    },
    disabled: {
        type: Boolean,
        label: 'disabled'
    }

});

//edit the schema to only show specified fields inside the UI
schema.setFieldVisiblity(['firstname', 'lastname', 'email', 'color', 'disabled'], 'all');

//attach SimpleSchema to collection
Users.attachSchema(schema);
