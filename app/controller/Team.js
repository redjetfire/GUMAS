Ext.define('GUMAS.controller.Team', {
    extend: 'Ext.app.Controller',

    views: ['team.Team','team.TeamInvite','team.TeamDismiss','team.TeamDissolve'],
    stores: ['Users'],
    models: ['User'],

    init: function() {
        this.control({
            'teamview button[action=teaminviteWin]':{
                click: this.inviteNewMember
            },
            'invitemember button[action=invite]':{
                click: this.sendInvite
            },
            'teamview button[action=teamdismissWin]':{
                click: this.dismissMemberWin
            },
            'dismissmember button[action=dismiss]':{
                click: this.dismissMember
            },
            'teamview button[action=teamdissolveWin]':{
                click: this.dissolveTeamWin
            },
            'dissolveteam button[action=dissolve]':{
                click: this.dissolveTeam
            },

        });
    },

    inviteNewMember: function() {
        var view = Ext.widget('invitemember');
        view.down('form');
    },

    sendInvite: function(){
        console.log("Invite Clicked");
        var store = this.getUsersStore();
        store.clearFilter(true);
        var value = Ext.getCmp('inviteTeamForm').getForm().findField('username').getValue();
        console.log(value);
        if(store.findExact("login", value.toLowerCase()) != -1)
        {
            var data;
            data = store.getAt(store.findExact('login', value.toLowerCase())).data;
            console.log(data.login + " is currently in " + data.team.toUpperCase()+ " Team");
            if(data.team == "")
            {
                Ext.getCmp('teaminv').close();
                Ext.MessageBox.alert("Success","Invite successfully sent to " + data.login + ".");
            }
            if(data.team != "")
            {
                Ext.MessageBox.alert("Error","User " + data.login + " is already in team.");
            }
        }
        else
        {
            Ext.MessageBox.alert("Error","User " + value + " doesn't exist.");
        }
        store.clearFilter(true);
    },

    dismissMemberWin: function(){
        var view = Ext.widget('dismissmember');
        view.down('form');
    },

    dismissMember: function(){
        console.log("Dismiss Clicked");
        var store = this.getUsersStore();
        store.clearFilter(true);
        var value = Ext.getCmp('dismissTeamForm').getForm().findField('username').getValue();
        console.log(value);
        if(store.findExact("login", value.toLowerCase()) != -1)
        {
            var data;
            data = store.getAt(store.findExact('login', value.toLowerCase())).data;
            console.log(data.login + " is currently in " + data.team.toUpperCase()+ " Team");
            var kicker = Ext.getCmp('profStatus').getText();
            var data1;
            data1 = store.getAt(store.findExact('login', kicker.toLowerCase())).data;
            if((data.team.toLowerCase() == data1.team.toLowerCase()) && (data1.teamowner.toLowerCase() == data.team.toLowerCase()))
            {
                Ext.getCmp('teamdis').close();
                Ext.MessageBox.alert("Success","User " + data.login + " was successfully kicked.");
                console.log("Dismiss SUCCESS KICK RUN");
            }
            if((data.team.toLowerCase() == data1.team.toLowerCase()) && (data1.teamowner.toLowerCase() != data.team.toLowerCase()))
            {
                Ext.MessageBox.alert("Error","You aren't " + data.team.toUpperCase() + " Team leader.");
                console.log("Dismiss NOT A TEAM LEADER RUN");
            }
            if(data.team.toLowerCase() != data1.team.toLowerCase())
            {
                Ext.MessageBox.alert("Error","User " + data.login + " is not a member of " + data1.team.toUpperCase() + " Team.");
                console.log("Dismiss NOT A TEAM MEMBER RUN");
            }
            if(data.login.toLowerCase() == data1.login.toLowerCase())
            {
                Ext.MessageBox.alert("Error","You can not kick yourself.");
                console.log("Dismiss Leader KICK Leader");
            }
        }
        else
        {
            Ext.MessageBox.alert("Noob","Open your Eyes!!! No such User")
        }
        store.clearFilter(true);
    },

    dissolveTeamWin: function()
    {
        var view = Ext.widget('dissolveteam');
        view.down('form');
    },

    dissolveTeam: function()
    {
        console.log("Team dissolved successfully !");
        Ext.getCmp('teampanel').close();
        Ext.getCmp('teamdissolve').close();
    }
});