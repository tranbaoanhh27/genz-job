import { Page } from "./Admin";

export function initRowsDataAccount() {

    let rowsDataAccount = []; // FUCK OFF! You must put it in here or else the old value will be kept forever
    console.log( rowsDataAccount );
    for (let i = 0; i < 100; i++)
    {
        let newObject = {
            id: i,
            Username: `userName${i}`,
            FullName: `fullName${i}`,
            BirthDay: `12/4/1984`,
            DateCreated: `14/3/2002`,
            Role: `Người tìm việc`
        }

        rowsDataAccount.push(newObject);
        console.log( 'init' );
    }

    return rowsDataAccount;
}

export function initRowsDataJobArticle() {

    let rowsDataJobArticle = [];
    console.log( rowsDataJobArticle );
    for (let i = 0; i < 100; i++)
    {
        let newObject = {
            id: i,
            Username: `userName${i}`,
            FullName: `tênđầydu${i}`,
            Company: `company${i}`,
            DateCreated: `14/3/2002`,
            TitleJob: `titleJob${i}`
        }

        rowsDataJobArticle.push(newObject);
        console.log('init2');   
    }

    return rowsDataJobArticle;
}

export function getHeaderRow(page) {

    let headerRowText = [];

    if (page === Page.Account) {
        headerRowText.push("STT"); headerRowText.push("Username"); headerRowText.push("Họ và tên"); headerRowText.push("Năm sinh"); headerRowText.push("Thời gian tạo"); headerRowText.push("Vai trò");
    }
    else if (page === Page.HireRecruiter) {
        headerRowText.push("STT"); headerRowText.push("Username đăng bài"); headerRowText.push("Họ và tên"); headerRowText.push("Công ty"); headerRowText.push("Thời gian tạo"); headerRowText.push("Tiêu đề");
    }

    return headerRowText;
}

export function getUserAccountInformation() {

    let userAccountInfo = [
    {
        key: 'id',
        value: '-1'
    },
    {
        key: 'Họ và tên',
        value: 'Sửa giá trị'
    },
    {
        key: 'Username',
        value: 'Sửa giá trị'
    },
    {
        key: "Mật khẩu",
        value: 'Sửa giá trị'
    },
    {
        key: "Ngày tháng năm sinh",
        value: '1900-01-01'
    },
    {
        key: "Giới tính",
        value: 0
    },
    {
        key: "Vai trò",
        value: 0
    }]

    console.log('Heyy');

    return userAccountInfo;
}