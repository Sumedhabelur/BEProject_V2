const mongoose = require("mongoose");
const Notice = require("../models/notice");

exports.getNotice = async (req, res, next) => {
    const result = await Notice.find();

    res.status(200).json({
        result: result
    });
}

exports.uploadNotice = async (req, res, next) => {

    path = req.file.path.replace('\\', '/');
    const notice = new Notice({
        file: `http://localhost:3000/${path}`
    });

    notice.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {

            res.status(500).json({
                pathofmethod: 'uploadNotice()',
                error: err
            });
        });
}

exports.deleteNotice = (req, res, next) => {

}