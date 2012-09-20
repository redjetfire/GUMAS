Ext.define('GUMAS.store.Projects',{
	extend: 'Ext.data.Store',
	model: 'GUMAS.model.Project',
	autoLoad: true,
	
	proxy: {
		type: 'rest',
		url: 'data/projects.json',
		reader: {
			type: 'json',
			root: 'projects',
			successProperty: 'success'
			}
		}
	});