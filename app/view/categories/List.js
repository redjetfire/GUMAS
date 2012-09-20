Ext.define('GUMAS.view.categories.List',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.categories',
	width: '17%',
	collapsible: true,
	title: 'All Categories',
	
	defaults: {
        bodyStyle: 'padding:3px; '
    },
    
    layout: {
    	type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true    	
    },
    
    initComponent: function() {
    	this.items = [
    		{
    			title: 'Web Development',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Web Design', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Web Programming', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'Ecommerce', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'UI Design', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Website QA', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Website Project Management', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Web Development', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Software Development',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Desktop Applications', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Game Development', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'Scripts & Utilities', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'Software Plug-ins', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Mobile Apps', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Application Interface Design', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Software Project Management', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Software QA', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'VOIP', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Software Development', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Networking & Information Systems',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Network Administration', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'DBA - Database Administration', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'Server Administration', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'ERP / CRM Implementation', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Networking & Information Systems', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Writing & Translation',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Technical Writing', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Website Content', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'Blog & Article Writing', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'Copywriting', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Translation', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Creative Writing', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Writing & Translation', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Administrative Support',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Data Entry', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Personal Assistant', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'Web Research', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'Email Response Handling', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Transcription', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Other - Administrative Support', name: 'rb', inputValue: '5' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Design & Multimedia',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Graphic Design', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Logo Design', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'Illustration', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'Print Design', name: 'rb', inputValue: '5' },
            				{ boxLabel: '3D Modeling & CAD', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Audio Production', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Video Production', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Voice Talent', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Animation', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Presentations', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Engineering & Technical Design', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Design & Multimedia', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Customer Service',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Customer Service & Support', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Technical Support', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'Phone Support', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'Order Processing', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Customer Service', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Sales & Marketing',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Advertising	', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Email Marketing', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'SEO - Search Engine Optimization', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'SEM - Search Engine Marketing', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'SMM - Social Media Marketing', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'PR - Public Relations', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Telemarketing & Telesales', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Business Plans & Marketing Strategy', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Market Research & Surveys', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Sales & Lead Generation', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Sales & Marketing', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		},
    		{
    			title: 'Business Services',
    			xtype: 'panel',
    			autoScroll: true,
    			items: [
    				{
    					xtype: 'checkboxgroup',
    					columns:1,
    					vertical:true,
    					items:[
    						{ boxLabel: 'All Subcategories', name: 'rb', inputValue: '1' , checked: true},
            				{ boxLabel: 'Accounting', name: 'rb', inputValue: '2' },
            				{ boxLabel: 'Bookkeeping', name: 'rb', inputValue: '3' },
            				{ boxLabel: 'HR / Payroll', name: 'rb', inputValue: '4' },
            				{ boxLabel: 'Financial Services & Planning', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Payment Processing', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Legal', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Project Management', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Business Consulting', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Recruiting', name: 'rb', inputValue: '6' },
            				{ boxLabel: 'Statistical Analysis', name: 'rb', inputValue: '5' },
            				{ boxLabel: 'Other - Business Services', name: 'rb', inputValue: '6' }
    					]
    				}
    			]
    		}
    	];
    	
    	this.callParent(arguments);
    }
});