Ext.define('GUMAS.store.Freelancers',{
	extend: 'Ext.data.Store',
	model: 'GUMAS.model.Freelance',
	autoLoad: true,
	
	proxy: {
		type: 'rest',
		url: 'data/freelancers.json',
		reader: {
			type: 'json',
			root: 'freelancers',
			successProperty: 'success'
			}
		}
	});