const aiService = require("../services/ai.service")


module.exports.getReviewCode = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(prompt);


    res.send(response);

}