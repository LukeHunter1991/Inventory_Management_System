const filterFormHandler = async (event) => {
  event.preventDefault();

  const choice = document.querySelector('#filter').value.trim();

  console.log(choice);
  if (choice) {

    document.location.replace(`/api/admin/allitems/${choice}`);
  } else {
    alert('Failed to filter');
  }
};


document
  .querySelector('.filter-form')
  .addEventListener('submit', filterFormHandler);
