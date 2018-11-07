"use strict";

const userProfile = {
    templateUrl: "app/components/user-profile/user-profile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.info = ProfileService.getUserProfile();
    }]
};


angular
    .module("App")
    .component("userProfile", userProfile);