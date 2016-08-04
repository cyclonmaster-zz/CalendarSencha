Ext.define('CalendarSencha.view.ViewWeek', {
    extend: "Ext.Panel",
    alias: 'widget.viewweek',
    requires : [
		'CalendarSencha.ux.TouchCalendarView'
	],
    
    initialize: function(){
        
        var calendarView = Ext.create('CalendarSencha.ux.TouchCalendarView', {
            viewMode: 'week',
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