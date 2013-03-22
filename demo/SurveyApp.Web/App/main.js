﻿requirejs.config({
    paths: {
        text: 'durandal/amd/text', //for durandal
        async: 'requirePlugins/async' //required for JSONP google maps plugin to work properly
    }
});

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/viewEngine', 'durandal/plugins/router'],
    function (app, viewLocator, system, viewEngine, router) {
    
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Survey App';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();
        viewEngine.viewExtension = ".cshtml";

        //configure routing
        router.useConvention();
        router.mapNav({
            url: 'survey/summary',
            name: 'Summary'
        });

        app.adaptToDevice();
        
        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});