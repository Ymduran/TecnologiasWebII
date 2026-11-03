import MyButton from "./components/button/MyButton";
import Profile from "./components/profile/Profile";
import  LoginForm  from "./components/admin/LoginForm";
import  AdminPanel  from "./components/admin/AdminPanel";
import ShoppingList from "./components/shopping/Products";

export default function MyApp() {
  const isLoggedIn = false;
  let content; 

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {content}
      <Profile/>
      <MyButton/>
      <ShoppingList/>
      <MyButton/>
      
    </div>
  );
}

