module.exports = app => {
    app.router.get('/ft',app.controller.mainController.index);
    app.router.get('/',app.controller.mainController.index);
};