Ext.define('GUMAS.view.forms.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.loging',

    autoShow: true,
    frame: true,
    draggable: false,
    bodyStyle: {
    },
    height: 250,
    width: 300,
    resizable: false,
    bodyPadding: 10,
    closable: true,
    collapsible: true,
    title: 'Log In',

    initComponent: function() {

    this.items = [{
        xtype: 'form',
        url:'../php/login.php',
        frame: true,
        margin:'10 0 0 0',
        bodyPadding: '10',
        items: [
            {
                xtype: 'textfield',
                id:'useremail',
                name: 'userlogin',
                margin: '5 0 0 0',
                fieldLabel: 'Username',
                labelAlign: 'top',
                //vtype:'email',
                allowBlank: false,
                blankText: 'Empty field.',
                minLength: 5,
                maxLength: 20,
                anchor: '100%'
            },
            {
                xtype: 'textfield',
                id:'password',
                name: 'pass',
                margin: '10 0 0 0',
                fieldLabel: 'Password',
                inputType:'password',
                minLength: 6,
                maxLength: 15,
                labelAlign: 'top',
                //vtype:'alphanum',
                allowBlank: false,
                blankText: 'Empty field.',
                anchor: '100%'
            }
        ],
        buttons: [
            {
                action:'login',
                height: 35,
                margin: '10 10 0 0',
                width: 100,
                text: 'Log In',
                formBind: true,
                disabled: true
            }
        ]
    }];
    this.callParent(arguments);
}
});