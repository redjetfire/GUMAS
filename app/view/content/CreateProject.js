Ext.define('GUMAS.view.content.CreateProject',{
    extend: 'Ext.window.Window',
    alias: 'widget.createProject',

    title: 'Create Project',
	id: 'createProject',
    resizable: false,
	collapsible: true,
    autoShow: true,

    initComponent: function() {

        this.items = [	
        
            {
                xtype: 'form',
                bodyStyle: 'padding:20px;',
                items: [

                    {
                        xtype: 'combobox',	
                        fieldLabel: 'Category',
                        emptyText: 'Please select...',
                        margin: '0 0 10 0',
                        width: 450                      
                    },
                    {
                        xtype: 'combobox',	
                        fieldLabel: 'Subcategory',
                        emptyText: 'Please select...',
                        margin: '0 0 10 0',
                        width: 450                      
                    },
                    {
                        xtype: 'textfield',	
                        fieldLabel: 'Job Title',
                        margin: '0 0 10 0',
                        width: 450                       
                    },
                    {
                        xtype: 'textareafield',
                        fieldLabel: 'Description',
                        margin: '0 0 10 0',
                        width: 450,
                        height: 200
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel:'Skills Required',
                        margin: '0 0 10 0',
                        width:450,
                    },
                    {
                    	xtype: 'radiogroup',
                    	fieldLabel:'Job Type',
                    	columns:1,
                    	vertical:true,
                    	items: [
                    		{boxLabel:'Hourly - Pay by the hour', name: 'job_type'},
                    		{boxLabel:'Fixed Price - Pay by the object', name: 'job_type'},
                    		{
                    			xtype:'textfield',
                    			width: 100
                    		}
                    	]                    	
                    },
                    {
                        xtype: 'combobox',	
                        fieldLabel: 'Estimate Duration',
                        emptyText: 'Please select...',
                        margin: '0 0 10 0',
                        width: 450                      
                    },
                    {
                        xtype: 'combobox',	
                        fieldLabel: 'Estimate Workload',
                        emptyText: 'Please select...',
                        margin: '0 0 10 0',
                        width: 450                      
                    },
                    {
                        xtype: 'button',
                        height: 41,
                        width: 99,
                        text: 'Add project'
                    }
                ]
            }
           
        ];

    this.callParent(arguments);
    }
});