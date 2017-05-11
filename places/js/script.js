$(function() {
  // attach mini-previews
  $('#p1 a').miniPreview({ prefetch: 'pageload' });
  $('#p2 a').miniPreview({ prefetch: 'parenthover' });
  $('#p3 a').miniPreview({ prefetch: 'none' });
});

(function($) {
  var PREFIX = 'mini-preview';
  
  // implemented as a jQuery plugin
  $.fn.miniPreview = function(options) {
    return this.each(function() {
      var $this = $(this);
      var miniPreview = $this.data(PREFIX);
      if (miniPreview) {
        miniPreview.destroy();
      }

      miniPreview = new MiniPreview($this, options);
      miniPreview.generate();
      $this.data(PREFIX, miniPreview);
    });
  };
  
  var MiniPreview = function($el, options) {
    this.$el = $el;
    this.options = $.extend({}, this.defaultOptions, options);
    this.counter = MiniPreview.prototype.sharedCounter++;
  };
  
  MiniPreview.prototype = {
    sharedCounter: 0,
    
    defaultOptions: {
      width: 256,
      height: 144,
      scale: .25,
      prefetch: 'pageload'
    },
        
    generate: function() {
      this.createElements();
      this.setPrefetch();
    },

    createElements: function() {
      var $wrapper = $('<div>', { class: PREFIX + '-wrapper' });
      var $loading = $('<div>', { class: PREFIX + '-loading' });
      var $frame = $('<iframe>', { class: PREFIX + '-frame' });
      var $cover = $('<div>', { class: PREFIX + '-cover' });
      $wrapper.appendTo(this.$el).append($loading, $frame, $cover);
      
      // sizing
      $wrapper.css({
        width: this.options.width + 'px',
        height: this.options.height + 'px'
      });
      
      // scaling
      var inversePercent = 100 / this.options.scale;
      $frame.css({
        width: inversePercent + '%',
        height: inversePercent + '%',
        transform: 'scale(' + this.options.scale + ')'
      });

      // positioning
      var fontSize = parseInt(this.$el.css('font-size').replace('px', ''), 10)
      var top = (this.$el.height() + fontSize) / 2;
      var left = (this.$el.width() - $wrapper.outerWidth()) / 2;
      $wrapper.css({
        top: top + 'px',
        left: left + 'px'
      });
    },
    
    setPrefetch: function() {
      switch (this.options.prefetch) {
        case 'pageload':
          this.loadPreview();
          break;
        case 'parenthover':
          this.$el.parent().one(this.getNamespacedEvent('mouseenter'),
            this.loadPreview.bind(this));
          break;
        case 'none':
          this.$el.one(this.getNamespacedEvent('mouseenter'),
            this.loadPreview.bind(this));
          break;
        default:
          throw 'Prefetch setting not recognized: ' + this.options.prefetch;
          break;
      }
    },
    
    loadPreview: function() {
      this.$el.find('.' + PREFIX + '-frame')
        .attr('src', this.$el.attr('href'))
        .on('load', function() {
          // some sites don't set their background color
          $(this).css('background-color', '#fff');
        });
    },
    
    getNamespacedEvent: function(event) {
      return event + '.' + PREFIX + '_' + this.counter;
    },

    destroy: function() {
      this.$el.parent().off(this.getNamespacedEvent('mouseenter'));
      this.$el.off(this.getNamespacedEvent('mouseenter'));
      this.$el.find('.' + PREFIX + '-wrapper').remove();
    }
  };
})(jQuery);



$(document).ready(function(){
    $(".balloon").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon2").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon3").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon4").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon5").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon6").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon7").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon8").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon9").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon10").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon11").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon12").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon13").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon14").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon15").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon16").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon17").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon18").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon19").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon20").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon21").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon22").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon23").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon24").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon25").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon26").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon27").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon28").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon29").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon30").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon31").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon32").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon33").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon34").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon35").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon36").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon37").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon38").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon39").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon40").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon41").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon42").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon43").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon44").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon45").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon46").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon47").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon48").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon49").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon50").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon51").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon52").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon53").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon54").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon55").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon56").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon57").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon58").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon59").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon60").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon61").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon62").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon63").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon64").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon65").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon66").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon67").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon68").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon69").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon70").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon71").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon72").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon73").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon74").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon75").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon76").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon77").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon78").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon79").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon80").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon81").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon82").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon83").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon84").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon85").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon86").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon87").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon88").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon89").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon90").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon91").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon92").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon93").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon94").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon95").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon96").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon97").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon98").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon99").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $(".balloon100").click(function(){
        $(this).hide();
    });
});
