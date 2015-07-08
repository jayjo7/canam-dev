websheets = 
{
  'public': 
  {

      orderState: 
      {
          ONE   : '1 - Received',
          TWO   : '2 - Inprocess',
          THREE : '3 - Ready',
          FOUR  : '4 - Delivered'
      },

      orderStateCode: 
      {

          ONE   : 1,
          TWO   : 2,
          THREE : 3,
          FOUR  : 4

      },

      status:
      {

          SUCCESS      : 'success',
          FAILED       : 'failed',
          FATAL        : 'fatal',
          NOT_ENABLED  : 'notEnabled',
          ENABLED      : 'enabled'

      },

      size:
      {

          SMALL         : 'Small',
          MEDIUM        : 'Medium',
          LARGE         : 'Large',
          EXTRALARGE    : 'X-Large'

      },

      spicy:
      {

          MILD          : 'Mild',
          NORMAL        : 'Normal',
          SPICY         : 'Spicy'

      },

      generic:
      {
          INCREMENT     : 'increment',
          ADDREMOVE     : 'addRemove',
          MENU_OBJECT_SESSION_KEY :'selected_menu_item',
          ORG_NAME_SESSION_KEY    :  'websheets_orgName',
          NOTIFICATION_MESSAGE_KEY : 'notification_message',
          ORG_NAME : Meteor.settings.public.orgCode.default

      }

  },

  'private' :
  {

      generic:
      {
          WEBSHEETS_MAX_RETRY : 3,
          UNIQUE_ID_NAME      : "UniqueId",
          ORG_KEY_NAME        : "orgname",
          CUSTOMER            : 'customer',         
          CLIENT              : 'client',
          WEBMASTER           : 'webmaster',
          ORDERS              : 'ORDERS', 
      } 
  }

}




 


