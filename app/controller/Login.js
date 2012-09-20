Ext.define('GUMAS.controller.Login', {
    extend: 'Ext.app.Controller',

    views: [
        'buttons.Log',
        'forms.Login'
    ],

    stores: ['Users'],
    models: ['User'],


    init: function() {
        this.control({
            'loginbtn': {
                click: this.loginUser
            },
            'loging button[action=login]':{
                click: this.logIn
            }
        });
    },

    loginUser: function() {

        var view = Ext.widget('loging');

        view.down('form');
    },

    logIn: function(button) {
        var win = button.up('window'),
            form = win.down('form').getForm(),
            values = form.getFieldValues();
            store = this.getUsersStore();
        store.load();
        if ((store.findExact("login", values.userlogin.toLowerCase()) == store.findExact("password", values.pass)) && store.findExact("password", values.pass) != -1)
        {
            win.close();
            Ext.getCmp('prof_bar').getLayout().setActiveItem(1);
            Ext.getCmp('profStatus').setText(values.userlogin);
            
            //Enable buttons after login
            Ext.getCmp('testsBtn').enable();
            Ext.getCmp('projectButton').enable()
        }
        else
        {
            Ext.MessageBox.alert('Error', 'Invalid username/password');
        }
    }
});