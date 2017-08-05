//logic code

bank = {
  checking:0,
  saving:0,
  //equivalent to:
  //deposit: function () {
  deposit(account, amount) {
    this[account]+=parseFloat(amount);
  },

  withdraw(account, amount) {
    this[account]-=parseFloat(amount);
  },

};


//UI/DOM code

const render = function (){
  backgroundColor();
  $('#checking-balance').text('$'+ bank.checking);
  $('#savings-balance').text('$'+ bank.saving);

}


//all DOM updating code will be here

$(document).ready(function(){

  $('#checking-deposit').on('click', function(){
    const amount = $('#checking-amount').val();
    bank.deposit('checking', amount);

    render();
  });

  $('#checking-withdraw').on('click', function(){
    const amount = $('#checking-amount').val();
    if (bank.checking >= amount){
      bank.withdraw('checking', amount);
    }else {
      alert('You don not have enough money to withdraw')
    }
    render();
  });

  $("#savings-deposit").on("click",function(){
    const amount = $('#savings-amount').val();
    bank.deposit('saving', amount);

    render(); //update the screen
  });


  $('#savings-withdraw').on('click', function(){
    const amount = $('#savings-amount').val();
    if (bank.saving >= amount){
      bank.withdraw('saving', amount);
    }else {
      alert ('You don not have enough money to withdraw')
    }
    render();
  });
});

let backgroundColor = function(){
  if (bank.checking === 0){
    $('#checking-balance').addClass('zero');
  } else {
    $('#checking-balance').removeClass('zero');
  }

  if (bank.saving === 0){
    $('#savings-balance').addClass('zero');
  } else {
    $('#savings-balance').removeClass('zero');
  }
}
