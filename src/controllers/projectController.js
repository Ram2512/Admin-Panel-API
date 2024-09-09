const {User}= require('../models/user');
const {Project}= require('../models/project');
exports.createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const project = await Project.create({
            name,
            description,
            createdBy: req.user.id
        });
        res.status(201).json({ message: 'Project created', project });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const { name, description } = req.body;

        const project = await Project.findByPk(projectId);
        if (!project) return res.status(404).json({ error: 'Project not found' });

        project.name = name || project.name;
        project.description = description || project.description;

        await project.save();
        res.json({ message: 'Project updated', project });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await Project.findByPk(projectId);
        if (!project) return res.status(404).json({ error: 'Project not found' });

        await project.destroy(); // Soft delete
        res.json({ message: 'Project deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
