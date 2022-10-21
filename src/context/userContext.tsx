import { createContext, FC, ReactNode, useContext } from "react";
import { IUser } from "../infra/types/user";

interface IUserContext {
  user: IUser;
}

interface IUserProvider {
  children: ReactNode;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: FC<IUserProvider> = ({ children }) => {
  const user: IUser = {
    id: "6565dsaf5a6f59asc59asca92",
    name: "Mark Zuckerberg",
    email: "mark@example.com",
    username: "markgodberg",
    phone: "71 98899-9899",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
