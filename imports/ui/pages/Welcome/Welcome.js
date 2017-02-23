import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './Welcome.html';

Template.Welcome.helpers({
  email() {
    const user = Meteor.user();
    if (user && user.emails) {
      return user.emails[0].address;
    }
  }
});

Template.Welcome.events({
  'click a'(event) {
    Meteor.logout();
    FlowRouter.go('/');
  }
});
