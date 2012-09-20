Ext.define('GUMAS.store.Users', {
    extend: 'Ext.data.Store',
    model: 'GUMAS.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/users.json',
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});