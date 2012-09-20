Ext.define('GUMAS.view.team.TeamInvite', {
    extend: 'Ext.window.Window',
    alias: 'widget.invitemember',

    title: 'Invite',
    layout: 'fit',
    autoShow: true,
    resizable: false,
    id: 'teaminv',
    bodyPadding: 5,

    initComponent: function() {

        this.items = [
            {
                xtype: 'form',
                id: 'inviteTeamForm',
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
                    text: 'Invite',
                    action: 'invite'
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
