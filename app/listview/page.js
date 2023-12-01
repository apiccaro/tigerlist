import WriteUserData from '../../firebaseComponents/Write'

const WritingForm = () => {
    const fireButton = WriteUserData_Button();
    something.to.add.my.button(fireButton);
    return fireButton

}



// Home component
export default function Home() {
    console.log("Hi, you successfully started Home()")
  
    //Render the button
    const renderButton = () => {
      const myButton = WritingForm();
      return myButton;
    };
  
    // Return the JSX for the Home component
    return (
      <div>
        <h1>This is Jay's page</h1>
        {renderButton()}
      </div>
    );
}

