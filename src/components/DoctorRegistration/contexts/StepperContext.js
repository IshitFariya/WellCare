import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    have_clinic: "false",
    clinic_address: "",
    specialization: " ",
    category: "Yoga Trainer",
    age: 0,
    gender: "male",
    licenseNumber: "",
    city: "",
    years_Of_Experience: 0,
    fees: 0,
    phoneNumber: "",
    profile_pic: "",
    bio: ""
  });

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
