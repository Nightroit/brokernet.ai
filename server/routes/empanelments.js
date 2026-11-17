const express = require('express');
const router = express.Router();
const Empanelment = require('../models/Empanelment');
const { protect, authorize } = require('../middleware/auth');

router.post('/request', protect, authorize('broker'), async (req, res) => {
  try {
    const { builderId, projectId, documents, notes } = req.body;
    const empanelment = await Empanelment.create({
      broker: req.user._id,
      builder: builderId,
      project: projectId,
      documents,
      notes
    });
    res.status(201).json(empanelment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/my-requests', protect, async (req, res) => {
  const requests = await Empanelment.find({ broker: req.user._id })
    .populate('builder', 'name firmName')
    .populate('project', 'name city');
  res.json(requests);
});

router.get('/incoming', protect, authorize('builder'), async (req, res) => {
  const requests = await Empanelment.find({ builder: req.user._id })
    .populate('broker', 'name firmName reraNumber')
    .populate('project', 'name');
  res.json(requests);
});

router.put('/:id/approve', protect, authorize('builder'), async (req, res) => {
  const empanelment = await Empanelment.findByIdAndUpdate(
    req.params.id,
    { status: 'approved' },
    { new: true }
  );
  res.json(empanelment);
});

module.exports = router;