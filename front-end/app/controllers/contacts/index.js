import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		delete(contact) {
			contact.destroyRecord().then(() => {
				this.transitionToRoute('contacts');
			});
		}
	}
});