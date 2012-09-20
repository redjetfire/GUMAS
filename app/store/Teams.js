Ext.define('GUMAS.store.Teams', {
    extend: 'Ext.data.Store',
    model: 'GUMAS.model.Teammodel',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/teams.json',
        reader: {
            type: 'json',
            root: 'teams',
            successProperty: 'success'
        }
    }
});