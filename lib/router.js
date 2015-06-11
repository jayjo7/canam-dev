Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
	});
	


Router.route('/',   {
						name: 'homePage',
						waitOn:  function()
								{
									var appUUID = Session.get('appUUID');
									Session.setPersistent(ORG_NAME_SESSION_KEY, ORG_NAME);
									Meteor.subscribe('menu' , ORG_NAME);	       
		        					console.log(appUUID + ':done subscribing to menu...');
							        Meteor.subscribe('content' , ORG_NAME);	       
							        console.log(appUUID + ':done subscribing to content...');	
							        Meteor.subscribe('settings' , ORG_NAME);	       
							        console.log(appUUID + ':done subscribing to settings...');		
							        Meteor.subscribe('cartItems', appUUID , ORG_NAME);
		        					console.log(appUUID + ':done subscribing to cartItems...');					        	        					

								}
});

