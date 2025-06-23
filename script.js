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

  // Handle column sorting
  function handleSort(e) {
    const column = $(e.currentTarget).data("column");

    if (currentSort.column === column) {
      currentSort.direction = currentSort.direction === "asc" ? "desc" : "asc";
    } else {
      currentSort.column = column;
      currentSort.direction = "asc";
    }

    // Update sort indicators
    $(".sortable").removeClass("sort-asc sort-desc");
    $(e.currentTarget).addClass("sort-" + currentSort.direction);

    sortData();
    renderTable();
  }

  // Sort data based on current sort settings
  function sortData() {
    filteredTodos.sort((a, b) => {
      let aVal = a[currentSort.column];
      let bVal = b[currentSort.column];

      // Handle different data types
      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (aVal < bVal) return currentSort.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return currentSort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Highlight search terms in text
  function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || searchTerm.trim() === "") return text;

    const regex = new RegExp(`(${escapeRegExp(searchTerm.trim())})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  // Render table with current page data
  function renderTable() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredTodos.slice(startIndex, endIndex);

    const tbody = $("#todoTableBody");
    tbody.empty();

    if (pageData.length === 0) {
      tbody.append(`
                <tr>
                    <td colspan="3" class="text-center py-5">
                        <i class="fas fa-search fa-3x text-muted mb-3"></i>
                        <p class="text-muted mb-0">No todos found matching your criteria.</p>
                        <small class="text-muted">Try adjusting your search or filter settings.</small>
                    </td>
                </tr>
            `);
      return;
    }

    pageData.forEach((todo, index) => {
      const statusClass = todo.completed
        ? "status-completed"
        : "status-pending";
      const statusText = todo.completed ? "Completed" : "Pending";
      const statusIcon = todo.completed
        ? "fas fa-check-circle"
        : "fas fa-clock";

      const row = `
                <tr style="animation-delay: ${index * 0.05}s">
                    <td><strong>#${todo.id}</strong></td>
                    <td>
                        <div class="todo-title">
                            ${highlightSearchTerm(
                              todo.title,
                              $("#searchInput").val()
                            )}
                        </div>
                    </td>
                    <td>
                        <span class="status-badge ${statusClass}">
                            <i class="${statusIcon}"></i> ${statusText}
                        </span>
                    </td>
                </tr>
            `;
      tbody.append(row);
    });
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
