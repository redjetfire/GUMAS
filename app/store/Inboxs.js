Ext.define('GUMAS.store.Inboxs',{
	extend: 'Ext.data.Store',
	model: 'GUMAS.model.Inbox',
	autoLoad: true,
	
	proxy: {
		type: 'ajax',
		url: 'data/inbox.json',
		reader: {
			type: 'json',
			root: 'mails',
			successProperty: 'success'
			}
		}
	});