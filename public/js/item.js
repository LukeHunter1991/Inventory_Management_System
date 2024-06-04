const createItemFormHandler = async (event) => {
  event.preventDefault();

  const item_name = document.querySelector('#item-name').value.trim();
  const item_description = document
    .querySelector('#item-description')
    .value.trim();
  const is_available = document.querySelector('#is-available').value.trim();
  const category_id = document.querySelector('#category-id').value.trim();

  if (item_name && item_description && is_available && category_id) {
    const response = await fetch('/api/item/add-item', {
      method: 'POST',
      body: JSON.stringify({
        item_name,
        item_description,
        is_available,
        category_id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/admin/allitems');
    } else {
      alert('Failed to create item');
    }
  }
};

document
  .querySelector('.create-item-form')
  .addEventListener('submit', createItemFormHandler);
