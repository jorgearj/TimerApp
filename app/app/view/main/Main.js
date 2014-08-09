/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TimerApp.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'hbox',
        height: 100
    },

    items: [
        {
            xtype: 'label',
            name: 'timer',
            flex: 0.5,
            text: Ext.Date.format(new Date(), 'g:i:s')
        },{
            xtype: 'button',
            text: 'Start Timer',
            flex: 0.25,
            handler: 'onClickStartButton'
        },{
            xtype: 'button',
            text: 'Stop Timer',
            flex: 0.25,
            handler: 'onClickStopButton'
        }

        /*xtype: 'panel',
        bind: {
            title: '{name}'
        },
        html: '<ul><li>This might be where the timer will appear</li></ul>',
        width: '100%',
        split: true,
        tbar: [{
            text: 'Start Timer',
            handler: 'onClickButton'
        },{
            region: 'center',
            xtype: 'tabpanel',
            items:[{
                title: 'Tab 1',
                html: '<h2>Content appropriate for the current navigation.</h2>'
            }]
        }]*/

    ]
});
