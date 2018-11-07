"use strict";

const editProfile = {
    templateUrl: "app/components/edit-profile/edit-profile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.person = ProfileService.getUserProfile();
        vm.passData = (person) => {
            ProfileService.setUserProfile(person);
        }
    }]
};

angular
    .module("App")
    .component("editProfile", editProfile);