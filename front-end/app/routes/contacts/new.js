import Ember from 'ember';

export default Ember.Route.extend({
	// model() {
 //    return {};
 //  },
 //  actions: {
 //    createContact(contact) {
	//   	const newContact = this.store.createRecord('contact', this.modelFor('contact'));
	//   	  newContact.save().then((contact) => {
 //        this.transitionTo('contact', contact);
 //      });
	//  	}
 //  }

	model: function() {
 		return this.store.createRecord('contact');
	}
});
