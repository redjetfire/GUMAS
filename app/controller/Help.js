Ext.define('GUMAS.controller.Help',{
	extend: 'Ext.app.Controller',
	
	views: [
		'help.Help',
		'buttons.Help'
		],
	
	init: function(){
		this.control({
			'mainView button[action=openHelpWin]' : {
				click: this.showHelpWin
				}
			});
		},
		
	showHelpWin: function(){
		Ext.widget('help');
		}
	});