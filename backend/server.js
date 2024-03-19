const express = require('express');
const { MongoClient } = require('mongodb');
//const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
//app.use(cors);
app.use(express.json());
const mongoURL = 'mongodb+srv://admin:DreamHacks@cluster0.2seut1a.mongodb.net/';
MongoClient.connect(mongoURL, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to MongoDB');
    const db = client.db('ThemeSettings');
    app.get('/api/styles', async (req, res) => {
      try {
        const styles = await db.collection('Styles').find().toArray();
        res.json(styles);
      } catch (error) {
        console.error('Error fetching styles:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
app.post('/api/styles', async (req, res) => {
  try {
    const newStyle = req.body;
    await db.collection('styles').insertOne(newStyle);
    res.status(201).json({ message: 'Style created successfully' });
  } catch (error) {
    console.error('Error creating style:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.put('/api/styles/:id', async (req, res) => {
  try {
    const styleId = req.params.id;
    const updatedStyle = req.body;
    await db
      .collection('styles')
      .updateOne({ _id: styleId }, { $set: updatedStyle });
    res.json({ message: 'Style updated successfully' });
  } catch (error) {
    console.error('Error updating style:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/api/styles/:id', async (req, res) => {
  try {
    const styleId = req.params.id;
    await db.collection('styles').deleteOne({ _id: styleId });
    res.json({ message: 'Style deleted successfully' });
  } catch (error) {
    console.error('Error deleting style:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/fetch-settings', async (req, res) => {
  try {
    const fetchedSettings = {
      textColor: '#rrggbb',
    };
    res.json(fetchedSettings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Example Express.js route for updating a specific setting
app.put('/api/update-settings/:id', async (req, res) => {
  try {
    const settingId = req.params.id; // Assuming you have a unique identifier for settings
    const updatedSetting = req.body; // New value for the setting
    // Update the setting in your database (e.g., MongoDB)
    // ...
    res.json({ message: 'Setting updated successfully' });
  } catch (error) {
    console.error('Error updating setting:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Example Express.js route for saving settings
app.post('/api/save-settings', async (req, res) => {
  try {
    const newSettings = req.body; // Assuming you receive settings in the request body
    // Save newSettings to your database (e.g., MongoDB)
    // ...
    res.status(201).json({ message: 'Settings saved successfully' });
  } catch (error) {
    console.error('Error saving settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
