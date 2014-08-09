/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TimerApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    task: null,


    onClickStartButton: function () {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var me = this;

        me.task = Ext.TaskManager.start({
            run: me.updateClock,
            interval: 1000
        });

    },

    onClickStopButton: function () {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var me = this;
        if(me.task){
            me.task.destroy();
        }

    },

    updateClock: function(){
        var me = this;

    }
});
