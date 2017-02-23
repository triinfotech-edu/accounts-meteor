import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { HomeLayout } from '../../ui/layouts/HomeLayout/HomeLayout';
import { Home } from '../../ui/pages/Home/Home';
import { Welcome } from '../../ui/pages/Welcome/Welcome';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('HomeLayout', { content: 'Home' });
  }
});

FlowRouter.route('/welcome', {
  name: 'Welcome',
  action() {
    if (Meteor.userId()) {
      BlazeLayout.render('HomeLayout', { content: 'Welcome' });
    } else {
      BlazeLayout.render('HomeLayout', { content: 'Home' });
    }
  }
});
