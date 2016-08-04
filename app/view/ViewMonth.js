Ext.define('CalendarSencha.view.ViewMonth', {
    extend: "Ext.Panel",
    alias: 'widget.viewmonth',
    requires : [
		'CalendarSencha.ux.TouchCalendarView'
	],
    
    initialize: function(){
        
        var calendarView = Ext.create('CalendarSencha.ux.TouchCalendarView', {
            viewMode: 'month',
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