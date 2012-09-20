Ext.define('GUMAS.controller.Freelancers',{
	extend: 'Ext.app.Controller',
	
	stores: ['Freelancers'],
	
	models: ['Freelance'],
	
	views: ['content.FindFreelancers'],
	
	init: function(){
		console.log('Freelancers conroller works');
		}
	});