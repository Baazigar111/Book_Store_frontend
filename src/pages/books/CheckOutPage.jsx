import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";
import Swal from "sweetalert2";


const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((total, item) => total + item.newPrice, 0)
    .toFixed(2);

  const { currentUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productIDS: cartItems.map((item) => item?._id),
      totalPrice,
    };

    try {
      await createOrder(newOrder).unwrap();
      Swal.fire({
        title: "Confirmed Order",
        text: "Your order placed successfully!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      navigate("/orders")
    } catch (error) {
      console.error("Error creating order", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">
              Cash On Delivery
            </h2>
            <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
            <p className="text-gray-500 mb-6">
              Items: {cartItems.length}
            </p>

            <div className="bg-white rounded shadow-lg p-4 md:p-8 mb-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 text-sm grid-cols-1 lg:grid-cols-3"
              >
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
                    {/* Full Name */}
                    <div className="md:col-span-5">
                      <label>Full Name</label>
                      <input
                        {...register("name", { required: true })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.name && (
                        <p className="text-red-500">Name is required</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-5">
                      <label>Email</label>
                      <input
                        disabled
                        value={currentUser.email}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                      />
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-5">
                      <label>Phone</label>
                      <input
                        {...register("phone", { required: true })}
                        type="number"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    {/* City */}
                    <div className="md:col-span-2">
                      <label>City</label>
                      <input
                        {...register("city", { required: true })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    {/* State */}
                    <div className="md:col-span-2">
                      <label>State</label>
                      <input
                        {...register("state", { required: true })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    {/* Zip */}
                    <div className="md:col-span-1">
                      <label>Zipcode</label>
                      <input
                        {...register("zipcode", { required: true })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    {/* Country */}
                    <div className="md:col-span-5">
                      <label>Country</label>
                      <input
                        {...register("country", { required: true })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    {/* Terms */}
                    <div className="md:col-span-5 mt-3">
                      <input
                        type="checkbox"
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                      <span className="ml-2">
                        I agree to the{" "}
                        <Link className="text-blue-600 underline">
                          Terms & Conditions
                        </Link>
                      </span>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-5 text-right">
                      <button
                        disabled={!isChecked}
                        className="bg-blue-500 disabled:bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Place an Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
