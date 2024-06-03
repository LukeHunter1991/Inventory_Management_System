const filterFormHandler = async (event) => {
  event.preventDefault();

  const choice = document.querySelector('#filter').value.trim();

  alert(choice);

  if (choice) {
    const response = await fetch('/api/admin/allitems/filter/', {
      method: 'GET',
      body: JSON.stringify({ choice }),
      headers: { 'Content-Type': 'application/json' },
    });

    // if (response.ok) {
    //   document.location.replace('/api/admin/allitems');
    // } else {
    // }
  }
};

document
  .querySelector('.filter-form')
  .addEventListener('submit', filterFormHandler);
