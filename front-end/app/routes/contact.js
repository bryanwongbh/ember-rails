import Ember from 'ember';

export default Ember.Route.extend({
  // setupController: function( controller, model ) {
  //   controller.set( "model", this.store.fetch( 'contact', model.id ) );
  // }
  // model: function(params) {
  //   return this.store.find('contact', params.contact_id);
  // }
  model(params) {
    return this.store.findRecord('contact', params.contact_id);
  }
});