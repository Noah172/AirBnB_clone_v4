

document.addEventListener('DOMContentLoaded', function (data, status) {
  let cache_id = document.getElementById('cache_id').value;
  let dic = {};
  $.get('http://127.0.0.1:5001/api/v1/status', (data, code) => {
    if (code == 'success') {
      if (data.status != 'OK') {
	$('#api_status').removeClass('available');
      } else {
	$('#api_status').addClass('available');
      }
    }
  });

  $.get('http://0.0.0.0:5001/api/v1/places_search/', function (data) {
    const places = data;
    let place;
    for (let index = 0; index < places.lenght; index++) {
      place = '<li>'+places[index]['name']+'</li>';
      $('article').append(place);
    }
  });

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
