Ext.define('GUMAS.view.team.NoTeam', {
    extend: 'Ext.window.Window',
    alias: 'widget.noteamwindow',

    title: 'Notification',
    layout: 'fit',
    autoShow: true,
    resizable: false,
    id: 'noteam',
    bodyPadding: 5,
    closable: false,

    initComponent: function() {

        this.items = [
            {
                xtype: 'panel',
                border: 0,
                bodyStyle: {
                    background: '#eee'
                },
                bodyPadding: 5,
                preventHeader: true,
                items: [
                    {
                        xtype: 'displayfield',
                        value: 'You are not in the team.'
                    },
                    {
                        xtype: 'displayfield',
                        value: 'Do you want to create a team?'
                    },
                    {
                        xtype: 'button',
                        margin: '5 0 0 0',
                        width: 75,
                        text: 'Create',
                        action: 'createTeam'
                    },
                    {
                        xtype: 'button',
                        margin: '5 0 0 25',
                        width: 75,
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