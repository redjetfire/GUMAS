Ext.define('GUMAS.model.Outbox', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'login',
        'subject',
        'text',
        'mailto',
        'ondate'
    ]
});