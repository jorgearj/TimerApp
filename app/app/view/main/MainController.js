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

    init: function () {
        var me = this;

        var runner = new Ext.util.TaskRunner();

        me.task = runner.newTask({
            run: me.updateTimer,
            interval: 1000
        });

    },

    onClickStartButton: function () {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var me = this;
        if (me.task) {
            me.task.start();
        }
    },

    onClickStopButton: function () {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var me = this;
        if(me.task){
            me.task.stop();
        }

    },

    updateTimer: function () {
        var me = this;
        var timer = me.lookupReference('timer'),
            timerValue = timer.getText;
        console.log("Updating clock: ", timer);
        timer.setText(timerValue - 1)
    }
});
