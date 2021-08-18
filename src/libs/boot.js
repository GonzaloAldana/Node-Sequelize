module.exports = app => {

    app.db.sequelize.sync().then(() => {
        app.listen(app.get('port'), () => {
            console.log('Listening port: ', app.get('port'));
        })
    });

};