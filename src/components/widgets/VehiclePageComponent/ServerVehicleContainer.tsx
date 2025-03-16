import ClientVehicleForm from "./ClientVehicleForm";

const ServerVehicleContainer = () => {
  return (
    <div className="text-center md:text-right md:pl-0 px-4 mt-4">
      <div className="text-lg font-semibold my-4">بیمه شخص ثالث</div>
      <div className="mb-6 mt-8">نوع و مدل خودروی خود را انتخاب کنید.</div>
      <div className="block md:flex items-start justify-between gap-4 md:space-y-0 space-y-4">
        <ClientVehicleForm />
      </div>
    </div>
  );
};

export default ServerVehicleContainer;
