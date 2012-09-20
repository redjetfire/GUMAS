Ext.define('GUMAS.model.Freelance',{
	extend: 'Ext.data.Model',
	fields: [
		{ name:'id',type:'int' },
        { name:'firstName', type:'string' },
        { name:'secondName', type:'string' },
		{ name:'country', type:'string' },
		{ name:'title', type:'string' },
		{ name:'description', type:'string' },
		{ name:'salary', type:'int' }
    ]
	});