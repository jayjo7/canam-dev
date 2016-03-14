Template.alreadyInCart.events({
    'click .addcart': function(evt,tmpl)
    {


        var menu    = Session.get(websheets.public.generic.MENU_OBJECT_SESSION_KEY);
        var orgname         = Session.get(websheets.public.generic.ORG_NAME_SESSION_KEY);
        var currentTarget   = evt.currentTarget
        var product         = menu.UniqueId ;
        var sessid          = Session.get('appUUID');
        var cartItem={};
        cartItem.orgname    = orgname;
        cartItem.product    = product;
        cartItem.session    = sessid;
        cartItem.qty        = 1;
        cartItem.Name       = menu.Name; 
        cartItem.Category   = menu.Category;
        cartItem.Price      = menu.Price;
        cartItem.addToCartToggle    =  websheets.public.generic.INCREMENT;
        cartItem.singlePricedItem   = true;

/**        switch (addToCartToggle(orgname))
        {
            case  websheets.public.generic.INCREMENT :

                cartItem.addToCartToggle    =  websheets.public.generic.INCREMENT;
                cartItem.singlePricedItem   = true;
                evt.currentTarget.className = "btn btn btn-sm pull-right  btn-ordered removecart"; 
                evt.currentTarget.title     = 'Remove from Cart'  
                break;
                
            default:
                evt.currentTarget.className = "btn btn btn-sm pull-right  btn-ordered removecart"; 
                evt.currentTarget.title     ='Remove from Cart'          
        }
*/
         Meteor.call('addToCart',  cartItem);



    },

    'click .removecart': function(evt,tmpl)
    {
        var menu    = Session.get(websheets.public.generic.MENU_OBJECT_SESSION_KEY);
        var orgname         = Session.get(websheets.public.generic.ORG_NAME_SESSION_KEY);
        var currentTarget   = evt.currentTarget
        var product         = menu.UniqueId ;
        var sessid          = Session.get('appUUID');
        Meteor.call('removeCartItem', product, sessid, orgname);
/**        switch (addToCartToggle(orgname))
        {
            case websheets.public.generic.INCREMENT :
                evt.currentTarget.className = "btn btn-success btn-sm pull-right addcart"; 
                evt.currentTarget.title='Add to Cart' 
                break;
            default:
                evt.currentTarget.className = "btn btn-success btn-sm pull-right addcart"; 
                evt.currentTarget.title='Add to Cart'         

        }
*/
    }

});