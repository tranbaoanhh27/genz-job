export const NAV_GENERAL_ITEMS = [
    {
        id: "navJobs",
        title: "Tin tuyển dụng",
        linkTo: "",
    },
    {
        id: "navArticles",
        title: "Bài viết",
        linkTo: "articles",
    },
    {
        id: "navLogin",
        title: "Đăng nhập",
        linkTo: "login",
    },
];

export const NAV_RECRUITER_ITEMS = [
    {
        id: "navJobs",
        title: "Tin tuyển dụng",
        linkTo: "",
    },
    {
        id: "navArticels",
        title: "Bài viết",
        linkTo: "articles",
    },
    {
        id: "navMessages",
        title: "Tin nhắn",
        linkTo: "messages",
    },
    {
        id: "navNotifications",
        title: "Thông báo",
        linkTo: "notifications",
    },
    {
        id: "navAccount",
        title: "Tài khoản",
        isDropdown: true,
        children: [
            {
                id: "navProfile",
                title: "Hồ sơ của tôi",
                linkTo: "profile",
            },
            {
                id: "navMyJobs",
                title: "Tin tuyển dụng của tôi",
                linkTo: "myjobs",
            },
            {
                id: "navLogOut",
                title: "Đăng xuất",
                linkTo: "logout",
            },
        ],
    },
];

export const NAV_JOBSEEKER_ITEMS = [
    {
        id: "navJobs",
        title: "Săn việc làm",
        linkTo: "jobs",
    },
    {
        id: "navArticles",
        title: "Bảng tin",
        linkTo: "articles",
    },
    {
        id: "navMessages",
        title: "Tin nhắn",
        linkTo: "messages",
    },
    {
        id: "navNotifications",
        title: "Thông báo",
        linkTo: "notifications",
    },
    {
        id: "navProfile",
        title: "Hồ sơ",
        linkTo: "profile",
    },
    {
        id: "navLogOut",
        title: "Đăng xuất",
        linkTo: "logout",
    },
];
