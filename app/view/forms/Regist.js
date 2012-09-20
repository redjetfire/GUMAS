Ext.require([
    'Ext.form.*'
]);

Ext.onReady(function() {
    Ext.apply(Ext.form.field.VTypes, {
        password: function(val, field) {
            if (field.initialPassField) {
                var pwd = field.up('form').down('#' + field.initialPassField);
                return (val == pwd.getValue());
            }
            return true;
        },
        passwordText: 'Passwords do not match'
    });
	
	Ext.apply(Ext.form.field.VTypes, {
        captcha: function(val, field) {
        return (c==val);
        },
        captchaText: 'Incorrect'
    });
});

Ext.define('GUMAS.view.forms.Regist', {
	extend: 'Ext.window.Window',
    alias: 'widget.regForm',
	store: 'Users',
	title: 'Registration',
	layout: 'fit',
	resizable: false,
	autoShow: true,
	
	initComponent: function() {
		this.items = [{
			xtype: 'form',
			layout: 'anchor',
			items: [
				{
					xtype: 'textfield',
					name: 'login',
					fieldLabel: 'Login',
					margin: 10,
					vtype:'alphanum',
					allowBlank: false
				},
				{
					xtype: 'textfield',
					name: 'email',
					fieldLabel: 'Email',
					margin: 10,
					vtype: 'email',
					allowBlank: false
				},
				{
					xtype: 'textfield',
					inputType: 'password',
					name: 'password',
					fieldLabel: 'Password',
					margin: 10,
					id:'pass',
					minLength: 6,
					maxLength: 15,
					allowBlank: false
				},
				{
					xtype: 'textfield',
					inputType: 'password',
					name: 'rep_password',
					fieldLabel: 'Confirm password',
					margin: 10,
					vtype: 'password',
					minLength: 6,
					maxLength: 15,
					initialPassField: 'pass',
					allowBlank: false
				},
				{
					xtype: 'fieldcontainer',
					layout: 'hbox',
					fieldLabel: 'Select your role',
					margin: 10,
					items:[
					{
						xtype: 'radio',
						name: 'role',
						boxLabel: 'Freelancer',
						checked: true,
					},
					{
						xtype: 'radio',
						name: 'role',
						boxLabel: 'Customer'
					}]
				},
				{
					xtype: 'box',
					border: 0,
					id: 'captcha',
					margin: '0 0 0 115',
					autoEl:{
						children:[{
							tag:'img'
						},
						{
							tag:'img'
						},
						{
							tag:'img'
						},
						{
							tag:'img'
						},
						{
							tag:'img'
						}]
					},
					listeners: {
						render: function() {
							var i, numb=[];
							c=new String();
							for (i=0;i<5;i++){
								numb[i]=Math.floor(Math.random() * 10);
								c+=numb[i];
								Ext.getCmp('captcha').el.dom.childNodes[i].src='resources/my-images/'+numb[i]+'.gif';
							}
						}
					}
				},
				{
					xtype: 'textfield',
					name: 'captcha',
					fieldLabel: 'Captcha',
					margin: 10,
					vtype:'captcha',
					allowBlank: false
				}
			],
			buttons: [
				{
					text: 'Sign Up',
					action: 'signUp',
					formBind: true,
					disabled: true
				},
				{
					text: 'Cancel',
					scope: this,
					handler: this.close
				}
			]
		}];
		this.callParent(arguments);
	}
});