const createTransactionHandler = async (event) => {
  event.preventDefault();
  const item_id = event.target.getAttribute('data-id');
  const borrow_date = new Date();

  if (item_id) {
    const response = await fetch('/api/employee/borrow', {
      method:
        'POST',
      body: JSON.stringify({ borrow_date, item_id }),
      headers: {
        'Content-Type':
          'application/json'
      },
    });
    if (response.ok) {
      document.location.replace('/api/employee'); console.log(response);
    } else {
      alert('Failed to create transaction.');
    }
  }
};

document.querySelector('.create-transaction-btn').addEventListener('click', createTransactionHandler);