Template.addToCart.helpers({

  getSpiceLevelOne: function()
  {
    return websheets.public.spicy.ONE;
  },

  getSpiceLevelTwo: function()
  {
    return websheets.public.spicy.TWO;
  },

  getSpiceLevelThree: function()
  {
    return websheets.public.spicy.THREE;
  },

  getItemSizeSmall: function()
  {
    return websheets.public.size.SMALL;
  },

  getItemSizeMedium: function()
  {
    return websheets.public.size.MEDIUM;
  },

  getItemSizeLarge: function()
  {
    return websheets.public.size.LARGE;
  },

  getItemSizeExtraLarge: function()
  {
    return websheets.public.size.EXTRALARGE;
  },

	askSpiceLevel: function(key){

	var menu = Session.get(websheets.public.generic.MENU_OBJECT_SESSION_KEY);
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

	var menu = Session.get(websheets.public.generic.MENU_OBJECT_SESSION_KEY);

	var price =  menu[key];

   	return '$' + Number(price).toFixed(2);

   },

   getModaltTitleMessage:function()
   {
   		var menu = Session.get(websheets.public.generic.MENU_OBJECT_SESSION_KEY);

   		return menu.Name 
   },


});

Template.addToCart.events({

	 'click .addcart': function(evt,tmpl)
    {
       var cartItem={};

        cartItem.orgname      = Session.get(websheets.public.generic.ORG_NAME_SESSION_KEY);
        var currentTarget   	= evt.currentTarget

        cartItem.session       = Session.get('appUUID');

        var itemSizeElement 	= tmpl.find('input[name=itemSize]:checked');
        cartItem.itemSize 		= $(itemSizeElement).val();

        var spiceLevelElement = tmpl.find('input[name=spiceLevel]:checked');
        cartItem.spiceLevel 	= $(spiceLevelElement).val();
        console.log('addToCart: cartItem.spiceLevel  = ' + cartItem.spiceLevel );
        cartItem.messageToKitchenByItem   = $('#inputMessageToKitchenByItem').val();

        var menu = Session.get(websheets.public.generic.MENU_OBJECT_SESSION_KEY);

        var price = menu.PriceSmall;

        switch (cartItem.itemSize)
        {
        	case websheets.public.size.MEDIUM:

        		  price = menu.PriceMedium;
        	    break;

        	case  websheets.public.size.LARGE:

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
        cartItem.addToCartToggle    = websheets.public.generic.INCREMENT;    
        cartItem.isMultiPriceItem   = true;
        cartItem.ItemCode   = menu.ItemCode;

        Meteor.call('addToCart', cartItem);
        console.log('addToCart: Done Calling the insert');
        $('#itemSizeLarge').prop('checked', true);
        $('#spiceLevel'+websheets.public.spicy.TWO).prop('checked', true);
        $('#inputMessageToKitchenByItem').val('');
    }

});