import Ember from 'ember';

export default Ember.Route.extend({

  // don't need to specify model hook because this fella inherit from parent!!
  
  // model: function(params) {
  //   return this.store.find('contact', params.contact_id);
  // }
  // model(params) {
  // 	console.log("Hello from route!!" + this._super(...arguments).get('id'));
  //   return this.store.find('contact', this._super(...arguments).get('id'));
  // }
});