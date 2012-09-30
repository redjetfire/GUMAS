Ext.define('GUMAS.controller.Team', {
    extend: 'Ext.app.Controller',

    views: ['team.Team','team.TeamInvite','team.TeamDismiss','team.TeamDissolve','team.TeamMembers','team.MemberOptions'],
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
            'teammemberslist':{
                itemdblclick: this.viewUser
            },
            'memberwindow button[action=teamProfileview]':{
                click: this.viewUserProfile
            },
            'memberwindow button[action=teamsSendmessage]':{
                click: this.sendUserMessage
            }

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
    },

    viewUser: function(grid,record)
    {
        console.log('Double clicked on ' + record.get('login'));
        var check = record.get('login');
        var value = Ext.getCmp('profStatus').getText();
        if(check != value)
        {
            var view = Ext.widget('memberwindow');
            var test = Ext.getCmp('teamhiddenfield').setValue(record.get('login'));
            view.setTitle(record.get('login').toUpperCase());
            view.down('form');
        }
        else
        {
            Ext.MessageBox.alert('Error','You clicked on your self.')
        }
    },

    viewUserProfile: function()
    {
        var view = Ext.widget('profile');
        var value = Ext.getCmp('teamhiddenfield').getValue();
        console.log(value + ' this is test');
        //-----------------------------------------------
        var store = this.getUsersStore();
        var obj = Ext.getCmp('profile_container').down('displayfield');
        var data;
        data = store.getAt(store.findExact('login', value.toLowerCase())).data;
        obj.setValue(data.name);
        obj = obj.next('displayfield').setValue(data.surname);
        obj = obj.next('displayfield').setValue(data.email);
        obj = obj.next('displayfield').setValue(data.location);
        obj = obj.next('displayfield').setValue(data.city);
        obj = obj.next('displayfield').setValue(data.joindate);
        Ext.getCmp('profile_image').setSrc(data.image);

        var objOne = Ext.getCmp('profile_skills').down('displayfield');
        objOne.setValue(data.skills);
        var objTwo = Ext.getCmp('profile_contacts').down('displayfield');
        objTwo = objTwo.next('displayfield').setValue(data.skype);
        objTwo = objTwo.next('displayfield').setValue(data.msn);
        objTwo = objTwo.next('displayfield').setValue(data.yahoo);
        objTwo = objTwo.next('displayfield').setValue(data.icq);
        //-----------------------------------------------
        Ext.getCmp('usernameProfile').setText(value.toUpperCase());
        Ext.getCmp('teammemberswindow').close();
        var user = Ext.getCmp('profStatus').getText();
        if(value != user)
        {
            Ext.getCmp('profilebtnedit').disable();
            Ext.getCmp('profilebtnedit').hide();
        }
        view.down('form');
    },

    sendUserMessage: function()
    {
        var view = Ext.widget('profileinbox');
        view.down('form');
        Ext.getCmp('inboxpaging').setVisible(false);
        Ext.getCmp('inboxIn').getLayout().setActiveItem(1);
        var record = Ext.getCmp('teamhiddenfield').getValue();
        var values = Ext.getCmp('composeform').down('textfield');
        console.log(record);
        values.setValue(record);
    }

});