Ext.define('GUMAS.view.content.Tests',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.tests',
	
	border: 0,
	layout: 'border',
	
	items: [
		{
			xtype: 'panel',
			title: 'Qualification Tests',
			region: 'center',
			width: '75%',
			layout: 'border',
			items: [
				{
					xtype: 'toolbar',
					region: 'north',
					height: 45,
					items: [
						{
							xtype: 'tbspacer',
							width: 20
						},
						{
							xtype: 'textfield',
							width: 250,
							height: 25
						},
						{
							xtype: 'tbspacer',
							width: 10
						},
						{
							xtype: 'button',
							text: 'Search',
							width: 100,
							height: 25
						}
					]				
				},
				{
					xtype:'gridpanel',
					region:'center',
					columns: [
						{text: 'ID', dataIndex: 'id', width: 50},
						{text: 'Title', dataIndex: 'title', flex: 1},
						{text: 'Qualified Contractors', dataIndex: 'qcontractors', width: 130},
						{text: 'Tests Taken ', dataIndex: 'tests_taken', width: 130}
					]
				}
			]
		},
		{
			xtype: 'panel',
			region: 'east',
			width: '25%',
			title: 'Quick Stats',
			layout: 'absolute',
			bodyPadding: '20 0 0 10',
			items: [
				{
					xtype: 'label',
					text: 'Number of Tests Available:',
					
					
				},
				{
					xtype: 'label',
					text: 'Number of Tests Taken:',
					y: 50
				},
				{
					xtype: 'label',
					text: 'Number of Tested Contractors:',
					y: 80
				},
				{
					xtype: 'label',
					text: '% of Tests Passed:',
					y: 110
				}
			]	
		}
	]
	});
