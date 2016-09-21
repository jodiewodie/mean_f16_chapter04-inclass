module.exports.showStudentName = function(req, res) {
    res.render('index', {firstName: 'Jodie', lastName: 'Rohrer'});
};