module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Server running in localhost:${app.get('port')}`)
    })
}