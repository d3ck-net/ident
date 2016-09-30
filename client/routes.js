import {Router} from 'meteor/iron:router';



Router.route('/',function(){
    this.redirect('/profile');
});

Router.route('/users',function(){
    this.render('users');
});

Router.route('/profile',function(){
    this.render('profile');
});
