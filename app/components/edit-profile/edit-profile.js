"use strict";

const editProfile = {
    templateUrl: "app/components/edit-profile/edit-profile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.person = ProfileService.getUserProfile();
        vm.passData = (updatedPerson) => {
            ProfileService.setUserProfile(updatedPerson);
        }
    }]
};

angular
    .module("App")
    .component("editProfile", editProfile);