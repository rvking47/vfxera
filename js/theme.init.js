(function ($) {
  "use strict";
  if (typeof theme.PluginScrollToTop !== "undefined") {
    theme.PluginScrollToTop.initialize();
  }
  if ($.isFunction($.fn["tooltip"])) {
    $(
      "[data-tooltip]:not(.manual), [data-plugin-tooltip]:not(.manual)"
    ).tooltip();
  }
  if ($.isFunction($.fn["popover"])) {
    $(function () {
      $("[data-plugin-popover]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.popover(opts);
      });
    });
  }
  if (typeof theme.PluginValidation !== "undefined") {
    theme.PluginValidation.initialize();
  }
  if ($.isFunction($.fn["matchHeight"])) {
    $(".match-height").matchHeight();
    $(".featured-boxes .featured-box").matchHeight();
    $(".featured-box-full").matchHeight();
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginAnimate"])) {
    $(function () {
      $("[data-appear-animation]").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginAnimate(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginCarousel"])) {
    $(function () {
      $("[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)").each(
        function () {
          var $this = $(this),
            opts;
          var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginCarousel(opts);
        }
      );
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginChartCircular"])) {
    $(function () {
      $(
        "[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)"
      ).each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginChartCircular(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginCounter"])) {
    $(function () {
      $("[data-plugin-counter]:not(.manual), .counters [data-to]").each(
        function () {
          var $this = $(this),
            opts;
          var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginCounter(opts);
        }
      );
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginLazyLoad"])) {
    $(function () {
      $("[data-plugin-lazyload]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginLazyLoad(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginLightbox"])) {
    $(function () {
      $("[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)").each(
        function () {
          var $this = $(this),
            opts;
          var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginLightbox(opts);
        }
      );
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginMasonry"])) {
    $(function () {
      $("[data-plugin-masonry]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMasonry(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginMatchHeight"])) {
    $(function () {
      $("[data-plugin-match-height]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMatchHeight(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginParallax"])) {
    $(function () {
      $("[data-plugin-parallax]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginParallax(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginProgressBar"])) {
    $(function () {
      $(
        "[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]"
      ).each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginProgressBar(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginRevolutionSlider"])) {
    $(function () {
      $(
        "[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)"
      ).each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginRevolutionSlider(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginSort"])) {
    $(function () {
      $("[data-plugin-sort]:not(.manual), .sort-source:not(.manual)").each(
        function () {
          var $this = $(this),
            opts;
          var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginSort(opts);
        }
      );
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginSticky"])) {
    $(function () {
      $("[data-plugin-sticky]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSticky(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginToggle"])) {
    $(function () {
      $("[data-plugin-toggle]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginToggle(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginTweets"])) {
    $(function () {
      $("[data-plugin-tweets]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTweets(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginVideoBackground"])) {
    $(function () {
      $("[data-plugin-video-background]:not(.manual)").each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginVideoBackground(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if ($.isFunction($.fn["themePluginWordRotate"])) {
    $(function () {
      $(
        "[data-plugin-word-rotate]:not(.manual), .word-rotate:not(.manual)"
      ).each(function () {
        var $this = $(this),
          opts;
        var pluginOptions = theme.fn.getOptions($this.data("plugin-options"));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginWordRotate(opts);
      });
    });
  }
}.apply(this, [jQuery]));
(function ($) {
  "use strict";
  if (typeof theme.StickyHeader !== "undefined") {
    theme.StickyHeader.initialize();
  }
  if (typeof theme.Nav !== "undefined") {
    theme.Nav.initialize();
  }
  if (typeof theme.Search !== "undefined") {
    theme.Search.initialize();
  }
  if (typeof theme.Newsletter !== "undefined") {
    theme.Newsletter.initialize();
  }
  if (typeof theme.Account !== "undefined") {
    theme.Account.initialize();
  }
}.apply(this, [jQuery]));
