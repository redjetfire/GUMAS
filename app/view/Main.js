Ext.define('GUMAS.view.Main' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainView',

    layout: 'border',

    initComponent: function() {
        this.items = [
            {
				region:'north',
				xtype:'toolbar',
                height: 80,
                items: [
				{
					xtype: 'logo'
				},
				{
					xtype: 'tbspacer',
					width: '2%'
				},
				
				{
					xtype: 'toolbar',
					border: 0,
					width: '63%',
					height: 45,
					items: [
						{xtype: 'jobsBtn'},
						'-',
						{xtype: 'freelancersBtn'},
						'-',
						{xtype: 'testsBtn'},
						'-',
                        {xtype: 'projectButton'},
                        '-',
						{xtype: 'useBtn'},
						'-',
						{xtype: 'contactBtn'},
						{xtype: 'tbspacer',	width: '6%'	},
						{	xtype: 'textfield'	,
							width: '20%',
							height: 25,
							emptyText: 'Search...'	}
						]
					},
				{
					xtype: 'tbspacer',
					width: '3%'
					},
				{
					xtype: 'toolbar',
					id: 'prof_bar',
					border: 0,
					layout: 'card',
					activeItem: 0,
					items:[
					{
						xtype: 'toolbar',
						border: 0,
						items:[
						{
							xtype: 'loginbtn',
							id: 'logInBtn',
							text: 'Log In',
							width: 75,
							height: 30
							//pressed: true
						},
						'-',
						{
							xtype: 'regButton',
							height: 30,
							width: 75
						}]
						
					},
                        {
                            xtype: 'toolbar',
                            border: 0,
                            items:[
                                {
                                    xtype: 'profilebtn',
                                    height: 30,
                                    margin: '0 0 0 1',
                                    id: 'profStatus',
                                    width: 134,
                                    menu:
                                    {
                                        xtype: 'menu',
                                        id:'profMenu',
                                        plain: true,
                                        frame: true,
                                        items:
                                        {
                                            xtype: 'buttongroup',
                                            bodyPadding: '5',
                                            columns: 1,
                                            defaults:
                                            {
                                                xtype: 'button',
                                                width: 106,
                                                textAlign: 'center'
                                            },
                                            items: [
                                                {
                                                    text: 'My Profile',
                                                    action:'viewProf'
                                                },
                                                {
                                                    text: 'My Team',
                                                    action:'viewTeam'
                                                },
                                                {
                                                    text: 'My Inbox',
                                                    action:'viewInbox'
                                                },
                                                {
                                                    text: 'Settings',
                                                    action:'viewSettings'
                                                },
                                                {
                                                    text: 'Log out',
                                                    action:'logOut'
                                                }
                                            ]
                                        }
                                    }

                                }

                            ]
                        }]
				}
				]
        },{
                id: 'contentBlock',
            region: 'center',
            layout: 'card',
			border: 0,
                activeItem: 0,
                items:[
                   {
                       xtype: 'projects'
                   },
				   {
						xtype: 'freelancers'
				   },
				   {
					   xtype: 'tests'
				   }
                   ]

		},
            {
			region: 'west',
			xtype: 'categories',
			id: 'categories'
		},
		{
            region: 'south',
            title: 'Footer',
            collapsible: false,
            html: '&copy; 2012 WebUI 071',
            split: true,
            height: 30,
            minHeight: 30,
            preventHeader: true,
			items: [
				{
					xtype: 'helpButton',
					margin: '4 20 0 10',
					width: 50
					}
				]
        }]

        this.callParent(arguments);
    }
});
