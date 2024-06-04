const endTransactionHandler = async (event) => {
  console.log('1');
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  const item_id = event.target.getAttribute('data-item');
  const return_date = new Date();
  console.log(item_id);
  if (id) {
    const response = await fetch(`api/item/return/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ return_date, item_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/employee');
      console.log(response);
    } else {
      alert('Failed to update return for transaction.');
    }
  }
};

const returnBtns = document.querySelectorAll('.end-transaction-btn');
for (let i = 0; i < returnBtns.length; i++) {
  returnBtns[i].addEventListener('click', endTransactionHandler);
}
