Ext.define('GUMAS.controller.Main',{
    extend: 'Ext.app.Controller',

    views: ['Main','forms.Logo'],

    init: function() {
        this.control(
            console.log("It works!")
        )
    }
});