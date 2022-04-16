const Monument = require('../../models/Monument');

exports.monumentsCreate = async (req, res) => {
  try {
    const newMonument = await Monument.create(req.body);
    res.status(201).json(newMonument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.monumentsDelete = (req, res) => {
  const { monumentId } = req.params;
  try {
    const foundMonument = await Monument.findById(+monumentId);
    if (foundMonument){
      await foundMonument.remove();
      res.status(204).end();
  } else {
    res.status(404).json({ message: "Monument not found" });
  }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.monumentsUpdate = async (req, res) => {
  const { monumentId } = req.params;
  try {
    const foundMonument = await Monument.findById(+monumentId);
    if (foundMonument) {
      await foundMonument.findByIdAndUpdate(monumentId, req.body, { new: true });
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Monument not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.monumentsGet = async (req, res) => {
  try {
    const monuments = await Monument.find({}, '-createdAt -updatedAt');
    res.json(monuments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


