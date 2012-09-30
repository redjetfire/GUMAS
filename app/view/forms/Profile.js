Ext.define('GUMAS.view.forms.Profile', {
    extend: 'Ext.window.Window',
    alias: 'widget.profile',

    autoShow: true,
    id: 'profillle',
    height: 525,
    width: 450,
    bodyPadding: 10,
    layout: 'absolute',
    resizable: false,
    title: 'My Profile',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'image',
					id: 'profile_image',
					width: 200,
                    src: 'http://thumbs.dreamstime.com/thumblarge_277/1212802348Ig5QO1.jpg'
				},
                {
                    xtype: 'container',
					id: 'profile_container',
                    margin: '0 0 0 210',
                    padding: 0,
                    items: [
                        {
                            xtype: 'displayfield',
                            labelWidth: 75,
                            fieldLabel: 'Name:'
                        },
                        {
                            xtype: 'displayfield',
                            labelWidth: 75,
                            fieldLabel: 'Surname:'
                        },
                        {
                            xtype: 'displayfield',
                            labelWidth: 75,
                            fieldLabel: 'Email'
                        },
                        {
                            xtype: 'displayfield',
                            labelWidth: 75,
                            fieldLabel: 'Location:'
                        },
                        {
                            xtype: 'displayfield',
                            labelWidth: 75,
                            fieldLabel: 'City:'
                        },
                        {
                            xtype: 'displayfield',
                            labelWidth: 75,
                            fieldLabel: 'Join date'
                        },
                        {
                            xtype: 'displayfield',
                            labelWidth: 75,
                            fieldLabel: 'Team'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    id: 'profile_skills',
                    margin: '310 0 0 210',
                    padding: 0,
                    items: [
                        {
                            xtype: 'displayfield',
                            width: 200,
                            value: 'asdasdas',
                            fieldLabel: 'Skills',
                            labelAlign: 'top'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    id: 'profile_contacts',
                    margin: '176 0 0 210',
                    padding: 0,
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Contacts'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Skype'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'MSN'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Yahoo'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'ICQ'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    padding: 5,
                    items: [
                        {
                            xtype: 'label',
                            id:'usernameProfile',
                            style: 'font-weight: bold;\r\nfont-size:10px;',
                            margins: '0 0 0 10',
                            width: 150
                        },
                        {
                            xtype: 'tbspacer',
                            width: '45%'
                        },
                        {
                            xtype: 'button',
                            action: 'editProfile',
                            id: 'profilebtnedit',
                            width: 75,
                            text: 'Edit'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});