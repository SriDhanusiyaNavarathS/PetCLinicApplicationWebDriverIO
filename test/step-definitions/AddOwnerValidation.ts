import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import { homePage } from "../page/HomePage";

Given(/^User is entering new owner in petclinic application$/, async function () {
    await browser.url(data.APP_URL.BASE_URL);
    await browser.maximizeWindow();
    await browser.pause(1000);
    const ApplicationTitle = await browser.getTitle();
    expect(ApplicationTitle).toBe(data.PageTitle.title)
    console.log(ApplicationTitle)
    await browser.pause(1000);
    //navigate to find owner
    await homePage.navigateToFindOwner();

    //Navigate to add owner
    await homePage.navigateToAddOwner();

});
When(/^User not provided firstname of new owner$/, async function () {
    await homePage.firstnameFieldValidation("")
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()
});

Then(/^error messages gets dispayed below firstname field$/, async function () {
    let ErrorMsgForFirstnamefield = await homePage.firstnameFieldErrorMsgValidation()
    expect(ErrorMsgForFirstnamefield).toBe(data.FieldValidationErrorMessage.Errormsg)
    console.log("FirstName field " + ErrorMsgForFirstnamefield)
});
When(/^User not provided lastname of new owner$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation("")
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()
});
Then(/^error messages gets dispayed below lastname field$/, async function () {
    let ErrorMsgForLastnamefield = await homePage.lastnameFieldErrorMsgValidation()
    expect(ErrorMsgForLastnamefield).toBe(data.FieldValidationErrorMessage.Errormsg);
    console.log("LastName field " + ErrorMsgForLastnamefield);
});
When(/^User not provided address of new owner$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation("")
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()
});

Then(/^error messages gets dispayed below address field$/, async function () {
    const ErrorMsgForAddressfield = await homePage.addressFieldErrorMsgValidation()
    expect(ErrorMsgForAddressfield).toBe(data.FieldValidationErrorMessage.Errormsg);
    console.log("Address field " + ErrorMsgForAddressfield);
});
When(/^User not provided city of new owner$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation("")
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()
});
Then(/^error messages gets dispayed below city field$/, async function () {
    const ErrorMsgForCityfield = await homePage.cityFieldErrorMsgValidation()
    expect(ErrorMsgForCityfield).toBe(data.FieldValidationErrorMessage.Errormsg);
    console.log("City field " + ErrorMsgForCityfield);
});
When(/^User not provided telephone of new owner$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation("")
    await homePage.AddOwner()
});
Then(/^error messages gets dispayed below telephone field$/, async function () {
    const TelephoneEmptyFieldValidation = await homePage.telephoneErrorMsgValidation()
    console.log("Checking: " + TelephoneEmptyFieldValidation)
    expect(TelephoneEmptyFieldValidation[0]).toBe(data.FieldValidationErrorMessage.TelephonevalidationErrorMsg)
    expect(TelephoneEmptyFieldValidation[1]).toBe(data.FieldValidationErrorMessage.Errormsg)

});
When(/^User enter non numeric value in telephone field$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.invalidtelephone)
    await homePage.AddOwner()
    
});

Then(/^numeric error message gets display$/,async function (){
    const TelephoneNonNumericValidation = await homePage.telephoneErrorMsgValidation()
    console.log("Checking: " + TelephoneNonNumericValidation)
    expect(TelephoneNonNumericValidation[0]).toBe(data.FieldValidationErrorMessage.TelephonevalidationErrorMsg)
})
