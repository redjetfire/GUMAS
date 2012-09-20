Ext.define('GUMAS.store.Outboxs',{
	extend: 'Ext.data.Store',
	model: 'GUMAS.model.Outbox',
	autoLoad: true,
    pageSize: 6,
	
	proxy: {
		type: 'ajax',
		url: 'data/outbox.json',
		reader: {
			type: 'json',
			root: 'mails',
			successProperty: 'success'
			}
		}
	});