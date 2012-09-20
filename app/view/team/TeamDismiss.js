Ext.define('GUMAS.view.team.TeamDismiss', {
    extend: 'Ext.window.Window',
    alias: 'widget.dismissmember',

    title: 'Dismiss',
    layout: 'fit',
    autoShow: true,
    resizable: false,
    id: 'teamdis',
    bodyPadding: 5,

    initComponent: function() {

        this.items = [
            {
                xtype: 'form',
                id: 'dismissTeamForm',
                bodyPadding: 5,
                bodyStyle: {
                    background: '#eee'
                },
                border: 0,
                items: [
                    {
                        xtype: 'textfield',
                        name : 'username',
                        fieldLabel: 'Username'
                    }
                ],
                buttons: [
                    {
                        text: 'Dismiss',
                        action: 'dismiss'
                    },
                    {
                        text: 'Cancel',
                        scope: this,
                        handler: this.close
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }
});
