require('./db');
const express = require('express');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(express.static('../frontend'));
app.use(express.json());

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password are required.' });
    if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    try {
        const exists = await User.findOne({ username });
        if (exists) return res.status(409).json({ error: 'Username already taken.' });
        await User.create({ username, password, name: username });
        res.status(201).json({ success: true, message: 'Account created! You can now log in.' });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password are required.' });
    try {
        const user = await User.findOne({ username, password });
        if (!user) return res.status(401).json({ error: 'Wrong username or password.' });
        res.json({ success: true, name: user.name });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.post('/api/logout', (req, res) => {
    res.json({ success: true });
});

app.post('/api/courses/enroll', async (req, res) => {
    const { username, courseIds } = req.body;
    if (!username || !courseIds) return res.status(400).json({ error: 'Username and courseIds are required.' });
    try {
        await User.findOneAndUpdate({ username }, { enrolledCourses: courseIds });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.get('/api/courses/enrolled', async (req, res) => {
    const { username } = req.query;
    if (!username) return res.status(400).json({ error: 'Username is required.' });
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found.' });
        res.json({ enrolledCourses: user.enrolledCourses });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.delete('/api/courses/enroll/:id', async (req, res) => {
    const { username } = req.body;
    const courseId = parseInt(req.params.id);
    if (!username) return res.status(400).json({ error: 'Username is required.' });
    try {
        await User.findOneAndUpdate({ username }, { $pull: { enrolledCourses: courseId } });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});
