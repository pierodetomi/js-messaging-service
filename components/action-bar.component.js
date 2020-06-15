var ActionBar = function() {
    var self = {};

    self.changeName = function() {
        MessagingService.publish("NAME_CHANGED", { name: "John Smith" });
    };

    return self;
};