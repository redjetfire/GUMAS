Ext.define('GUMAS.view.team.TeamMembers', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.teammemberslist',


    id: 'teamMembers',
    store: 'Users',
    columns:
[
    {header : 'Members', flex: 2, dataIndex : 'login'},
    {header : 'Status', flex: 1, dataIndex : 'status'},
    {header : 'Rating', flex: 1, dataIndex: 'rating'}
],
    preventHeader: true,
    autoScroll: true
});
