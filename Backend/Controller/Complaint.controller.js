import Complaint from '../Model/Complaint.js';

// POST /api/analytics
export const submitComplaint = async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) return res.status(400).json({ msg: 'Category is required' });

    const complaint = new Complaint({
      category,
      user: req.user?.id || null // optional, if logged-in
    });

    await complaint.save();
    res.status(201).json({ msg: 'Category counted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// GET /api/analytics (for admin/dashboard view)
export const getAnalytics = async (req, res) => {
  try {
    const data = await Complaint.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
