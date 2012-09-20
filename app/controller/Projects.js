Ext.define('GUMAS.controller.Projects',{
	extend: 'Ext.app.Controller',
	
	stores: ['Projects', 'Cart'],
	
	models: ['Project'],
	
	views: ['content.Projects'],
	
	init: function(){
		console.log('Projects conroller works');
		}
	});