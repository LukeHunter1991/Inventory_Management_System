const categoryFormHandler = async (event) => {
  event.preventDefault();

  const categoryname = document.querySelector('#category-name').value.trim();

  if (categoryname) {
    const response = await fetch('/api/admin/add-category', {
      method: 'POST',
      body: JSON.stringify({ categoryname }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const response = await fetch('/api/admin/category', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/api/admin/category');
      } else {
        alert('Failed to create category');
      }
    } else {
      alert('Failed to create category');
    }
  }
};

document
  .querySelector('.category-form')
  .addEventListener('submit', categoryFormHandler);
