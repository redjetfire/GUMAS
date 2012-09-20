Ext.define('GUMAS.view.inbox.OutboxContent',{
    extend: 'Ext.view.View',
    alias: 'widget.outboxcont',

    store: 'Outboxs',

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="mailblock">',
            '<a href="#">',
                '<div class="mailpic">',
                    '<img src="resources/my-images/icons/inbox/outbox.png" />',
                '</div>',
                '<div class="mailsubject">',
                    '<h5>{subject}</h5>',
                '</div>',
                '<div class="mailfrom"><span style="font-size:12px;">From:<br />{mailto}</span></div>',
                '<div class="maildate"><span style="font-size:12px;">Received on:<br />{ondate}</span></div>',
                '<div style="clear:both;"></div>',
            '</a>',
        '</div>',
        '</tpl>'
    ),
    itemSelector: 'div.mailblock',
    emptyText: 'No images available',

    listeners:{
        'change': function(){
            var store = this.getStore();
            store.clearFilter(true);
            var user = Ext.getCmp('profStatus').getText();
            var mailscount = store.filter('login', user.toLowerCase(), true);
            store.clearFilter(true);
        }
    }

});
