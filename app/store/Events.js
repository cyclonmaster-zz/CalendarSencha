/**
 * CalendarSencha.store.Events
 */
Ext.define('CalendarSencha.store.Events', {

    extend: 'Ext.data.Store',

    config: {
	    storeId : 'Events',
        model   : 'CalendarSencha.model.Event',
	    proxy   : {
		    type    : 'ajax',
		    url     : 'http://localhost/projects/eAlmanacSample/data/eventData.json',
		    reader  : {
			    type        : 'json',
			    rootProperty : 'rows'
		    }
	    },
	    autoLoad: true
    },

    constructor: function(config){
        this.callParent(arguments);
    }

});