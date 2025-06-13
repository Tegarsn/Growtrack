const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Aktifkan CORS
app.use(cors());

// Serve file statis dari folder dist
app.use(express.static(path.join(__dirname, 'dist')));

// Redirect ke landing page
app.get('/', (req, res) => res.redirect('/landingpage.html'));

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
