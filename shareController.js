const Roadmap = require("../models/roadmap");
const sendEmail = require("../utils/emailService");

// 📌 Share a roadmap via email
exports.shareRoadmap = async (req, res) => {
    try {
    const { roadmapId } = req.params;
    const { email } = req.body;
    
    const roadmap = await Roadmap.findById(roadmapId);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });

    // Add email to shared list
    if (!roadmap.sharedWith.includes(email)) {
        roadmap.sharedWith.push(email);
        await roadmap.save();
    }

    // Send an email with the roadmap details
    const subject = "A Roadmap Has Been Shared With You!";
    const text = 'You have been invited to view the roadmap: ${roadmap.title}. Check it out!';
    sendEmail(email, subject, text);

    res.status(200).json({ message: 'Roadmap shared with ${email}' });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};