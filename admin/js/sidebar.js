$(document).ready(function() {
        $.ajax({
          url:"content/dashboard.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });

    $('#navberanda').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/dashboard.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });

    $('#navadduser').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/add-users.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
    $('#navshowuser').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/users.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
    $('#navaddnews').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/add-news.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
    $('#navshownews').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/news.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
    $('#navpendingnews').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/pending-news.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
    $('#navdeletednews').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/deleted-news.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
    $('#navaddcategory').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/add-category.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
    $('#navshowcategory').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $.ajax({
          url:"content/category.php",
          cache:false,
          success:function(data){
            $('#contenthere').html(data);
          }
      });
    });
});