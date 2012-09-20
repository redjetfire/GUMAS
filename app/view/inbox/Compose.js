Ext.define('GUMAS.view.inbox.Compose', {
    extend: 'Ext.form.Panel',
    alias: 'widget.composeview',

    border: 0,
    bodyPadding: 10,
    preventHeader: true,
    id: 'composeform',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items:[
            {
                xtype: 'textfield',
                width: 350,
                fieldLabel: 'To',
                name: 'toUser',
                labelAlign: 'top'
            },
            {
                xtype: 'textfield',
                margin: '10 0 0 0',
                width: 350,
                fieldLabel: 'Subject',
                name: 'subjectName',
                labelAlign: 'top'
            },
            {
                xtype: 'filefield',
                anchor: '100%',
                margin: '10 0 0 0',
                maxWidth: 350,
                fieldLabel: 'Attach a file',
                labelAlign: 'top'
            },
            {
                xtype: 'textareafield',
                height: 230,
                margin: '10 0 0 0',
                width: 555,
                fieldLabel: 'Message',
                name: 'messageText',
                labelAlign: 'top'
            }
        ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    id:'composeToolbar',
                    items: [
                        {
                            xtype: 'button',
                            action: 'sendCompose',
                            margin: '0 0 0 5',
                            width: 50,
                            text: 'Send'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            action: 'closeCompose',
                            width: 50,
                            text: 'Close'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
