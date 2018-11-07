"use strict";

const userProfile = {
    templateUrl: "app/components/user-profile/user-profile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.person = ProfileService.getUserProfile();
        vm.loadEdit = () => {
            ProfileService.loadEdit();
        }
    }]
};


angular
    .module("App")
    .component("userProfile", userProfile);