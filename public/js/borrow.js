// Placeholder code to connect with front end
const borrowItem = async () => {
    const response = await fetch('/api/employee/borrow', {
      method: 'POST',
        // Add body one front end ready
      //body: JSON.stringify({ itemId }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('Succes')
    } else {
      alert('Error borrowing item');
    }
  };