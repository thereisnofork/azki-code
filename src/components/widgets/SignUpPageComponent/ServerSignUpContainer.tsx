import ClientSignUpForm from "./ClientSignUpForm";

const ServerSignUpContainer = () => {
  return (
    <div className="text-center md:text-right px-4 mt-4">
      <div className="text-lg font-semibold my-4">ثبت نام</div>
      <ClientSignUpForm />
    </div>
  );
};

export default ServerSignUpContainer;
