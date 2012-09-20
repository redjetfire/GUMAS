Ext.define('GUMAS.view.team.TeamDissolve', {
    extend: 'Ext.window.Window',
    alias: 'widget.dissolveteam',

    title: 'Team Dissolve',
    layout: 'fit',
    autoShow: true,
    resizable: false,
    id: 'teamdissolve',
    bodyPadding: 5,

    initComponent: function() {

        this.items = [
            {
                xtype: 'form',
                id: 'dissolveTeamForm',
                bodyPadding: 5,
                bodyStyle: {
                    background: '#eee'
                },
                border: 0,
                items: [
                    {
                        xtype: 'displayfield',
                        value: 'Do you really want to dissolve a team ?'
                    }
            ],
                buttons: [
                    {
                        text: 'Dissolve',
                        action: 'dissolve'
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
