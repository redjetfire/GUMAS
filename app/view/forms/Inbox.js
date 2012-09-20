Ext.define('GUMAS.view.forms.Inbox', {
    extend: 'Ext.window.Window',
    alias: 'widget.profileinbox',

    store:[
    'Inboxs',
    'Outboxs'],

    model:[
    'Inbox',
    'Outbox'],

    autoShow: true,
    id: 'profilemyinbox',
    height: 500,
    width: 600,
    bodyPadding: 5,
    title: 'My Inbox',
    resizable: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    plain: true,
                    items: [
                        {
                            xtype: 'panel',
                            border: 0,
                            height: 433,
                            layout: 'card',
                            id: 'inboxIn',
                            frameHeader: false,
                            title: 'Inbox',
                            activeItem: 0,
                            items: [
                                {
                                    xtype: 'inboxcont',
                                    id:'inboxcontent'
                                },
                                {
                                    xtype: 'composeview',
                                    id:'composeform'
                                }
                            ],
                            dockedItems:[
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    id: 'inboxpaging',
                                    store: 'Inboxs',
                                    displayInfo: true,
                                    items:[
                                        '-',
                                        {
                                            xtype:'button',
                                            text: 'Compose',
                                            action: 'openCompose',
                                            iconCls:'compose-icon',
                                            id:'composemailin'
                                        },
                                        {
                                            xtype:'tbspacer',
                                            width: 65
                                        },
                                        {
                                            xtype: 'button',
                                            iconCls:'trash-icon',
                                            text:'Delete',
                                            id:'deletemailin'
                                        },
                                        '-'
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            border: 0,
                            height: 433,
                            id: 'inboxOut',
                            frameHeader: false,
                            title: 'Outbox',
                            items: [
                                {
                                    xtype: 'outboxcont'
                                }
                            ],
                            dockedItems:[
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    id: 'outboxpaging',
                                    store: 'Outboxs',
                                    displayInfo: true,
                                    items:[
                                        '-',
                                        {
                                            xtype:'button',
                                            text: 'Compose',
                                            iconCls:'compose-icon',
                                            id:'composemailout'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});