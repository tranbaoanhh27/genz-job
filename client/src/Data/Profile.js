export const ProfileLocationPrint = {
    Title: Symbol(0),
    Links: Symbol(1),
    MainText: Symbol(2),
    AboutYou: Symbol(3),
    Exp: Symbol(4),
    Skill: Symbol(5)
}

export let socialLinks = [
    {
        icon: "fab fa-facebook",
        text: "facebook.com"
    },
    {
        icon: "fas fa-globe",
        text: "DreamyWanderer.com"
    },
    {
        icon: "fab fa-github",
        text: "github.com"
    }
];

export let personalInformation = [
    {
        key: "Title",
        value: "Full Stack Developer District 5, Ho Chi Minh City, Viet Nam",
        canEdit: "partial",
        location: ProfileLocationPrint.Title
    },
    {
        key: "Họ và tên",
        value: "Nguyễn Thế Hoàng",
        canEdit: "partial",
        location: ProfileLocationPrint.MainText
    },
    {
        key: "Username đăng nhập",
        value: "DreamyWanderer",
        canEdit: "no",
        location: ProfileLocationPrint.MainText
    },
    {
        key: "Mật khẩu đăng nhập",
        value: "05112002wt",
        canEdit: "no",
        location: ProfileLocationPrint.MainText
    },
    {
        key: "Năm sinh",
        value: "05/11/2002",
        canEdit: "partial",
        location: ProfileLocationPrint.MainText
    },
    {
        key: "Giới tính",
        value: "Nam",
        canEdit: "partial",
        location: ProfileLocationPrint.MainText
    },
    {
        key: "Vai trò",
        value: "Người tìm việc",
        canEdit: "no",
        location: ProfileLocationPrint.MainText
    },
    {
        key: "About you",
        value: "Xin chào mọi người!",
        canEdit: "partial",
        location: ProfileLocationPrint.AboutYou
    }
];

export let listJobStatus = [
    {
        nameJob: "Job #1",
        detail: "Detail",
        status: "Applied",
    },
    {
        nameJob: "Job #1",
        detail: "Detail",
        status: "Applied",
    }
]

export let listYourFollow = [
    {
        nameAccount: "Account #1",
        detail: "Detail",
        status: "Following"
    }
]