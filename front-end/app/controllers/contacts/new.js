import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	createContact: function(){
    	this.get('model').save().then((contact) => {
        this.transitionToRoute('contacts.contact', contact);
  		});
  	},

  	cancel: function(){
  		this.transitionToRoute('contacts');
  	}
  }
});
