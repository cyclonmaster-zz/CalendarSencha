Ext.define('CalendarSencha.util.Config', {
    singleton : true,
    config : {
		version : '0.0.1',
		baseUrl: 'http://cyclonmaster.bitbucket.org/'
        //baseUrl: 'http://masterku.github.io/basedataku/'
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});