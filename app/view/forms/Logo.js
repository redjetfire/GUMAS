Ext.define('GUMAS.view.forms.Logo',{
	extend: 'Ext.container.Container',
	alias: 'widget.logo',
	height: 60,
	width: 200,
	style: {
		background: 'url(resources/my-images/Logo.png) center right no-repeat'
	},
	
	initComponent: function() {	
		this.callParent(arguments);
	}
});