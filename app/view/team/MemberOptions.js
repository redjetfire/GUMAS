Ext.define('GUMAS.view.team.MemberOptions', {
    extend: 'Ext.window.Window',
    alias: 'widget.memberwindow',

    title: '',
    resizable: false,
    id:'teammemberswindow',
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    width: 200,
    autoShow: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    text: 'View Profile',
                    action: 'teamProfileview'
                },
                {
                    xtype: 'button',
                    text: 'Send Message',
                    action: 'teamsSendmessage'
                },
                {
                    xtype: 'hiddenfield',
                    id: 'teamhiddenfield',
                    name: 'hidden_field'
                }
            ]
        });

        me.callParent(arguments);
    }
});
