Ext.define('GUMAS.view.content.FindFreelancers',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.freelancers',
	
	
	layout: 'border',
	border:0,
	store: 'Freelancers',
	
	
	initComponent: function() {
		
		var items = new Ext.view.View({
			store: 'Freelancers',
			tpl: new Ext.XTemplate(
				'<tpl for=".">',
					'<div class="fthumb_wrap">',
						'<a id="a" href="#">',
						  	'<div class="fkeeper">',
								'<div id="img_placeholder">',
									'<img src="resources/my-images/icons/nophoto.png" />',
								'</div>',
							
								'<div id="fdescription">',
									'<div id="container">',
									'<h3>{firstName} {secondName}</h3>',
									'<p style="border-bottom:1px solid #ccc; margin-bottom:5px;">{salary}$/hr, country: {country}</p>',
									'<p>{description}</p>',
									'</div>',
									'<div id="skills">',
										'Skills:',
									'</div>',
								'</div>',
								
								
							
								'<div style="clear:both;"></div>',
							'</div>',
						'</a>',
					'</div>',
				'</tpl>'),
			itemSelector: 'div.thumb-wrap',
			emptyText: 'No projects available',
			split:true
			});
		
		var contractors = new Ext.panel.Panel({
			title: 'Contractors',
			region: 'center',
			autoScroll: true,
			items: [items],
			
			dockedItems: [{
						xtype: 'toolbar',
						dock: 'top',
						items: [
							{
								text: 'Filter will be here'
								}
							]
						}
					]
		});
			
		var advSearch = new Ext.panel.Panel({
			title: 'Advanced Search',
			region: 'east',
			width: '25%',
			items: [
				{
					xtype:'textfield',
					fieldLabel:'Keywords',
					labelAlign:'top',
					width:'90%',
					margin: '10 0 0 10'
					},
				{
					xtype:'textfield',
					fieldLabel:'Skills',
					labelAlign:'top',
					width:'90%',
					margin: '10 0 0 10'
					},
				{
					xtype:'checkboxgroup',
					fieldLabel:'Location',
					labelAlign:'top',
					columns:2,
					vertical:true,
					margin: '15 0 0 10',
					width: '90%',
					items:[
						{boxLabel:'Any location', name:'location', inputValue: 'Any', checked:true},
						{boxLabel:'Africa', name:'location', inputValue: 'Africa'},
						{boxLabel:'Asia', name:'location', inputValue: 'Asia'},
						{boxLabel:'Australia', name:'location', inputValue: 'Australia'},
						{boxLabel:'Europe', name:'location', inputValue: 'Europe'},
						{boxLabel:'North America', name:'location', inputValue: 'North America'},
						{boxLabel:'South America', name:'location', inputValue: 'South America'}
						]
					},
				{
					xtype:'checkboxgroup',
					fieldLabel:'English Level',
					labelAlign:'top',
					columns:2,
					vertical:true,
					margin: '20 0 0 10',
					width: '95%',
					items:[
						{boxLabel:'Any level', name:'elevel', inputValue: 'Any', checked:true},
						{boxLabel:'Begginer', name:'elevel', inputValue: 'Begginer'},
						{boxLabel:'Pre-intermediate', name:'elevel', inputValue: 'Pre-intermediate'},
						{boxLabel:'Intermediate', name:'elevel', inputValue: 'Intermediate'},
						{boxLabel:'Upper-intermediate', name:'elevel', inputValue: 'Upper-intermediate'},
						{boxLabel:'Advance', name:'elevel', inputValue: 'Advance'},
						]
					},
				{
					xtype:'checkboxgroup',
					fieldLabel:'Raiting',
					labelAlign:'top',
					columns:2,
					vertical:true,
					margin: '20 0 0 10',
					width: '95%',
					items:[
						{boxLabel:'Any', name:'elevel', inputValue: 'Any', checked:true},
						{boxLabel:'1', name:'elevel', inputValue: 'Begginer'},
						{boxLabel:'2', name:'elevel', inputValue: 'Pre-intermediate'},
						{boxLabel:'3', name:'elevel', inputValue: 'Intermediate'},
						{boxLabel:'4', name:'elevel', inputValue: 'Upper-intermediate'},
						{boxLabel:'5', name:'elevel', inputValue: 'Advance'},
						]
					},
				{
					xtype:'button',
					text:'Search',
					width: 100,
					margin: '10 0 0 10'
					}
				]
			});
			
		this.items = [
			contractors,
			advSearch
			];
			
		this.callParent(arguments);
		}
	});