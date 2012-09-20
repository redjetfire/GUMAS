Ext.define('GUMAS.view.buttons.CreateProject',{
    extend: 'Ext.button.Button',
    alias: 'widget.projectButton',

    text: 'Create Project',
    action: 'CreateProject',
    id:'projectButton',
    width: '12%',
    minWidth: 65,
    height: 40,
    disabled: true
});