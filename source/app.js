define(["ui/MainView"], function(MainView) {
    return enyo.kind({
        name: "myapp.Application",
        kind: "enyo.Application",
        view: MainView
    });
});
