"use strict";

function ProfileService($location) {
    const self = this;
    self.person = {
        name: "Grant Chirpus",
        email: "grant@grandcircus.co",
        bio: "I'm pretty cool. I do a great job. I like Tetris. I'm pretty ok at AngularJS."
    };
    self.setUserProfile = (person) => {
        self.person = person;
        $location.path("/user-profile");
    };
    self.getUserProfile = () => {
        return self.person;
    };
}

angular
    .module("App")
    .service("ProfileService", ProfileService);