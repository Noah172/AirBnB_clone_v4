#!/usr/bin/node

document.addEventListener('DOMContentLoaded', function (data, status) {
  let cache_id = document.getElementById('cache_id').value;
  let dic = {};
  let status = document.getElementById('#api_status')
  if (status == "OK") {
    $(this).addClass('available');
  } else {
    $(this).removeClass('available');
  }
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
