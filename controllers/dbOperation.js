exports.getData = function(req, res, next){
    var db = req.db
    var collection = db.collection('COLLECTION_NAME')
    collection.find().toArray(function(err, results) {
        if (err) { return next(err); }
        res.status(200).send(results)
        db.close()
    });
};