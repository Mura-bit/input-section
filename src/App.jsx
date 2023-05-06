import CustomInput from './components/customInput/CustomInput.jsx';
import CustomButton from './components/customButton/CustomButton.jsx';
import './App.css';

function App() {
  return (
    <section className="sign-up">
      <h1>Sign up form</h1>
      <div className="form">
        <CustomInput
          text="first name:"
          placeholder="Mikulash"
          type="text" 
          length="14"
          size="medium" 
        />
        <CustomInput
          text="last name:"
          placeholder="Michael"
          type="text" 
          length="14"
          size="medium" 
        />
        <CustomInput
          text="address:"
          placeholder="286 chestnutburg rd."
          type="text" 
          length="14"
          size="long" 
        />
        <CustomInput
          text="city:"
          placeholder="seattle"
          type="text" 
          length="14"
          size="medium" 
        />
        <CustomInput
          text="state:"
          placeholder="WA"
          type="text" 
          length="14"
          size="short" 
        />
        <CustomInput
          text="zip code:"
          placeholder="98007"
          type="text" 
          length="14"
          size="short" 
        />
        <CustomInput
          text="email address"
          placeholder="info@gmail.com"
          type="text" 
          length="14"
          size="long" 
        />
        <CustomInput
          text="mobile number"
          placeholder="+1 (773) 222-12-34"
          type="text" 
          length="14"
          size="long" 
        />
      </div>
      <CustomButton name="Sign up" type="btn"/>
    </section>
  );
}

export default App;
