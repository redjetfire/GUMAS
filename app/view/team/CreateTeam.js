Ext.define('GUMAS.view.team.CreateTeam', {
    extend: 'Ext.window.Window',
    alias: 'widget.createteamwin',

    title: 'Create Team',
    autoShow: true,
    resizable: false,
    id: 'createTeam',
    bodyPadding: 5,
    height: 450,
    width: 400,
    closable: false,

        initComponent: function() {
            var me = this;

            Ext.applyIf(me, {
                items: [
                    {
                        xtype: 'form',
                        border: 0,
                        height: 415,
                        bodyStyle: {
                            background: '#eee'
                        },
                        bodyPadding: 10,
                        preventHeader: true,
                        items: [
                            {
                                xtype: 'textfield',
                                anchor: '100%',
                                maxWidth: 300,
                                fieldLabel: 'Team Name',
                                labelAlign: 'top'
                            },
                            {
                                xtype: 'datefield',
                                anchor: '100%',
                                margin: '10 0 0 0',
                                maxWidth: 300,
                                id: 'teambirth',
                                fieldLabel: 'Create Date',
                                labelAlign: 'top',
                                disabled: true,
                                hideTrigger: true
                            },
                            {
                                xtype: 'textareafield',
                                anchor: '100%',
                                height: 185,
                                margin: '10 0 0 0',
                                fieldLabel: 'About Team',
                                labelAlign: 'top'
                            },
                            {
                                xtype: 'filefield',
                                anchor: '100%',
                                margin: '10 0 0 0',
                                fieldLabel: 'Team Logo',
                                labelAlign: 'top'
                            },
                            {
                                xtype: 'button',
                                height: 25,
                                margin: '25 0 0 0',
                                width: 75,
                                text: 'Create'
                            },
                            {
                                xtype: 'button',
                                height: 25,
                                margin: '25 0 0 25',
                                width: 75,
                                text: 'Cancel',
                                scope: this,
                                handler: this.close
                            }
                        ]
                    }
                ]
            });

            me.callParent(arguments);
        }

    });