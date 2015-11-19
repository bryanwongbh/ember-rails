import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.find('contact');
  // }
  model() {
    return this.store.findAll('contact');
  }
});