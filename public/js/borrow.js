const createTransactionHandler = async (event) => {
  event.preventDefault();
  const item_id = event.target.getAttribute('data-id');
  const borrow_date = new Date();

  if (item_id) {
    const response = await fetch('/api/item/borrow', {
      method: 'POST',
      body: JSON.stringify({ borrow_date, item_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/employee');
      console.log(response);
    } else {
      alert('Failed to create transaction.');
    }
  }
};

const borrowBtns = document.querySelectorAll('.create-transaction-btn');
for (let i = 0; i < borrowBtns.length; i++) {
  borrowBtns[i].addEventListener('click', createTransactionHandler);
}
