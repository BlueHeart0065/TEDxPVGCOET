$(document).ready(function() {
    var aboutMeSection = $('.about_us');
    var speakerSection = $('.speakers');
    var teamSection = $('.team');


    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var aboutMePos = aboutMeSection.offset().top;
        var speakerPos = speakerSection.offset().top;
        var teamPos = teamSection.offset().top;

        // Adjust the 200 value based on your layout
        if (scrollPos > aboutMePos - windowHeight + 200) {
            aboutMeSection.addClass('show');
        }
        else{
            aboutMeSection.removeClass('show');
        }

        if (scrollPos > speakerPos - windowHeight + 200) {
            speakerSection.addClass('show');
        }
        else{
            speakerSection.removeClass('show');
        }

        if (scrollPos > teamPos - windowHeight + 200) {
            teamSection.addClass('show');
        }
        else{
            teamSection.removeClass('show');
        }

    
    });
});


function toggleNavbar() {
    const navbarLinks = document.querySelector('.topBar_options');
    navbarLinks.classList.toggle('show');
}