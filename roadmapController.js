const Roadmap = require("../models/roadmap");

// 📌 Create a new roadmap
exports.createRoadmap = async (req, res) => {
    try {
    const { title, description, topics, resources } = req.body;
    const roadmap = new Roadmap({ title, description, topics, resources });
    await roadmap.save();
    res.status(201).json(roadmap);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// 📌 Get all roadmaps
exports.getAllRoadmaps = async (req, res) => {
    try {
    const roadmaps = await Roadmap.find();
    res.status(200).json(roadmaps);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// 📌 Get a single roadmap by ID
exports.getRoadmapById = async (req, res) => {
    try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });
    res.status(200).json(roadmap);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// 📌 Update a roadmap
exports.updateRoadmap = async (req, res) => {
    try {
    const roadmap = await Roadmap.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });
    res.status(200).json(roadmap);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// 📌 Delete a roadmap
exports.deleteRoadmap = async (req, res) => {
    try {
    const roadmap = await Roadmap.findByIdAndDelete(req.params.id);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });
    res.status(200).json({ message: "Roadmap deleted successfully" });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};