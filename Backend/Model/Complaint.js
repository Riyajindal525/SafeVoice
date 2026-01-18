import mongoose from 'mongoose';

const ComplaintSchema = new mongoose.Schema({
  category: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false } // optional
});

export default mongoose.model('Complaint', ComplaintSchema);
