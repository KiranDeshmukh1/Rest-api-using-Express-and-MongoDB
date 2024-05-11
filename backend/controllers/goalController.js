//@desc Get goals
//@route GET /api/goals
//@access Private
export const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
};

//@desc Set goals
//@route POST /api/goals
//@access Private
export const setGoals = (req, res) => {
  res.status(200).json({
    message: "Set Goals",
  });
};

//@desc update goals
//@route PUT /api/goals/:id
//@access Private
export const updateGoals = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
};

//@desc Delete goals
//@route DELETE /api/goals
//@access Private
export const deleteGoals = (req, res) => {
  res.status(200).json({
    message: `Delete Goal ${req.params.id}`,
  });
};
