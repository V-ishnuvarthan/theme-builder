const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/save-theme-settings', (req, res) => {
  const { themeSettings } = req.body;
  console.log('Theme settings saved:', themeSettings);
  res.json({ message: 'Theme settings saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
