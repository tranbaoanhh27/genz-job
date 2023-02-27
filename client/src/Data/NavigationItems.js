export const NAV_GENERAL_ITEMS = [
    {
        id: "navJobs",
        title: "Tin tuyển dụng",
        icon: "/assets/img/job-search.png",
        linkTo: "",
    },
    {
        id: "navArticles",
        title: "Bài viết",
        icon: "/assets/img/newsfeed.png",
        linkTo: "articles",
    },
    {
        id: "navLogin",
        title: "Đăng nhập",
        icon: "/assets/img/user.png",
        linkTo: "login",
    },
];

export const NAV_RECRUITER_ITEMS = [
    {
        id: "navJobs",
        title: "Tin tuyển dụng",
        icon: "/assets/img/job-search.png",
        linkTo: "",
    },
    {
        id: "navArticles",
        title: "Bài viết",
        icon: "/assets/img/newsfeed.png",
        linkTo: "articles",
    },
    {
        id: "navMessages",
        title: "Tin nhắn",
        icon: "/assets/img/message.png",
        linkTo: "messages",
    },
    {
        id: "navNotifications",
        title: "Thông báo",
        icon: "/assets/img/notification.png",
        linkTo: "notifications",
    },
    {
        id: "navAccount",
        title: "Tài khoản",
        icon: "/assets/img/user.png",
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
        title: "Tin tuyển dụng",
        icon: "/assets/img/job-search.png",
        linkTo: "",
    },
    {
        id: "navArticles",
        title: "Bài viết",
        icon: "/assets/img/newsfeed.png",
        linkTo: "articles",
    },
    {
        id: "navMessages",
        title: "Tin nhắn",
        icon: "/assets/img/message.png",
        linkTo: "messages",
    },
    {
        id: "navNotifications",
        title: "Thông báo",
        icon: "/assets/img/notification.png",
        linkTo: "notifications",
    },
    {
        id: "navProfile",
        title: "Hồ sơ",
        icon: "/assets/img/user.png",
        linkTo: "profile",
    },
    {
        id: "navLogOut",
        title: "Đăng xuất",
        icon: "/assets/img/logout.png",
        linkTo: "logout",
    },
];
