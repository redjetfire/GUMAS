Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'GUMAS',

    appFolder: 'app',
	
	controllers:['Main','Regist','Help','Login','Projects','Profile','Navigation','Categories','Freelancers', 'Team'],

    launch: function() {

        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype:'mainView',
            }

        });
    }
});