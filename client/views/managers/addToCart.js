Template.addToCart.helpers({

	askSpiceLevel: function(key){

	var menu = Session.get(MENU_OBJECT_SESSION_KEY);
	var SpiceLevel = menu[key];

	if( 'Y' === SpiceLevel.toUpperCase())
	{
		return true;
	}
	else
	{
		return false
	}


},

   getFormattedPrice:function(key){

	var menu = Session.get(MENU_OBJECT_SESSION_KEY);

	var price =  menu[key];

   	return '$' + Number(price).toFixed(2);

   },

   getModatTitleMessage:function()
   {
   		var menu = Session.get(MENU_OBJECT_SESSION_KEY);

   		return menu.Name + "? Good Choice !"
   },


});