function vote(v, g){
    $.get('div/voteec92.html?v='+ v + '&g=' + g, function(data) {
        $('#voted').html(data);
    });
    setTimeout( function() {$('#voted').fadeOut("slow");}, 1200 );
    $('#voted').html("");
    $('#voted').fadeIn();
}
