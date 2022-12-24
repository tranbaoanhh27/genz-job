import React from "react";
import { Route, Navigate } from "react-router-dom";

export function checkUserPermission (user = { Roles: [] }, permission) {
	const allowAccessForRoles = {
		"route.admin": ["admin"],
        "route.job-seeker": ["job-seeker"],
        "route.recruiter": ["recruiter"],
		"route.authenticated": ["job-seeker", 'recruiter', "admin", "*"],
		"route.home": ["*"], //means "Any role"
		"component.Authenticate": ["*", "!user", "!admin"],
		"component.BecomeAdmin": ["user"],
        "component.job-seeker": ["job-seeker"],
        "component.recruiter": ["recruiter"],
		"component.LogOut": ["user", "admin"],
	};

    //If we don't have such permission in list, access denied for everyone
    if (!Array.isArray(allowAccessForRoles[permission])) {
        return false;
    }
    
	//If list of allowed roles contains '*', access allowed for everyone
	if (allowAccessForRoles[permission].includes("*")) {
		return true;
	}

    if (user === null) {
        return false;
    }

    //Check if any of user's roles explicitly denies access
    if (Array.isArray(user.Roles)) {
        for (const role of user.Roles) {
            if (allowAccessForRoles[permission].includes("!" + role)) {
               return false;
            }
        }
    } 
    else {
        if (allowAccessForRoles[permission].includes("!" + user.Roles)) {
            return false;
        }
    }

	//Check if any of user's roles allowes access
    if (Array.isArray(user.Roles)) {
        for (const role of user.Roles) {
            if (allowAccessForRoles[permission].includes(role)) {
                return true;
            }
        }
    } 
    else {
        console.log(allowAccessForRoles[permission].includes(user.Roles));
        return allowAccessForRoles[permission].includes(user.Roles);
    }

	return false;
};

const SecuredRoute = ({
	user,
	permission,
	redirectTo = "/",
	children,
	...rest
}) => {

	const allowed = checkUserPermission(user, permission);

	if (allowed) {
		return children;
	}

	return <Navigate to={redirectTo} />;
};

export default SecuredRoute;

