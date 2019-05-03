module.exports = app => {
    app.router.get('/',app.controller.mainController.index);
};