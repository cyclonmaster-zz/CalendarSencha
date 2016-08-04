Ext.define('CalendarSencha.view.ViewDay', {
    extend: "Ext.Panel",
    alias: 'widget.viewday',
    requires : [
		'CalendarSencha.ux.TouchCalendarView'
	],
    
    initialize: function(){
        
        var calendarView = Ext.create('CalendarSencha.ux.TouchCalendarView', {
            viewMode: 'day',
            weekStart: 0,            
            value: new Date()
        });

        var panel = Ext.create('Ext.Panel', {
            fullscreen: true,
            layout: 'fit',
            items: [calendarView]
        });
    }
});