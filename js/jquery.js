$(function(){

    $('#number').change(function(){
        let playersNumber = $('#number').val();
        $('.pl4').removeClass('active');
        $('.pl4').removeClass('block');
        if(playersNumber > 0){
            $('.name-all .pl' + playersNumber).addClass('active');
            $('.pl' + playersNumber).addClass('block');
        }else{
            $('.pl4').removeClass('active');
            $('.pl4').removeClass('block');
        }
    });

    $('#ok').click(function(){
        let player1 = $('#name1').val();
        let player2 = $('#name2').val();
        let player3 = $('#name3').val();
        let player4 = $('#name4').val();

        if($('#number').val()){
            $('#setting').addClass('hide');
            $('#roulette').removeClass('hide');
            $('#error').hide();
            $('.plate1').text(player1);
            $('.plate2').text(player2);
            $('.plate3').text(player3);
            $('.plate4').text(player4);
        }else{
            $('#error').show();
        }
    }); 

});
