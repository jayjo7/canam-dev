Template.addToCart.helpers({

  getSpiceLevelMild: function()
  {
    return SPICY_MILD;
  },

  getSpiceLevelNormal: function()
  {
    return SPICY_NORMAL;
  },

  getSpiceLevelSpicy: function()
  {
    return SPICY_SPICY;
  },

  getItemSizeSmall: function()
  {
    return SIZE_SMALL;
  },

  getItemSizeMedium: function()
  {
    return SIZE_MEDIUM;
  },

  getItemSizeLarge: function()
  {
    return SIZE_LARGE;
  },

  getItemSizeExtraLarge: function()
  {
    return SIZE_EXTRALARGE;
  },

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
       var cartItem={};

        cartItem.orgname      = Session.get(ORG_NAME_SESSION_KEY);
        var currentTarget   	= evt.currentTarget

        cartItem.session       = Session.get('appUUID');

        var itemSizeElement 	= tmpl.find('input[name=itemSize]:checked');
        cartItem.itemSize 		= $(itemSizeElement).val();

        var spiceLevelElement = tmpl.find('input[name=spiceLevel]:checked');
        cartItem.spiceLevel 	= $(spiceLevelElement).val();

        cartItem.messageToKitchenByItem   = $('#inputMessageToKitchen').val();

        var menu = Session.get(MENU_OBJECT_SESSION_KEY);

        var price = menu.PriceSmall;

        switch (cartItem.itemSize)
        {
        	case SIZE_MEDIUM:

        		  price = menu.PriceMedium;
        	    break;

        	case  SIZE_LARGE:

        	   price = menu.PriceLarge;
        	   break;

        	default:

        		price = menu.PriceXL
        }

        cartItem.qty        = 1;
        cartItem.product    = menu.UniqueId;
        cartItem.Name       = menu.Name; 
        cartItem.Category   = menu.Category;
        cartItem.Price      = price;
        cartItem.addToCartToggle    = INCREMENT;    
        cartItem.isMultiPriceItem   = true;

        Meteor.call('addToCart', cartItem);
       console.log('addToCart: Done Calling the insert');
        $('#itemSizeLarge').val("checked","checked");
        $('#spiceLevelMedium').val("checked","checked");
    }

});