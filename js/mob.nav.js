$(function() {
    var $body = $("body"),
        $nav = $(".nav"),
        navBtn = '.nav-btn',
        filter = '.nav-select .filter',
        active = 'is-active',
        mobile = /iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase());

    $(function() {
        if (mobile) {
           $body.css ("cursor", "pointer");
           $(document).on('click', filter, toggleNav);
        }
    });
    $(document).on('click', navBtn, toggleNav);

    $(document).mouseup(function (e) {
        if (!$nav.is(e.target) && $nav.has(e.target).length === 0) {
            closeNav();
        }
    });

    function toggleNav(e) {
        if ($nav.hasClass(active)) {
            closeNav();
        } else {
            activeNav();
        }
        e.preventDefault();
        e.stopPropagation();
    }

    function activeNav() {
        $nav.addClass(active);
    }

    function closeNav() {
        $nav.removeClass(active);
    }

    // drop menu
    $(function() {
        if (mobile) {
            dropBtn = $('.drop > .drop-toggle, .nav-select > li > .filter');
        } else {
            dropBtn = $('.drop > .drop-toggle, .drop-menu .filter');
        }
        dropBtn.on('click', function(e) {
            e.preventDefault();
            var drop = $(this).parent();
            dropBtn.each(function() {
                $(this).parent().not(drop).removeClass(active);
            });
            drop.toggleClass(active);

            $(function() {
                if (mobile) {
                } else {
                    $(document).mouseup(function (e) {
                        if (!drop.is(e.target) && drop.has(e.target).length === 0) {
                            drop.removeClass(active);
                        }
                    });
                }
            });

        });
    });
});
