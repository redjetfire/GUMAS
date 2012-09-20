Ext.define('GUMAS.view.forms.Settings', {
    extend: 'Ext.window.Window',
    alias: 'widget.profsettings',

    autoShow: true,
    id: 'profilesett',
    height: 500,
    width: 600,
    bodyPadding: 5,
    title: 'Settings',
    resizable: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    plain: true,
                    items: [
                        {
                            xtype: 'panel',
                            border: 0,
                            id: 'Account_Panel',
                            height: 433,
                            bodyStyle: {
                                background: '#eee'
                            },
                            bodyPadding: 5,
                            frameHeader: false,
                            title: 'Account',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    margin: '5 0 0 0',
                                    width: 250,
                                    value: '',
                                    fieldLabel: 'Username'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '5 0 0 0',
                                    width: 250,
                                    value: '',
                                    fieldLabel: 'Email'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: '5 0 0 0',
                                    width: 250,
                                    value: '',
                                    fieldLabel: 'Password'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '10 0 0 0',
                                    width: 250,
                                    fieldLabel: 'Current Password',
                                    vtype: 'password',
                                    labelAlign: 'top'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '10 0 0 0',
                                    width: 250,
                                    fieldLabel: 'New Password',
                                    vtype: 'password',
                                    labelAlign: 'top'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '10 0 0 0',
                                    width: 250,
                                    fieldLabel: 'Repeat',
                                    vtype: 'password',
                                    labelAlign: 'top'
                                },
                                {
                                    xtype: 'button',
                                    height: 35,
                                    margin: '25 0 0 0',
                                    width: 100,
                                    text: 'Submit'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            height: 433,
                            id: 'AccountBasic_Panel',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            bodyStyle: {
                                background: '#eee'
                            },
                            bodyPadding: 5,
                            title: 'Basic',
                            items: [
                                {
                                    xtype: 'container',
                                    id: 'basic_containerOne',
                                    width: 260,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            id: 'firstname_basic',
                                            margin: '5 0 0 0',
                                            width: 250,
                                            fieldLabel: 'First Name',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Last Name',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'triggerfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Gender',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'datefield',
                                            format: 'd-m-Y',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Date of Birth',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'City',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'triggerfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Country',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 35,
                                            margin: '25 0 0 0',
                                            width: 100,
                                            text: 'Submit'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    id: 'basic_containerTwo',
                                    margin: '0 0 0 23',
                                    width: 260,
                                    items: [
                                        {
                                            xtype: 'image',
                                            border: 1,
                                            src: 'http://www.gw2fans.com/images/avatars/GuildWars2_avatar24.jpg',
                                            height: 200,
                                            margin: '5 0 0 5'
                                        },
                                        {
                                            xtype: 'filefield',
                                            margin: '0 0 0 5',
                                            width: 250,
                                            fieldLabel: 'Upload Picture',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            margin: '10 0 0 0',
                                            value: 'Your virtual face or picture. Maximum dimensions are 200x200 and the maximum size is 500 kB. Picture avatars must be smaller at most the maximum allowable size and must not be offensive. If any picture avatars that do not meet this guideline, they will be removed without prior notice.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            height: 433,
                            id: 'About_Panel',
                            bodyPadding: 5,
                            bodyStyle: {
                                background: '#eee'
                            },
                            title: 'About Me',
                            items: [
                                {
                                    xtype: 'textareafield',
                                    height: 150,
                                    margin: '0 0 0 8',
                                    width: 550,
                                    fieldLabel: 'About Me',
                                    labelAlign: 'top'
                                },
                                {
                                    xtype: 'textareafield',
                                    height: 150,
                                    margin: '10 0 0 8',
                                    width: 550,
                                    fieldLabel: 'Skills',
                                    labelAlign: 'top'
                                },
                                {
                                    xtype: 'button',
                                    height: 35,
                                    margin: '25 0 0 10',
                                    width: 100,
                                    text: 'Submit'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            height: 433,
                            id: 'Contacts_Panel',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            bodyStyle: {
                                background: '#eee'
                            },
                            bodyPadding: 5,
                            title: 'Contacts',
                            items: [
                                {
                                    xtype: 'container',
                                    id: 'contacts_containerOne',
                                    width: 260,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            margin: '5 0 0 0',
                                            width: 250,
                                            fieldLabel: 'MSN',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Yahoo Im',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Skype',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'ICQ',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 35,
                                            margin: '25 0 0 0',
                                            width: 100,
                                            text: 'Submit'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    id: 'contacts_containerTwo',
                                    margin: '0 0 0 23',
                                    width: 260,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            margin: '5 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Mobile Phone',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Land Phone',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Website',
                                            labelAlign: 'top'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '10 0 0 0',
                                            width: 250,
                                            fieldLabel: 'Email',
                                            labelAlign: 'top'
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