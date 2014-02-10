define(["ui/MyComp"], function(MyComp) {
    return enyo.kind({
        name: "myapp.MainView",
        components: [
            {kind: MyComp}
        ]
    });
});