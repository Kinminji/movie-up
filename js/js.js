$(function(){
    $(".grid").masonry({
        itemSelector:'.griditem',
        columnWidth:200,
        gutter:10,
        horizontalOrder:true,
        // originLeft:false 왼쪽부터 정렬
        // originTop:false 바닥부터
        // transitionDuration:'0.2s' 위치 전환 시간
    });
});

// $grid.masonry()
//   .append( elem )
//   .masonry( 'appended', elem )
//   // layout
//   .masonry();
//   // vanilla JS
// var msnry = new Masonry( '.grid', {...});
// gridElement.appendChild( elem );
// msnry.appended( elem );
// msnry.layout();
// var $grid = $('.grid').masonry({
//     columnWidth: 80
//   });
//   // jQuery
// var elems = $grid.masonry('getItemElements')
// // vanilla JS
// var elems = msnry.getItemElements()


$(function(){
  $('.grid').masonry({
      columnWidth: 200,
      itemSelector: '.grid-item',
      gutter: 10,
  });
});