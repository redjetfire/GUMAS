Ext.define('GUMAS.view.help.Help',{
	extend: 'Ext.window.Window',
	alias: 'widget.help',
	
	title: 'Guide',
	layout: 'fit',
	collapsible: true,
	autoShow: true,
	
	initComponent: function(){
		var store = Ext.create('Ext.data.TreeStore',{
			root: {
				expanded: true,
				children: [
					{text: 'Overview', expanded: true, children: [
						{text: 'Getting started', leaf: true},
						{text: 'What new in version', leaf: true},
						{text: 'Perfomance guide', leaf: true}
						]},
					{text: 'Tutorials', expanded: true, children: [
						
						]},
					{text: 'Information', expanded: true, children: [
						{text: 'About platform', leaf: true},
						{text: 'About us', leaf: true},
						{text: 'Contact us', leaf: true}
						]}
					]
				}
			});
		
		this.items = [
			{
				xtype: 'container',
				layout: 'border',
				width: 800,
				height: 500,
				items: [
					{
						xtype: 'treepanel',
						region: 'west',
						width: 160,
						store: store,
						rootVisible: false
						},
					{
						xtype: 'tabpanel',
						region: 'center'
						}
					]
				}
			];
		
		this.callParent(arguments);
		}
	});