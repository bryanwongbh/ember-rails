import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	submit: function(){
			this.get('model').save().then(() => {
        this.transitionToRoute('contacts.contact');
  		});
		},

  	cancel: function(){
  		this.transitionToRoute('contacts.contact');
  	}
  }
});
