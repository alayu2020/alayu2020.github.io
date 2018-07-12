menu = {};

// ready event
menu.ready = function() {

  // selector cache
  var
    $menuItem = $('.menu a.item, .menu .link.item'),
    // alias
    handler = {
      activate: function() {
        var activeTab = $('.menu > a.item.active > i').attr('href');
        var currHeader = ".bg" + activeTab;

        activeTab = "#" + activeTab;
        $(activeTab).removeClass('active');
        $(activeTab).addClass('tab-content hide');

        $(this)
        .addClass('active')
        .closest('.ui.menu')
        .find('.item')
        .not($(this))
        .removeClass('active');

        var targetTab = $('.menu > a.item.active > i').attr('href');
        var targetHeader = "bg" + targetTab;

        targetTab = "#" + targetTab;
        $(targetTab).removeClass('hide');
        $(targetTab).addClass('active');

        var activeHeader = $(currHeader).attr("class");

        $(currHeader).removeClass(activeHeader);
        $("header").addClass(targetHeader);
        $("header div").addClass("not-visible");

        

        if( $("header").attr("class") == "bgtab1"){

          $("header div").removeClass("not-visible");

        }

      }
    }
  ;
  $menuItem
    .on('click', handler.activate)
  ;
  
};
// attach ready event

$(document).ready(menu.ready);


