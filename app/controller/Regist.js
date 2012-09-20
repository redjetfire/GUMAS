Ext.define('GUMAS.controller.Regist',{
	extend: 'Ext.app.Controller',
	
	views: [
		'buttons.Regist',
		'forms.Regist'
		],
	stores: ['Users'],
    models: ['User'],
	
	init: function(){
		this.control({
			'mainView button[action=openForm]': {
				click: this.showForm
				},
			'regForm button[action=signUp]': {
				click: this.signUp
				}
			});
	},
		
	showForm: function(){
		Ext.widget('regForm');
	},
		
	signUp: function(button){
		var win = button.up('window'),
		val = win.down('form').down('textfield').getValue(),
		store = this.getUsersStore();
		store.load();
		if (store.findExact("login", val)!=-1) {
			Ext.MessageBox.alert('Error', 'User with this login already exists!');
			return;
		}
		win.close();
		Ext.MessageBox.alert('Welcome!', 'Your profile was succesfully saved!');
	}
	
	});