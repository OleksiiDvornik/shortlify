const Link = require('../models/LinkModel');

class RedirectController {
    async getCode (req, res) {
        try {
            const code = req.params.code;
            const link = await Link.findOne({ code });

            if (link) {
                link.clicks++;
                await link.save();
                return res.redirect(link.from);
            }

            return res.status(404).json({message: 'The link not found'});
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message: 'Request error'});
        }
    }
}

module.exports = new RedirectController();