const mongoose = require("mongoose");

const RoadmapSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    topics: [
        {
        name: { type: String, required: true },
        milestones: [
            {
            title: { type: String, required: true },
            completed: { type: Boolean, default: false },
            },
        ],
        },
    ],
    resources: [
        {
        type: { type: String, enum: ["Book", "Video", "Course"], required: true },
        title: { type: String, required: true },
        url: { type: String, required: true },
        },
    ],
    progress: {
        completedMilestones: { type: Number, default: 0 },
        totalMilestones: { type: Number, default: 0 },
    },
    reminders: [
        {
        message: { type: String, required: true },
        date: { type: Date, required: true },
        },
    ],
    sharedWith: [{ type: String }], // List of emails/users the roadmap is shared with
    },
    { timestamps: true }
);

const Roadmap = mongoose.model("Roadmap", RoadmapSchema);

module.exports = Roadmap;