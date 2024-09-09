const express = require('express');
const {
    createProject,
    getProjects,
    updateProject,
    deleteProject
} = require('../controllers/projectController');
const authenticate = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/', authenticate, authorizeRole('Admin'), createProject);
router.get('/', authenticate, authorizeRole('Manager'), getProjects);
router.put('/:projectId', authenticate, authorizeRole('Manager'), updateProject);
router.delete('/:projectId', authenticate, authorizeRole('Admin'), deleteProject);

module.exports = router;
