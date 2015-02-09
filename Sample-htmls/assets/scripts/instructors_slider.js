/*********** for slider 1 ************/

$(document).ready(function(){
function generatePages() {
var _total, i, _link;

_total = $( "#carousel1" ).rcarousel( "getTotalPages" );

for ( i = 0; i < _total; i++ ) {
_link = $( "<a href='#'></a>" );

$(_link)
.bind("click", {page: i},
function( event ) {
$( "#carousel1" ).rcarousel( "goToPage", event.data.page );
event.preventDefault();
}
)
.addClass( "bullet off" )
.appendTo( "#pages" );
}

// mark first page as active
$( "a:eq(0)", "#pages" )
.removeClass( "off" )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );

}

function pageLoaded( event, data ) {
$( "a.on", "#pages" )
.removeClass( "on" )
.css( "background-image", "url(images/page-off.png)" );

$( "a", "#pages" )
.eq( data.page )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );
}

$("#carousel1").rcarousel(
{
visible: 4,
step: 4,
speed: 700,
auto: {
enabled: false
},
width: 235,
height: 240,
start: generatePages,
pageLoaded: pageLoaded
}
);

$( "#ui-carousel-next" )
.add( "#ui-carousel-prev" )
.add( ".bullet" )
.hover(
function() {
$( this ).css( "opacity", 0.7 );
},
function() {
$( this ).css( "opacity", 1.0 );
}
);
});
/*********** for slider 1 ************/

/*********** for slider 2 ************/

$(document).ready(function(){
function generatePages() {
var _total, i, _link;

_total = $( "#carousel2" ).rcarousel( "getTotalPages" );

for ( i = 0; i < _total; i++ ) {
_link = $( "<a href='#'></a>" );

$(_link)
.bind("click", {page: i},
function( event ) {
$( "#carousel2" ).rcarousel( "goToPage", event.data.page );
event.preventDefault();
}
)
.addClass( "bullet off" )
.appendTo( "#pages" );
}

// mark first page as active
$( "a:eq(0)", "#pages" )
.removeClass( "off" )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );

}

function pageLoaded( event, data ) {
$( "a.on", "#pages" )
.removeClass( "on" )
.css( "background-image", "url(images/page-off.png)" );

$( "a", "#pages" )
.eq( data.page )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );
}

$("#carousel2").rcarousel(
{
visible: 4,
step: 4,
speed: 700,
auto: {
enabled: false
},
width: 235,
height: 240,
start: generatePages,
pageLoaded: pageLoaded,
navigation: {
next: "#ui-carousel2-next",
prev: "#ui-carousel2-prev"
}
}
);

$( "#ui-carousel2-next" )
.add( "#ui-carousel2-prev" )
.add( ".bullet" )
.hover(
function() {
$( this ).css( "opacity", 0.7 );
},
function() {
$( this ).css( "opacity", 1.0 );
}
);
});
/*********** for slider 2 ************/

/*********** for slider 3 ************/

$(document).ready(function(){
function generatePages() {
var _total, i, _link;

_total = $( "#carousel3" ).rcarousel( "getTotalPages" );

for ( i = 0; i < _total; i++ ) {
_link = $( "<a href='#'></a>" );

$(_link)
.bind("click", {page: i},
function( event ) {
$( "#carousel3" ).rcarousel( "goToPage", event.data.page );
event.preventDefault();
}
)
.addClass( "bullet off" )
.appendTo( "#pages" );
}

// mark first page as active
$( "a:eq(0)", "#pages" )
.removeClass( "off" )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );

}

function pageLoaded( event, data ) {
$( "a.on", "#pages" )
.removeClass( "on" )
.css( "background-image", "url(images/page-off.png)" );

$( "a", "#pages" )
.eq( data.page )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );
}

$("#carousel3").rcarousel(
{
visible: 4,
step: 4,
speed: 700,
auto: {
enabled: false
},
width: 235,
height: 240,
start: generatePages,
pageLoaded: pageLoaded,
navigation: {
next: "#ui-carousel3-next",
prev: "#ui-carousel3-prev"
}
}
);

$( "#ui-carousel3-next" )
.add( "#ui-carousel3-prev" )
.add( ".bullet" )
.hover(
function() {
$( this ).css( "opacity", 0.7 );
},
function() {
$( this ).css( "opacity", 1.0 );
}
);
});


/*********** for slider4************/

$(document).ready(function(){
function generatePages() {
var _total, i, _link;

_total = $( "#carousel4" ).rcarousel( "getTotalPages" );

for ( i = 0; i < _total; i++ ) {
_link = $( "<a href='#'></a>" );

$(_link)
.bind("click", {page: i},
function( event ) {
$( "#carousel4" ).rcarousel( "goToPage", event.data.page );
event.preventDefault();
}
)
.addClass( "bullet off" )
.appendTo( "#pages" );
}

// mark first page as active
$( "a:eq(0)", "#pages" )
.removeClass( "off" )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );

}

function pageLoaded( event, data ) {
$( "a.on", "#pages" )
.removeClass( "on" )
.css( "background-image", "url(images/page-off.png)" );

$( "a", "#pages" )
.eq( data.page )
.addClass( "on" )
.css( "background-image", "url(images/page-on.png)" );
}

$("#carousel4").rcarousel(
{
visible: 4,
step: 4,
speed: 700,
auto: {
enabled: false
},
width: 235,
height: 240,
start: generatePages,
pageLoaded: pageLoaded,
navigation: {
next: "#ui-carousel4-next",
prev: "#ui-carousel4-prev"
}
}
);

$( "#ui-carousel4-next" )
.add( "#ui-carousel4-prev" )
.add( ".bullet" )
.hover(
function() {
$( this ).css( "opacity", 0.7 );
},
function() {
$( this ).css( "opacity", 1.0 );
}
);
});

