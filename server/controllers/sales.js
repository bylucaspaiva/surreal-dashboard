import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    console.log("teste0")

    const overallStats = await OverallStat.find();
    console.log("teste1")

    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};