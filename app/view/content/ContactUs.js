Ext.define('GUMAS.view.content.ContactUs',{
	extend: 'Ext.window.Window',
	alias: 'widget.contact',
	
    title: 'Contact Us',
	id: 'ContactUs',
	resizable: false,
	collapsible: true,
	autoShow: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
			{
				xtype: 'form',
				border: 0,
				layout: 'absolute',
				style: 'background: white;',
				padding: '5 25 5 25',
				height: 540,
				items: [
                {
                    xtype: 'textfield',
                    width: 150,
                    hideLabel: true,
                    allowBlank: false,
                    vtype: 'alpha',
                    x: 340,
                    y: 20
                },
                {
                    xtype: 'textfield',
                    width: 150,
                    hideLabel: true,
                    allowBlank: false,
                    vtype: 'alpha',
                    x: 510,
                    y: 20
                },
                {
                    xtype: 'label',
                    height: 30,
                    style: 'font-weight: bold;',
                    text: 'Name:',
                    x: 350,
                },
                {
                    xtype: 'label',
                    height: 20,
                    style: 'color: grey;',
                    width: 70,
                    text: 'First',
                    x: 350,
                    y: 40
                },
                {
                    xtype: 'label',
                    style: 'color:grey;',
                    text: 'Last',
                    x: 520,
                    y: 40
                },
                {
                    xtype: 'label',
                    style: 'font-weight: bold;',
                    text: 'E-mail address:',
                    x: 350,
                    y: 70
                },
                {
                    xtype: 'textfield',
                    width: 320,
                    fieldLabel: 'Label',
                    hideLabel: true,
					allowBlank: false,
                    vtype: 'email',
                    x: 340,
                    y: 90
                },
                {
                    xtype: 'label',
                    style: 'font-weight: bold;',
                    text: 'Phone:',
                    x: 350,
                    y: 130
                },
                {
                    xtype: 'textfield',
                    width: 70,
                    fieldLabel: 'Label',
                    hideLabel: true,
                    maxLength: 3,
                    minLength: 3,
                    x: 340,
                    y: 150
                },
                {
                    xtype: 'textfield',
                    width: 70,
                    fieldLabel: 'Label',
                    hideLabel: true,
                    maxLength: 3,
                    minLength: 3,
                    x: 420,
                    y: 150
                },
                {
                    xtype: 'textfield',
                    width: 70,
                    fieldLabel: 'Label',
                    hideLabel: true,
                    maxLength: 4,
                    minLength: 4,
                    x: 500,
                    y: 150
                },
                {
                    xtype: 'label',
                    style: 'color: grey;',
                    text: '(XXX)',
                    x: 350,
                    y: 170
                },
                {
                    xtype: 'label',
                    height: 20,
                    style: 'color: grey;',
                    width: 60,
                    text: 'XXX-',
                    x: 430,
                    y: 170
                },
                {
                    xtype: 'label',
                    style: 'color: grey;',
                    text: 'XXXX',
                    x: 510,
                    y: 170
                },
                {
                    xtype: 'label',
                    height: 10,
                    style: 'font-weight: bold;',
                    text: 'Subject:',
                    x: 350,
                    y: 200
                },
                {
                    xtype: 'textfield',
                    width: 320,
                    fieldLabel: 'Label',
                    hideLabel: true,
					allowBlank: false,
                    x: 340,
                    y: 220
                },
                {
                    xtype: 'label',
                    height: 10,
                    style: 'font-weight: bold;',
                    text: 'Decription:',
                    x: 350,
                    y: 260
                },
                {
                    xtype: 'textareafield',
                    height: 150,
                    width: 320,
                    fieldLabel: 'Label',
                    hideLabel: true,
					allowBlank: false,
                    x: 340,
                    y: 280
                },
                {
                    xtype: 'label',
                    style: 'font-weight: bold;',
                    text: 'Captcha:',
                    x: 350,
                    y: 450
                },
				{
					xtype: 'box',
					border: 0,
					id: 'captcha1',
					x: 430,
                    y: 440,
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
								Ext.getCmp('captcha1').el.dom.childNodes[i].src='resources/my-images/'+numb[i]+'.gif';
							}
						}
					}
				},
                {
                    xtype: 'textfield',
                    width: 320,
                    fieldLabel: 'Label',
                    hideLabel: true,
                    allowBlank: false,
					vtype: 'captcha',
                    x: 340,
                    y: 470
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    x: 475,
                    y: 500,
                    formBind: true
                },
				{
                    xtype: 'image',
                    width: 200,
                    src: 'resources/my-images/icons/ContactUs.png',
                    x: 50,
                    y: 150
                }]
            }]
        });

        me.callParent(arguments);
    }

});