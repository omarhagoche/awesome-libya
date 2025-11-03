var $card = $(".hover-card");
var $style = $(".hover");

$card.on("mousemove", function (e) {
    var $el = $(this);
    var l = e.offsetX;
    var t = e.offsetY;
    var h = $el.height();
    var w = $el.width();
    var lp = Math.abs(Math.floor(100 / w * l) - 100);
    var tp = Math.abs(Math.floor(100 / h * t) - 100);
    var bg = `background-position: ${lp}% ${tp}%;`;
    var style = `.hover-card.active:before { ${bg} }`;
    $card.addClass("active");
    $style.html(style);
}).on("mouseout", function () {
    $card.removeClass("active");
});