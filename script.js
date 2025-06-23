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

  // Bind event handlers
  function bindEvents() {
    // Search functionality
    $("#searchInput").on("input", debounce(handleSearch, 300));

    // Status filter
    $("#statusFilter").on("change", handleFilter);

    // Items per page
    $("#itemsPerPage").on("change", handleItemsPerPageChange);

    // Column sorting
    $(".sortable").on("click", handleSort);

    // Pagination clicks
    $(document).on("click", ".pagination .page-link", handlePaginationClick);
  }

  // Handle search input
  function handleSearch() {
    const searchTerm = $("#searchInput").val().toLowerCase().trim();
    applyFilters(searchTerm);
  }

  // Handle status filter
  function handleFilter() {
    const searchTerm = $("#searchInput").val().toLowerCase().trim();
    applyFilters(searchTerm);
  }

  // Apply search and filter
  function applyFilters(searchTerm = "") {
    const statusFilter = $("#statusFilter").val();

    filteredTodos = allTodos.filter((todo) => {
      const matchesSearch =
        searchTerm === "" ||
        todo.title.toLowerCase().includes(searchTerm) ||
        todo.id.toString().includes(searchTerm);

      const matchesStatus =
        statusFilter === "" ||
        (statusFilter === "completed" && todo.completed) ||
        (statusFilter === "pending" && !todo.completed);

      return matchesSearch && matchesStatus;
    });

    currentPage = 1;
    sortData();
    renderTable();
    renderPagination();
    updateStatistics();
  }

  // Highlight search terms in text
  function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || searchTerm.trim() === "") return text;

    const regex = new RegExp(`(${escapeRegExp(searchTerm.trim())})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  // Escape special regex characters
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Show/hide loading spinner
  function showLoading(show) {
    if (show) {
      $("#loadingSpinner").show();
      $(".table-container").hide();
    } else {
      $("#loadingSpinner").hide();
      $(".table-container").show();
    }
  }
});
