Ext.define('GUMAS.view.team.Team', {
    extend: 'Ext.window.Window',
    alias: 'widget.teamview',

    store:[
        'Users'
    ],

    id: 'teampanel',
    autoShow: true,
    layout: {
            type: 'fit'
        },
    height: 600,
    width: 800,
    resizable: false,
    title: 'Team',

    initComponent: function() {
            var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    layout: {
                        type: 'hbox',
                        padding: '2'
                    },
                    items: [
                        {
                            xtype: 'label',
                            id: 'team_name',
                            width: 150,
                            margin: '0 0 0 5',
                            style: 'font-weight: bold;\r\nfont-size:14px;'
                        },
                        {
                            xtype: 'tbspacer',
                            width: '30%'
                        },
                        {
                            xtype: 'button',
                            text: 'Invite',
                            disabled: true,
                            margin: '0 0 0 5',
                            id: 'teaminviteBtn',
                            action: 'teaminviteWin'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: 'Dismiss',
                            disabled: true,
                            id: 'teamdismissBtn',
                            action: 'teamdismissWin'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: 'Dissolve',
                            disabled: true,
                            id: 'teamdissolveBtn',
                            action: 'teamdissolveWin'
                        },
                        {
                            xtype: 'tbspacer',
                            width: '3%'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Filter',
                            labelWidth: 50
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'container',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    height: 197,
                                    maxHeight: 197,
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            padding: '5',
                                            height: 197,
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    //height: '100%',
                                                    id: 'teamImg',
                                                    src: 'resources/team-images/team_default.png',
                                                    width: '100%',
                                                    style: {
                                                        background: 'center center no-repeat',
                                                        backgroundSize: '100% 100%'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'team_info',
                                            height: 197,
                                            flex: 1,
                                            items: [
                                               {
                                                    xtype: 'displayfield',
                                                    margin: '5 0 0 0',
                                                    value: 'Display Field',
                                                    fieldLabel: 'Team Leader'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    margin: '10 0 0 0',
                                                    value: 'Display Field',
                                                    fieldLabel: 'Created On'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    margin: '10 0 0 0',
                                                    value: 'Display Field',
                                                    fieldLabel: 'Members'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    padding: 5,
                                    items: [
//                                        {
//                                            xtype: 'chart',
//                                            id: 'chartCmp',
//                                            animate: true,
//                                            store: Users,
//                                            shadow: true,
//                                            legend: {
//                                                position: 'right'
//                                            },
//                                            insetPadding: 60,
//                                            theme: 'Base:gradients',
//                                            series: [{
//                                                type: 'pie',
//                                                field: 'data1',
//                                                showInLegend: true,
//                                                donut: donut,
//                                                tips: {
//                                                    trackMouse: true,
//                                                    width: 140,
//                                                    height: 28,
//                                                    renderer: function(storeItem, item) {
//                                                        //calculate percentage.
//                                                        var total = 0;
//                                                        store1.each(function(rec) {
//                                                            total += rec.get('data1');
//                                                        });
//                                                        this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data1') / total * 100) + '%');
//                                                    }
//                                                },
//                                                highlight: {
//                                                    segment: {
//                                                        margin: 20
//                                                    }
//                                                },
//                                                label: {
//                                                    field: 'name',
//                                                    display: 'rotate',
//                                                    contrast: true,
//                                                    font: '12px Arial'
//                                                }
//                                            }
//                                            ]
//                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    id: 'teamMembers',
                                    store: 'Users',
                                    columns:
                                        [
                                            {header : 'Members', flex: 2, dataIndex : 'login'},
                                            {header : 'Status', flex: 1, dataIndex : 'status'},
                                            {header : 'Rating', flex: 1, dataIndex: 'rating'}
                                        ],
                                    preventHeader: true,
                                    autoScroll: true
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