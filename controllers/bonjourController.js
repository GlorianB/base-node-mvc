exports.getIndex = (req, res, next) => {
    try {
        a = 42;
        return res.render('bonjour', { resultat : [1, 2, 3, 4, 5] });
    } catch (error) {
        console.error(error);
    }
}

exports.postIndex = (req, res, next) => {
    try {
        const { content } = req.body;
        console.log(content);
        return res.redirect('/bonjour/index');
    } catch (error) {
        console.error(error);
    }
}