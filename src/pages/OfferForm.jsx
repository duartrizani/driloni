import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OfferForm = ({ setOfferDetails }) => {
  const [formData, setFormData] = useState({
    offerMadeBy: "",
    offerFor: "",
    address: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOfferDetails(formData);
    navigate("/shop");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 border rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Oferta nga:</label>
        <input type="text" name="offerMadeBy" value={formData.offerMadeBy} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Oferta për:</label>
        <input type="text" name="offerFor" value={formData.offerFor} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Adresa:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Email-i:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={() => navigate("/shop")} className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">Skip</button>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">Submit</button>
      </div>
    </form>
  );
};

export default OfferForm;
