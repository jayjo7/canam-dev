Meteor.startup(function() {


	 	$('html').attr('lang', 'en');

	 	$('body').attr('class', 'index body');
		$('body').attr('id', 'page-top');
        $('body').attr('ontouchstart', " ");


        var appUUID = Session.get('appUUID');
        if(appUUID)
        {

            console.log(appUUID + ":Startup: appUUID from the session = " + appUUID);

        }
        else
        {
        	Session.setPersistent('appUUID', Meteor.uuid());
        	console.log(appUUID + ":Startup: New appUUID stored in local storage = " + Session.get('appUUID'));

        }

	}

    


);

$(document).on("keydown", function (e) {
    if (e.which === 8 && !$(e.target).is("input:not([readonly]):not([type=radio]):not([type=checkbox]), textarea, [contentEditable], [contentEditable=true]")) {
        e.preventDefault();
    }
});