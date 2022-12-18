const Link = require('../models/LinkModel');
const nanoid = require('nanoid');

const { customAlphabet } = nanoid;
const idGenerator = customAlphabet('1234567890abcdefgABCDEFG', 6)

class LinksController {
    async generateLink (req, res) {
        try {
            const baseUrl = process.env.BASE_URL
            const { from } = req.body;
            const code = idGenerator();
            const isExist = await Link.findOne({ from });

            if (isExist) {
                return res.json({ link: isExist });
            }

            const to = baseUrl + '/t/' + code;
            const link = new Link({ from, to, code, owner: req.user.id })

            await link.save();
            return res.status(201).json(link);
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message: 'Request error'});
        }
    }

    async getAllLinks (req, res) {
        try {
            const links = await Link.find({ owner: req.user.id });
            res.json(links);
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message: 'Request error'});
        }
    }

    async getLink (req, res) {
        try {

        } catch (err) {
            console.log(err.message);
            res.status(500).json({message: 'Request error'});
        }
    }

    async deleteLink (req, res) {
        try {
            const id = req.params.id;
            const link = await Link.findByIdAndDelete({_id: id});
            return res.status(200).json(link);
        } catch (err) {
            console.log(err.message);
            res.status(500).json({message: 'Request error'});
        }
    }
}

module.exports = new LinksController();