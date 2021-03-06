requireConfig = {
    noGlobal: true,
    paths: {
        jQuery: 'vendor/jquery-1.11.0.min',
        jQueryUi: 'vendor/jquery-ui-1.10.3.min',
        jqueryForm: 'vendor/jquery.form.min',
        jQueryBrowser: 'vendor/jquery.browser.min',
        underscore: 'vendor/underscore',
        bootstrap: 'vendor/bootstrap.min',
        bootstrapAlert: 'vendor/bootstrap/alert',
        boostrapDropdown: 'vendor/bootstrap/dropdown',
        fancybox: 'vendor/jquery.fancybox-2.1.5.pack',
        localization: 'mf/localization',
        mfsluggify: 'mf/mfsluggify',
        mfMap: 'mf/mmc-map',
        mfMapv2: 'mf/mmc-map-v2',
        async: 'vendor/async',
        propertyParser: 'vendor/propertyParser',
        goog: 'vendor/goog',
        slidejs: 'vendor/slidejs',
        slidejs2: 'vendor/jquery.slides',
        markerClusterer: 'vendor/markerclusterer',
        mfPermaScroll: 'mf/mfPermaScroll',
        mfThemeEditor: 'mf/mfThemeEditor',
        mfImageGallery: 'mf/mfImageGallery',
        mfMultifield: 'mf/mfMultifield',
        mfEvents: 'mf/mfEvents',
        mfHtmlEditor: 'mf/mfHtmlEditor',
        mfHtmlEditorRender: 'mf/mfHtmlEditorRender',
        mfFrontendShop: 'mf/mfFrontendShop',
        mfDateTimePicker: 'mf/mfDateTimePicker',
        mfTooltips: 'mf/mfTooltips',
        mfGeolocation: 'mf/mfGeolocation',
        mfTutorialCheckPoints: 'mf/mfTutorialCheckPoints',
        mfMultiselectValidator: 'mf/mfMultiselectValidator',
        mfSelfVideoBox: 'mf/mfSelfVideoBox',
        mfImageDragUpload: 'mf/mfImageDragUpload',
        mfMenuButtons: 'mf/mfMenuButtons',
        mfSticky: 'mf/mfSticky',
        mfTabs: 'mf/mfTabs',
        mfDrag: 'mf/mfDrag',
        mfRescaleAndCenter: 'mf/mfRescaleAndCenter',
        videoBG: 'vendor/jquery.videoBG',
        clamp: 'vendor/clamp',
        redactor: 'vendor/redactor',
        moment: 'vendor/moment-with-langs.min',
        owlCarousel: 'vendor/owl.carousel.min',
        d3: 'vendor/d3.v2.min',
        xChart: 'vendor/xcharts.min',
        mfChart: 'mf/mfChart',
        mmcChart: 'mf/mmc-chart',
        scrollTo: 'vendor/jquery.scrollTo.min',
        audioJs: 'vendor/audioJs/audio.min',
        mfTipCart: 'mf/mfTipCart',
        mfMobileTabs: 'mf/mfMobileTabs',
        mfSlidingTabs: 'mf/mfSlidingTabs',
        superSlides: 'vendor/jquery.superslides.min',
        glitchCanvas: 'vendor/glitch-canvas',
        glitchElement: 'vendor/glitchElement',
        canvasFilter: 'vendor/canvasFilter',
        htmlToCanvas: 'vendor/html2canvas',
        Tween: 'vendor/tween.min',
        webglDetector: 'vendor/webglDetector',
        getMultipleScripts: 'vendor/jquery.getMultipleScripts',
        mediaElement: 'vendor/mediaelement/mediaelement-and-player',
        videoSlideshow: 'mf/videoSlideshow',
        algoliasearch: 'vendor/algoliasearch.min'
    },
    shim: {
        'algoliasearch' : ['jQuery'],
        'superSlides' : ['jQuery'],
        'localization': ['jQuery', 'jQueryUi', '/site/javascriptlocale/translation_tokens'],
        'mfsluggify' : ['jQuery'],
        'mfHtmlEditor' : ['jQuery', 'jqueryForm', 'localization', 'mfEvents'],
        'mfImageGallery' : ['jQuery'],
        'mfMultiselectValidator': ['jQuery'],
        'mfHtmlEditorRender': ['jQuery', 'mfEvents'],
        'mfDateTimePicker': ['jQuery', 'jQueryUi', 'localization'],
        'mfTooltips': ['jQuery'],
        'mfSelfVideoBox': ['jQuery'],
        'mfThemeEditor' : ['jQuery', 'mfEvents'],
        'mfTutorialCheckPoints': ['jQuery'],
        'mfFrontendShop': ['jQuery'],
        'mfMultifield' : ['jQuery'],
        'mfDrag' : ['jQuery'],
        'mfImageDragUpload' : ['jQuery', 'jQueryBrowser', 'localization', 'mfDrag'],
        'mfTabs': ['jQuery'],
        'mfRescaleAndCenter': ['jQuery'],
        'mfMobileTabs': ['jQuery'],
        'mfSlidingTabs': ['jQuery'],
        'videoBG': ['jQuery'],
        'bootstrap' : ['jQuery'],
        'fancybox' : ['jQuery'],
        'jqueryForm' : ['jQuery'],
        'jQueryUi' : ['jQuery'],
        'jQueryBrowser': ['jQuery'],
        'mfGeolocation' : ['jQuery'],
        'mfMap' : ['jQuery', 'markerClusterer'],
        'mfMapv2' : ['jQuery', 'markerClusterer', 'async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=fr'],
        'mfMenuButtons' : ['jQuery'],
        'mfTipCart': ['jQuery'],
        'slidejs': ['jQuery'],
        'slidejs2': ['jQuery'],
        'mfPermaScroll' : ['jQuery'],
        'bootstrapAlert' : ['jQuery'],
        'boostrapDropdown' : ['jQuery'],
        'redactor' : ['jQuery'],
        'scrollTo' : ['jQuery'],
        'mediaElement': ['jQuery'],
        'videoSlideshow': ['jQuery', 'mediaElement'],
        'jQuery': {
            'exports': '$'
        },
        'underscore': {
            'exports': '_'
        },
        'mfMap' : {
            exports: 'mfMap'
        },
        'xChart' : {
            exports: 'xChart'
        },
        'mfChart' : {
            exports: 'mfChart',
            deps: ['jQuery', 'd3', 'xChart']
        },
        'goog' : ['async', 'propertyParser'],
        'mmcChart' : {
            exports: 'mmcChart',
            deps: ['jQuery', 'goog!visualization,1,packages:[corechart,geochart,table]']
        },
        'mfSticky' : {
            exports: 'mfSticky',
            deps: ['jQuery', 'scrollTo']
        },
        'glitchCanvas' : {
            deps: ['jQuery', 'htmlToCanvas']
        },
        'glitchElement' : {
            deps: ['jQuery', 'htmlToCanvas']
        },
        'getMultipleScripts': {
            deps: ['jQuery']
        }
    }
};
require = requireConfig;