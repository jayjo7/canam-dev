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

Template.addToCart.events({

	    'click .addcart': function(evt,tmpl)
    {

        var orgname         	= Session.get(ORG_NAME_SESSION_KEY);
        var currentTarget   	= evt.currentTarget

        var sessid           	= Session.get('appUUID');

        var itemSizeElement 	= tmpl.find('input[name=itemSize]:checked');
        var itemSize 			= $(itemSizeElement).val();

        var spiceLevelElement 	= tmpl.find('input[name=spiceLevel]:checked');
        var spiceLevel 			= $(spiceLevelElement).val();

        var messageToKitchenByItem  		= $('#inputMessageToKitchen').val();


        var menu = Session.get(MENU_OBJECT_SESSION_KEY);

        var price = menu.PriceSmall;

        switch (itemSize)
        {
        	case MEDIUM:

        		price = menu.PriceMedium

        	break;

        	case  LARGE:

        		price = menu.PriceLarge

        	break;

        	default:

        		price = menu.PriceXL
        }

        Meteor.call('addToCart', 1 , menu.UniqueId, sessid, menu.Name, menu.Category, price, orgname, INCREMENT, false, itemSize, spiceLevel,messageToKitchenByItem);
       console.log('addToCart: Done Calling the insert');
        $('#itemSizeLarge').val("checked","checked");
        $('#spiceLevelMedium').val("checked","checked");
    }

});