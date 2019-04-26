function main() {
    let fejspuk = new SocialNetwork();
    let user = fejspuk.user[0];

    let renderer = new Renderer(user);
    renderer.renderAll();

}
$(document).ready(function() {
    main();
});