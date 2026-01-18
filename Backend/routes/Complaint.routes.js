import express from 'express';
import { submitComplaint, getAnalytics } from '../Controller/Complaint.controller.js';

const router = express.Router();

// Submit complaint (anonymous or logged-in)
router.post('/analytics',submitComplaint);

// Get analytics (admin/dashboard)
router.get('/analytics',getAnalytics);

export default router;
