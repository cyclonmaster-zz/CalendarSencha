Ext.define('CalendarSencha.view.MainTabPanel', {
    extend: 'Ext.tab.Panel',    
    alias: 'widget.MainTabPanel',
    requires : [
		'Ext.tab.Bar'
	],
    
    config: {
        
    },
    
    initialize: function(){
        var calendar = Ext.create('CalendarSencha.ux.TouchCalendar', {
            viewMode: 'month',

            value: new Date(),
            enableEventBars: {
                eventHeight: 'auto',
                eventBarTpl: '<div>{title}</div>'
            },
            viewConfig: {
                weekStart: 0,
                eventStore: Ext.getStore('Events')
            }
        });

        var panel = Ext.create('Ext.Panel', {
            fullscreen: true,
            layout: 'fit',
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [{
                        xtype: 'button',
                        text: 'Month View',
                        handler: function(){
                            calendar.setViewMode('month');
                        }
                    }, {
                        xtype: 'button',
                        text: 'Week View',
                        handler: function(){
                            calendar.setViewMode('week');
                        }
                    }, {
                        xtype: 'button',
                        text: 'Day View',
                        handler: function(){
                            calendar.setViewMode('day');
                        }
                    }]
                },
                calendar
            ]
        });
        
        calendar.on('eventtap', function(event){
            console.log('eventtap');
            //console.log(event);
        });
        calendar.on('eventdragstart', function(draggable, eventRecord, e){
            console.log('eventdragstart');
            //console.log(arguments);
        });
        calendar.on('beforeeventdrop', function(draggable, eventRecord, e){
            console.log('beforeeventdrop');
            //console.log(arguments);
            return true;
        });
        calendar.on('eventdrop', function(draggable, eventRecord, e){
            console.log('eventdrop');
            //console.log(arguments);
        });
        calendar.on('eventdrag', function(draggable, eventRecord, e){
            console.log('eventdrag');
            //console.log(arguments);
        });
    }
});