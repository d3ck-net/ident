import {RESTCollection} from 'meteor/dasdeck:restcollection';
import {User} from '/lib/User';

Users = new RESTCollection('/api/users', User);
Users.setPrimaryKey('id');

Users.attachSchema(new SimpleSchema({
    // id: {
    //     type: Number,
    //     label: 'id',
    //     optional:true
    // },
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

}));

var schema = Users.simpleSchema();
schema.setFieldVisiblity(['firstname', 'lastname', 'email', 'color', 'disabled'], 'all');