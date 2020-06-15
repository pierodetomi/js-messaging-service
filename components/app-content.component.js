var AppContent = function(labelSelector) {
    var self = {};

    var __construct = function(labelSelector) {
        MessagingService.subscribe(self, "NAME_CHANGED", function(payload) {
            var labelDOMElement = document.querySelector(labelSelector);
            labelDOMElement.innerHTML = payload.name;
        });
    };

    __construct(labelSelector);

    return self;
};