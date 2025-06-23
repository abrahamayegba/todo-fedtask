// Import jQuery
const $ = require("jquery");

$(document).ready(() => {
  // Application state
  let allTodos = [];

  // Initialize the application
  init();

  function init() {
    fetchTodos();
    bindEvents();
  }

  // Fetch todos from API
  function fetchTodos() {
    showLoading(true);

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "GET",
      dataType: "json",
      success: (data) => {
        allTodos = data;
        filteredTodos = [...allTodos];
        updateStatistics();
        sortData();
        renderTable();
        renderPagination();
        showLoading(false);
      },
      error: (xhr, status, error) => {
        showLoading(false);
        showError("Failed to fetch todos: " + error);
      },
    });
  }
});
