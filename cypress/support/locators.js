class loginPage {
    static usernameInput = '#username';
    static passwordInput = '#password';
    static loginButton = '#login > button';
    static alertMessageToast = '#flash';
    static successLoginAlert = 'You logged into a secure area!';
    static invalidPasswordAlert = 'Your password is invalid!';
    static invalidUsernameAlert = 'Your username is invalid!';

}

class checkboxPage {
    static checkboxElement = 'input[type="checkbox"]';
    
}

class dragAndDropPage {
    static boxAElement = '#column-a';
    static boxBElement = '#column-b';
    static aLetter = 'A';
    static bLetter = 'B';
    
}

class uploadFilePage {
   static fileUploadInput = '#file-upload'; 
   static fileUploadSubmit = '#file-submit'; 
   static UploadedTitleElement = '.example'; 
   static UploadedTitle = 'File Uploaded!'; 
   static uploadedFileName = '#uploaded-files'; 
   static drangAndDropUpload = '#drag-drop-upload'; 
   static uploadFileErrorTitle = 'body > h1'; 
   static uploadFileErrorMessage = 'Internal Server Error'; 
}

class dropdownPage {
    static dropdownSelect = '#dropdown'; 


}

class redirectLinkPage {

    static linkToStatusCodePage = '#redirect'; 
    static statusCodeTitleElement = 'div > h3'; 
    static statusCodeTitle = 'Status Codes'; 
    static statusCodeContent = '#content'; 

}


export default { checkboxPage, loginPage, dragAndDropPage, uploadFilePage, dropdownPage, redirectLinkPage };
