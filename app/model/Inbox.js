Ext.define('GUMAS.model.Inbox', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'login',
        'subject',
        'text',
        'from',
        'ondate',
        'status'
    ]
});