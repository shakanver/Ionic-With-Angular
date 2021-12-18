const reason_input = document.querySelector('#input-reason');
const amount_input = document.querySelector('#input-amount');
const confirm_btn = document.querySelector('#btn-confirm');
const cancel_btn = document.querySelector('#btn-cancel');
const expenses_list = document.querySelector('#expense-list');
const total_expenses_output = document.querySelector('#total-expenses');

let total_expenses = 0;

const clear = () => {
    reason_input.value = '';
    amount_input.value = '';
};


confirm_btn.addEventListener('click', () => {
    const entered_reason = reason_input.value;
    const entered_amount = amount_input.value;

    if (entered_reason.trim().length <= 0 || entered_amount <= 0 || entered_amount.trim().length <= 0) {
        // alert_ctrl.create({
        //     message: 'Please  enter  a valid reason  and amount',
        //     header: 'Invalid inputs',
        //     buttons: ['Okay']
        // }).then(alert_element => {
        //     alert_element.present();
        // });
        _alert = document.createElement('ion-alert');
        _alert.header = "Invalid input";
        _alert.message = "Please enter a valid reason and amount";
        _alert.buttons = ['Okay'];
        document.body.appendChild(_alert);
        _alert.present();
        return;
    }

    console.log("Entered Amount: " + entered_amount + " Entered Reason:  " + entered_reason);
    const new_item = document.createElement('ion-item');
    new_item.textContent = entered_reason + ': $' + entered_amount;

    expenses_list.appendChild(new_item);

    total_expenses += entered_amount
    total_expenses_output.textContent = total_expenses;

    clear();
});

cancel_btn.addEventListener('click', clear);