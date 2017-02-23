import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './Home.html';

Template.Home.events({
  'click #registration'(event) {
    event.preventDefault();

    Accounts.createUser({
      username: $('#username').val().trim(),
      password: $('#password').val().trim(),
      email: 'abc@abc.com',
      profile: {
        name: 'Sakshi',
        address: 'Hoshiarpur',
        phonename: '218936128',
      }
    }, (error, obj) => {
      if (error) {
        console.log(error.reason);
      } else {
        FlowRouter.go('/welcome');
      }
    });
  },
  'click #login'(event) {
    event.preventDefault();

    const username = $('#l_username').val().trim();
    const password = $('#l_password').val().trim();

    Meteor.loginWithPassword(username, password, (error, obj) => {
      if (error) {
        console.log(error.reason);
      } else {
        FlowRouter.go('/welcome');
      }
    });
  }
});
