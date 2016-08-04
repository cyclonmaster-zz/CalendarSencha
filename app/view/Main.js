Ext.define('CalendarSencha.view.Main', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.Container'
    ],

    config: {
        items: [
            {
                xtype: 'container',
                title: 'Month',
                items : [{
                        xtype: 'viewmonth'
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Week',
                items : [{
                        xtype: 'viewweek'
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Day',
                items : [{
                        xtype: 'viewday'
                    }
                ]
            }
        ]
    }

});
