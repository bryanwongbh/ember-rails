import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', function() {
  	this.route('contact', { path: '/:contact_id' }, function() {
        this.route('edit');
  	});
  	this.route('new', { path: '/new' });
    });
  this.route('protected');
  this.route('login');
});

export default Router;