"use strict";

function ProfileService($location) {
    const self = this;
    self.person = {
        name: "Jack Kanga",
        email: "kangaroo@jack.co",
        bio: "I'm pretty cool. Lover of licorice. Hate hot candy. Looking for an easy payday."
    };
    self.setUserProfile = (updatedPerson) => {
        self.person = updatedPerson;
        $location.path("/user-profile");
    };
    self.getUserProfile = () => {
        return self.person;
    };
    self.loadEdit = () => {
        $location.path("/edit-profile");
    }
}

angular
    .module("App")
    .service("ProfileService", ProfileService);