$(document).ready(function() {
  // Retrieve the order history data from the server (you can replace this with your own data source)
  var orderHistoryData = [
    { orderId: 1, date: '2023-06-01', price: 100 },
    { orderId: 2, date: '2023-05-15', price: 150 },
    { orderId: 3, date: '2023-06-10', price: 80 },
    { orderId: 4, date: '2023-05-27', price: 120 },
    { orderId: 5, date: '2023-06-05', price: 200 },
    // Add more order history data as needed
  ];

  // Populate the order history table with the initial data
  populateOrderHistoryTable(orderHistoryData);

  // Handle sorting when the dropdown selection changes
  $('#sort').change(function() {
    var sortBy = $(this).val();
    sortOrderHistory(sortBy);
  });

  // Function to populate the order history table
  function populateOrderHistoryTable(data) {
    var tableBody = $('#order-history tbody');
    tableBody.empty();

    $.each(data, function(index, order) {
      var row = '<tr><td>' + order.orderId + '</td><td>' + order.date + '</td><td>$' + order.price + '</td></tr>';
      tableBody.append(row);
    });
  }

  // Function to sort the order history based on the selected criteria
  function sortOrderHistory(sortBy) {
    orderHistoryData.sort(function(a, b) {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'price') {
        return b.price - a.price;
      }
      // Add more sorting criteria as needed
    });

    populateOrderHistoryTable(orderHistoryData);
  }
});

  