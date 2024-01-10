// Event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  // ambil href
  var tujuan = $(this).attr("href");
  //   tangkap element ygbs
  var elementujuan = $(tujuan);

  //   effect perpindahan secara halus
  var target = $(this).attr("href");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top - 50,
      },
      1250,
      "easeInOutExpo"
    );

  e.preventdefault();
});
