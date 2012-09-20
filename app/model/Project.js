Ext.define('GUMAS.model.Project',{
	extend: 'Ext.data.Model',
	fields: [
		{ name:'proj_id',type:'int' },
        { name:'title', type:'string' },
        { name:'description', type:'string' },
		{ name:'budget', type:'string' },
		{ name:'author', type:'string' },
		{ name:'date', type:'string' }
    ]
	});