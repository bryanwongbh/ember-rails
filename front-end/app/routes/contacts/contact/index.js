import Ember from 'ember';

export default Ember.Route.extend({
  // setupController: function( controller, model ) {
  //   controller.set( "model", this.store.fetch( 'contact', model.id ) );
  // }
  // model: function(params) {
  //   return this.store.find('contact', params.contact_id);
  // }
  model(params) {
  	console.log("Hello from route!!" + this._super(...arguments).get('id'));
    return this.store.find('contact', this._super(...arguments).get('id'));

  }
});