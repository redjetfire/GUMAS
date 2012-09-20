Ext.define('GUMAS.view.content.HowToUse',{
	extend: 'Ext.window.Window',
	alias: 'widget.use',
	
	width: 830,
	id: 'HowTo',
	title: 'How To Use',
	resizable: false,
	collapsible: true,
	autoShow: true,
	
	initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
			{
				xtype: 'panel',
				border: 0,
				layout: 'absolute',
				style: 'background: white;',
				padding: '20 25 20 25',
				items:[
				{
                    xtype: 'image',
                    width: 200,
                    src: 'resources/my-images/icons/HowToUse.png',
                    x: 35,
                    y: 120
                },
				{
					xtype: 'panel',
					autoScroll: true,
					border: 0,
					height: 500,
					width: 500,
					x: 285,
					layout: 'absolute',
					items:[
					{
						xtype: 'label',
						style: 'font-weight: bold;',
						text: 'This page will give you guidance about how best to use our website.'
					},
					{
						xtype: 'label',
						y: 40,
						style: 'font-style: italic;',
						text: 'ABOUT'
					},
					{
						xtype: 'label',
						y: 60,
						style: 'text-align: justify; line-height: 1.5;',
						html: 'Welcome to our Freelance Exchange site! It has been created to help freelancers create an online profile that they can update, maintain and market to potential Clients. Here, talented professionals from the field of advertising, media and marketing get to create their online profiles and showcase their creative talent. Clients can use our site to search for talented freelancers according to their specific requirements. They can also post their assignment details here and start getting queries from professionals ready to take up their projects.<br/><br/>Who is a Client?<br/>A Client is an employer who has a freelance assignment and is looking to outsource it to the right freelancer/s.<br/><br/>Who is a Seller? <br/>A Seller is a freelancer who offers his professional services and completes projects/assignments on a contract basis.'
					},
					{
						xtype: 'label',
						y: 360,
						style: 'font-style: italic;',
						html: 'FOR CLIENTS'
					},
					{
						xtype: 'label',
						y: 380,
						style: 'text-align: justify; line-height: 1.5;',
						html: 'Clients can register on Freelance Exchange and create an account. This account allows them to post assignments whenever they need to outsource some work. However Freelance Exchange is strictly for freelance work only. Clients can also search through the Freelancers database and select profiles that match their requirement.'
					},
					{
						xtype: 'label',
						y: 480,
						style: 'font-style: italic;',
						html: 'FOR FREELANCERS'
					},
					{
						xtype: 'label',
						y: 500,
						style: 'text-align: justify; line-height: 1.5;',
						html: 'Freelancers can create an account similarly by registering on Freelance Exchange. This profile includes their creative showcase such as graphics, websites, audio work, multimedia and so on. Freelancers can search through assignments posted on the site and send their queries directly to the Clients. Whenever an assignment matching the freelancer\'s criteria is posted, freelancer can add this project to his cart.'
					},
					{
						xtype: 'label',
						y: 630,
						style: 'font-weight: bold;',
						text: 'N.B. If you have any questions, feel free to contact us via \'Contact Us\' form.'
					}]
				}]
            }]
        });

        me.callParent(arguments);
    }
	
});