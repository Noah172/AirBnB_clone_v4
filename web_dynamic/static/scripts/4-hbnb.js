

document.addEventListener('DOMContentLoaded', function (data, status) {
  let cache_id = document.getElementById('cache_id');
  let dic = {};

  // create the dic
  $('.amenities > h4')
  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      dic[$(this).data('id')] = $(this).data('name');
    }
    else if($(this).is(":not(:checked)")){
      delete dic[$(this).data('id')];
    }
  });

  // verify status of the api
  $.get('http://127.0.0.1:5001/api/v1/status/', (data, code) => {
    if (code == 'success') {
      if (data.status != 'OK') {
        $('#api_status').removeClass('available');
      } else {
        $('#api_status').addClass('available');
      }
    }
  });

  // takes the dic from the api
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
	let place = data[i];
	let placeHolder = '
          <article>
          <div class="title_box">
	  <h2>${place.name}</h2>
          <div class="price_by_night"><p>$ ${place.price_by_night}</p></div>
          </div>
	  <div class="information">
	  <div class="max_guest"><p>${place.max_guest}</p></div>
	  <div class="number_rooms"><p>${place.number_rooms}</p></div>
	  <div class="number_bathrooms"><p>${place.number_bathrooms}</p></div>
	  </div>
	  <div class="description"><p>${place.description}</p></div>
	  </article>
	  '
	$('.places ').append(placeHolder);
      }
    }
  });
  //clicking the button
  $('.filters > button').click( () => {
    $('.places > article').remove();
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5001/api/v1/places_search',
      data: JSON.stringify({'amenities': Object.keys(dic)}),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
	for (let i = 0; i < data.length; i++) {
	  let place = data[i];
	  let placeHolder = '
            <article>
            <div class="title_box">
	    <h2>${place.name}</h2>
            <div class="price_by_night"><p>$ ${place.price_by_night}</p></div>
            </div>
	    <div class="information">
	    <div class="max_guest"><p>${place.max_guest}</p></div>
  	    <div class="number_rooms"><p>${place.number_rooms}</p></div>
	    <div class="number_bathrooms"><p>${place.number_bathrooms}</p></div>
	    </div>
	    <div class="description"><p>${place.description}</p></div>
	    </article>
	    '
	  $('.places ').append(placeHolder);
	}
      }
    });
  });
});
