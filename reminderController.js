const Roadmap = require("../models/roadmap");

// 📌 Add a reminder to a roadmap
exports.addReminder = async (req, res) => {
    try {
    const { message, date } = req.body;
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });

    roadmap.reminders.push({ message, date });
    await roadmap.save();

    res.status(200).json(roadmap);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// 📌 Get reminders for a roadmap
exports.getReminders = async (req, res) => {
    try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });

    res.status(200).json(roadmap.reminders);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// 📌 Delete a reminder
exports.deleteReminder = async (req, res) => {
    try {
    const { roadmapId, reminderId } = req.params;
    const roadmap = await Roadmap.findById(roadmapId);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });

    roadmap.reminders = roadmap.reminders.filter((reminder) => reminder._id.toString() !== reminderId);
    await roadmap.save();

    res.status(200).json({ message: "Reminder deleted" });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};