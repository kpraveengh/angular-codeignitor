<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title><?php echo $this->config->item('title'); ?></title>
    <script>
        var BASE_URL = "<?php echo site_url(); ?>";
    </script>
    <script>
        var SRC_BASE = "<?php echo site_url(); ?>app/libs/";
    </script>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

  <link rel="stylesheet" href="app/styles/libs/bootstrap.min.css" />
    <link rel="stylesheet" href="app/styles/main.css">
    <link rel="stylesheet" href="app/styles/sb-admin-2.css">
    <link rel="stylesheet" href="app/styles/timeline.css">
    <link rel="stylesheet" href="app/styles/libs/metisMenu.min.css">
    <link rel="stylesheet" href="app/styles/libs/loading-bar.min.css">
    <link rel="stylesheet" href="app/styles/libs/font-awesome.min.css" type="text/css">
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic"> -->

    <script src="app/js/libs/jquery.min.js"></script>
    <script src="app/js/libs/angular.min.js"></script>

    <script src="app/js/libs/bootstrap.min.js"></script>
    <script src="app/js/libs/angular-ui-router.min.js"></script>
    <script src="app/js/libs/json3.min.js"></script>
    <script src="app/js/libs/ocLazyLoad.min.js"></script>
    <script src="app/js/libs/loading-bar.min.js"></script>
    <script src="app/js/libs/ui-bootstrap-tpls.min.js"></script>
    <script src="app/js/libs/metisMenu.min.js"></script>

    <script src="app/scripts/app.js"></script>
    <script src="app/scripts/custom.js"></script>
    <script src="app/js/sb-admin-2.js"></script>



    <!-- Styles for layout -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        <link href="app/styles/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="app/styles/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
        <link href="app/styles/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="app/styles/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />
        <link id="ng_load_plugins_before" />
        <link href="app/styles/global/css/components.min.css" id="style_components" rel="stylesheet" type="text/css" />
        <link href="app/styles/global/css/plugins.min.css" rel="stylesheet" type="text/css" />
        <link href="app/styles/layout/css/layout.min.css" rel="stylesheet" type="text/css" />
        <link href="app/styles/layout/css/themes/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color" />
        <link href="app/styles/layout/css/custom.min.css" rel="stylesheet" type="text/css" />
         <link href="app/styles/global/css/shop-item.css" rel="stylesheet" type="text/css" />

    <script>
       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
       ga('create', 'UA-XXXXX-X');
       ga('send', 'pageview');
    </script>

    </head>

    <body>

    <div ng-app="ApsilonApp">

        <div ui-view>
            
        </div>

    </div>

    </body>

</html>
