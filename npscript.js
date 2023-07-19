// Function to update the displayed local storage
function updateLocalStorageDisplay() {
    // Retrieve data from local storage
    var storedData = localStorage.getItem('unsubscribeData');
  
    // Check if there is data in local storage
    if (storedData) {
      // Parse the data from string to object
      var parsedData = JSON.parse(storedData);
  
      // Update the HTML with the stored data
      var dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = '<pre>' + JSON.stringify(parsedData, null, 2) + '</pre>';
    } else {
      // No data found in local storage
      var dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = 'No data found.';
    }
  }
  
  // Function to toggle the visibility of the other reason textbox
  function toggleOtherReasonTextbox() {
    var textbox = document.getElementById('otherReasonTextbox');
    var otherReasonCheckbox = document.querySelector('input[name="answer"][value="Other reason"]');
  
    if (otherReasonCheckbox.checked) {
      textbox.style.display = 'block';
    } else {
      textbox.style.display = 'none';
    }
  }
  
  // Function to store the form data in local storage
  function storeData() {
    var selectedReason = document.querySelector('input[name="answer"]:checked');
    var otherReason = document.getElementById('otherReason').value;
  
    var data = {
      selectedReason: selectedReason ? selectedReason.value : '',
      otherReason: otherReason ? otherReason : '',
    };
  
    localStorage.setItem('unsubscribeData', JSON.stringify(data));
    updateLocalStorageDisplay();
  }
  
  // Call the updateLocalStorageDisplay function initially
  updateLocalStorageDisplay();
  