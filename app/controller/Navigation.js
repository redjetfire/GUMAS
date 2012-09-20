Ext.define('GUMAS.controller.Navigation',{
	extend: 'Ext.app.Controller',
	
	views: [
        'buttons.ViewAllJobs',
		'buttons.FindFreelancers',
		'buttons.Tests',
		'buttons.CreateProject',
		'buttons.HowToUse',
		'buttons.ContactUs',
		'content.Projects',
		'content.FindFreelancers',
		'content.Tests',
		'content.CreateProject',
		'content.HowToUse',
		'content.ContactUs'        
		],
		
	init: function(){
		this.control({
            'jobsBtn[action=ViewAllJobs]': {
				click: this.ViewAllJobs
				},
			'freelancersBtn[action=FindFreelancers]': {
				click: this.FindFreelancers
				},
			'testsBtn[action=Tests]': {
				click: this.Tests
				},
			'projectButton[action=CreateProject]': {
                click: this.CreateProject
            	},
			'useBtn[action=HowToUse]': {
				click: this.HowToUse
				},
			'contactBtn[action=ContactUs]': {
				click: this.ContactUs
				}
			})
			
		},
		
	ViewAllJobs : function() {
		 Ext.getCmp('contentBlock').getLayout().setActiveItem(0);
		},
	
	FindFreelancers : function() {
		 Ext.getCmp('contentBlock').getLayout().setActiveItem(1);
		},
		
	Tests : function() {
		 Ext.getCmp('contentBlock').getLayout().setActiveItem(2);
		},

    CreateProject: function(){
        Ext.widget('createProject');
   		},
	
	HowToUse : function() {
		 Ext.widget('use');
		},
	
	ContactUs : function() {
		 Ext.widget('contact');
		}
		
	});
