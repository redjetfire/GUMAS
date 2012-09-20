Ext.define('GUMAS.controller.Profile', {
    extend: 'Ext.app.Controller',

    views: ['forms.Profile','buttons.Profile','forms.Settings','team.Team','forms.Inbox', 'inbox.InboxContent', 'inbox.OutboxContent', 'inbox.Compose', 'team.NoTeam', 'team.CreateTeam'],
    stores: ['Users','Inboxs','Outboxs','Teams'],
    models: ['User','Inbox','Outbox','Teammodel'],

    init: function() {
        this.control({
            'profilebtn menu button[action=logOut]':{
                click: this.logOut
            },
            'profilebtn menu button[action=viewProf]':{
                click: this.viewProfile
            },
            'profilebtn menu button[action=viewTeam]':{
                click: this.viewMyTeam
            },
            'profilebtn menu button[action=viewSettings]':{
                click: this.viewSettings
            },
            'profilebtn menu button[action=viewInbox]':{
                click: this.viewInbox
            },
            'profile button[action=editProfile]':{
                click: this.viewSettings
            },
            'profileinbox button[action=openCompose]':{
                click: this.openCompose
            },
            'composeview button[action=closeCompose]':{
                click: this.closeCompose
            },
            'composeview button[action=sendCompose]':{
                click: this.sendCompose
            },
            'noteamwindow button[action=createTeam]':{
                click: this.createNewTeam
            }

        });
    },

    viewProfile: function() {
        var view = Ext.widget('profile');
        var value = Ext.getCmp('profStatus').getText();
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
        Ext.getCmp('usernameProfile').setText(value);
        },

    viewMyTeam: function() {
        var store = this.getUsersStore();
        store.clearFilter(true);
        var teamstore = this.getTeamsStore();
        teamstore.clearFilter(true);
        var user = Ext.getCmp('profStatus').getText();
        var data;
        data = store.getAt(store.findExact('login', user.toLowerCase())).data;
        if(data.team != "")
        {
            var win = Ext.widget('teamview');
            var index = teamstore.findExact('teamid', data.team);
            var record = teamstore.getAt(index).data;
            console.log(record, record.id, record.teamid, record.teamname, record.teamleader, record.teambirth, record.teamlogo);
            var team = Ext.getCmp('team_name');
            team.setText(record.teamname.toUpperCase() + " Team");
            var a = Ext.getCmp('team_info').down('displayfield');
            a.setValue(record.teamleader);
            a = a.next('displayfield').setValue(record.teambirth);
            var teamcount = store.filter('team', record.teamid, true);
            var qwerty = store.getCount();
            a = a.next('displayfield').setValue(qwerty);
            if(record.teamlogo != "")
            {
                Ext.getCmp('teamImg').setSrc(record.teamlogo);
            }
            if(data.login == record.teamleader)
            {
                Ext.getCmp('teaminviteBtn').enable();
                Ext.getCmp('teamdismissBtn').enable();
                Ext.getCmp('teamdissolveBtn').enable();
            }
            else
            {
                Ext.getCmp('teaminviteBtn').disable();
                Ext.getCmp('teamdismissBtn').disable();
                Ext.getCmp('teamdissolveBtn').disable();
            }
            win.down('form');
        }
        else
        {
            //CALL TEAM CREATE WINDOW
            var view = Ext.widget('noteamwindow');
            view.down('form');
        }
    },

    viewSettings: function() {
        if(Ext.getCmp('profillle') != null)
        {
            Ext.getCmp('profillle').close();
        }
        var view = Ext.widget('profsettings');
        var value = Ext.getCmp('profStatus').getText();
        var store = this.getUsersStore();
        var obj = Ext.getCmp('Account_Panel').down('displayfield');
        var data;
        data = store.getAt(store.findExact('login', value.toLowerCase())).data;
        obj.setValue(data.login);
        obj = obj.next('displayfield').setValue(data.email);
        obj = obj.next('displayfield').setValue(data.password);
        //-----------------------------------------------
        var objtwo = Ext.getCmp('basic_containerOne').down('textfield');
        console.log(objtwo);
        objtwo.setValue(data.name);
        objtwo = objtwo.next('textfield').setValue(data.surname);
        objtwo = objtwo.next('triggerfield').setValue(data.sex);
        console.log(data.sex);
        objtwo = objtwo.next('datefield').setValue(data.birth);
        console.log(data.birth);
        objtwo = objtwo.next('textfield').setValue(data.city);
        objtwo = objtwo.next('triggerfield').setValue(data.location);
        //-----------------------------------------------
        var objthree = Ext.getCmp('basic_containerTwo').down('image');
        console.log(objthree);
        objthree.setSrc(data.image);
        //-----------------------------------------------
        var objOne = Ext.getCmp('About_Panel').down('textarea');
        objOne.setValue(data.aboutme);
        objOne = objOne.next('textarea').setValue(data.skills);
        //-----------------------------------------------
        var objfour = Ext.getCmp('contacts_containerOne').down('textfield');
        console.log(objfour);
        objfour.setValue(data.msn);
        objfour = objfour.next('textfield').setValue(data.yahoo);
        objfour = objfour.next('textfield').setValue(data.skype);
        objfour = objfour.next('textfield').setValue(data.icq);
        //-----------------------------------------------
        var objfive = Ext.getCmp('contacts_containerTwo').down('textfield');
        console.log(objfive);
        objfive.setValue(data.mobile);
        objfive = objfive.next('textfield').setValue(data.phone);
        objfive = objfive.next('textfield').setValue(data.website);
        objfive = objfive.next('textfield').setValue(data.contactemail);
        view.down('form');
    },

    logOut: function() {
        var store = this.getUsersStore();
        if(Ext.getCmp('profillle') != null)
        {
            Ext.getCmp('profillle').close();
        }
        if(Ext.getCmp('profilesett') != null)
        {
            Ext.getCmp('profilesett').close();
        }
        if(Ext.getCmp('profilemyinbox') != null)
        {
            Ext.getCmp('profilemyinbox').close();
        }
        if(Ext.getCmp('teampanel') != null)
        {
            Ext.getCmp('teampanel').close();
        }
        Ext.getCmp('profMenu').hide();
        Ext.getCmp('prof_bar').getLayout().setActiveItem(0);
        Ext.getCmp('contentBlock').getLayout().setActiveItem(0);
        store.clearFilter(true);
        
        //Disable buttons after logout
        Ext.getCmp('testsBtn').disable();
        Ext.getCmp('projectButton').disable()
},

    viewInbox: function(){
        var view = Ext.widget('profileinbox');
        view.down('form');
    },

    openCompose: function(){
        Ext.getCmp('inboxpaging').setVisible(false);
        Ext.getCmp('inboxIn').getLayout().setActiveItem(1);
    },

    closeCompose: function(){
        Ext.getCmp('inboxIn').getLayout().setActiveItem(0);
        Ext.getCmp('inboxpaging').setVisible(true);
    },

    sendCompose: function(){
        var form = Ext.getCmp('composeform').getForm(),
            values = form.getFieldValues();
        console.log("You send a message to user " + values.toUser + " ." + "Subject is " + values.subjectName + " .");
        var store = this.getUsersStore();
        store.load();
        var outbox = this.getOutboxsStore();
        outbox.load();
        if (store.findExact("login", values.toUser.toLowerCase()) != -1)
        {
            if(values.subjectName != "" && values.messageText != "")
            {
                Ext.MessageBox.alert('Success',"Subject " + values.subjectName + " were successfully sent.");
                Ext.getCmp('inboxIn').getLayout().setActiveItem(0);
                Ext.getCmp('inboxpaging').setVisible(true);
                form.reset();
            }
            else
            {
                Ext.MessageBox.alert('Error',"Please fill in all fields.");
            }
        }
        else
        {
            Ext.MessageBox.alert('Error',"User " + values.toUser + " does not exist.");
        }
    },

    createNewTeam: function(){
        Ext.getCmp('noteam').close();
        var view = Ext.widget('createteamwin');
        var dt = new Date();
        Ext.getCmp('teambirth').setValue(dt);
        view.down('form');
    }
});
