Template.digitalMenu.helpers({

	getFormatedMenu:function(categoryMenu)
	{

    	var orgname = Session.get(websheets.public.generic.ORG_NAME_SESSION_KEY);
    	console.log('OrgName: ' + orgname);
    	var sessionId =Session.get('appUUID');

        console.log('categoryMenu: ' + categoryMenu);
		var menus 		= Menu.find({$and : [{Category: categoryMenu}, {orgname:orgname}, {Name : {"$exists" : true, "$ne" : ""}}]},{sort:{sheetRowId: 1}}).fetch();
		var dmMetaData  = DmMetatData.findOne({sessionId:sessionId});
		//var menus = Menu.find({});
		console.log('menus.count: ' + menus.length);
		var htmlString	= '';
        var isNewLine	= true;
        var count = 0;

        if(dmMetaData.lastDisplayedCount)
        {
        	count = dmMetaData.lastDisplayedCount;
        }
        var countTobeDisplayed = menus.length;
        console.log('menus = ' + menus);
		for(var i =0; i < menus.length;  i++)
		{
				count +=1;
				console.log('menus['+ i + '] = ' + JSON.stringify(menus[i], null, 4));
				
				if (isNewLine)
				{
					htmlString += '<div class="row DMmenuitem">';
				}

				htmlString += '<div class="col-xs-3 DMitem" align="right">' +  s(menus[i].Name).trim().titleize().value();
				//if(isSpecial(menus[i].fontWeight))
				//{
				//	htmlString += '&nbsp;<span class="label  label-success">Special</span>';
                //
				//}
                //
				//if(! isItemAvailable(menus[i].fontLine))
				//{
				//	htmlString += '&nbsp;<span class="label label-danger">soldout</span>';
				//}

				htmlString += '</div>';
	        	htmlString += '<div class="col-xs-1 DMprice">' + currencyFormat(menus[i].Price) + '</div>';

				if(count% getDmCountColumn === 0)
				{
					htmlString += '</div>';
					isNewLine   = true;
				}
				else
				{
					isNewLine = false;
				}

				countTobeDisplayed -=1;
			
		}
		console.log('Menu Item Count = ' + count);
		console.log(htmlString);

		return htmlString;

	}

});