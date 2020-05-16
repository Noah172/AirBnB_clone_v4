

document.addEventListener('DOMContentLoaded', function (data, status) {
  let cache_id = document.getElementById('cache_id').value;
  let dic = {};
  function () {
    const mystatus = response.status;
    if (mystatus === "OK") {
      ('DIV#api_status').addClass('available');
    } else {
      ('DIV#api_status').removeClass('available');
    }
  };
  $('.amenities > h4')
  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      dic[$(this).data('id')] = $(this).data('name');
    }
    else if($(this).is(":not(:checked)")){
      delete dic[$(this).data('id')];
    }
  });
});
