/**
 * CalendarSencha.model.Event
 */
Ext.define('CalendarSencha.model.Event', {

	extend: "Ext.data.Model",

	config: {
		fields: [{
			name: 'event',
			type: 'string'
		}, {
			name: 'title',
			type: 'string'
		}, {
			name: 'start',
			type: 'date',
			dateFormat: 'c'
		}, {
			name: 'end',
			type: 'date',
			dateFormat: 'c'
		}, {
			name: 'css',
			type: 'string'
		}]
	}
});