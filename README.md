# Todo Application

A modern, responsive todo application built with Bootstrap, jQuery, and the JSONPlaceholder API. This application demonstrates advanced front-end development skills including AJAX integration, dynamic data manipulation, and responsive design.

## 🚀 Features

### Core Functionality

- **API Integration**: Fetches todo data from JSONPlaceholder API
- **Responsive Design**: Fully responsive layout that works on all devices
- **Real-time Search**: Search todos by title or ID with highlighting
- **Advanced Filtering**: Filter todos by completion status
- **Column Sorting**: Sort by ID, title, or status with visual indicators
- **Pagination**: Navigate through large datasets with configurable page sizes

### User Experience

- **Modern UI**: Clean, professional design with smooth animations
- **Loading States**: Visual feedback during data loading
- **Error Handling**: Graceful error handling with user-friendly messages
- **Statistics Dashboard**: Real-time statistics showing completion rates
- **Smooth Interactions**: Hover effects and transitions throughout

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modern JavaScript features
- **jQuery**: DOM manipulation and AJAX requests
- **Bootstrap 5**: Responsive framework and components
- **Font Awesome**: Professional icons
- **JSONPlaceholder API**: Mock REST API for todo data

## 📁 Project Structure

\`\`\`
todo-app/
├── index.html # Main HTML file
├── styles.css # Custom CSS styles
├── script.js # JavaScript functionality
└── README.md # Project documentation
\`\`\`

## 🎨 Design Features

### Color Scheme

- **Primary**: Professional blue (#2563eb)
- **Secondary**: Complementary teal (#0891b2)
- **Success**: Green for completed tasks (#059669)
- **Warning**: Orange for pending tasks (#d97706)
- **Background**: Light gradient for visual depth

### Typography

- **Font**: Inter/Segoe UI for modern readability
- **Hierarchy**: Clear visual hierarchy with appropriate font weights
- **Spacing**: Consistent spacing using CSS custom properties

## 🔧 Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   \`\`\`

2. **Open in browser**

   - Simply open `index.html` in your web browser
   - No build process required - uses CDN resources

3. **For development**

   - Use a local server for best experience:
     \`\`\`bash

   # Using Python

   python -m http.server 8000

   # Using Node.js

   npx serve .
   \`\`\`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Key Features Explained

### Search Functionality

- **Debounced Input**: Prevents excessive API calls
- **Multi-field Search**: Searches across title and ID fields
- **Highlight Results**: Visual highlighting of search terms

### Sorting System

- **Multi-column Support**: Sort by any column
- **Visual Indicators**: Clear sort direction indicators
- **State Persistence**: Maintains sort state during filtering

### Pagination

- **Smart Navigation**: Intelligent page number display
- **Configurable Size**: 10, 25, 50, or 100 items per page
- **Smooth Scrolling**: Auto-scroll to table top on page change

### Statistics Dashboard

- **Real-time Updates**: Statistics update with filtering
- **Animated Counters**: Smooth number transitions
- **Completion Rate**: Percentage calculation with visual feedback

## 🔄 API Integration

The application uses the JSONPlaceholder API:

- **Endpoint**: `https://jsonplaceholder.typicode.com/todos`
- **Method**: GET
- **Response**: Array of todo objects with id, title, completed, and userId fields

### Data Structure

\`\`\`javascript
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
\`\`\`

## 🎨 Customization

### Colors

Modify CSS custom properties in `styles.css`:
\`\`\`css
:root {
--primary-color: #2563eb;
--secondary-color: #0891b2;
/_ ... other colors _/
}
\`\`\`

### Pagination

Change default items per page in `script.js`:
\`\`\`javascript
let itemsPerPage = 10; // Change this value
\`\`\`

## 🚀 Performance Optimizations

- **Debounced Search**: Reduces API calls and improves performance
- **Efficient Rendering**: Only renders visible table rows
- **CSS Animations**: Hardware-accelerated transitions
- **Lazy Loading**: Pagination prevents rendering large datasets

## 🔍 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📝 Development Notes

### Code Organization

- **Separation of Concerns**: HTML, CSS, and JavaScript in separate files
- **Modular Functions**: Each feature in its own function
- **Event Delegation**: Efficient event handling
- **Error Handling**: Comprehensive error management

### Best Practices

- **Semantic HTML**: Proper use of HTML5 elements
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized animations and efficient DOM manipulation
- **Maintainability**: Clean, commented code structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Repository**: [GitHub](https://github.com/abrahamayegba/todo-fedtask)
- **API Documentation**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

**Built with ❤️ for the Front-End Developer Task**
