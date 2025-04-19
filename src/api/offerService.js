// src/api/offerService.js

import axiosInstance from './axiosConfig';

// ✅ Correct Base API path for the offer service
const OFFER_API = '/offer/api/offers';

// GET all offers
export const getAllOffers = () => {
  return axiosInstance.get(OFFER_API);
};

// GET offer by ID
export const getOfferById = (id) => {
  return axiosInstance.get(`${OFFER_API}/${id}`);
};

// CREATE a new offer
export const createOffer = (offer) => {
  return axiosInstance.post(OFFER_API, offer);
};

// UPDATE an existing offer by ID
export const updateOffer = (id, offer) => {
  return axiosInstance.put(`${OFFER_API}/${id}`, offer);
};

// DELETE an offer by ID
export const deleteOffer = (id) => {
  return axiosInstance.delete(`${OFFER_API}/${id}`);
};
