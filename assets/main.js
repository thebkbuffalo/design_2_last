$(document).ready(function(){
  console.log('link me up scottie');
  smoothScroll.init({
    speed: 750
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });

  $(function(){
    var wall = new Freewall(".photos");
    wall.fitWidth();
  });
});
