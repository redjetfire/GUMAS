Ext.define('GUMAS.view.content.Projects',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.projects',
	
	
	layout: 'border',
	width: '83%',
	border:0,

	
	store: 'Projects',
	
	initComponent: function() {
	
//CONTENT
		var content = new Ext.view.View({
			store: 'Projects',
			tpl: new Ext.XTemplate(
			'<tpl for=".">',
				'<div class="thumb-wrap">',
					  '<a href="#">',
					  '<div class="keeper">',
					  '<div>',
					  '<div class="description">', 
					  '<img src="resources/my-images/icons/task50px.png" />',
					  '<h1>{title}</h1>',
					  '<p>{description}</p></div>',
					  '<div class="budget"><span style="font-weight:normal;">Budget:</span><br />{budget}</div>',
					  '<div class="info"><span style="font-weight:normal; font-size:11px;">Posted date:<br />{date}</span></div>',
					  '<div style="clear:both;"></div>',
					  '</div>',
					  '</div>',
					  '</a>',
				'</div>',
			'</tpl>'),
			itemSelector: 'div.thumb-wrap',
			emptyText: 'No projects available',
			enableDrag: true,
			ddGroup: 'selectedItems',
			split:true,
			
			listeners:{
				'render':function(v) {
					content.dragZone = new Ext.dd.DragZone(v.getEl(),{
					getDragData: function(e) {
						var sourceEl = e.getTarget(v.itemSelector, 10);
						if (sourceEl) {
							d = sourceEl.cloneNode(true);
							d.id = Ext.id();
							Ext.select('div.x-mask').setHeight('0px');
							return {
								ddel: d.firstChild.firstChild.firstChild.firstChild.firstChild.nextSibling,
								sourceEl: sourceEl,
								repairXY: Ext.fly(sourceEl).getXY(),
								sourceStore: v.store,
								draggedRecord: v.getRecord(sourceEl)
							}
						}
					},
					getRepairXY: function() {
						return this.dragData.repairXY;
					}
					});
				}
			}
		}); 
		
		var cartcontent = new Ext.view.View({
			store: 'Cart',
			tpl: new Ext.XTemplate(
			'<tpl for=".">',
				'<div class="thumb-wrap">',
				  '<a href="#">',
				  '<div class="keeper">',
				  '<div>', 
				  '<h1>{title}</h1>',
				  '<div class="budget"><span style="font-weight:normal;">Budget:</span><br />{budget}</div>',
				  '</div>',
				  '</div>',
				  '</a>',
				'</div>',
			'</tpl>'),
			itemSelector: 'div.thumb-wrap',
			emptyText: 'No projects available',
			enableDrag: true,
			ddGroup: 'selectedItems',
			split:true,
			
			listeners:{
				'render':function(v) {
					cartcontent.dragZone = new Ext.dd.DragZone(v.getEl(),{
					getDragData: function(e) {
						var sourceEl = e.getTarget(v.itemSelector, 10);
						if (sourceEl) {
							d = sourceEl.cloneNode(true);
							d.id = Ext.id();
							return {
								ddel: d,
								sourceEl: sourceEl,
								repairXY: Ext.fly(sourceEl).getXY(),
								sourceStore: v.store,
								draggedRecord: v.getRecord(sourceEl)
							}
						}
					},
					getRepairXY: function() {
						return this.dragData.repairXY;
					}
					});
				}
			}
		});
		
//ITEMS		
		var items = new Ext.panel.Panel({
				region:'center',
				title: 'Projects',
				autoScroll: true,
				items: [content],
				dockedItems: [{
						xtype: 'toolbar',
						dock: 'top',
						items: [
							{	
								xtype: 'combobox',
								fieldLabel: 'Filter',
								store: 'Projects',
								queryMode: 'local',
								displayField: 'budget',
								value: '$',
								hideTrigger: true,
								listeners:{
									'change': function(){
										this.getStore().clearFilter();
										this.getStore().filter('budget', this.getValue(), true);
										if(this.getValue()==null) this.getStore().clearFilter()
									}
								}
							}]
						},
					{	
						xtype: 'pagingtoolbar',
						dock: 'bottom',
						store: 'Projects',
						displayInfo: true,
                        pageSize: 6
						}
					]
				
			});
			
//CART			
		var cart = new Ext.Panel({
			layout:'absolute',
			region: 'east',
			title: 'Cart',
			width: '22%',
			items: [
				{	
					xtype: 'button',
					height: 90,
					anchor: '100%',
					margin: '5 5 5 5',
					style: {
						background: 'url(resources/my-images/icons/add-to-cart.png) center center no-repeat'
					},

					listeners: {
						'render': function(v) {
							var buttonView = v;
							button = buttonView.up('panel');
							button.dropZone = Ext.create('Ext.dd.DropZone', v.el, {

								getTargetFromEvent: function(e) {
									return e.getTarget();
								},

								onNodeOver: function(target, dd, e, data){
									return Ext.dd.DropZone.prototype.dropAllowed;
								}
								,
								onNodeDrop: function(target, dd, e, data){
									if (cartcontent.getStore().find('proj_id', data.draggedRecord.data.proj_id)!=-1) Ext.MessageBox.alert('Warning!','This item has already been added to your cart');
									else {
										cartcontent.getStore().add(data.draggedRecord.data);
										cartcontent.getStore().sync();
										Ext.getCmp('cartText').el.dom.textContent = 'You\'ve selected '+cartcontent.getStore().count()+' items';
									}
									return true;
								}
							});
						}
					}	
				},
				
				{
					xtype: 'panel',
					border: 0,
					anchor: '100% 100%',
					autoScroll: true,
					margin: '100 0 0 0',
					items: [cartcontent]
				}
			],
				
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'top',
					height: 25,
					items: [
						{	
							xtype: 'text',
							id: 'cartText',
							text: 'Drag items here to add'
						}]
				},
				{ 	xtype: 'panel',
					border: 0,
					layout: 'absolute',
					dock:'bottom',
					items:[
						{
							xtype: 'toolbar',
							height: 25,
							border: 1,
							items: [
								{	
									xtype: 'text',
									text: 'Drag items here to remove'
								}]
						},
						{	
							xtype: 'button',
							height: 90,
							anchor: '100%',
							margin: '30 5 5 5',
							style: {
								background: 'url(resources/my-images/icons/remove-from-cart.png) center center no-repeat'
							},
					
							listeners: {
								'render': function(v) {
									var buttonView = v;
									button = buttonView.up('panel');
									button.dropZone = Ext.create('Ext.dd.DropZone', v.el, {

										getTargetFromEvent: function(e) {
											return e.getTarget();
										},

										onNodeOver: function(target, dd, e, data){
											return Ext.dd.DropZone.prototype.dropAllowed;
										},
										
										onNodeDrop: function(target, dd, e, data){
											cartcontent.getStore().remove(data.draggedRecord);
											cartcontent.getStore().sync();
											Ext.getCmp('cartText').el.dom.textContent = 'You\'ve selected '+cartcontent.getStore().count()+' items';
											return true;
										}
									});
								}
							}
						}
					]
				}]
			});
			
		
		this.items = [
				items,
				cart
			];
		this.callParent(arguments);
		}
	});
