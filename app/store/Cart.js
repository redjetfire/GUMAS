Ext.define('GUMAS.store.Cart',{
	extend: 'Ext.data.Store',
	model: 'GUMAS.model.Project',
	autoLoad: true,
	
	proxy: {
        type: 'localstorage',
		id: 'id'
    }
});