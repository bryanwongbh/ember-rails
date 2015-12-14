import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.find('contact');
  // }
  model(params) {
    return this.store.query('contact', params);
  },
	actions: {
	  deleteContact(contact) {
	  	contact.destroyRecord().then(() => {
	  		this.transitionTo('contacts');
	 	 	}).catch((reason) => {
	 	 		contact.reload();
	 	 	});
	 	}
	}
});