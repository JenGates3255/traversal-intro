// $(document).on('ready', function() {
//   $('li').on('click',function(){
//   	console.log($(this) );
//   	$(this).css('color','red');
//   	$(this).closest('.container').css('background','blue');

//   	$(this).closest('.container').find('.featured').css({
//   		'background':'green'
//   	});
//   });
// });
//................part1.............traversal......................

//................part2 ..............creation.............
$(document).on('ready', function() {

$('li').each(function(index, domElem){

	$(this).append('!!');
})

});